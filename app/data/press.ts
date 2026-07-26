// 媒體報導 — interview videos + press coverage. Owner-provided.

export interface PressVideo {
  label: string
  title: string
  youtubeId: string
}

export interface PressArticle {
  outlet: string
  title: string
  url: string
  date?: string
}

export interface PressPhoto {
  img: string
  caption: string
}

// 採訪花絮與貴賓合影 — owner-provided promotional photos.
export const PRESS_GALLERY: PressPhoto[] = [
  { img: '/images/press-1.jpg', caption: '電視媒體到店採訪拍攝' },
  { img: '/images/press-3.jpg', caption: '郭芳銘主廚與現烤金牌燒鵝' },
  { img: '/images/press-2.jpg', caption: '招牌前團隊合影' },
  { img: '/images/press-4.jpg', caption: '貴賓到店品嚐推薦' },
  { img: '/images/press-5.jpg', caption: '業界好友站台推薦' },
  { img: '/images/press-6.jpg', caption: '在地愛心公益捐贈' },
]

export const PRESS_VIDEOS: PressVideo[] = [
  { label: '2025', title: '2025 金牌燒鵝爭霸賽 專訪', youtubeId: '95S0JgrqrqI' },
  { label: '2024', title: '2024 金牌燒鵝爭霸賽 專訪', youtubeId: 'n6YGi_JCHNU' },
  { label: '2023', title: '2023 金牌燒鵝爭霸賽 專訪', youtubeId: 'fMwhfqWSMH8' },
  { label: '鎮瀾宮', title: '大甲鎮瀾宮 國際點心站', youtubeId: 'b3fiJoEb9hg' },
]

export const PRESS_ARTICLES: PressArticle[] = [
  {
    outlet: 'Yahoo 新聞',
    title: '鵝邸家燒鵝專賣 媒體報導',
    url: 'https://tw.news.yahoo.com/share/b337c8a5-ca82-3a21-85b8-ce3a14564fb9',
  },
  {
    outlet: '聯合新聞網 UDN',
    title: '鵝邸家燒鵝專賣 媒體報導',
    url: 'https://udn.com/news/story/7266/9187790',
    date: '2025.12.07',
  },
  {
    outlet: '中時新聞網',
    title: '鵝邸家燒鵝專賣 媒體報導',
    url: 'https://www.chinatimes.com/realtimenews/20251207001992-260405?chdtv',
    date: '2025.12.07',
  },
  {
    outlet: '工商時報',
    title: '鵝邸家燒鵝專賣 媒體報導',
    url: 'https://www.ctee.com.tw/news/20251207700577-431401',
    date: '2025.12.07',
  },
  {
    outlet: '中央社 CNA',
    title: '鵝邸家燒鵝專賣 媒體報導',
    url: 'https://www.cna.com.tw/news/ahel/202512070094.aspx',
    date: '2025.12.07',
  },
  {
    outlet: '華視新聞',
    title: '鵝邸家燒鵝專賣 媒體報導',
    url: 'https://news.cts.com.tw/cts/life/202512/202512072541606.html',
    date: '2025.12.07',
  },
]
