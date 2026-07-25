<script setup lang="ts">
// Branded image placeholder — used until real photography lands, so empty
// slots read as intentional ("照片準備中") rather than broken.
// TODO: replace usages with <img>/<NuxtImg> once photos are available.
withDefaults(
  defineProps<{
    /** Watermark motif. */
    variant?: 'goose' | 'medal' | 'dish'
    /** Small caption chip; omit to hide. */
    label?: string
    /** Show the "照片準備中" tag. */
    pending?: boolean
  }>(),
  { variant: 'goose', label: '', pending: true },
)
</script>

<template>
  <div
    class="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-gold/15 to-goose/15"
  >
    <!-- Watermark motif -->
    <svg
      v-if="variant === 'medal'"
      viewBox="0 0 24 24"
      class="h-24 w-24 text-gold/40"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 16.98l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 1.5z" />
    </svg>
    <span v-else class="select-none font-serif text-7xl font-black text-goose/15" aria-hidden="true">鵝</span>

    <!-- Optional caption -->
    <span
      v-if="label"
      class="absolute bottom-3 left-3 rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-neutral-600"
    >
      {{ label }}
    </span>
    <!-- Pending tag -->
    <span
      v-if="pending"
      class="absolute right-3 top-3 rounded-full bg-black/25 px-2 py-0.5 text-[10px] text-white/90"
    >
      照片準備中
    </span>
  </div>
</template>
