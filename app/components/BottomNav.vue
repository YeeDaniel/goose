<script setup lang="ts">
import { SITE } from '~/data/site'
import { BookOpenIcon, ChatBubbleOvalLeftEllipsisIcon, MapPinIcon } from '@heroicons/vue/24/outline'

// Fixed mobile bottom navigation (design-spec §2.2): 查看菜單 / LINE 立即預約 / 導航到店.
// Hidden on md+ where the header nav takes over.
//
// Both external links navigate in the same tab — see LineButton.vue for why
// target="_blank" is banned site-wide.
const items = [
  { label: '查看菜單', to: '/menu', icon: BookOpenIcon, external: false },
  { label: 'LINE 立即預約', href: SITE.lineUrl, icon: ChatBubbleOvalLeftEllipsisIcon, external: true },
  { label: '導航到店', href: SITE.mapsDirectionsUrl, icon: MapPinIcon, external: true },
]
</script>

<template>
  <nav
    class="fixed inset-x-0 bottom-0 z-30 border-t border-black/5 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    aria-label="主要功能導覽"
  >
    <ul class="mx-auto grid max-w-screen-sm grid-cols-3">
      <li v-for="item in items" :key="item.label">
        <!-- `flex w-full` is load-bearing: .tap-target is inline-flex, so without it
             each link shrinks to its label width and sits flush left in its cell —
             three different label lengths, three different offsets. -->
        <a
          v-if="item.external"
          :href="item.href"
          class="tap-target flex w-full flex-col gap-1 py-2 text-xs font-medium text-goose"
        >
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          <span class="whitespace-nowrap">{{ item.label }}</span>
        </a>
        <NuxtLink
          v-else
          :to="item.to"
          class="tap-target flex w-full flex-col gap-1 py-2 text-xs font-medium text-neutral-700"
        >
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          <span class="whitespace-nowrap">{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
