<script setup lang="ts">
// `level` lets a page promote its first heading to the document's single <h1>. Menu,
// portfolio, press and location topped out at <h2> and carried no <h1> at all, which
// leaves an extractor with no primary subject for the page. Visual size is unchanged —
// the class list is the same at either level, so this is a semantics-only switch.
withDefaults(defineProps<{ title: string; subtitle?: string; level?: 1 | 2 }>(), { level: 2 })
</script>

<template>
  <div class="mb-8 text-center">
    <component :is="`h${level}`" class="text-3xl font-bold text-goose">{{ title }}</component>
    <p v-if="subtitle" class="mx-auto mt-2 max-w-xl text-neutral-600">{{ subtitle }}</p>
    <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gold"></div>
  </div>
</template>
