<script setup lang="ts">
import { SITE } from '~/data/site'
import { MENU } from '~/data/menu'

useSeoMeta({
  title: '美味菜單 · 台中大甲燒鵝價目',
  description: `${SITE.fullName}菜單價目：金牌燒鵝半隻 NT$850、整隻 NT$1600，蜜汁叉燒、滷水鵝翅、綜合拼盤。台中大甲現烤現斬，僅提供外帶自取，LINE 預訂取餐。`,
})

// MenuItem structured data (dev-spec §3.1) so AI search reads dishes precisely.
useMenuJsonLd()
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading :level="1" title="美味菜單" subtitle="金牌燒鵝 · 叉燒 · 滷水類 · 小菜" />

    <!-- Menu reads as a menu: one narrow column of rows, photo as a thumbnail.
         Big appetite shots live on the Home carousel, not here. -->
    <div class="mx-auto max-w-2xl space-y-10">
      <section v-for="cat in MENU" :key="cat.id" :id="cat.id" class="scroll-mt-20">
        <h2 class="mb-3 flex items-center gap-3 text-xl font-bold text-goose sm:text-2xl">
          {{ cat.name }}
          <span class="h-px flex-1 bg-gold/40" />
        </h2>
        <ul class="divide-y divide-gold/20 overflow-hidden rounded-2xl bg-white/60 shadow-sm">
          <li
            v-for="dish in cat.dishes"
            :key="dish.name"
            class="flex items-start gap-4 p-4"
          >
            <!-- Only 燒鵝 / 叉燒 carry photos; 滷水類 and 小菜 read as plain text rows. -->
            <div v-if="dish.img" class="h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
              <PlaceholderImage :src="dish.img" :alt="dish.name" sizes="(min-width: 640px) 80px, 64px" />
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex items-baseline justify-between gap-3">
                <h3 class="min-w-0 font-bold text-neutral-800">
                  {{ dish.name }}
                  <span v-if="dish.signature" class="ml-1 whitespace-nowrap align-middle text-xs text-gold">★ 招牌</span>
                </h3>
                <!-- Unit sits under the price so long dish names keep the line. -->
                <p v-if="dish.price != null" class="shrink-0 text-right">
                  <span class="whitespace-nowrap font-bold text-goose">NT$ {{ dish.price }}</span>
                  <span v-if="dish.unit" class="block text-xs font-normal text-neutral-500">/ {{ dish.unit }}</span>
                </p>
                <span v-else class="shrink-0 text-sm text-neutral-500">時價</span>
              </div>
              <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ dish.description }}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <p class="mx-auto mt-10 max-w-2xl text-center text-sm text-neutral-500">
      價格與品項僅供參考，實際以店內供應為準。預訂請透過 LINE。
    </p>
    <div class="mt-6 flex justify-center">
      <LineButton label="LINE 預訂外帶" />
    </div>
  </div>
</template>
