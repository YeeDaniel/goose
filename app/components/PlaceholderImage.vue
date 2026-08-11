<script setup lang="ts">
// Image slot. When `src` is set it renders the real photo (object-cover);
// otherwise a branded placeholder (鵝/medal watermark + 照片準備中) so empty
// slots read as intentional rather than broken.
withDefaults(
  defineProps<{
    /** Real photo path (public/). When set, the placeholder is not shown. */
    src?: string
    alt?: string
    /** How the photo fills the slot. 'contain' shows the whole photo (no crop). */
    fit?: 'cover' | 'contain'
    /** Watermark motif (placeholder only). */
    variant?: 'goose' | 'medal' | 'dish'
    /** Small caption chip (placeholder only). */
    label?: string
    /** Show the "照片準備中" tag (placeholder only). */
    pending?: boolean
  }>(),
  { src: '', alt: '', fit: 'cover', variant: 'goose', label: '', pending: true },
)
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="alt"
    loading="lazy"
    class="h-full w-full"
    :class="fit === 'contain' ? 'object-contain' : 'object-cover'"
  />

  <div
    v-else
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
    <span v-else class="select-none text-7xl font-black text-goose/15" aria-hidden="true">鵝</span>

    <span
      v-if="label"
      class="absolute bottom-3 left-3 rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-neutral-600"
    >
      {{ label }}
    </span>
    <span
      v-if="pending"
      class="absolute right-3 top-3 rounded-full bg-black/25 px-2 py-0.5 text-[10px] text-white/90"
    >
      照片準備中
    </span>
  </div>
</template>
