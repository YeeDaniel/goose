<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import type { FaqItem } from '~/data/faq'

// Conversational FAQ list (design-spec §1, dev-spec §3.2).
//
// Native <details> rather than a JS disclosure widget. Two reasons: it drops the
// @headlessui/vue runtime off the critical path, and it keeps working with no JS at all —
// including during the seconds after a deploy when a visitor's cached HTML points at
// `_nuxt` chunks that have already been replaced.
defineProps<{ items: FaqItem[] }>()
</script>

<template>
  <div class="mx-auto max-w-2xl divide-y divide-black/10 rounded-2xl bg-white/60 px-4 shadow-sm">
    <details v-for="item in items" :key="item.question" class="group">
      <summary
        class="flex min-h-touch cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-bold text-neutral-800 transition hover:text-goose [&::-webkit-details-marker]:hidden"
      >
        <span>{{ item.question }}</span>
        <ChevronDownIcon
          class="h-5 w-5 shrink-0 text-goose transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div class="pb-4 pr-8 leading-relaxed text-neutral-600">{{ item.answer }}</div>
    </details>
  </div>
</template>
