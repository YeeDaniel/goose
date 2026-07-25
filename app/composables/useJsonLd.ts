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
      name: SITE.name,
      alternateName: SITE.nameEn,
      description: SITE.description,
      servesCuisine: '燒鵝、叉燒、滷味',
      url: SITE.url,
      telephone: SITE.phoneE164,
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
      openingHoursSpecification: openingHours,
      award: SITE.award,
      founder: { '@type': 'Person', name: SITE.chef },
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
      name: `${SITE.name} 美味菜單`,
      hasMenuSection: MENU.map((cat) => ({
        '@type': 'MenuSection',
        name: cat.name,
        hasMenuItem: cat.dishes.map((d) => ({
          '@type': 'MenuItem',
          name: d.name,
          description: d.description,
          ...(d.price != null
            ? {
                offers: {
                  '@type': 'Offer',
                  price: d.price,
                  priceCurrency: 'TWD',
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
