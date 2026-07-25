<script setup lang="ts">
import { SITE } from '~/data/site'

// Site-wide Restaurant structured data + default social meta (SAO).
useRestaurantJsonLd()

useSeoMeta({
  description: SITE.description,
  ogType: 'website',
  ogSiteName: SITE.name,
  ogTitle: `${SITE.name}｜${SITE.tagline}`,
  ogDescription: SITE.description,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
