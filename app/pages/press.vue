<script setup lang="ts">
import { SITE } from '~/data/site'
import { PRESS_VIDEOS, PRESS_ARTICLES } from '~/data/press'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: '媒體報導',
  description: `${SITE.name} 媒體報導與電視專訪：金牌燒鵝爭霸賽三連霸、大甲鎮瀾宮國際點心站，多家媒體採訪紀實。`,
})
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading title="媒體報導" subtitle="電視專訪 · 新聞紀實 · 三連霸金牌的實力見證" />

    <!-- Interview videos -->
    <section>
      <h2 class="mb-5 flex items-center gap-2 font-serif text-2xl font-bold text-goose">
        電視・影音專訪<span class="h-px flex-1 bg-gold/40" />
      </h2>
      <ul class="grid gap-6 sm:grid-cols-2">
        <li v-for="v in PRESS_VIDEOS" :key="v.youtubeId" class="overflow-hidden rounded-2xl bg-white/60 shadow-sm">
          <div class="aspect-video">
            <iframe
              class="h-full w-full"
              :src="`https://www.youtube-nocookie.com/embed/${v.youtubeId}`"
              :title="v.title"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
          <div class="flex items-center gap-3 p-4">
            <span class="rounded-full bg-goose px-2.5 py-0.5 text-xs font-semibold text-cream">{{ v.label }}</span>
            <p class="font-medium text-neutral-800">{{ v.title }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Press articles -->
    <section class="mt-16">
      <h2 class="mb-5 flex items-center gap-2 font-serif text-2xl font-bold text-goose">
        新聞報導<span class="h-px flex-1 bg-gold/40" />
      </h2>
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="a in PRESS_ARTICLES" :key="a.url">
          <a
            :href="a.url"
            target="_blank"
            rel="noopener"
            class="flex h-full flex-col justify-between rounded-2xl bg-white/60 p-5 shadow-sm transition hover:bg-gold/10 hover:shadow-md"
          >
            <div class="flex items-start justify-between gap-3">
              <span class="font-serif text-lg font-bold text-goose">{{ a.outlet }}</span>
              <ArrowTopRightOnSquareIcon class="h-5 w-5 shrink-0 text-neutral-400" aria-hidden="true" />
            </div>
            <p class="mt-2 text-sm text-neutral-600">{{ a.title }}</p>
            <p v-if="a.date" class="mt-3 text-xs text-neutral-400">{{ a.date }}</p>
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
