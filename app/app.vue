<script setup lang="ts">
import { SITE } from '~/data/site'

// Site-wide Restaurant structured data + default social meta (SAO).
useRestaurantJsonLd()

const route = useRoute()
const base = SITE.url.replace(/\/$/, '')
const canonical = computed(() => base + route.path)

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
  link: [{ rel: 'canonical', href: canonical }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
