export const ui = {
  ja: {
    title:          '德永アートミュージアム',
    headerTitle:    'TOKUNAGA ART MUSEUM',
    enter:          '入　館　す　る',
    roomSelect:     'ギャラリーを選ぶ',
    backTop:        'トップへ戻る',
    scrollHint:     'SCROLL TO EXPLORE',
    navShop:        'ショップ',
    navStorage:     '所蔵庫',
    navScores:      '楽譜',
    alertShop:      'ショップは準備中です',
    alertPreparing: 'このギャラリーは準備中です',
  },
  en: {
    title:          'Tokunaga Art Museum',
    headerTitle:    'TOKUNAGA ART MUSEUM',
    enter:          'Enter the Museum',
    roomSelect:     'Select a Room',
    backTop:        'Back to Top',
    scrollHint:     'SCROLL TO EXPLORE',
    navShop:        'Shop',
    navStorage:     'Storage',
    navScores:      'Scores',
    alertShop:      'The shop is coming soon.',
    alertPreparing: 'This room is under preparation.',
  },
  sp: {
    title:          'Museo de Arte Tokunaga',
    headerTitle:    'TOKUNAGA ART MUSEUM',
    enter:          'Entrar al Museo',
    roomSelect:     'Seleccionar sala',
    backTop:        'Volver al inicio',
    scrollHint:     'DESPLÁZATE PARA EXPLORAR',
    navShop:        'Tienda',
    navStorage:     'Archivo',
    navScores:      'Partituras',
    alertShop:      'La tienda está en preparación.',
    alertPreparing: 'Esta sala está en preparación.',
  },
} as const;

export type Lang = keyof typeof ui;

export const rooms = {
  ja: [
    { id: '1', name: '徳永 卓磨',   prefix: '' },
    { id: '2', name: '德永 幸子',   prefix: '' },
    { id: '3', name: '準備中',      prefix: '' },
  ],
  en: [
    { id: '1', name: 'Takuma Tokunaga', prefix: '' },
    { id: '2', name: 'Yukiiko Tokunaga', prefix: '' },
    { id: '3', name: 'Coming Soon',     prefix: '' },
  ],
  sp: [
    { id: '1', name: 'Takuma Tokunaga', prefix: '' },
    { id: '2', name: 'Yukiko Tokunaga', prefix: '' },
    { id: '3', name: 'Próximamente',    prefix: '' },
  ],
} as const;
