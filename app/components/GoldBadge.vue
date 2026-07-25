<script setup lang="ts">
// Award badge — "2023-2025 連續三年金牌得主" (design-spec §1 Home hero).
withDefaults(defineProps<{ text?: string }>(), {
  text: '2023-2025 連續三年金牌得主',
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-gold/15 px-3 py-1 text-sm font-semibold text-gold"
  >
    <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path
        d="M12 1.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 16.98l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 1.5z"
      />
    </svg>
    <span>{{ text }}</span>
  </span>
</template>
