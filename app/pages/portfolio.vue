<script setup lang="ts">
import { SITE } from '~/data/site'

useSeoMeta({
  title: '金牌饗宴回顧',
  description: `${SITE.name} 金牌饗宴回顧：大型宴席、尾牙紀實，見證品牌好口碑。純展示。`,
})

// Display-only gallery (design-spec §1): NO booking / enquiry button here.
// TODO: replace placeholders with real banquet / year-end-party photography.
const gallery = [
  { title: '大型尾牙宴', note: '百人席次，金牌燒鵝整隻現斬。' },
  { title: '企業春酒', note: '主廚特製宴席菜色，賓主盡歡。' },
  { title: '社區辦桌', note: '傳統辦桌氣氛，口碑相傳。' },
  { title: '節慶宴席', note: '年節限定，一鵝難求。' },
  { title: '喜慶宴會', note: '重要時刻的餐桌主角。' },
  { title: '媒體採訪紀實', note: '三連霸金牌實力受到關注。' },
]
</script>

<template>
  <div class="container-page py-14">
    <SectionHeading
      title="金牌饗宴回顧"
      subtitle="過往宴席與紀實 · 品牌實力展示（純展示，未開放線上接單）"
    />

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="item in gallery" :key="item.title" class="overflow-hidden rounded-2xl bg-white/60 shadow-sm">
        <!-- TODO: real event photo. -->
        <div class="h-44 bg-gradient-to-br from-goose/30 to-gold/25" aria-hidden="true" />
        <div class="p-4">
          <h3 class="font-semibold text-neutral-800">{{ item.title }}</h3>
          <p class="mt-1 text-sm text-neutral-600">{{ item.note }}</p>
        </div>
      </li>
    </ul>

    <p class="mt-10 text-center text-sm text-neutral-500">
      本頁為品牌實績展示，未開放線上宴席預約。相關洽詢請透過 LINE 官方帳號。
    </p>
  </div>
</template>
