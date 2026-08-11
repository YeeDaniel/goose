<script setup lang="ts">
import type { NuxtError } from '#app'

// Nuxt renders this *in place of* app.vue, not inside <NuxtPage />. Two consequences:
//   1. the default layout is not applied automatically — wrap in <NuxtLayout> to get
//      AppHeader / AppFooter / LineCta / BottomNav;
//   2. app.vue's titleTemplate and canonical never run, so the head is set here in full.
const props = defineProps<{ error: NuxtError }>()

const status = computed(() => props.error?.statusCode ?? 500)
const isNotFound = computed(() => status.value === 404)

const heading = computed(() => (isNotFound.value ? '找不到這個頁面' : '網站暫時出了點狀況'))
const message = computed(() =>
  isNotFound.value
    ? '網址可能改過，或這個連結已經失效。從下面挑一個地方繼續逛吧。'
    : '請稍後再重新整理一次。要訂餐的話，直接用 LINE 找我們最快。',
)

// Header, BottomNav and the tiles below are all NuxtLinks. A route change does not clear
// Nuxt's error state by itself, so without this the chrome would navigate but keep
// rendering this page — every link in the header would look dead.
const route = useRoute()
watch(() => route.fullPath, () => clearError())

useHead({ title: `${heading.value}｜鵝邸家` })
useSeoMeta({
  // Error pages must never enter the index — a soft-404 in search results is worse
  // than no result at all.
  robots: 'noindex, follow',
  description: message,
})
</script>

<template>
  <NuxtLayout>
    <div class="container-page py-20 text-center sm:py-28">
      <p class="select-none text-7xl font-black leading-none text-goose/15" aria-hidden="true">
        {{ status }}
      </p>
      <h1 class="mt-3 text-3xl font-bold text-goose">{{ heading }}</h1>
      <p class="mx-auto mt-3 max-w-md leading-relaxed text-neutral-600">{{ message }}</p>
      <div class="mx-auto mt-5 h-1 w-16 rounded-full bg-gold" />

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <NuxtLink to="/" class="btn-ghost">回首頁</NuxtLink>
        <NuxtLink to="/menu" class="btn-ghost">看菜單</NuxtLink>
        <LineButton />
      </div>

      <p class="mt-14 text-sm text-neutral-500">或直接找你要的：</p>
      <div class="mx-auto mt-4 max-w-2xl">
        <QuickActions />
      </div>
    </div>
  </NuxtLayout>
</template>
