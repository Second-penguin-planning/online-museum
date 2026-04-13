// ✨ ここに export をつけます
export const ui = {
  ja: {
    title: "德永デジタル美術館",
    headerTitle: "德永卓磨と幸子の絵画をご覧ください",
    enter: "― 入　館 ―",
    roomSelect: "展示室を選択",
    backTop: "← TOPへ戻る",
    scrollHint: "← 左右にスクロール →",
    navAbout: "About",
    navShop: "Shop",
    alertSummary: "概要ページは準備中です。",
    alertShop: "商品販売ページは準備中です。",
    alertPreparing: "現在整理中です。"
  },
  en: {
    title: "Tokunaga Digital Museum",
    headerTitle: "Enjoy the paintings by Takuma and Sachiko Tokunaga",
    enter: "― ENTER ―",
    roomSelect: "Select a Room",
    backTop: "← Back to TOP",
    scrollHint: "← Scroll Left/Right →",
    navAbout: "About",
    navShop: "Shop",
    alertSummary: "The overview page is under construction.",
    alertShop: "The shop page is under construction.",
    alertPreparing: "Currently under preparation."
  },
  sp: {
    title: "Museo Digital Tokunaga",
    headerTitle: "Disfruta de las pinturas de Takuma y Sachiko Tokunaga",
    enter: "― ENTRAR ―",
    roomSelect: "Seleccionar Sala",
    backTop: "← Volver al INICIO",
    scrollHint: "← Desplazar Izq/Der →",
    navAbout: "Acerca de",
    navShop: "Tienda",
    alertSummary: "La página de resumen está en construcción.",
    alertShop: "La tienda está en construcción.",
    alertPreparing: "Actualmente en preparación."
  }
};

// 展示室の名前も翻訳対応（こちらはexportがついていて完璧です！）
export const rooms = {
  ja: [
    { id: 1, prefix: '１）', name: '異人館' },
    { id: 2, prefix: '２）', name: 'ラ・マンチャ' },
    // ...
  ],
  en: [
    { id: 1, prefix: '1) ', name: 'Ijinkan' },
    { id: 2, prefix: '2) ', name: 'La Mancha' },
    // ...
  ],
  sp: [
    { id: 1, prefix: '1) ', name: 'Casa Extranjera' },
    { id: 2, prefix: '2) ', name: 'La Mancha' },
    // ...
  ]
};
// ui.ts の各言語オブジェクトに追加
ja: {
  // ...既存のキー...
  navStorage: '保管庫',
  storageTitle: '保管庫',
},
en: {
  // ...既存のキー...
  navStorage: 'Storage',
  storageTitle: 'Storage',
},
sp: {
  // ...既存のキー...
  navStorage: 'Archivo',
  storageTitle: 'Archivo',
},
