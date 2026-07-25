<script setup lang="ts">
import { TESTIMONIALS } from '~/data/testimonials'
</script>

<template>
  <ul class="grid gap-4 md:grid-cols-3">
    <li v-for="t in TESTIMONIALS" :key="t.author" class="rounded-2xl bg-white/60 p-6 shadow-sm">
      <div class="mb-2 text-gold" aria-hidden="true">
        <span v-for="n in 5" :key="n">★</span>
      </div>
      <p class="leading-relaxed text-neutral-700">「{{ t.text }}」</p>
      <p class="mt-3 text-sm font-medium text-neutral-500">— {{ t.author }}</p>
    </li>
  </ul>
</template>
