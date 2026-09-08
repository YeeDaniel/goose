<script setup lang="ts">
import { SITE } from '~/data/site'

// Site-wide Restaurant structured data + default social meta (SAO).
useRestaurantJsonLd()

const route = useRoute()
const base = SITE.url.replace(/\/$/, '')
// Trailing slash stripped so /about and /about/ — both of which the server answers with
// 200 — resolve to one canonical. Echoing route.path verbatim made each variant point at
// itself, i.e. two indexable copies of every page. The leading `(.)` keeps the home page
// as `/` rather than reducing it to the bare origin.
//
// Lowercased for the same reason: /MENU and /Menu are answered with 200 too, and paths are
// case-sensitive to search engines, so each casing was declaring itself canonical. Every
// route in this site is lowercase, so folding the case cannot collide with a real page.
const canonical = computed(() => base + route.path.replace(/(.)\/$/, '$1').toLowerCase())

useSeoMeta({
  description: SITE.description,
  ogType: 'website',
  ogSiteName: SITE.name,
  ogTitle: `${SITE.name}｜${SITE.tagline}`,
  ogDescription: SITE.description,
  ogUrl: canonical,
  // TODO: add a real share image at public/images/og.jpg (1200x630).
  ogImage: `${base}/images/og.jpg`,
  twitterCard: 'summary_large_image',
})

useHead({
  // Lives here, not in nuxt.config: head values there must be serializable, so a
  // function titleTemplate is silently dropped and every title loses the brand.
  titleTemplate: (title?: string) =>
    title ? `${title}｜${SITE.name}` : `${SITE.fullName}｜台中大甲金牌燒鵝外帶`,
  link: [{ rel: 'canonical', href: canonical }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
