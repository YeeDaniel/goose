<script setup lang="ts">
import { SITE } from '~/data/site'

useSeoMeta({
  title: '關於鵝邸家',
  description: `${SITE.chef} 主廚十年匠心與三連霸金牌的榮耀故事 — ${SITE.name} 品牌故事。`,
})

// Entity-linked milestones (dev-spec §3.2): 郭芳銘主廚 / 十年經驗 / 連續三年金牌得主.
const milestones = [
  { year: '起點', text: `${SITE.chef} 主廚投入燒鵝料理，鑽研皮脆肉嫩的火候之道。` },
  { year: '十年', text: '十年匠心累積，建立獨到的選鵝、風乾與炙烤工序。' },
  { year: '2023', text: '首度榮獲金牌肯定，實力受業界認證。' },
  { year: '2024', text: '蟬聯金牌，穩定品質再獲肯定。' },
  { year: '2025', text: '三連霸金牌得主，奠定招牌地位。' },
]
</script>

<template>
  <div class="container-page py-14">
    <header class="mx-auto max-w-3xl text-center">
      <GoldBadge class="mb-4" />
      <h1 class="font-serif text-4xl font-bold text-goose">關於鵝邸家</h1>
      <p class="mt-4 leading-relaxed text-neutral-700">
        鵝邸家的故事，是一位主廚對「剛出爐那一口酥脆」的堅持。
        <strong>{{ SITE.chef }}</strong> 主廚以 <strong>十年經驗</strong> 淬鍊工藝，
        連續三年（2023-2025）榮獲 <strong>金牌得主</strong>，用一隻燒鵝訴說匠心。
      </p>
    </header>

    <!-- Chef intro. -->
    <div class="mx-auto mt-12 grid max-w-4xl items-center gap-8 md:grid-cols-2">
      <div class="aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
        <PlaceholderImage src="/images/chef.jpg" :alt="`${SITE.chef} 主廚`" />
      </div>
      <div>
        <h2 class="font-serif text-2xl font-bold text-goose">主廚 · {{ SITE.chef }}</h2>
        <p class="mt-3 leading-relaxed text-neutral-700">
          十年專注一味，從選鵝、風乾到炙烤，堅持港式燒味的火候之道。
          每一隻金牌燒鵝，都是對「剛出爐那一口酥脆」的執著。
        </p>
        <p class="mt-3 leading-relaxed text-neutral-700">
          2023-2025 連續三年金牌，是實力，也是每個假日清晨備料的累積。
        </p>
      </div>
    </div>

    <h2 class="mx-auto mt-16 max-w-2xl font-serif text-2xl font-bold text-goose">品牌歷程</h2>
    <ol class="mx-auto mt-6 max-w-2xl space-y-6 border-l-2 border-gold/50 pl-6">
      <li v-for="m in milestones" :key="m.year" class="relative">
        <span class="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-cream" />
        <p class="font-serif text-lg font-bold text-goose">{{ m.year }}</p>
        <p class="mt-1 text-neutral-700">{{ m.text }}</p>
      </li>
    </ol>

    <!-- 職人現場 -->
    <div class="mx-auto mt-16 max-w-4xl">
      <h2 class="mb-6 font-serif text-2xl font-bold text-goose">職人現場</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="aspect-video overflow-hidden rounded-2xl shadow-sm">
          <PlaceholderImage src="/images/chef-action.jpg" alt="主廚現場處理燒鵝" />
        </div>
        <div class="aspect-video overflow-hidden rounded-2xl shadow-sm">
          <PlaceholderImage src="/images/oven.jpg" alt="炭爐現烤燒鵝" />
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 max-w-4xl">
      <AwardBanner />
    </div>

    <div class="mt-12 rounded-2xl bg-white/60 p-8 text-center shadow-sm">
      <p class="text-lg text-neutral-700">想品嚐三連霸金牌燒鵝？</p>
      <div class="mt-4 flex justify-center">
        <LineButton />
      </div>
    </div>
  </div>
</template>
