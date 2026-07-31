<script setup lang="ts">
// Horizontal scrolling showcase (design-spec §1 Home Carousel).
// Uses native scroll-snap — lightweight, touch-friendly, no JS dependency.
interface Slide {
  name: string
  note: string
  img?: string
}
defineProps<{ slides: Slide[] }>()
</script>

<template>
  <div class="-mx-4 overflow-x-auto px-4 pb-2">
    <ul class="flex snap-x snap-mandatory items-stretch gap-4">
      <li
        v-for="slide in slides"
        :key="slide.name"
        class="flex shrink-0 basis-72 snap-start sm:basis-80"
      >
        <div class="flex w-full flex-col overflow-hidden rounded-2xl shadow-sm">
          <!-- overflow-hidden is load-bearing: as a flex item, min-height:auto would
               otherwise let the photo's intrinsic height override the aspect ratio. -->
          <div class="aspect-[4/3] overflow-hidden">
            <PlaceholderImage variant="dish" :src="slide.img" :alt="slide.name" :pending="true" />
          </div>
          <div class="flex-1 bg-white/70 p-4">
            <p class="font-serif text-lg font-bold text-goose">{{ slide.name }}</p>
            <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ slide.note }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
