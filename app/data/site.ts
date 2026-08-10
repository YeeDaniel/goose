// Central site / restaurant identity (NAP) and brand facts.
// Source of truth: docs/design-spec.md, docs/dev-spec.md
// NOTE: values marked TODO are placeholders — replace with the real business data.

// How the shop is named to Google Maps — used for both the directions deep link and the
// embedded map. Deliberately the shop name plus the full address rather than a lat/lng
// pair: Maps does not reverse geocode a bare coordinate, so a coordinate lands as an
// unlabelled「已放置圖釘」rather than the shop. This text resolves to the shop's own Maps
// feature (ftid 0x34690e0222afe923:0x3d5fbf439c55d424) at the same point as SITE.geo.
const MAPS_PLACE_QUERY = '鵝邸家燒鵝專賣 437臺中市大甲區朝陽里新政路25號'

export const SITE = {
  name: '鵝邸家',
  fullName: '鵝邸家燒鵝專賣',
  // English name carried over from the EdiHome storefront.
  nameEn: 'Roasted Goose',
  cuisine: '港式燒味',
  tagline: '2023-2025 連續三年金牌得主',
  description:
    '鵝邸家燒鵝專賣 — 郭芳銘主廚十年匠心，港式燒味，2023-2025 連續三年金牌燒鵝得主。堅持出爐脆度與多汁口感，僅提供外帶自取。',

  // Brand facts used for entity linking (SAO).
  chef: '郭芳銘',
  yearsOfCraft: 10,
  award: '2023-2025 連續三年金牌得主',
  // 金牌燒鵝爭霸賽 credential (from EdiHome award hero).
  awardCompetition: '金牌燒鵝爭霸賽',
  awardPrize: 'NT$ 18,000 金牌獎',

  // Local-search geography. 「台中燒鵝」is dominated by 市區 shops (proximity wins),
  // so the copy and schema target where we can actually rank: 大甲 / 海線 / 鎮瀾宮商圈.
  landmark: '大甲鎮瀾宮商圈',
  areaServed: ['臺中市大甲區', '臺中海線', '臺中市'],
  priceRange: 'NT$50–1600',
  // Photos for Restaurant JSON-LD `image` — Google wants at least one.
  images: ['/images/hero-bg.jpg', '/images/goose-hero.jpg', '/images/chef.jpg', '/images/og.jpg'],

  // Contact / location (NAP) — owner confirmed.
  phone: '0988-844-688',
  phoneE164: '+886988844688',
  address: {
    street: '新政路25號',
    locality: '大甲區',
    region: '臺中市',
    postalCode: '437',
    country: 'TW',
  },
  geo: {
    latitude: 24.347744,
    longitude: 120.626421,
  },
  // Google Maps — resolved place: 鵝邸家燒鵝專賣.
  mapsPlaceUrl: 'https://maps.app.goo.gl/1tL6KqoGVZ9afdb87',
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_PLACE_QUERY)}&z=17&output=embed`,
  mapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_PLACE_QUERY)}`,

  // Opening hours — owner confirmed: 週六、週日 07:00–12:00 (售完為止)。
  openingHours: [
    { days: '週六、週日', time: '07:00–12:00' },
    { days: '週一至週五', time: '公休' },
  ],
  // Machine-readable form for schema.org (OpeningHoursSpecification).
  openingHoursSpec: [
    {
      days: ['Saturday', 'Sunday'],
      opens: '07:00',
      closes: '12:00',
    },
  ],

  // LINE Official Account — single global conversion target (O2O).
  lineUrl: 'https://lin.ee/vsPOQej',
  // Facebook 粉絲專頁.
  facebookUrl: 'https://www.facebook.com/goosehometa',
  // Google 商家評論 — opens the place card with the reviews tab selected (`!9m1!1b1`).
  // The `data=` payload is a length-prefixed protobuf: `!4m7` and `!3m6` must match the
  // element count that follows, and the `!8m2!3d<lat>!4d<lng>` block is required. An
  // earlier hand-written value declared 8/7 elements but supplied only 2, so Google
  // discarded the whole payload and dropped the visitor on a bare coordinate map with no
  // place card at all. Do not edit these counts by hand — copy a fresh URL from Maps.
  googleReviewsUrl:
    'https://www.google.com/maps/place/%E9%B5%9D%E9%82%B8%E5%AE%B6%E7%87%92%E9%B5%9D%E5%B0%88%E8%B3%A3/@24.347744,120.626421,17z/data=!4m7!3m6!1s0x34690e0222afe923:0x3d5fbf439c55d424!8m2!3d24.347744!4d120.626421!9m1!1b1',

  // Canonical site URL. Apex, no www — www.edijia.com 301s here, so every
  // canonical / JSON-LD @id / sitemap entry points at one address only.
  url: 'https://edijia.com',
} as const

export type Site = typeof SITE
