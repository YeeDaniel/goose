// Digital menu — categorized. Source of truth: docs/design-spec.md §1 (美味菜單).
// Feeds both the Menu page and the MenuItem JSON-LD schema (docs/dev-spec.md §3.1).
// Real items & prices confirmed by owner.

export interface Dish {
  name: string
  description: string
  /** New Taiwan Dollar. */
  price?: number
  /** Unit the price applies to, e.g. '半隻' / '一斤' / '3隻' / '盒' / '包'. */
  unit?: string
  signature?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  dishes: Dish[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'roast-goose',
    name: '金牌燒鵝',
    dishes: [
      {
        name: '金牌燒鵝（半隻）',
        description: '2023-2025 連續三年金牌，皮脆肉嫩、油亮多汁，剛出爐風味最佳。',
        price: 850,
        unit: '半隻',
        signature: true,
      },
      {
        name: '金牌燒鵝（整隻）',
        description: '宴客首選，整隻現斬，適合多人分享。',
        price: 1600,
        unit: '整隻',
        signature: true,
      },
    ],
  },
  {
    id: 'char-siu',
    name: '叉燒',
    dishes: [
      {
        name: '蜜汁叉燒',
        description: '外緣焦香、內裡軟嫩，鹹甜入味。',
        price: 450,
        unit: '一斤',
        signature: true,
      },
    ],
  },
  {
    id: 'braised',
    name: '滷水類',
    dishes: [
      { name: '滷水鵝翅', description: '滷汁慢浸入味，膠質豐富。', price: 110, unit: '3 隻' },
      { name: '滷水鴨翅', description: '骨邊肉軟嫩，越啃越香。', price: 110, unit: '4 隻' },
      { name: '綜合拼盤（鵝胗＋鵝肝）', description: '鵝胗脆彈、鵝肝綿密，一次雙享。', price: 100, unit: '盒' },
      { name: '滷筍絲', description: '吸附滷香的爽口筍絲，解膩配菜。', price: 50, unit: '包' },
    ],
  },
]
