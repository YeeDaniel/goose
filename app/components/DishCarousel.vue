<script setup lang="ts">
// Horizontal scrolling showcase (design-spec §1 Home Carousel).
// Uses native scroll-snap — lightweight, touch-friendly, no JS dependency.
interface Slide {
  name: string
  note: string
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
        <div
          class="flex h-40 items-end rounded-2xl bg-gradient-to-br from-goose to-goose-deep p-4 text-cream shadow-sm"
        >
          <!-- TODO: swap gradient for real dish photography. -->
          <div>
            <p class="font-serif text-xl font-bold">{{ slide.name }}</p>
            <p class="text-sm text-cream/80">{{ slide.note }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
