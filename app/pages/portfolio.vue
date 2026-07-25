<script setup lang="ts">
import { SITE } from '~/data/site'

useSeoMeta({
  title: '金牌饗宴回顧',
  description: `${SITE.name} 金牌饗宴回顧：大型宴席、尾牙紀實，見證品牌好口碑。純展示。`,
})

// Display-only gallery (design-spec §1): NO booking / enquiry button here.
// TODO: replace placeholders with real banquet / year-end-party photography.
const highlights = [
  { title: '大型尾牙宴', note: '百人席次，金牌燒鵝整隻現斬，宴席規模一次到位。' },
  { title: '企業春酒', note: '主廚特製宴席菜色，港式燒味撐場，賓主盡歡。' },
  { title: '社區辦桌', note: '傳統辦桌氣氛，一桌接一桌，口碑就是這樣相傳。' },
  { title: '節慶宴席', note: '年節限定檔期，一鵝難求，老顧客提前預訂。' },
  { title: '喜慶宴會', note: '重要時刻的餐桌主角，為場合加分。' },
  { title: '媒體採訪紀實', note: '三連霸金牌實力，受到在地媒體關注報導。' },
]
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading
      title="金牌饗宴回顧"
      subtitle="過往宴席與紀實 · 品牌實力展示（純展示，未開放線上接單）"
    />

    <!-- Intro copy so the page isn't just a bare gallery. -->
    <p class="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-neutral-600">
      從社區辦桌到百人尾牙，鵝邸家的金牌燒鵝端上過無數重要場合。
      這裡收錄過往宴席與活動紀實，側面見證 {{ SITE.chef }} 主廚十年匠心累積的好口碑——
      不對外線上接單，純粹分享這一路走來的實績。
    </p>

    <ul class="grid gap-6 md:grid-cols-2">
      <li v-for="item in highlights" :key="item.title" class="overflow-hidden rounded-2xl bg-white/60 shadow-sm">
        <div class="h-56">
          <PlaceholderImage variant="goose" :label="item.title" :pending="true" />
        </div>
        <div class="p-5">
          <h3 class="font-serif text-lg font-bold text-goose">{{ item.title }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ item.note }}</p>
        </div>
      </li>
    </ul>

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
