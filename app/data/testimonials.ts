// 顧客好評 — 真實 Google 評論（輕度整理錯字，保留原意與語氣）。
export interface Testimonial {
  text: string
  author: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: '常去深圳、東莞吃燒鵝的我，都覺得很不錯。手路正宗，梅汁醬也調得不錯。就是要早起才有得吃！',
    author: 'Blue',
  },
  {
    text: '非常專業的鵝肉店，老闆專業又親切。每一隻鵝都要經過按摩、充氣，非常講究，很好吃。有機會一定要來買！',
    author: 'BEST ISO',
  },
  {
    text: '鵝肉表皮燒得金黃酥脆，肉質有彈性。單吃較清淡，淋上醬料別有一番風味。每逢佳節便大排長龍，吃過一次就回不去了！',
    author: 'Ms. Chen',
  },
]
