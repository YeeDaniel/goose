<script setup lang="ts">
import { SITE } from '~/data/site'
import { MENU } from '~/data/menu'
import { FAQ } from '~/data/faq'

useSeoMeta({
  title: '首頁',
  description: SITE.description,
})

// Home surfaces menu + FAQ structured data too (SAO).
useMenuJsonLd()
useFaqJsonLd(FAQ)

// Carousel = signature dishes flagged across the menu.
const signatures = MENU.flatMap((c) => c.dishes)
  .filter((d) => d.signature)
  .map((d) => ({ name: d.name, note: d.description }))

const homeFaq = FAQ.slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero — full-bleed gold-medal roast goose (design-spec §1). -->
    <section class="relative overflow-hidden bg-goose-deep text-cream">
      <!-- TODO: replace gradient with full-bleed hero video/photo of the gold-medal roast goose. -->
      <div class="absolute inset-0 bg-gradient-to-br from-goose-deep via-goose to-goose-deep opacity-90" />
      <div class="container-page relative flex min-h-[70vh] flex-col items-start justify-center py-16">
        <GoldBadge class="mb-5" />
        <h1 class="max-w-2xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          {{ SITE.name }}<span class="text-gold">金牌燒鵝</span>
        </h1>
        <p class="mt-4 max-w-xl text-lg text-cream/85">
          {{ SITE.chef }} 主廚 {{ SITE.yearsOfCraft }} 年匠心，皮脆肉嫩、油亮多汁。<br />
          僅提供來店享用與外帶自取，只為那一口剛出爐的酥脆。
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <LineButton />
          <NuxtLink to="/menu" class="btn-primary">查看菜單</NuxtLink>
        </div>
      </div>
    </section>

    <!-- LINE rich-menu style quick actions (from EdiHome). -->
    <section class="container-page py-10">
      <QuickActions />
    </section>

    <!-- Signature carousel. -->
    <section class="container-page py-14">
      <SectionHeading title="招牌推薦" subtitle="金牌燒鵝、蜜汁叉燒、精滷滷味" />
      <DishCarousel :slides="signatures" />
    </section>

    <!-- 金牌燒鵝爭霸賽 award banner (from EdiHome). -->
    <section class="container-page pb-4">
      <AwardBanner />
    </section>

    <!-- Brand story teaser. -->
    <section class="bg-white/50 py-14">
      <div class="container-page grid items-center gap-8 md:grid-cols-2">
        <div class="h-56 rounded-2xl bg-gradient-to-br from-gold/30 to-goose/20" aria-hidden="true" />
        <div>
          <h2 class="font-serif text-2xl font-bold text-goose">關於鵝邸家</h2>
          <p class="mt-3 leading-relaxed text-neutral-700">
            從一隻鵝的堅持開始，{{ SITE.chef }} 主廚以十年匠心，連續三年（2023-2025）榮獲金牌肯定。
            每一隻燒鵝都是對脆度與火候的職人執著。
          </p>
          <NuxtLink to="/about" class="mt-5 inline-block font-semibold text-goose underline-offset-4 hover:underline">
            閱讀品牌故事 →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ teaser. -->
    <section class="container-page py-14">
      <SectionHeading title="常見問題" />
      <FaqAccordion :items="homeFaq" />
      <p class="mt-6 text-center">
        <NuxtLink to="/location" class="font-semibold text-goose hover:underline">
          更多問題與服務據點 →
        </NuxtLink>
      </p>
    </section>
  </div>
</template>
