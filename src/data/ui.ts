export const ui = {
  ja: {
    title: "德永デジタル美術館",
    headerTitle: "德永卓磨と幸子の絵画をご覧ください",
    enter: "― 入　館 ―",
    roomSelect: "展示室を選択",
    backTop: "← TOPへ戻る",
    scrollHint: "← 左右にスクロール →",
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
    alertSummary: "La página de resumen está en construcción.",
    alertShop: "La tienda está en construcción.",
    alertPreparing: "Actualmente en preparación."
  }
};

// 展示室の名前も翻訳対応
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
