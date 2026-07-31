// JSON-LD injection helpers — SAO (docs/dev-spec.md §3.1).
// Injects schema.org structured data via <script type="application/ld+json">.

import { SITE } from '~/data/site'
import { MENU } from '~/data/menu'

function injectJsonLd(data: Record<string, unknown>, id: string) {
  useHead({
    script: [
      {
        key: id,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data),
      },
    ],
  })
}

/** Canonical origin, trailing slash stripped. */
const base = SITE.url.replace(/\/$/, '')

/** Stable @id so Restaurant / Menu / FAQ read as one entity, not three islands. */
const RESTAURANT_ID = `${base}/#restaurant`
const MENU_ID = `${base}/menu#menu`

/** Restaurant schema — hours, geo, phone for local + AI search relevance. */
export function useRestaurantJsonLd() {
  const openingHours = SITE.openingHoursSpec.map((s) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: s.days,
    opens: s.opens,
    closes: s.closes,
  }))

  injectJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': RESTAURANT_ID,
      name: SITE.name,
      alternateName: [SITE.fullName, SITE.nameEn],
      slogan: SITE.tagline,
      description: SITE.description,
      servesCuisine: ['港式燒味', '燒鵝', '叉燒', '滷味'],
      priceRange: SITE.priceRange,
      currenciesAccepted: 'TWD',
      // Takeout pickup only — no dine-in, no reservations.
      acceptsReservations: false,
      url: base,
      telephone: SITE.phoneE164,
      image: SITE.images.map((p) => base + p),
      logo: `${base}/favicon.svg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      hasMap: SITE.mapsPlaceUrl,
      // Anchors the shop to a landmark people actually search for.
      containedInPlace: { '@type': 'Place', name: SITE.landmark },
      areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
      hasMenu: MENU_ID,
      openingHoursSpecification: openingHours,
      award: [SITE.award, `${SITE.awardCompetition} ${SITE.awardPrize}`],
      founder: { '@type': 'Person', name: SITE.chef, jobTitle: '主廚' },
      knowsAbout: ['港式燒鵝', '金牌燒鵝爭霸賽', '蜜汁叉燒', '港式滷水'],
      // Ties this site to the Google Business Profile / social entities.
      sameAs: [SITE.facebookUrl, SITE.mapsPlaceUrl, SITE.googleReviewsUrl, SITE.lineUrl],
    },
    'jsonld-restaurant',
  )
}

/** Menu schema — surfaces dishes so AI answers read items precisely. */
export function useMenuJsonLd() {
  injectJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      '@id': MENU_ID,
      name: `${SITE.name} 美味菜單`,
      inLanguage: 'zh-Hant',
      provider: { '@id': RESTAURANT_ID },
      hasMenuSection: MENU.map((cat) => ({
        '@type': 'MenuSection',
        name: cat.name,
        hasMenuItem: cat.dishes.map((d) => ({
          '@type': 'MenuItem',
          name: d.name,
          description: d.description,
          ...(d.img ? { image: base + d.img } : {}),
          ...(d.price != null
            ? {
                offers: {
                  '@type': 'Offer',
                  price: d.price,
                  priceCurrency: 'TWD',
                  // Unit (半隻 / 一斤 / 3隻) is the thing AI answers keep getting wrong.
                  ...(d.unit
                    ? {
                        priceSpecification: {
                          '@type': 'UnitPriceSpecification',
                          price: d.price,
                          priceCurrency: 'TWD',
                          unitText: d.unit,
                        },
                      }
                    : {}),
                },
              }
            : {}),
        })),
      })),
    },
    'jsonld-menu',
  )
}

/** FAQPage schema — pairs with the conversational FAQ block. */
export function useFaqJsonLd(items: { question: string; answer: string }[]) {
  injectJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((i) => ({
        '@type': 'Question',
        name: i.question,
        acceptedAnswer: { '@type': 'Answer', text: i.answer },
      })),
    },
    'jsonld-faq',
  )
}
