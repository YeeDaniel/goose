// Conversational FAQ — Source of truth: docs/dev-spec.md §3.2, docs/design-spec.md §1.
// Written in natural language so AI search engines (ChatGPT, Gemini) can quote answers.
// The no-delivery QA is REQUIRED and must stress 僅提供來店享用與自取.

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ: FaqItem[] = [
  {
    question: '鵝邸家可以外帶嗎？',
    answer:
      '可以。歡迎透過 LINE 官方帳號預訂外帶自取，我們會為您安排取餐時間，確保您拿到的是剛出爐、最佳狀態的金牌燒鵝。',
  },
  {
    question: '有提供宅配服務嗎？',
    answer:
      '為了堅持燒鵝剛出爐的最佳脆度與多汁口感，我們僅提供來店享用與外帶自取，恕不提供宅配。這是郭芳銘主廚十年來對品質的職人堅持。',
  },
  {
    question: '如何預約訂位或點餐？',
    answer:
      '請點擊網站右下角的「LINE 預約／點餐」按鈕，直接於 LINE 官方帳號完成訂位與外帶預訂，快速又方便。',
  },
  {
    question: '鵝邸家的招牌是什麼？',
    answer:
      '招牌是連續三年（2023-2025）榮獲金牌的金牌燒鵝，皮脆肉嫩、油亮多汁，是郭芳銘主廚十年匠心的代表作。',
  },
]
