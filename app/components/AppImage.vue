<script setup lang="ts">
// Responsive photo. Serves AVIF, then WebP, then the untouched original JPEG, picking a
// width from the variants `npm run images` generated into public/images/opt.
//
// The original stays the <img src>: it is the only URL that is guaranteed to exist, so a
// photo dropped into public/images before the script is re-run still renders — just at
// full size, the way the whole site used to.
const props = withDefaults(
  defineProps<{
    /** Path to the original, e.g. `/images/chef.jpg`. */
    src: string
    alt?: string
    /** Rendered width of the slot, for the browser's variant pick. Get this right — a
     *  wrong `sizes` is how responsive images end up downloading the largest rung. */
    sizes?: string
    /** How the photo fills the slot. */
    fit?: 'cover' | 'contain'
    /** Above the fold: load eagerly at high priority instead of lazily. */
    priority?: boolean
  }>(),
  { alt: '', sizes: '100vw', fit: 'cover', priority: false },
)

const meta = computed(() => imageMeta(props.src))
const avifSrcset = computed(() => imageSrcset(props.src, 'avif'))
const webpSrcset = computed(() => imageSrcset(props.src, 'webp'))

const fitClass = computed(() => (props.fit === 'contain' ? 'object-contain' : 'object-cover'))
</script>

<template>
  <!-- `block h-full w-full` is load-bearing: <picture> is inline by default, and the
       img's own h-full would then resolve against a zero-height box. -->
  <picture class="block h-full w-full">
    <source v-if="avifSrcset" type="image/avif" :srcset="avifSrcset" :sizes="sizes" />
    <source v-if="webpSrcset" type="image/webp" :srcset="webpSrcset" :sizes="sizes" />
    <img
      :src="src"
      :alt="alt"
      :width="meta?.w"
      :height="meta?.h"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      :decoding="priority ? 'sync' : 'async'"
      class="h-full w-full"
      :class="fitClass"
    />
  </picture>
</template>
