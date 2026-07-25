// Central site / restaurant identity (NAP) and brand facts.
// Source of truth: docs/design-spec.md, docs/dev-spec.md
// NOTE: values marked TODO are placeholders — replace with the real business data.

export const SITE = {
  name: '鵝邸家',
  fullName: '鵝邸家燒鵝專賣',
  // English name carried over from the EdiHome storefront.
  nameEn: 'Roasted Goose',
  cuisine: '港式燒味',
  tagline: '2023-2025 連續三年金牌得主',
  description:
    '鵝邸家燒鵝專賣 — 郭芳銘主廚十年匠心，港式燒味，2023-2025 連續三年金牌燒鵝得主。堅持出爐脆度與多汁口感，僅提供來店享用與外帶自取。',

  // Brand facts used for entity linking (SAO).
  chef: '郭芳銘',
  yearsOfCraft: 10,
  award: '2023-2025 連續三年金牌得主',
  // 金牌燒鵝爭霸賽 credential (from EdiHome award hero).
  awardCompetition: '金牌燒鵝爭霸賽',
  awardPrize: 'NT$ 18,000 金牌獎',

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
  mapsEmbedUrl: 'https://maps.google.com/maps?q=24.347744,120.626421&z=17&output=embed',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=24.347744,120.626421',

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
  // Google 商家評論.
  googleReviewsUrl:
    'https://www.google.com/maps/place/%E9%B5%9D%E9%82%B8%E5%AE%B6%E7%87%92%E9%B5%9D%E5%B0%88%E8%B3%A3/@24.347744,120.626421,17z/data=!4m8!3m7!1s0x34690e0222afe923:0x3d5fbf439c55d424!9m1!1b1',

  // Canonical site URL — TODO.
  url: 'https://www.example.com',
} as const

export type Site = typeof SITE
