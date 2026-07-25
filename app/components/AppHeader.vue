<script setup lang="ts">
import { SITE } from '~/data/site'

const nav = [
  { label: '關於鵝邸家', to: '/about' },
  { label: '美味菜單', to: '/menu' },
  { label: '金牌饗宴回顧', to: '/portfolio' },
  { label: '服務據點', to: '/location' },
]
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-black/5 bg-cream/90 backdrop-blur">
    <div class="container-page flex h-16 items-center justify-between">
      <NuxtLink to="/" class="flex items-baseline gap-2" :aria-label="`${SITE.name} 首頁`">
        <span class="font-serif text-2xl font-bold text-goose">{{ SITE.name }}</span>
        <span class="hidden text-xs text-gold sm:inline">{{ SITE.tagline }}</span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex" aria-label="主要導覽">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-neutral-700 transition hover:text-goose"
          active-class="text-goose"
        >
          {{ item.label }}
        </NuxtLink>
        <LineButton />
      </nav>
    </div>
  </header>
</template>
