<script setup lang="ts">
import { SITE } from '~/data/site'
import {
  ClockIcon,
  MapPinIcon,
  BookOpenIcon,
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/vue/24/outline'

// LINE rich-menu style quick actions — reconstructed from the EdiHome
// Official Account 圖文選單 (營業時間 / 位置資訊 / 菜單 / 聯絡我們 / Facebook / 預訂).
type Action = {
  label: string
  icon: any
  to?: string
  href?: string
}

// 聯絡我們 routes to /location (contact hub) rather than a bare tel: link —
// a tel: link auto-launches a dialer/Skype on desktop, which we don't want.
const actions = computed<Action[]>(() => {
  const list: Action[] = [
    { label: '營業時間', icon: ClockIcon, to: '/location' },
    { label: '位置資訊', icon: MapPinIcon, href: SITE.mapsPlaceUrl },
    { label: '菜單', icon: BookOpenIcon, to: '/menu' },
    { label: '聯絡我們', icon: PhoneIcon, to: '/location' },
  ]
  if (SITE.facebookUrl) {
    list.push({ label: 'Facebook', icon: ChatBubbleOvalLeftEllipsisIcon, href: SITE.facebookUrl })
  }
  list.push({ label: 'LINE 預訂', icon: ChatBubbleOvalLeftEllipsisIcon, href: SITE.lineUrl })
  return list
})

const tileClass =
  'flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white/70 p-3 text-center text-sm font-semibold text-neutral-700 shadow-sm transition hover:bg-gold/15 hover:text-goose'
</script>

<template>
  <ul class="grid grid-cols-3 gap-3 sm:grid-cols-6">
    <li v-for="a in actions" :key="a.label" class="flex">
      <NuxtLink v-if="a.to" :to="a.to" :class="tileClass">
        <component :is="a.icon" class="h-7 w-7 text-goose" aria-hidden="true" />
        <span>{{ a.label }}</span>
      </NuxtLink>
      <a v-else :href="a.href" target="_blank" rel="noopener" :class="tileClass">
        <component :is="a.icon" class="h-7 w-7 text-goose" aria-hidden="true" />
        <span>{{ a.label }}</span>
      </a>
    </li>
  </ul>
</template>
