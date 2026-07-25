import type { Config } from 'tailwindcss'

// Design tokens — source of truth: docs/design-spec.md §2.1
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // 主色 琥珀紅 — roast-goose skin (lightened warm amber-red)
        goose: {
          DEFAULT: '#B23A2B',
          deep: '#8B1E17',
        },
        // 輔助色 冠軍金 — accent only (badges, ★, dividers)
        gold: {
          DEFAULT: '#D4AF37',
        },
        // 背景色 象牙白／淺暖灰
        cream: {
          DEFAULT: '#FCF9F2',
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
