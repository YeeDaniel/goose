<script setup lang="ts">
import { SITE } from '~/data/site'
import { PRESS_VIDEOS, PRESS_ARTICLES, PRESS_GALLERY } from '~/data/press'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: '媒體報導 · 台中大甲燒鵝專訪',
  description: `${SITE.fullName}媒體報導與電視專訪：金牌燒鵝爭霸賽三連霸、大甲鎮瀾宮國際點心站，Yahoo、UDN、中時、中央社、華視等多家媒體採訪紀實。`,
})

// The four broadcast interviews, tied back to the Restaurant node (SAO).
usePressVideoJsonLd()
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading :level="1" title="媒體報導" subtitle="電視專訪 · 新聞紀實 · 三連霸金牌的實力見證" />

    <!-- Interview videos -->
    <section>
      <h2 class="mb-5 flex items-center gap-2 text-2xl font-bold text-goose">
        電視・影音專訪<span class="h-px flex-1 bg-gold/40" />
      </h2>
      <ul class="grid gap-6 sm:grid-cols-2">
        <li v-for="v in PRESS_VIDEOS" :key="v.youtubeId" class="overflow-hidden rounded-2xl bg-white/60 shadow-sm">
          <YoutubeEmbed :youtube-id="v.youtubeId" :title="v.title" />
          <div class="flex items-center gap-3 p-4">
            <span class="rounded-full bg-goose px-2.5 py-0.5 text-xs font-semibold text-cream">{{ v.label }}</span>
            <p class="font-medium text-neutral-800">{{ v.title }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Media & guest photo gallery -->
    <section class="mt-16">
      <h2 class="mb-5 flex items-center gap-2 text-2xl font-bold text-goose">
        採訪花絮・貴賓推薦<span class="h-px flex-1 bg-gold/40" />
      </h2>
      <!-- Two-up on phones: portrait shots at full width made the page a mile long. -->
      <ul class="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        <li v-for="p in PRESS_GALLERY" :key="p.img" class="overflow-hidden rounded-2xl bg-white/60 shadow-sm">
          <div class="aspect-[3/4] overflow-hidden">
            <PlaceholderImage :src="p.img" :alt="p.caption" sizes="(min-width: 1024px) 317px, 50vw" />
          </div>
          <p class="px-3 py-2.5 text-xs text-neutral-600 sm:px-4 sm:py-3 sm:text-sm">{{ p.caption }}</p>
        </li>
      </ul>
    </section>

    <!-- Press articles -->
    <section class="mt-16">
      <h2 class="mb-5 flex items-center gap-2 text-2xl font-bold text-goose">
        新聞報導<span class="h-px flex-1 bg-gold/40" />
      </h2>
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="a in PRESS_ARTICLES" :key="a.url">
          <a
            :href="a.url"
            class="flex h-full flex-col justify-between rounded-2xl bg-white/60 p-5 shadow-sm transition hover:bg-gold/10 hover:shadow-md"
          >
            <div class="flex items-start justify-between gap-3">
              <span class="text-lg font-bold text-goose">{{ a.outlet }}</span>
              <ArrowTopRightOnSquareIcon class="h-5 w-5 shrink-0 text-neutral-400" aria-hidden="true" />
            </div>
            <p class="mt-2 text-sm text-neutral-600">{{ a.title }}</p>
            <p v-if="a.date" class="mt-3 text-xs text-neutral-500">{{ a.date }}</p>
          </a>
        </li>
      </ul>
    </section>

    <div class="mt-16 rounded-2xl bg-white/60 p-8 text-center shadow-sm">
      <p class="text-lg text-neutral-700">想嚐嚐媒體報導的三連霸金牌燒鵝？</p>
      <div class="mt-4 flex justify-center">
        <LineButton />
      </div>
    </div>
  </div>
</template>
