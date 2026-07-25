// "為什麼選鵝邸家" trust points. Icons resolved in FeatureStrip.vue.
export interface Feature {
  icon: 'trophy' | 'fire' | 'sparkles' | 'clock'
  title: string
  desc: string
}

export const FEATURES: Feature[] = [
  { icon: 'trophy', title: '三連霸金牌', desc: '2023-2025 連續三年金牌燒鵝得主' },
  { icon: 'fire', title: '現點現做', desc: '剛出爐皮脆多汁，鎖住最佳賞味' },
  { icon: 'sparkles', title: '十年匠心', desc: '郭芳銘主廚十年火候與選鵝工藝' },
  { icon: 'clock', title: '假日限定', desc: '週六日新鮮直出，售完為止' },
]
