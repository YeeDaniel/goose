<script setup lang="ts">
import { SITE } from '~/data/site'

useSeoMeta({
  title: '金牌饗宴回顧 · 台中大甲宴席紀實',
  description: `${SITE.fullName}金牌饗宴回顧：台中大甲在地辦桌、大型宴席與尾牙紀實，金牌燒鵝端上無數重要場合。`,
})

// Display-only gallery (design-spec §1): NO booking / enquiry button here.
// TODO: replace placeholders with real banquet / year-end-party photography.
const highlights = [
  { title: '大型宴席', note: '整桌金牌燒鵝現斬上桌，宴席規模一次到位。', img: '/images/event-1.jpg' },
  { title: '澎湃辦桌', note: '主廚特製宴席菜色，港式燒味撐場，賓主盡歡。', img: '/images/event-2.jpg' },
  { title: '廟埕人潮', note: '大甲在地活動，一攤接一攤，口碑就是這樣相傳。', img: '/images/event-3.jpg' },
  { title: '節慶宴席', note: '年節限定檔期，一鵝難求，老顧客提前預訂。', img: '/images/event-4.jpg' },
  { title: '席上主角', note: '金牌燒鵝切盤，重要時刻的餐桌主角。', img: '/images/event-5.jpg' },
  { title: '金牌爭霸舞台', note: '三連霸金牌實力，站上燒鵝爭霸賽舞台。', img: '/images/event-6.jpg' },
]
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading
      :level="1"
      title="金牌饗宴回顧"
      subtitle="過往宴席與紀實 · 品牌實力展示"
    />

    <!-- Intro copy so the page isn't just a bare gallery. -->
    <p class="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-neutral-600">
      從社區辦桌到百人尾牙，鵝邸家的金牌燒鵝端上過無數重要場合。
      這裡收錄過往宴席與活動紀實，側面見證 {{ SITE.chef }} 主廚十年匠心累積的好口碑——
      不對外線上接單，純粹分享這一路走來的實績。
    </p>

    <ul class="grid gap-6 md:grid-cols-2">
      <li v-for="item in highlights" :key="item.title" class="overflow-hidden rounded-2xl bg-white/60 shadow-sm">
        <div class="aspect-[4/3]">
          <PlaceholderImage
            variant="goose"
            :src="item.img"
            :alt="item.title"
            :pending="true"
            sizes="(min-width: 1024px) 484px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div class="p-5">
          <h3 class="text-lg font-bold text-goose">{{ item.title }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ item.note }}</p>
        </div>
      </li>
    </ul>

    <p class="mt-8 text-center">
      <NuxtLink to="/press" class="font-semibold text-goose hover:underline">
        看電視專訪與新聞報導 →
      </NuxtLink>
    </p>

    <!-- Reviews add life to a display-only page. -->
    <div class="mt-16">
      <SectionHeading title="顧客好評" />
      <Testimonials />
    </div>

    <p class="mt-12 text-center text-sm text-neutral-500">
      本頁為品牌實績展示，未開放線上宴席預約。相關洽詢請透過 LINE 官方帳號。
    </p>
  </div>
</template>
