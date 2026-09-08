// https://nuxt.com/docs/api/configuration/nuxt-config
import { FONT_FACE_CSS, FONT_URL } from './app/data/font'
import { SITE } from './app/data/site'

// Headers every HTML response carries. Attached route by route on purpose: a `/**` catch-all
// would be the obvious way to write this and it would quietly break the asset caching above.
// Cloudflare applies every matching `_headers` rule and the last one wins for a repeated
// header, and Nitro writes the shallowest rule last — so `/**` would land after `/images/*`,
// `/fonts/*` and `/_nuxt/*` and reset all three to max-age=0.
const HTML_HEADERS = {
  // The pages are rendered per request and carry no etag or last-modified, so there is
  // nothing to revalidate against and this reads as "always refetch". That is already what
  // browsers were doing — the responses previously had no cache-control at all, which left
  // the decision to heuristic caching. Stating it removes the guesswork, and keeps a stale
  // menu price out of somebody's browser.
  'cache-control': 'public, max-age=0, must-revalidate',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  // Nothing here is meant to be framed. The site is the parent for the Maps and YouTube
  // iframes, which this does not affect.
  'x-frame-options': 'SAMEORIGIN',
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',
  devtools: { enabled: true },

  // SSR for search-engine and AI-crawler friendliness (SAO).
  ssr: true,

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/tailwind.css'],

  // Deploy target: Cloudflare Pages via Nitro.
  nitro: {
    preset: 'cloudflare_pages',

    // Cloudflare caps `_routes.json` at 100 rules, and Nitro fills it by listing every
    // public file one by one, then silently truncating (`routes.exclude.splice(100 - …)`).
    // The responsive variants pushed the count past the cap, and everything that fell off
    // the end — the hero's own AVIFs among them — would have been served by invoking the
    // Pages Worker instead of straight off the static CDN. One wildcard covers the whole
    // tree; Nitro also uses it to skip enumerating those files in the first place.
    cloudflare: {
      pages: {
        routes: { exclude: ['/images/*', '/fonts/*'] },
      },
    },

    // Nitro's generated `_headers` covers `/_nuxt/*` and nothing else, so photos fell
    // through to the Pages default and were revalidated on every visit.
    routeRules: {
      // 30 days, not the year the hashed variant filenames would justify, because a year
      // is not achievable from here: Cloudflare applies every matching `_headers` rule and
      // the last one wins for a repeated header, while Nitro writes the deeper rule first
      // (it sorts by segment count, descending). `/images/*` therefore overrides the
      // max-age of `/images/opt/*` whatever this says — the deployed value was measured at
      // 2592000. Declaring 31536000 here only made the config lie. `immutable` does survive
      // the merge and is the half that matters: it stops revalidation within the window.
      // Buying the full year would mean moving the variants out from under /images/, which
      // is 180-odd file renames to save one 304 a month.
      '/images/opt/**': {
        headers: { 'cache-control': 'public, max-age=2592000, immutable' },
      },
      // The originals keep stable names — they are the <img> fallback and og.jpg — so
      // cache them long but not immutably.
      '/images/**': {
        headers: { 'cache-control': 'public, max-age=2592000' },
      },
      // Subset filename carries its own content hash too.
      '/fonts/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },

      // Ship these pages as plain HTML — no client bundle, no hydration.
      //
      // Everything they do is native: <details> for the menu and the FAQ, scroll-snap for
      // the carousel, plain <a> for every link and the LINE CTA. Hydrating Vue on top of
      // that bought nothing but ~500ms of blocking time on a mid-range phone, which is the
      // device most of these visitors are on. It also makes the pages immune to the
      // deploy-window problem, where cached HTML asks for `_nuxt` chunks a new deploy has
      // already replaced.
      //
      // Listed per route rather than via `features.noScripts`: that flag deletes the
      // client chunks from the build entirely, and two things here still need them —
      // `app/error.vue`, which clears Nuxt's error state on navigation, and `/press`.
      //
      // `/press` keeps its bundle because YoutubeEmbed's facade has to gate the <iframe>
      // behind `v-if`. A CSS-only version (a closed <details>) does not work: a hidden
      // iframe still loads, so all four YouTube players downloaded anyway — measured at
      // 5.4 MB over 75 requests, against 0.5 MB with the facade intact.
      '/': { noScripts: true, headers: HTML_HEADERS },
      '/about': { noScripts: true, headers: HTML_HEADERS },
      '/menu': { noScripts: true, headers: HTML_HEADERS },
      '/portfolio': { noScripts: true, headers: HTML_HEADERS },
      '/location': { noScripts: true, headers: HTML_HEADERS },
      // Keeps its client bundle (see above), but the headers are the same.
      '/press': { headers: HTML_HEADERS },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Self-hosted subset (scripts/subset-font.mjs). Google Fonts served the same
        // family as ~120 unicode-range slices; this page pulled 20 of them — 1.7 MB, and
        // one restyle-and-relayout of every character on each arrival. `crossorigin` is
        // required even same-origin: fonts always fetch in CORS mode, and without it the
        // preload is discarded and the file downloaded a second time.
        { rel: 'preload', as: 'font', type: 'font/woff2', href: FONT_URL, crossorigin: '' },
      ],
      // Inlined rather than a stylesheet: one fewer render-blocking round trip.
      style: [{ innerHTML: FONT_FACE_CSS }],
    },
  },

  features: {
    // Puts the Tailwind bundle in a <style> in the document instead of a stylesheet link.
    // With no client bundle left, that link was the last render-blocking request on the
    // page, costing a round trip before anything could paint.
    inlineStyles: true,
  },

  typescript: {
    strict: true,
  },
})
