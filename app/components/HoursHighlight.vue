<script setup lang="ts">
import { SITE } from '~/data/site'
import { ClockIcon } from '@heroicons/vue/24/solid'

// Prominent 假日限定 hours callout — this is easy to miss, so surface it loudly.
</script>

<template>
  <div
    class="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-center sm:flex-row sm:text-left"
  >
    <div class="flex items-center gap-3">
      <ClockIcon class="h-10 w-10 shrink-0 text-gold" aria-hidden="true" />
      <div>
        <p class="font-serif text-xl font-bold text-goose">假日限定 · 售完為止</p>
        <p class="mt-0.5 text-neutral-700">
          <span v-for="(h, i) in SITE.openingHours" :key="h.days">
            <span v-if="i > 0"> ｜ </span>{{ h.days }} {{ h.time }}
          </span>
        </p>
      </div>
    </div>
    <a :href="SITE.mapsDirectionsUrl" target="_blank" rel="noopener" class="btn-primary shrink-0">
      導航到店
    </a>
  </div>
</template>
