<script setup lang="ts">
import { SITE } from '~/data/site'

// 金牌燒鵝爭霸賽 credential highlight — reconstructed from the EdiHome award hero.
// TODO: drop the real award photo (父子廚師 + 金牌獎盃) into public/images/award.jpg
// and swap the placeholder block below for <img src="/images/award.jpg" ...>.
</script>

<template>
  <section class="overflow-hidden rounded-3xl bg-goose-deep text-cream shadow-lg">
    <div class="grid md:grid-cols-2">
      <div class="relative flex min-h-56 items-center justify-center bg-gradient-to-br from-goose to-goose-deep">
        <!-- Placeholder for /images/award.jpg -->
        <div class="text-center opacity-80">
          <svg viewBox="0 0 24 24" class="mx-auto h-16 w-16 text-gold" fill="currentColor" aria-hidden="true">
            <path d="M12 1.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 16.98l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 1.5z" />
          </svg>
          <p class="mt-2 text-sm text-cream/70">金牌獎盃照片</p>
        </div>
      </div>

      <div class="flex flex-col justify-center gap-3 p-8">
        <GoldBadge :text="SITE.awardCompetition" />
        <h2 class="font-serif text-3xl font-bold text-gold">{{ SITE.awardPrize }}</h2>
        <p class="leading-relaxed text-cream/85">
          {{ SITE.chef }} 主廚率隊出征「{{ SITE.awardCompetition }}」，
          {{ SITE.award }}。一隻燒鵝，燒出十年匠心與三連霸的實力。
        </p>
        <div>
          <LineButton label="LINE 預訂金牌燒鵝" />
        </div>
      </div>
    </div>
  </section>
</template>
