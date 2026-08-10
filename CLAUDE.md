# CLAUDE.md

Guidance for AI agents and developers working in this repository.

## Project overview

**鵝邸家 (Goose Family)** is an award-winning roast-goose restaurant. This repo is its official
marketing website — a mobile-first, conversion-focused site whose single job is to funnel visitors
to the restaurant's LINE Official Account for takeout pickup orders. The three
core goals are: **brand rejuvenation (品牌年輕化)**, **deepening the in-person experience
(深化實體體驗)**, and **simplifying LINE O2O conversion (LINE O2O 單純化轉換)**.

Brand facts to weave through the copy: head chef **郭芳銘**, **十年 (ten years)** of craft, and
**2023–2025 連續三年金牌得主 (three-year consecutive gold-medal winner)**.

> **Status:** Live at [edijia.com](https://edijia.com). Menu, weekend hours (週六日 07:00–12:00),
> LINE OA link, store NAP (address / phone / geo / Google Maps), press coverage, and real dish,
> chef, and event photography are all wired in. Remaining gap: 蜜汁叉燒 has no portrait shot yet
> (deliberately left blank rather than cropped — see the revert in the history).

## Tech stack

- **Framework:** Nuxt 4 (Vue 3), server-side rendered (SSR) for search-engine and AI-crawler friendliness.
- **Styling:** Tailwind CSS + Headless UI for a customizable, maintainable component library.
- **Language:** TypeScript (strict) throughout.

## Deployment

- **Host:** Cloudflare Pages (project name: `goose`).
- **Engine:** Nuxt's underlying Nitro server, configured with `preset: 'cloudflare_pages'`.
- **Build:** command `npm run build`, output directory **`dist`** (where the `cloudflare_pages`
  preset writes), root directory unset. Build system version 3.
- **CI/CD:** bound to the GitHub repository — push to **`master`** (the production branch) auto-deploys.
  There are no deploy hooks configured, so this webhook is the *only* deployment trigger. If the
  GitHub link ever breaks (e.g. after a repo rename), reconnect it under
  Cloudflare → Workers & Pages → goose → Settings → Build → Git repository.
- **CDN:** global CDN so high-res food imagery and 金牌饗宴回顧 event photos load fast.

## Site architecture (sitemap)

Deliberately minimal — every path leads toward in-store visit or takeout pickup.

| Page | Route intent | Notes |
|------|--------------|-------|
| 首頁 (Home) | Full-bleed hero video/photo of the gold-medal roast goose + "2023-2025" badge; horizontal carousel of signature dishes. | |
| 關於鵝邸家 (Brand Story) | Chef 郭芳銘's ten-year journey and the three-peat gold story. | Builds trust. |
| 美味菜單 (Menu) | Visual digital menu, categorized (金牌燒鵝 / 叉燒 / 滷水類). | Feeds MenuItem schema. |
| 金牌饗宴回顧 (Brand Portfolio) | Past banquet / year-end-party photos and records. | **Display-only — NO booking button.** |
| 服務據點與常見問題 (Location & FAQ) | Embedded Google Maps, business hours. | **Must include the "why no delivery" QA.** |

## Design system

Source of truth: [docs/design-spec.md](docs/design-spec.md).

| Role | Name | Hex |
|------|------|-----|
| Primary | 琥珀紅 (amber red, roast-goose skin) | `#8B0000` or `#A62C2B` |
| Secondary | 冠軍金 (champion gold, badges & key buttons) | `#D4AF37` |
| Background | 象牙白／淺暖灰 (ivory / warm grey) | `#FCF9F2` |

- **Mobile-first.** Fixed **bottom navigation bar**: 查看菜單 · LINE 立即預約 · 導航到店.
- **Tap targets ≥ 44×44px** for one-handed use.
- **Single global CTA:** a prominent floating **「LINE 預約／點餐」** button (bottom-right), the site's
  only explicit conversion goal. It opens the existing LINE OA chat / rich-menu (O2O) — no in-app
  ordering or checkout is built.

## SEO / SAO (Search AI Optimization)

Source of truth: [docs/dev-spec.md](docs/dev-spec.md). Optimized for AI search (ChatGPT, Gemini):

- **JSON-LD structured data:** `Restaurant` schema (hours, geo location, phone) + `MenuItem` schema so
  AI answers can read dish details precisely.
- **Semantic, conversational FAQ:** e.g. 「鵝邸家可以外帶嗎？」 and 「有提供宅配服務嗎？」 — answered in
  natural language to stress that, to protect the freshly-out-of-the-oven crispness and juiciness,
  **only takeout pickup is offered — no dine-in, no delivery (僅提供外帶自取，恕不提供內用與宅配)**.
- **Entity linking:** tie code and copy to 郭芳銘主廚 / 十年經驗 / 連續三年金牌得主.

## Conventions & guardrails

- **Mobile-first** in every layout decision.
- **Keep the funnel minimal** — all roads lead to the LINE CTA.
- **No online-ordering or delivery flow.** Takeout pickup (外帶自取) only — no dine-in (無內用),
  no delivery; do not add cart, checkout, delivery, dine-in seating/booking, or public booking
  buttons (Brand Portfolio stays display-only).
- **No `target="_blank"` on external links.** Most mobile visitors arrive from the LINE OA or the
  Facebook 粉專, i.e. inside an in-app WebView, which silently drops `_blank` navigations (Android
  WebView needs `setSupportMultipleWindows`/`onCreateWindow`; iOS WKWebView likewise) — the tap
  looks dead. Same-tab navigation works everywhere and hands `lin.ee` / maps universal links
  cleanly to the OS. A customer reported the dead LINE button; fixed 2026-08-10.
- **Preserve brand Chinese copy verbatim** — page names, dish names, and slogans stay in Traditional Chinese.
- **TypeScript strict**; SSR-friendly, semantic HTML.

## Project structure

Nuxt 4 default layout — app source lives under `app/`:

```
app/
  app.vue              root: NuxtLayout + NuxtPage, site-wide Restaurant JSON-LD & SEO meta
  layouts/default.vue  header + slot + footer + floating LineCta + fixed BottomNav
  pages/               index · about · menu · portfolio · location  (file-based routing)
  components/          AppHeader, AppFooter, BottomNav, LineCta, LineButton, GoldBadge,
                       DishCarousel, SectionHeading, FaqAccordion  (auto-imported)
  composables/useJsonLd.ts   useRestaurantJsonLd / useMenuJsonLd / useFaqJsonLd
  data/                site.ts (NAP, brand facts, LINE URL) · menu.ts · faq.ts
  assets/css/tailwind.css    @tailwind layers + component classes (.btn-line, .tap-target …)
nuxt.config.ts         nitro preset 'cloudflare_pages', tailwind module, zh-Hant head
tailwind.config.ts     design tokens: goose / gold / cream / line colors, 44px touch min
docs/                  design-spec.md · dev-spec.md  (transcribed source specs)
```

## Commands

```bash
npm install        # install deps (also runs nuxt prepare)
npm run dev        # local dev server → http://localhost:3000
npm run build      # production build → dist/ (Cloudflare Pages preset)
npm run preview    # preview the build
npm run generate   # full static prerender
npm run typecheck  # vue-tsc strict type check
```

Deploy: push to `main` → Cloudflare Pages auto-builds. Local preview of the Pages output:
`npx wrangler pages dev dist`.
