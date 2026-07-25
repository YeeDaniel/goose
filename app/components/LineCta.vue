<script setup lang="ts">
import { SITE } from '~/data/site'

// Floating global CTA — the site's only explicit conversion goal (design-spec §3).
// Sits above the bottom nav on mobile.
</script>

<template>
  <a
    :href="SITE.lineUrl"
    target="_blank"
    rel="noopener"
    class="btn-primary fixed right-4 bottom-24 z-40 shadow-lg md:bottom-6"
    aria-label="開啟 LINE 官方帳號預約或點餐"
  >
    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.58 7.39 8.42 8.02.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1.02.9.56 1.1-.46 5.9-3.48 8.05-5.96C21.6 13.4 22 11.83 22 10.13 22 5.64 17.52 2 12 2Z"
      />
    </svg>
    <span class="hidden sm:inline">LINE 預約／點餐</span>
  </a>
</template>
