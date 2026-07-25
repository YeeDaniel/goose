<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { SITE } from '~/data/site'

const nav = [
  { label: '關於鵝邸家', to: '/about' },
  { label: '美味菜單', to: '/menu' },
  { label: '金牌饗宴回顧', to: '/portfolio' },
  { label: '媒體報導', to: '/press' },
  { label: '服務據點', to: '/location' },
]
</script>

<template>
  <Disclosure
    as="header"
    v-slot="{ open, close }"
    class="sticky top-0 z-30 border-b border-black/5 bg-cream/90 backdrop-blur"
  >
    <div class="container-page flex h-16 items-center justify-between">
      <NuxtLink to="/" class="flex items-baseline gap-2" :aria-label="`${SITE.name} 首頁`">
        <span class="font-serif text-2xl font-bold text-goose">{{ SITE.name }}</span>
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

      <!-- Hamburger (<lg). -->
      <DisclosureButton
        class="tap-target -mr-2 rounded-lg text-goose lg:hidden"
        :aria-label="open ? '關閉選單' : '開啟選單'"
      >
        <XMarkIcon v-if="open" class="h-6 w-6" aria-hidden="true" />
        <Bars3Icon v-else class="h-6 w-6" aria-hidden="true" />
      </DisclosureButton>
    </div>

    <!-- Dropdown panel (<lg). -->
    <DisclosurePanel class="border-t border-black/5 bg-cream/95 backdrop-blur lg:hidden">
      <nav class="container-page flex flex-col py-2" aria-label="主要導覽">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="tap-target justify-start border-b border-black/5 py-3 text-base font-medium text-neutral-700 transition hover:text-goose"
          active-class="text-goose"
          @click="close()"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="py-4">
          <LineButton block @click="close()" />
        </div>
      </nav>
    </DisclosurePanel>
  </Disclosure>
</template>
