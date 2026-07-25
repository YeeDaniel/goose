<script setup lang="ts">
import { SITE } from '~/data/site'
import { MENU } from '~/data/menu'

useSeoMeta({
  title: '美味菜單',
  description: `${SITE.name} 數位菜單：金牌燒鵝、蜜汁叉燒、滷水類。金牌燒鵝皮脆肉嫩。`,
})

// MenuItem structured data (dev-spec §3.1) so AI search reads dishes precisely.
useMenuJsonLd()
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading title="美味菜單" subtitle="金牌燒鵝 · 叉燒 · 滷水類 · 小菜" />

    <div class="space-y-12">
      <section v-for="cat in MENU" :key="cat.id" :id="cat.id" class="scroll-mt-20">
        <h2 class="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-goose">
          {{ cat.name }}
          <span class="h-px flex-1 bg-gold/40" />
        </h2>
        <ul class="grid items-start gap-5 sm:grid-cols-2">
          <li
            v-for="dish in cat.dishes"
            :key="dish.name"
            class="flex flex-col overflow-hidden rounded-2xl bg-white/60 shadow-sm"
          >
            <div v-if="dish.img" class="aspect-[3/2]">
              <PlaceholderImage :src="dish.img" :alt="dish.name" />
            </div>
            <div class="p-5">
              <div class="flex items-baseline justify-between gap-3">
                <h3 class="font-bold text-neutral-800">
                  {{ dish.name }}
                  <span v-if="dish.signature" class="ml-1 align-middle text-xs text-gold">★ 招牌</span>
                </h3>
                <span v-if="dish.price != null" class="whitespace-nowrap font-bold text-goose">
                  NT$ {{ dish.price }}<span v-if="dish.unit" class="ml-1 text-xs font-normal text-neutral-500">/ {{ dish.unit }}</span>
                </span>
                <span v-else class="whitespace-nowrap text-sm text-neutral-500">時價</span>
              </div>
              <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ dish.description }}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <p class="mt-10 text-center text-sm text-neutral-500">
      價格與品項僅供參考，實際以店內供應為準。預訂請透過 LINE。
    </p>
    <div class="mt-6 flex justify-center">
      <LineButton label="LINE 預訂外帶" />
    </div>
  </div>
</template>
