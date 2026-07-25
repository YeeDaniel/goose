<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mb-8 text-center">
    <h2 class="text-3xl font-bold text-goose">{{ title }}</h2>
    <p v-if="subtitle" class="mx-auto mt-2 max-w-xl text-neutral-600">{{ subtitle }}</p>
    <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gold"></div>
  </div>
</template>
