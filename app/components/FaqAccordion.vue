<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import type { FaqItem } from '~/data/faq'

// Conversational FAQ list (design-spec §1, dev-spec §3.2).
defineProps<{ items: FaqItem[] }>()
</script>

<template>
  <div class="mx-auto max-w-2xl divide-y divide-black/10 rounded-2xl bg-white/60 px-4 shadow-sm">
    <Disclosure v-for="item in items" :key="item.question" v-slot="{ open }" as="div">
      <DisclosureButton
        class="flex min-h-touch w-full items-center justify-between gap-4 py-4 text-left font-bold text-neutral-800 transition hover:text-goose"
      >
        <span>{{ item.question }}</span>
        <ChevronDownIcon
          class="h-5 w-5 shrink-0 text-goose transition-transform duration-200"
          :class="{ 'rotate-180': open }"
          aria-hidden="true"
        />
      </DisclosureButton>
      <DisclosurePanel class="pb-4 pr-8 leading-relaxed text-neutral-600">
        {{ item.answer }}
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
