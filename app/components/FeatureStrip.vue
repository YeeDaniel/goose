<script setup lang="ts">
import { FEATURES } from '~/data/features'
import { TrophyIcon, FireIcon, SparklesIcon, ClockIcon } from '@heroicons/vue/24/outline'

const icons = { trophy: TrophyIcon, fire: FireIcon, sparkles: SparklesIcon, clock: ClockIcon }
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <li
      v-for="f in FEATURES"
      :key="f.title"
      class="rounded-2xl bg-white/60 p-5 text-center shadow-sm"
    >
      <component :is="icons[f.icon]" class="mx-auto h-9 w-9 text-goose" aria-hidden="true" />
      <p class="mt-3 font-serif text-lg font-bold text-goose">{{ f.title }}</p>
      <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ f.desc }}</p>
    </li>
  </ul>
</template>
