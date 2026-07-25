<script setup lang="ts">
import { SITE } from '~/data/site'
</script>

<template>
  <footer class="border-t border-black/5 bg-goose text-cream/90">
    <div class="container-page grid gap-6 py-10 sm:grid-cols-3">
      <div>
        <p class="font-serif text-xl font-bold text-gold">{{ SITE.name }}</p>
        <p class="mt-1 text-sm">{{ SITE.tagline }}</p>
        <p class="mt-3 text-sm leading-relaxed text-cream/70">
          {{ SITE.chef }} 主廚 · {{ SITE.yearsOfCraft }} 年匠心
        </p>
      </div>

      <div class="text-sm">
        <p class="font-semibold text-gold">營業時間</p>
        <ul class="mt-2 space-y-1 text-cream/80">
          <li v-for="h in SITE.openingHours" :key="h.days">{{ h.days }}：{{ h.time }}</li>
        </ul>
      </div>

      <div class="text-sm">
        <p class="font-semibold text-gold">聯絡我們</p>
        <p class="mt-2 text-cream/80">電話：{{ SITE.phone }}</p>
        <p class="text-cream/80">{{ SITE.address.region }}{{ SITE.address.locality }}{{ SITE.address.street }}</p>
        <div class="mt-4">
          <LineButton variant="light" />
        </div>
        <a
          v-if="SITE.facebookUrl"
          :href="SITE.facebookUrl"
          target="_blank"
          rel="noopener"
          class="mt-3 inline-block text-sm text-cream/80 underline-offset-4 hover:text-gold hover:underline"
        >
          Facebook 粉絲專頁 →
        </a>
      </div>
    </div>

    <div class="border-t border-white/10 py-4 text-center text-xs text-cream/60">
      © {{ new Date().getFullYear() }} {{ SITE.name }} {{ SITE.nameEn }}. All rights reserved.
    </div>
  </footer>
</template>
