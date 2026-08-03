# 鵝邸家 Goose Family｜官方網站

> 郭芳銘主廚十年匠心・港式燒味・2023–2025 連續三年金牌燒鵝得主

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxtdotjs&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

🔗 **線上網站**：[edijia.com](https://edijia.com)

---

## 這是什麼

台中大甲「鵝邸家燒鵝專賣」的官方行銷網站。

這不是一般的形象官網——**整站只有一個轉換目標**：把訪客導到店家的 LINE 官方帳號完成外帶自取預訂。店內不接外送、不做線上金流，所以網站的職責是「說服 ＋ 導流」，不是「交易」。

三個設計目標：

| 目標 | 網站上怎麼實現 |
|---|---|
| **品牌年輕化** | 全幅視覺、招牌菜橫向輪播、金牌徽章，捨棄傳統餐飲網站的密集資訊排版 |
| **深化實體體驗** | 主廚故事、金牌饗宴回顧、媒體報導——建立到店前的信任 |
| **LINE O2O 單純化轉換** | 全站唯一 CTA：右下角浮動「LINE 預約／點餐」按鈕 ＋ 固定底部導覽列 |

## 技術架構

| 層 | 選型 | 選它的理由 |
|---|---|---|
| 框架 | **Nuxt 4**（Vue 3）· SSR | 餐飲業高度依賴搜尋流量，SSR 讓搜尋引擎與 AI 爬蟲抓得到內容 |
| 樣式 | **Tailwind CSS** ＋ Headless UI | 元件可維護、無多餘 CSS 包袱 |
| 語言 | **TypeScript**（strict） | 店家資料集中管理，型別擋掉手誤 |
| 部署 | **Cloudflare Pages**（Nitro `cloudflare_pages` preset） | 全球 CDN，高解析度菜色照載入快；push 到 `main` 自動部署 |

無後端、無資料庫、無 API 金鑰——整站靜態產出。

## 頁面結構

刻意極簡，每條路徑都指向「到店」或「外帶自取」。

| 路由 | 頁面 | 說明 |
|---|---|---|
| `/` | 首頁 | 金牌燒鵝主視覺 ＋ 2023–2025 徽章 ＋ 招牌菜輪播 |
| `/about` | 關於鵝邸家 | 主廚十年歷程與三連霸故事 |
| `/menu` | 美味菜單 | 視覺化數位菜單（金牌燒鵝／叉燒／滷水類），供 `MenuItem` schema 取用 |
| `/portfolio` | 金牌饗宴回顧 | 過往宴席紀錄。**純展示，不放訂席按鈕** |
| `/press` | 媒體報導 | 外部報導與獎項佐證 |
| `/location` | 服務據點與 FAQ | Google Maps 嵌入、營業時間、「為什麼不外送」問答 |

## 設計系統

完整規範見 [`docs/design-spec.md`](docs/design-spec.md)。

| 角色 | 名稱 | 色碼 |
|---|---|---|
| 主色 | 琥珀紅（燒鵝皮色） | `#A62C2B` |
| 輔色 | 冠軍金（徽章與主要按鈕） | `#D4AF37` |
| 背景 | 象牙白／淺暖灰 | `#FCF9F2` |

- **Mobile-first**：主要客群在手機上搜尋「大甲燒鵝」
- 固定底部導覽列：查看菜單 · LINE 立即預約 · 導航到店
- 點擊區域 ≥ 44×44px，單手可操作

## SEO 策略

「台中燒鵝」的搜尋結果由市區店家主導（在地搜尋以距離為主要排序因素），正面競爭贏不了。
因此文案與結構化資料**鎖定實際能排上的範圍**：`大甲鎮瀾宮商圈`、`臺中海線`。

- 全站 Restaurant / MenuItem / OpeningHoursSpecification JSON-LD（[`app/composables/useJsonLd.ts`](app/composables/useJsonLd.ts)）
- `server/routes/sitemap.xml.ts` 動態產生 sitemap
- 單一 canonical：`www.edijia.com` 301 導向 apex，所有 `@id` 與 sitemap 只指一個位址

## 開發

需要 Node.js >= 20。

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 產出 Cloudflare Pages 格式
npm run preview    # 本機預覽 build 結果
npm run typecheck  # vue-tsc 型別檢查
```

## 專案結構

```
app/
├── components/   # AppHeader, BottomNav, DishCarousel, GoldBadge, LineCta …
├── composables/  # useJsonLd.ts — 結構化資料
├── data/         # site.ts(店家 NAP 與品牌事實) / menu / faq / press / testimonials / features
├── layouts/
└── pages/        # index, about, menu, portfolio, press, location
docs/             # design-spec.md, dev-spec.md
public/images/    # 優化後的圖片（原始檔在 goose_photo/，不進版控）
server/routes/    # sitemap.xml.ts
```

**所有店家資料集中在 [`app/data/site.ts`](app/data/site.ts)**——地址、電話、營業時間、LINE 連結改一處即全站同步，也是 JSON-LD 的唯一來源。

## 現況

已上線運行於 [edijia.com](https://edijia.com)，內容完整（菜單、營業時間、媒體報導、金牌饗宴回顧、Google 評論皆為實際資料）。

---

© 鵝邸家燒鵝專賣
