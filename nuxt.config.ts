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
      titleTemplate: (title?: string) =>
        title ? `${title}｜${SITE.name}` : `${SITE.name}｜${SITE.tagline}`,
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  typescript: {
    strict: true,
  },
})
