# 鵝邸家 官方網站：開發規格書 (V2.1 聚焦版)

> 本文件由 `Goose_Family_Dev_Spec_V2_1.pdf` 忠實轉錄，為技術實作的唯一真實來源 (source of truth)。

**核心技術：** Nuxt 3、Cloudflare 架構部署、SAO 搜尋引擎最佳化。

---

## 1. 系統架構與技術選型 (Architecture & Tech Stack)

| 技術領域 | 選用框架／工具 | 架構優勢與說明 |
|----------|----------------|----------------|
| 前端框架 | Nuxt.js (Vue 3) | 支援高效的伺服器端渲染 (SSR)，對搜尋引擎與 AI 爬蟲極度友善。 |
| 樣式系統 | Tailwind CSS | 加速 UI 開發，搭配 Headless UI 建立高客製化與高維護性的元件庫。 |
| 語言 | TypeScript | 強型別系統確保程式碼品質與後續維護的穩定性。 |

---

## 2. 雲端部署與 CI/CD 流程 (Deployment Strategy)

- **基礎設施：** 系統部署於 Cloudflare Pages，最大化效能與極低維護成本。
- **Nitro 引擎整合：** 利用 Nuxt 底層的 Nitro 伺服器引擎，設定 `preset: 'cloudflare_pages'`。
- **自動化部署 (CI/CD)：** 綁定 GitHub Repository，推送至 `main` 分支後自動發布。
- **全域 CDN 加速：** 確保高畫質餐點影像與「金牌饗宴回顧」的活動照片能極速載入。

---

## 3. SAO 搜尋引擎 AI 最佳化 (Search AI Optimization)

為因應新世代 AI 搜尋引擎（如 ChatGPT, Gemini），針對語意與結構進行深度優化：

### 3.1 結構化資料注入 (JSON-LD)

- **Restaurant Schema：** 包含營業時間、地理位置與聯絡電話，強化區域在地搜尋關聯。
- **MenuItem Schema：** 將核心菜單轉化為結構化數據，確保 AI 回答時能精準讀取菜色細節。

### 3.2 語意化 HTML 與內容架構

- **對話式 FAQ：** 建構常見問題區塊，例如：「鵝邸家可以外帶嗎？」並特別加入「有提供宅配服務嗎？」的問答，以自然語言強調「為了堅持烤鵝剛出爐的最佳脆度與多汁口感，僅提供來店享用與自取」，藉由回答強化職人形象。
- **實體關聯：** 程式碼與內容緊密關聯「郭芳銘主廚」、「十年經驗」、「連續三年金牌得主」。
