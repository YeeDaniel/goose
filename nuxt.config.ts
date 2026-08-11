// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE } from './app/data/site'

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
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          // Variable axis (`400..900`) rather than five static weights: the page uses
          // 400/500/600/700/900 and a CJK family is sliced into ~108 unicode-range
          // files per weight — one variable axis is 540 font files down to 108.
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400..900&display=swap',
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },
})
