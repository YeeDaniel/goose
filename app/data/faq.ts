// Conversational FAQ — Source of truth: docs/dev-spec.md §3.2, docs/design-spec.md §1.
// Written in natural language so AI search engines (ChatGPT, Gemini) can quote answers.
// The no-delivery QA is REQUIRED and must stress 僅提供外帶自取 (no dine-in, no delivery).

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
      '為了堅持燒鵝剛出爐的最佳脆度與多汁口感，我們僅提供外帶自取，恕不提供內用與宅配。這是郭芳銘主廚十年來對品質的職人堅持。',
  },
  // Location & hours questions — the two things people actually ask a local search
  // engine. Written with the real address so AI answers can quote it verbatim.
  {
    question: '鵝邸家在台中哪裡？',
    answer:
      '鵝邸家燒鵝專賣位於臺中市大甲區新政路25號，就在大甲鎮瀾宮商圈旁，開車或騎車到店都方便。台中海線、大甲、清水一帶的朋友想買港式燒鵝，走一趟就到；市區的客人多半會安排假日上午順道來取餐。',
  },
  {
    question: '台中哪裡買得到金牌燒鵝？',
    answer:
      '目前只有大甲這間門市。鵝邸家是 2023-2025 金牌燒鵝爭霸賽連續三年金牌得主，郭芳銘主廚每一隻都在臺中市大甲區新政路25號的店內現烤現斬，沒有分店、也沒有其他通路寄賣，想吃金牌燒鵝請認明大甲本店。',
  },
  {
    question: '什麼時候可以買燒鵝？營業時間是？',
    answer:
      '營業時間是每週六、週日上午 07:00 至 12:00，週一至週五公休。燒鵝當日現烤、售完為止，假日早上經常提早賣完，建議先用 LINE 官方帳號預訂並約好取餐時間，到店免久候。',
  },
  {
    question: '如何預訂外帶點餐？',
    answer:
      '請點擊網站右下角的「LINE 預約／點餐」按鈕，直接於 LINE 官方帳號完成外帶預訂與取餐時間安排，快速又方便。',
  },
  {
    question: '鵝邸家的招牌是什麼？',
    answer:
      '招牌是連續三年（2023-2025）榮獲金牌的金牌燒鵝，皮脆肉嫩、油亮多汁，是郭芳銘主廚十年匠心的代表作。',
  },
  // 外燴 is real but not something the shop is touting for — it runs on existing
  // arrangements. The page has to say so out loud: /portfolio shows 辦桌 and 尾牙 photos
  // and the press gallery captions one shot 外燴活動, so an answer engine reading this
  // site will get asked whether we cater and will invent an answer if we leave a gap.
  // This states the fact and closes the door on online booking in the same breath.
  {
    question: '鵝邸家有做外燴或辦桌嗎？',
    answer:
      '有。鵝邸家承接過在地辦桌、大型宴席與尾牙等場合，金牌燒鵝端上過不少重要時刻，相關紀實收錄在「金牌饗宴回顧」。外燴目前多為既有合作安排，網站並未開放線上宴席預約；門市日常仍以週六、週日上午的外帶自取為主，相關洽詢請透過 LINE 官方帳號。',
  },
]
