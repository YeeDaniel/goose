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
    <ul class="flex snap-x snap-mandatory gap-4">
      <li
        v-for="slide in slides"
        :key="slide.name"
        class="snap-start shrink-0 basis-64 sm:basis-72"
      >
        <div class="overflow-hidden rounded-2xl shadow-sm">
          <div class="h-40">
            <PlaceholderImage variant="dish" :src="slide.img" :alt="slide.name" :pending="true" />
          </div>
          <div class="bg-white/70 p-4">
            <p class="font-serif text-lg font-bold text-goose">{{ slide.name }}</p>
            <p class="text-sm text-neutral-600">{{ slide.note }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
