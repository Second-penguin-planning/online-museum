// src/data/campoCollection.ts
// 「カンポ・デ・クリプターナ特別コレクション」ページ用データ。
// 絵画画像と現地取材写真を並べて比較し、作品ごとに Impresión（インパクト）・
// Técnica（技能）・Historia（物語・現地の聞き取りに基づく解説）の3要素評価を掲載する。
//
// 注記: fieldPhoto（現地取材写真）と historia（物語）は、2026年9〜11月に予定される
// カンポ・デ・クリプターナ現地取材の結果をもって順次追加する。現時点では絵画画像のみ
// 確定している作品を掲載し、未取材の項目は明示的に「取材後追加予定」と表示する。
// impresion / tecnica の文章も学芸員による正式な評（キュレーション文）に差し替え予定の
// 草稿である。

export type Lang = 'ja' | 'en' | 'sp';
export type CampoCategory = 'molino' | 'calle' | 'puerta';

export interface CampoCollectionItem {
  id: string;
  category: CampoCategory;
  /** src/data/artworks.json の file 名。public/gallery/ 配下の絵画画像。 */
  paintingImage: string | null;
  /** 現地取材写真のファイル名（public/gallery/campo/ 想定）。未取材の場合は null。 */
  fieldPhoto: string | null;
  title: Record<Lang, string>;
  impresion: Record<Lang, string>;
  tecnica: Record<Lang, string>;
  historia: Record<Lang, string>;
}

export const campoCategoryOrder: CampoCategory[] = ['molino', 'calle', 'puerta'];

export const campoCategoryLabels: Record<Lang, Record<CampoCategory, string>> = {
  ja: {
    molino: '風車（Molinos）',
    calle: '街並み（Calles）',
    puerta: '扉と窓（Puertas y Ventanas）',
  },
  en: {
    molino: 'Windmills (Molinos)',
    calle: 'Streets (Calles)',
    puerta: 'Doors & Windows (Puertas y Ventanas)',
  },
  sp: {
    molino: 'Molinos',
    calle: 'Calles',
    puerta: 'Puertas y Ventanas',
  },
};

export const campoCollectionItems: CampoCollectionItem[] = [
  {
    id: 'calle-01008',
    category: 'calle',
    paintingImage: '01008.jpg',
    fieldPhoto: null,
    title: {
      ja: 'カンポ　坂の街並み 1',
      en: 'Campo, Sloping Street 1',
      sp: 'Campo, Calle en Pendiente 1',
    },
    impresion: {
      ja: '風車の丘へと続く坂道の街並みを、光と影の強いコントラストで描く。画面奥へと視線を誘う構図が、訪れる者が丘を登っていく感覚をそのまま伝える。',
      en: 'A sloping street rising toward the windmill hill, painted in strong contrasts of light and shadow. The composition draws the eye deep into the frame, echoing the sensation of climbing toward the mill hill oneself.',
      sp: 'Una calle en pendiente que asciende hacia la colina de los molinos, pintada con fuertes contrastes de luz y sombra. La composición atrae la mirada hacia el fondo, transmitiendo la sensación de subir uno mismo hacia la colina.',
    },
    tecnica: {
      ja: '油彩・30号。厚塗りと薄塗りを使い分け、白壁の反射光と石畳の質感を対比させている。',
      en: 'Oil on canvas, No. 30. Thick and thin layers of paint are used side by side, contrasting the reflected light off the white walls with the texture of the cobblestones.',
      sp: 'Óleo sobre lienzo, nº 30. Se combinan capas de pintura espesa y fina, contrastando la luz reflejada en las paredes blancas con la textura del empedrado.',
    },
    historia: {
      ja: '現地取材後、このアングルで実際に撮影した写真と証言をもとに追記予定。',
      en: 'To be completed after the field research trip, based on a photograph taken from this same vantage point and on-site testimony.',
      sp: 'Se completará tras el viaje de investigación in situ, con una fotografía tomada desde este mismo punto de vista y testimonios recogidos allí.',
    },
  },
  {
    id: 'puerta-01007',
    category: 'puerta',
    paintingImage: '01007.jpg',
    fieldPhoto: null,
    title: {
      ja: 'カンポ　家のドア 1',
      en: 'Campo, House Door 1',
      sp: 'Campo, Puerta de la Casa 1',
    },
    impresion: {
      ja: '一軒一軒異なる表情を持つ扉を、静物のように正面から捉える。人の気配は描かれていないが、扉そのものが住まう人の暮らしを物語る。',
      en: "A door, each one with its own distinct character, captured frontally like a still life. No figure appears, yet the door itself speaks of the life of whoever lives behind it.",
      sp: 'Una puerta, cada una con un carácter propio, captada de frente como una naturaleza muerta. No aparece ninguna figura, pero la propia puerta habla de la vida de quien habita detrás de ella.',
    },
    tecnica: {
      ja: '油彩・20号。色褪せた塗装の重なりを何層ものグレーズで表現し、経年変化を丁寧に描き込んでいる。',
      en: 'Oil on canvas, No. 20. The layered, weathered paintwork is built up through many glazes, carefully rendering the effects of age.',
      sp: 'Óleo sobre lienzo, nº 20. El desgaste de la pintura se construye mediante numerosos veladuras, representando con cuidado el paso del tiempo.',
    },
    historia: {
      ja: '現地取材後、このアングルで実際に撮影した写真と証言をもとに追記予定。',
      en: 'To be completed after the field research trip, based on a photograph taken from this same vantage point and on-site testimony.',
      sp: 'Se completará tras el viaje de investigación in situ, con una fotografía tomada desde este mismo punto de vista y testimonios recogidos allí.',
    },
  },
  {
    id: 'molino-pendiente',
    category: 'molino',
    paintingImage: null,
    fieldPhoto: null,
    title: {
      ja: '風車（作品選定中）',
      en: 'Windmill (work to be selected)',
      sp: 'Molino (obra por seleccionar)',
    },
    impresion: {
      ja: '風車を主題とした作品画像は、現在デジタル化・選定作業中。',
      en: 'A painting for this category is currently being digitized and selected.',
      sp: 'Actualmente se está digitalizando y seleccionando una obra para esta categoría.',
    },
    tecnica: {
      ja: '—',
      en: '—',
      sp: '—',
    },
    historia: {
      ja: '現地取材後、このアングルで実際に撮影した写真と証言をもとに追記予定。',
      en: 'To be completed after the field research trip, based on a photograph taken from this same vantage point and on-site testimony.',
      sp: 'Se completará tras el viaje de investigación in situ, con una fotografía tomada desde este mismo punto de vista y testimonios recogidos allí.',
    },
  },
];

export interface CampoCollectionContent {
  metaTitle: string;
  metaDescription: string;
  navTitle: string;
  title: string;
  subtitle: string;
  lead: string[];
  filterAll: string;
  countTemplate: string;
  paintingLabel: string;
  fieldPhotoLabel: string;
  toggleHint: string;
  pendingPhotoNotice: string;
  pendingWorkNotice: string;
  evalLabels: { impresion: string; tecnica: string; historia: string };
  closeLabel: string;
  openLabel: string;
}

export const campoCollectionContent: Record<Lang, CampoCollectionContent> = {
  ja: {
    metaTitle: 'カンポ・デ・クリプターナ特別コレクション — 德永アートミュージアム',
    metaDescription: '風車・街並み・扉と窓——絵画と現地取材写真を見比べながら、作品ごとのインパクト・技能・物語をたどる特別コレクション',
    navTitle: '特別コレクション',
    title: 'カンポ・デ・クリプターナ特別コレクション',
    subtitle: '絵画 × 現地取材写真 — 風車・街並み・扉と窓',
    lead: [
      '徳永卓磨が40年以上にわたり通い続けたスペイン・カンポ・デ・クリプターナ。この特別コレクションでは、現地で描かれた絵画と、現地取材で撮影した実際の風景写真を並べて比較しながら、それぞれの作品が持つ「①インパクト（Impresión）」「②技能（Técnica）」「③物語（Historia）」を紹介する。',
      '現地取材写真および物語（Historia）は、2026年9〜11月に予定されている現地取材の結果をもって順次公開する。',
    ],
    filterAll: 'すべて',
    countTemplate: '{n}点',
    paintingLabel: '絵画',
    fieldPhotoLabel: '現地取材写真',
    toggleHint: 'タップして絵画 ⇄ 現地写真を切り替え',
    pendingPhotoNotice: '現地取材写真は取材後に追加予定です',
    pendingWorkNotice: '作品画像は選定・デジタル化作業中です',
    evalLabels: { impresion: 'Impresión（インパクト）', tecnica: 'Técnica（技能）', historia: 'Historia（物語）' },
    closeLabel: '閉じる',
    openLabel: '詳細を見る',
  },
  en: {
    metaTitle: 'Campo de Criptana Special Collection — Tokunaga Art Museum',
    metaDescription: 'Windmills, streets, doors and windows — a special collection comparing paintings with on-site research photographs, work by work, through Impact, Skill, and Story',
    navTitle: 'Special Collection',
    title: 'Campo de Criptana Special Collection',
    subtitle: 'Paintings × On-Site Research Photographs — Windmills, Streets, Doors & Windows',
    lead: [
      'Takuma Tokunaga returned to Campo de Criptana, Spain, for more than forty years. This special collection places each painting made there side by side with a photograph taken during on-site research, introducing the "Impresión" (impact), "Técnica" (skill), and "Historia" (story) behind each work.',
      'Field photographs and stories (Historia) will be added progressively following the on-site research trip planned for September–November 2026.',
    ],
    filterAll: 'All',
    countTemplate: '{n} works',
    paintingLabel: 'Painting',
    fieldPhotoLabel: 'On-Site Photo',
    toggleHint: 'Tap to switch between painting and on-site photo',
    pendingPhotoNotice: 'The on-site photograph will be added after the research trip',
    pendingWorkNotice: 'A painting for this entry is still being selected and digitized',
    evalLabels: { impresion: 'Impresión (Impact)', tecnica: 'Técnica (Skill)', historia: 'Historia (Story)' },
    closeLabel: 'Close',
    openLabel: 'View details',
  },
  sp: {
    metaTitle: 'Colección Especial de Campo de Criptana — Museo de Arte Tokunaga',
    metaDescription: 'Molinos, calles, puertas y ventanas — una colección especial que compara cada cuadro con una fotografía tomada in situ, a través de su Impresión, Técnica e Historia',
    navTitle: 'Colección Especial',
    title: 'Colección Especial de Campo de Criptana',
    subtitle: 'Pinturas × Fotografías in situ — Molinos, Calles, Puertas y Ventanas',
    lead: [
      'Takuma Tokunaga regresó a Campo de Criptana, España, durante más de cuarenta años. Esta colección especial coloca cada cuadro realizado allí junto a una fotografía tomada durante la investigación in situ, presentando la Impresión, la Técnica y la Historia de cada obra.',
      'Las fotografías in situ y las historias se irán añadiendo progresivamente tras el viaje de investigación previsto para septiembre–noviembre de 2026.',
    ],
    filterAll: 'Todas',
    countTemplate: '{n} obras',
    paintingLabel: 'Pintura',
    fieldPhotoLabel: 'Foto in situ',
    toggleHint: 'Toca para alternar entre la pintura y la foto in situ',
    pendingPhotoNotice: 'La fotografía in situ se añadirá tras el viaje de investigación',
    pendingWorkNotice: 'Todavía se está seleccionando y digitalizando una obra para esta entrada',
    evalLabels: { impresion: 'Impresión', tecnica: 'Técnica', historia: 'Historia' },
    closeLabel: 'Cerrar',
    openLabel: 'Ver detalles',
  },
};
