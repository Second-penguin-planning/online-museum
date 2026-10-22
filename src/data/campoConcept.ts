// src/data/campoConcept.ts
// トップページ Hero 直下に掲載する「カンポ・デ・クリプターナ構想」セクション用データ。
// スペインの現地関係者（アンドレア氏、市職員）への提示を想定し、父・徳永卓磨の
// カンポ・デ・クリプターナへの想いと、コレクションの将来構想を伝える短文。
//
// 【要レビュー】ここに記載する「寄贈構想」の具体的な文言（対象作品の範囲、時期、
// 条件など）は家族・関係者による正式な確認が済んでいない草稿です。現地の市職員に
// 提示する前に、必ず内容を確認・修正してください。

export type Lang = 'ja' | 'en' | 'sp';

export interface CampoConceptContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: string;
}

export const campoConceptContent: Record<Lang, CampoConceptContent> = {
  ja: {
    eyebrow: 'PROYECTO CAMPO DE CRIPTANA',
    title: 'カンポ・デ・クリプターナへの想い',
    paragraphs: [
      '徳永卓磨は1973年から50年以上、ほぼ毎年夏にカンポ・デ・クリプターナを訪れ、風車や街並み、町の人々を描いてきました。妻・幸子も、のちに一緒に通うようになりました。二人にとって、この町はもう一つの故郷です。',
      '私たち家族は、この長年の縁を記録し伝えるとともに、カンポ・デ・クリプターナで生まれた作品群を、いずれこの町の方々と分かち合える形にしたいと考えています。本コレクションはその第一歩として、絵画と現地の記憶を照らし合わせながら紹介するものです。',
      '※ この構想は現在検討中の草案です。具体的な形については、今後アンドレア氏をはじめ現地の皆様と相談しながら定めていきたいと考えています。',
    ],
    cta: 'カンポ・デ・クリプターナ特別コレクションを見る →',
  },
  en: {
    eyebrow: 'PROYECTO CAMPO DE CRIPTANA',
    title: 'A Bond with Campo de Criptana',
    paragraphs: [
      'Takuma Tokunaga has visited Campo de Criptana almost every summer since 1973, for more than fifty years, painting its windmills, its streets and its people. His wife, Yukiko, later began to travel there with him. For both of them, the town is a second home.',
      "Our family hopes not only to record and pass on this long bond, but eventually to share the body of work created in Campo de Criptana with the people of the town itself. This collection is a first step in that direction, presenting each painting alongside the memories tied to it.",
      "Note: this is a concept still under discussion within our family. We would like to work out the concrete details together with Andrea and others in the town going forward.",
    ],
    cta: 'View the Campo de Criptana Special Collection →',
  },
  sp: {
    eyebrow: 'PROYECTO CAMPO DE CRIPTANA',
    title: 'Un vínculo con Campo de Criptana',
    paragraphs: [
      'Takuma Tokunaga visita Campo de Criptana casi todos los veranos desde 1973, desde hace más de cincuenta años, y pinta sus molinos, sus calles y a su gente. Su esposa, Yukiko, empezó más tarde a acompañarle. Para los dos, el pueblo es un segundo hogar.',
      'Nuestra familia desea no solo registrar y transmitir este vínculo de tantos años, sino también, con el tiempo, compartir con la gente del propio pueblo el conjunto de obras nacidas en Campo de Criptana. Esta colección es un primer paso en esa dirección, presentando cada cuadro junto con los recuerdos que lo acompañan.',
      'Nota: esta es todavía una idea en fase de estudio dentro de la familia. Nos gustaría concretar los detalles junto con Andrea y con las demás personas del pueblo en los próximos pasos.',
    ],
    cta: 'Ver la Colección Especial de Campo de Criptana →',
  },
};
