<script setup lang="ts">
import { SITE } from '~/data/site'

// 金牌燒鵝爭霸賽 credential highlight — reconstructed from the EdiHome award hero.
// TODO: drop the real award photo (父子廚師 + 金牌獎盃) into public/images/award.jpg
// and swap the placeholder block below for <img src="/images/award.jpg" ...>.
</script>

<template>
  <section class="overflow-hidden rounded-3xl bg-goose text-cream shadow-lg">
    <div class="grid md:grid-cols-2">
      <div class="min-h-56">
        <PlaceholderImage src="/images/award.jpg" :alt="`${SITE.awardCompetition} 金牌領獎`" variant="medal" />
      </div>

      <div class="flex flex-col justify-center gap-3 p-8">
        <GoldBadge :text="SITE.awardCompetition" />
        <h2 class="font-serif text-3xl font-bold text-gold">{{ SITE.awardPrize }}</h2>
        <p class="leading-relaxed text-cream/85">
          {{ SITE.chef }} 主廚率隊出征「{{ SITE.awardCompetition }}」，
          {{ SITE.award }}。一隻燒鵝，燒出十年匠心與三連霸的實力。
        </p>
        <NuxtLink
          to="/about"
          class="inline-block font-semibold text-gold underline-offset-4 hover:underline"
        >
          看三連霸金牌故事 →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
