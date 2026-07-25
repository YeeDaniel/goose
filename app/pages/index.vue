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
  .map((d) => ({ name: d.name, note: d.description, img: d.img }))

const homeFaq = FAQ.slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero — full-bleed 2023 金牌燒鵝爭霸賽 award photo (design-spec §1). -->
    <section class="relative overflow-hidden text-cream">
      <img
        src="/images/hero-bg.jpg"
        alt="鵝邸家 金牌燒鵝 現烤吊掛"
        fetchpriority="high"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
      <!-- Overlays for text legibility — neutral dark, weighted left (not a red wash). -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div class="absolute inset-0 bg-gradient-to-t from-goose-deep/45 to-transparent" />

      <div class="container-page relative py-24 md:py-32">
        <div class="max-w-xl">
          <GoldBadge class="mb-5" />
          <h1 class="font-serif text-4xl font-bold leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.35)] sm:text-5xl">
            {{ SITE.name }}<span class="text-gold">金牌燒鵝</span>
          </h1>
          <p class="mt-4 text-lg text-cream/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
            {{ SITE.chef }} 主廚 {{ SITE.yearsOfCraft }} 年匠心，皮脆肉嫩、油亮多汁。<br />
            僅提供來店享用與外帶自取，只為那一口剛出爐的酥脆。
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <LineButton variant="light" />
            <NuxtLink to="/menu" class="btn-outline-light">查看菜單</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- LINE rich-menu style quick actions (from EdiHome). -->
    <section class="container-page py-10">
      <QuickActions />
    </section>

    <!-- 假日限定 hours callout. -->
    <section class="container-page pb-4">
      <HoursHighlight />
    </section>

    <!-- Why us. -->
    <section class="container-page py-14">
      <SectionHeading title="為什麼選鵝邸家" />
      <FeatureStrip />
    </section>

    <!-- Signature carousel. -->
    <section class="bg-white/50 py-14">
      <div class="container-page">
        <SectionHeading title="招牌推薦" subtitle="金牌燒鵝、蜜汁叉燒、精滷滷味" />
        <DishCarousel :slides="signatures" />
      </div>
    </section>

    <!-- Menu price preview. -->
    <section class="container-page py-14">
      <SectionHeading title="菜單價目" subtitle="金牌燒鵝 · 叉燒 · 滷水類" />
      <div class="grid gap-8 sm:grid-cols-2">
        <div v-for="cat in MENU" :key="cat.id">
          <h3 class="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-goose">
            {{ cat.name }}<span class="h-px flex-1 bg-gold/40" />
          </h3>
          <ul class="space-y-2">
            <li
              v-for="dish in cat.dishes"
              :key="dish.name"
              class="flex items-baseline justify-between gap-3 text-sm"
            >
              <span class="text-neutral-700">{{ dish.name }}</span>
              <span class="whitespace-nowrap font-semibold text-goose">
                NT$ {{ dish.price
                }}<span v-if="dish.unit" class="ml-0.5 text-xs font-normal text-neutral-400">/{{ dish.unit }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p class="mt-8 text-center">
        <NuxtLink to="/menu" class="font-semibold text-goose hover:underline">看完整菜單 →</NuxtLink>
      </p>
    </section>

    <!-- 金牌燒鵝爭霸賽 award banner (from EdiHome). -->
    <section class="container-page pb-4">
      <AwardBanner />
    </section>

    <!-- Brand story teaser. -->
    <section class="bg-white/50 py-14">
      <div class="container-page grid items-center gap-8 md:grid-cols-2">
        <div class="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-sm">
          <PlaceholderImage src="/images/chef.jpg" alt="郭芳銘主廚與金牌燒鵝" />
        </div>
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

    <!-- Customer reviews. -->
    <section class="container-page py-14">
      <SectionHeading title="顧客好評" subtitle="來自饕客的真實回饋" />
      <Testimonials />
    </section>

    <!-- FAQ teaser. -->
    <section class="bg-white/50 py-14">
      <div class="container-page">
        <SectionHeading title="常見問題" />
        <FaqAccordion :items="homeFaq" />
        <p class="mt-6 text-center">
          <NuxtLink to="/location" class="font-semibold text-goose hover:underline">
            更多問題與服務據點 →
          </NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>
