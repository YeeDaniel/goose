// Central site / restaurant identity (NAP) and brand facts.
// Source of truth: docs/design-spec.md, docs/dev-spec.md
// NOTE: values marked TODO are placeholders — replace with the real business data.

export const SITE = {
  name: '鵝邸家',
  nameEn: 'Goose Family',
  tagline: '2023-2025 連續三年金牌得主',
  description:
    '鵝邸家 — 郭芳銘主廚十年匠心，2023-2025 連續三年金牌燒鵝得主。堅持出爐脆度與多汁口感，僅提供來店享用與外帶自取。',

  // Brand facts used for entity linking (SAO).
  chef: '郭芳銘',
  yearsOfCraft: 10,
  award: '2023-2025 連續三年金牌得主',

  // Contact / location (NAP) — TODO: replace with real data.
  phone: '+886-0-0000-0000',
  address: {
    street: 'TODO 地址街道',
    locality: 'TODO 城市',
    region: 'TODO 縣市',
    postalCode: 'TODO',
    country: 'TW',
  },
  geo: {
    // TODO: real coordinates
    latitude: 25.033964,
    longitude: 121.564468,
  },
  // Google Maps embed / directions — TODO: replace with real place URL.
  mapsEmbedUrl:
    'https://www.google.com/maps?q=TODO+鵝邸家&output=embed',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=TODO+鵝邸家',

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

  // Canonical site URL — TODO.
  url: 'https://www.example.com',
} as const

export type Site = typeof SITE
