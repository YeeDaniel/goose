<script setup lang="ts">
import { SITE } from '~/data/site'

// 金牌燒鵝爭霸賽 credential highlight — reconstructed from the EdiHome award hero.
// TODO: drop the real award photo (父子廚師 + 金牌獎盃) into public/images/award.jpg
// and swap the placeholder block below for <img src="/images/award.jpg" ...>.
</script>

<template>
  <section class="overflow-hidden rounded-3xl bg-goose-deep text-cream shadow-lg">
    <div class="grid md:grid-cols-2">
      <div class="min-h-56">
        <!-- Placeholder for /images/award.jpg -->
        <PlaceholderImage variant="medal" label="金牌獎盃照片" :pending="true" />
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
