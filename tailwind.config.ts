import type { Config } from 'tailwindcss'

// Design tokens — source of truth: docs/design-spec.md §2.1
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // 主色 琥珀紅 — roast-goose skin
        goose: {
          DEFAULT: '#A62C2B',
          deep: '#8B0000',
        },
        // 輔助色 冠軍金 — award badges & key buttons
        gold: {
          DEFAULT: '#D4AF37',
        },
        // 背景色 象牙白／淺暖灰
        cream: {
          DEFAULT: '#FCF9F2',
        },
        // LINE brand green — for the O2O CTA
        line: {
          DEFAULT: '#06C755',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'serif'],
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
    },
  },
}
