<script setup lang="ts">
// Click-to-load YouTube facade.
//
// The press page carries four interview embeds. A real <iframe> pulls the YouTube player
// bundle — hundreds of KB of JS plus its own font/image requests — for every embed, and
// `loading="lazy"` does not help the ones above the fold. Four players competing on a phone
// made 電視・影音專訪 visibly slow to appear.
//
// So render only the poster frame up front (one ~15KB JPEG from i.ytimg.com) and swap in the
// real player on click, with autoplay so the click that loads it also starts it.
const props = defineProps<{ youtubeId: string; title: string }>()

const loaded = ref(false)

// hqdefault always exists for every video; maxresdefault 404s on older uploads. It is 4:3,
// so object-cover crops it to the 16:9 frame rather than letterboxing it.
const poster = computed(() => `https://i.ytimg.com/vi/${props.youtubeId}/hqdefault.jpg`)
const embedSrc = computed(
  () => `https://www.youtube-nocookie.com/embed/${props.youtubeId}?autoplay=1`,
)
</script>

<template>
  <div class="aspect-video">
    <iframe
      v-if="loaded"
      class="h-full w-full"
      :src="embedSrc"
      :title="title"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
    <button
      v-else
      type="button"
      class="group relative h-full w-full overflow-hidden bg-neutral-900"
      :aria-label="`播放影片：${title}`"
      @click="loaded = true"
    >
      <img
        :src="poster"
        :alt="title"
        loading="lazy"
        decoding="async"
        width="480"
        height="360"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <span class="absolute inset-0 bg-black/15 transition group-hover:bg-black/5" />
      <!-- Play badge in brand red rather than the YouTube chrome. -->
      <span
        class="tap-target absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-goose/90 shadow-lg transition group-hover:bg-goose"
      >
        <!-- No optical nudge here: the path's vertices are (8,4.71) (8,19.29) (19.96,12),
             so its centroid already sits at x=11.99 — the viewBox centre. The bounding box
             leans right because a triangle's visual weight is at its centroid, not its box.
             A translate-x on top of that shifts it off centre twice over. -->
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-cream" fill="currentColor" aria-hidden="true">
          <path d="M8 5.14v13.72a.5.5 0 0 0 .76.43l11.2-6.86a.5.5 0 0 0 0-.86L8.76 4.71A.5.5 0 0 0 8 5.14Z" />
        </svg>
      </span>
    </button>
  </div>
</template>
