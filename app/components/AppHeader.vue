<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { SITE } from '~/data/site'

const nav = [
  { label: '關於鵝邸家', to: '/about' },
  { label: '美味菜單', to: '/menu' },
  { label: '金牌饗宴回顧', to: '/portfolio' },
  { label: '媒體報導', to: '/press' },
  { label: '服務據點', to: '/location' },
]

// Native <details> carries the open/closed state, so the menu works before (and without)
// hydration — see FaqAccordion for why that matters. The ref exists only to close the
// panel after a client-side navigation, which <details> has no way to notice by itself.
const open = ref(false)
const route = useRoute()
watch(
  () => route.path,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-black/5 bg-cream/90 backdrop-blur">
    <div class="container-page flex h-16 items-center justify-between">
      <NuxtLink to="/" class="flex items-baseline gap-2" :aria-label="`${SITE.name} 首頁`">
        <span class="text-2xl font-bold text-goose">{{ SITE.name }}</span>
        <span class="hidden text-xs text-gold xl:inline">{{ SITE.tagline }}</span>
      </NuxtLink>

      <!-- Desktop nav (lg+). Below lg the 5 long CN links + LINE button crowd. -->
      <nav class="hidden items-center gap-6 lg:flex" aria-label="主要導覽">
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

      <!-- Hamburger + dropdown (<lg). The panel is positioned against the sticky header
           rather than nested in the bar, so <summary> can stay just the button. -->
      <details
        :open="open"
        class="group lg:hidden"
        @toggle="open = ($event.target as HTMLDetailsElement).open"
      >
        <summary
          class="tap-target -mr-2 cursor-pointer list-none rounded-lg text-goose [&::-webkit-details-marker]:hidden"
          :aria-label="open ? '關閉選單' : '開啟選單'"
        >
          <XMarkIcon class="hidden h-6 w-6 group-open:block" aria-hidden="true" />
          <Bars3Icon class="h-6 w-6 group-open:hidden" aria-hidden="true" />
        </summary>

        <nav
          class="absolute inset-x-0 top-16 border-t border-black/5 bg-cream/95 backdrop-blur"
          aria-label="主要導覽"
        >
          <div class="container-page flex flex-col py-2">
            <NuxtLink
              v-for="item in nav"
              :key="item.to"
              :to="item.to"
              class="tap-target justify-start border-b border-black/5 py-3 text-base font-medium text-neutral-700 transition hover:text-goose"
              active-class="text-goose"
            >
              {{ item.label }}
            </NuxtLink>
            <div class="py-4">
              <LineButton block />
            </div>
          </div>
        </nav>
      </details>
    </div>
  </header>
</template>
