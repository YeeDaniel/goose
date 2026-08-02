<script setup lang="ts">
import { SITE } from '~/data/site'
import { FAQ } from '~/data/faq'

useSeoMeta({
  title: '台中大甲店址 · 營業時間與常見問題',
  description: `${SITE.fullName}地址：${SITE.address.region}${SITE.address.locality}${SITE.address.street}，${SITE.landmark}旁。營業時間週六、週日 07:00–12:00，售完為止。台中海線金牌燒鵝，僅提供外帶自取，恕不內用與宅配。`,
})

// FAQPage structured data (dev-spec §3.2) — includes the required no-delivery QA.
useFaqJsonLd(FAQ)
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading
      title="服務據點與常見問題"
      :subtitle="`${SITE.address.region}${SITE.address.locality}${SITE.address.street} · ${SITE.landmark}旁 · 外帶自取`"
    />

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
            <dd>
              <!-- tel: so phones dial straight from the page. -->
              <a
                :href="`tel:${SITE.phoneE164}`"
                class="inline-flex min-h-touch items-center text-goose underline-offset-4 hover:underline"
              >
                {{ SITE.phone }}
              </a>
            </dd>
          </div>
          <div>
            <dt class="font-semibold text-neutral-800">營業時間</dt>
            <dd class="text-neutral-600">
              <p v-for="h in SITE.openingHours" :key="h.days">{{ h.days }}：{{ h.time }}</p>
            </dd>
          </div>
        </dl>
        <div class="mt-6 flex flex-wrap gap-3">
          <a :href="SITE.mapsDirectionsUrl" target="_blank" rel="noopener" class="btn-ghost">
            導航到店
          </a>
          <LineButton />
        </div>
      </div>
    </section>

    <!-- Local flavour: 大甲鎮瀾宮 商圈 -->
    <figure class="mt-10 grid items-center gap-6 rounded-2xl bg-white/60 p-5 shadow-sm sm:grid-cols-2">
      <div class="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-xl">
        <PlaceholderImage src="/images/landmark.jpg" alt="大甲鎮瀾宮商圈 鵝邸家現烤燒鵝" />
      </div>
      <figcaption>
        <h3 class="font-serif text-lg font-bold text-goose">就在大甲鎮瀾宮商圈</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-600">
          鵝邸家座落大甲，鵝香飄過鎮瀾宮商圈。假日清晨現烤、現斬，皮脆油亮，售完為止。
          建議先透過 LINE 預訂，到店取餐免久候。
        </p>
      </figcaption>
    </figure>

    <!-- FAQ -->
    <section class="mt-16">
      <SectionHeading title="常見問題" />
      <FaqAccordion :items="FAQ" />
    </section>
  </div>
</template>
