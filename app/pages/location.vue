<script setup lang="ts">
import { SITE } from '~/data/site'
import { FAQ } from '~/data/faq'

useSeoMeta({
  title: '服務據點與常見問題',
  description: `${SITE.name} 服務據點、營業時間與常見問題。堅持品質，僅提供來店享用與外帶自取。`,
})

// FAQPage structured data (dev-spec §3.2) — includes the required no-delivery QA.
useFaqJsonLd(FAQ)
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading title="服務據點與常見問題" subtitle="來店享用 · 外帶自取" />

    <!-- Location -->
    <section class="grid gap-8 md:grid-cols-2">
      <div class="overflow-hidden rounded-2xl shadow-sm">
        <!-- TODO: replace src with the real Google Maps embed URL. -->
        <iframe
          :src="SITE.mapsEmbedUrl"
          class="h-72 w-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="鵝邸家 Google 地圖位置"
        />
      </div>

      <div class="rounded-2xl bg-white/60 p-6 shadow-sm">
        <h2 class="font-serif text-xl font-bold text-goose">店家資訊</h2>
        <dl class="mt-4 space-y-3 text-sm">
          <div>
            <dt class="font-semibold text-neutral-800">地址</dt>
            <dd class="text-neutral-600">
              {{ SITE.address.region }}{{ SITE.address.locality }}{{ SITE.address.street }}
            </dd>
          </div>
          <div>
            <dt class="font-semibold text-neutral-800">電話</dt>
            <dd class="text-neutral-600">{{ SITE.phone }}</dd>
          </div>
          <div>
            <dt class="font-semibold text-neutral-800">營業時間</dt>
            <dd class="text-neutral-600">
              <p v-for="h in SITE.openingHours" :key="h.days">{{ h.days }}：{{ h.time }}</p>
            </dd>
          </div>
        </dl>
        <div class="mt-6 flex flex-wrap gap-3">
          <a :href="SITE.mapsDirectionsUrl" target="_blank" rel="noopener" class="btn-primary">
            導航到店
          </a>
          <LineButton />
        </div>
      </div>
    </section>

    <!-- Local flavour: 大甲鎮瀾宮 商圈 -->
    <figure class="mt-10 overflow-hidden rounded-2xl shadow-sm">
      <div class="h-56 sm:h-72">
        <PlaceholderImage src="/images/landmark.jpg" alt="大甲鎮瀾宮 國際點心站" />
      </div>
      <figcaption class="bg-white/60 px-5 py-3 text-sm text-neutral-600">
        座落大甲，鵝香飄過鎮瀾宮商圈 — 假日清晨現烤，售完為止。
      </figcaption>
    </figure>

    <!-- FAQ -->
    <section class="mt-16">
      <SectionHeading title="常見問題" />
      <FaqAccordion :items="FAQ" />
    </section>
  </div>
</template>
