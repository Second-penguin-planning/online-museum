// src/data/campoHistory.ts
// 「カンポ・デ・クリプターナ特別コレクション」内、沿革（年表）と主要人物の証言セクション用データ。
//
// 出典: すべて src/data/campoDeCriptana.ts（2017年展に際して寄せられた4篇の寄稿文の全訳）
// および src/data/campoNotes.ts（徳永卓磨自身が書き残した現地の記録）に既にある内容の
// 再構成・引用であり、新規の取材や創作は含まない。
// 引用（quote）はいずれも campoDeCriptana.ts の既存訳文からの逐語抜粋。
//
// 年表の年代は、原資料に明記されている年（1973年・2017年）以外は「◯年代」「複数回」など
// 幅を持たせた表記とし、原資料にない具体的な年を新たに創作しないよう配慮している。
// 主要人物とのQ&A形式インタビューは、2026年9〜11月に予定される現地取材の実施後に
// 追加する（本ページでは未実施）。

export type Lang = 'ja' | 'en' | 'sp';

export interface TimelineEntry {
  year: string;
  text: Record<Lang, string>;
}

export const campoTimeline: TimelineEntry[] = [
  {
    year: '1973',
    text: {
      ja: '徳永卓磨、列車の窓から風車を発見し、カンポ・デ・クリプターナを初めて訪れる。宿「バル・デ・ロス・モリノス」に投宿し、女将カルメンとヴィセンテ父子と出会う。',
      en: "Takuma Tokunaga discovers the windmills from a train window and visits Campo de Criptana for the first time. He lodges at the inn Bar de los Molinos, where he meets innkeeper Carmen and the father-and-son pair, Vicente.",
      sp: 'Takuma Tokunaga descubre los molinos desde la ventanilla de un tren y visita Campo de Criptana por primera vez. Se aloja en la posada Bar de los Molinos, donde conoce a la posadera Carmen y a Vicente, padre e hijo.',
    },
  },
  {
    year: '1970年代',
    text: {
      ja: '地元の画家フランシスコ・バルブエナと出会い、「クエバス・デ・ラ・パストーラ・マルセラ」やラス・ムサスで親交を結ぶ。',
      en: 'He meets the local painter Francisco Valbuena, forging a friendship at the Cuevas de la Pastora Marcela and at Las Musas.',
      sp: 'Conoce al pintor local Francisco Valbuena, forjando una amistad en las Cuevas de la Pastora Marcela y en Las Musas.',
    },
  },
  {
    year: '複数回にわたり',
    text: {
      ja: '妻・幸子が同行するようになり、寄稿文の一つによれば、これまでに13回にわたり共にカンポを訪れている。',
      en: 'His wife Yukiko begins accompanying him; according to one of the contributed essays, she has joined him on the trip as many as thirteen times.',
      sp: 'Su esposa Yukiko comienza a acompañarlo; según uno de los textos recogidos, lo ha acompañado en hasta trece ocasiones.',
    },
  },
  {
    year: '2度にわたり',
    text: {
      ja: '徳永卓磨・幸子の現地での記録によれば、皇太子ゆかりの展覧会がカンポ・デ・クリプターナでこれまでに2度開催されている。2度目は日本・スペイン修好150周年を記念したもの。',
      en: "According to Takuma and Yukiko's own field notes, an exhibition connected to the Crown Prince has been held in Campo de Criptana on two occasions; the second marked the 150th anniversary of Japan–Spain friendship.",
      sp: 'Según las propias notas de campo de Takuma y Yukiko, en Campo de Criptana se ha celebrado en dos ocasiones una exposición relacionada con el Príncipe heredero; la segunda, con motivo del 150.º aniversario de la amistad entre Japón y España.',
    },
  },
  {
    year: '2017',
    text: {
      ja: '「ムセオ・エル・ポシト」にて、卓磨の来訪45周年を記念した展覧会を開催。町長アントニオ・ルカス＝トレス氏、アンドレス・エスクリバーノ氏とミゲル・アンヘル・メジャード氏、ミゲル・バルブエナ氏がそれぞれ寄稿文を寄せた。',
      en: "An exhibition marking the 45th anniversary of Takuma's visits is held at the Museo \"El Pósito.\" Mayor Antonio Lucas-Torres, Andrés Escribano with Miguel Ángel Mellado, and Miguel Valbuena each contribute a written text.",
      sp: 'Se celebra en el Museo "El Pósito" una exposición con motivo del 45.º aniversario de las visitas de Takuma. El alcalde Antonio Lucas-Torres, Andrés Escribano junto con Miguel Ángel Mellado, y Miguel Valbuena aportan sendos textos.',
    },
  },
  {
    year: '2026年9〜11月（予定）',
    text: {
      ja: 'カンポ・デ・クリプターナへの現地取材を予定。現地の方々への聞き取り、絵画作品と現地風景の比較撮影を行い、本コレクションに順次反映する。',
      en: 'A research trip to Campo de Criptana is planned. On-site interviews and comparison photography between the paintings and their real-life settings will be carried out and added to this collection progressively.',
      sp: 'Se planea un viaje de investigación a Campo de Criptana. Se realizarán entrevistas in situ y fotografías comparativas entre los cuadros y sus escenarios reales, que se irán incorporando a esta colección.',
    },
  },
];

export interface CampoFigure {
  id: string;
  name: Record<Lang, string>;
  role: Record<Lang, string>;
  badge?: Record<Lang, string>;
  /** campoNotes.ts の人物紹介からの記述 */
  blurb?: Record<Lang, string>;
  /** campoDeCriptana.ts の寄稿文からの逐語抜粋 */
  quote?: Record<Lang, string>;
  /** 引用元記事へのアンカー（campo-de-criptana.astro 内） */
  articleAnchor?: string;
}

export const campoFigures: CampoFigure[] = [
  {
    id: 'alcalde',
    name: {
      ja: 'アントニオ・ルカス＝トレス・ロペス＝カセーロ',
      en: 'Antonio Lucas-Torres López-Casero',
      sp: 'Antonio Lucas-Torres López-Casero',
    },
    role: {
      ja: 'カンポ・デ・クリプターナ町長',
      en: 'Mayor of Campo de Criptana',
      sp: 'Alcalde de Campo de Criptana',
    },
    quote: {
      ja: '両芸術家は1970年代から毎夏私たちを訪れ、カンポ・デ・クリプターナを第二の故郷とし、私たちの風景を彼らの作品の主人公へと変えてきました。',
      en: 'These artists have made Campo de Criptana their second home, visiting us every summer since the 1970s and making our landscapes the protagonists of their works.',
      sp: 'Estos artistas han hecho de Campo de Criptana su segunda casa visitándonos desde la década de los 70 cada verano y haciendo que nuestros paisajes se conviertan en protagonistas de sus obras.',
    },
    articleAnchor: 'campo-article-1',
  },
  {
    id: 'andres',
    name: { ja: 'アンドレス・エスクリバーノ', en: 'Andrés Escribano', sp: 'Andrés Escribano' },
    role: {
      ja: '町立「文化の家」元館長',
      en: 'Former Director of the Municipal House of Culture',
      sp: 'Antiguo director de la Casa Municipal de Cultura',
    },
    blurb: {
      ja: 'カンポでの展覧会を全面的に支えてくれた中心人物。',
      en: "The central figure who gave full support to the artists' exhibition in Campo.",
      sp: 'La figura central que dio pleno apoyo a la exposición de los artistas en Campo.',
    },
    quote: {
      ja: '日本の絵画教授である卓磨は、思いがけずカルメン、ヴィセンテ、アルフォンサの家を「ラ・マンチャのパゴダ（仏塔）」に変え、45年前から毎夏そこへとやって来ます。',
      en: 'Takuma, a Japanese painting professor, unexpectedly transformed the house of Carmen, Vicente, and Alfonsa into his Manchegan pagoda, and he has returned there every summer for 45 years.',
      sp: 'Takuma, profesor japonés de pintura, inesperadamente convirtió la casa de Carmen, Vicente y Alfonsa en su pagoda manchega, y ahí llega cada verano desde hace 45 años.',
    },
    articleAnchor: 'campo-article-3',
  },
  {
    id: 'mellado',
    name: { ja: 'ミゲル・アンヘル・メジャード', en: 'Miguel Ángel Mellado', sp: 'Miguel Ángel Mellado' },
    role: {
      ja: 'エル・ムンド紙 元副編集長',
      en: 'Former Deputy Director of El Mundo newspaper',
      sp: 'Exdirector adjunto del diario El Mundo',
    },
    blurb: {
      ja: 'スペイン三大紙の一つ『エル・ムンド（El Mundo）』紙の元編集長。かつて新聞記事で私たちを紹介してくれた。',
      en: 'Former editor of El Mundo, one of Spain’s three major newspapers. He once featured the artists in a newspaper article.',
      sp: 'Exdirector de El Mundo, uno de los tres grandes periódicos de España. En su día les dedicó un artículo.',
    },
    articleAnchor: 'campo-article-3',
  },
  {
    id: 'valbuena',
    name: { ja: 'ミゲル・バルブエナ', en: 'Miguel Valbuena', sp: 'Miguel Valbuena' },
    role: {
      ja: '故フランシスコ・バルブエナの息子',
      en: 'Son of the late Francisco Valbuena',
      sp: 'Hijo del difunto Francisco Valbuena',
    },
    blurb: {
      ja: '父の跡を継ぐように、今も絵を描き続けている。教養が高く、頼りになる存在。',
      en: "As if carrying on his father's path, he still paints today. Highly cultured, and someone the family can always rely on.",
      sp: 'Como continuando el camino de su padre, sigue pintando hoy en día. Muy culto, y alguien con quien siempre se puede contar.',
    },
    quote: {
      ja: 'タクマが初めてクリプターナに来たとき、彼はビセンテとカルメンが当時経営していた小さな宿「バル・デ・ロス・モリノス」に宿泊しました。彼はすぐにみんなに愛されるようになり、結局のところ、彼はあの大きな家族の一員となりました。',
      en: 'Takuma, when he first came to Criptana, settled in the Bar de los Molinos, a small hotel-pension run at that time by Vicente and Carmen. Right away he made himself loved, so much so that in the end he was and is one more of that great family.',
      sp: 'Takuma, cuando vino por primera vez a Criptana, se instaló en el Bar de los Molinos, pequeña pensión hotel que por aquel entonces dirigían Vicente y Carmen. En seguida se hizo querer, tanto que al final era y es uno más de aquella gran familia.',
    },
    articleAnchor: 'campo-article-4',
  },
  {
    id: 'carmen-posadera',
    name: { ja: 'カルメン', en: 'Carmen', sp: 'Carmen' },
    role: { ja: '宿の女将', en: 'The Innkeeper', sp: 'La Posadera' },
    badge: { ja: '故人', en: 'Deceased', sp: 'Fallecida' },
  },
  {
    id: 'francisco-valbuena',
    name: { ja: 'フランシスコ・バルブエナ', en: 'Francisco Valbuena', sp: 'Francisco Valbuena' },
    role: { ja: '現地の画家', en: 'Local Painter', sp: 'Pintor Local' },
    badge: { ja: '故人', en: 'Deceased', sp: 'Fallecido' },
    blurb: {
      ja: '出会いから最期まで、公私にわたり徳永卓磨を支えてくれた。',
      en: 'He supported Takuma, in every way, from the day they met until his last.',
      sp: 'Apoyó a Takuma en todo, desde el día en que se conocieron hasta el final de su vida.',
    },
  },
  {
    id: 'vicente',
    name: { ja: 'ヴィセンテ', en: 'Vicente', sp: 'Vicente' },
    role: { ja: '宿の長男', en: "The Innkeeper's Eldest Son", sp: 'El Hijo Mayor de la Posada' },
    blurb: {
      ja: '14歳で初めて出会って以来、今も変わらず力になってくれている。',
      en: 'He has looked after the family ever since they first met, when he was fourteen, and does so still.',
      sp: 'Ha cuidado de la familia desde que se conocieron, cuando él tenía catorce años, y sigue haciéndolo.',
    },
  },
  {
    id: 'carmen-relative',
    name: { ja: 'カルメン（親戚一同）', en: 'Carmen (a relative of the family)', sp: 'Carmen (familiar de la posadera)' },
    role: { ja: '宿の女将カルメンの親戚', en: "Relative of Carmen the Innkeeper", sp: 'Familiar de Carmen, la posadera' },
    blurb: {
      ja: '幸子の絵にもたびたび描かれ、現地での暮らしの中で最も親しくしてくれた一人。',
      en: "She appears often in Yukiko's paintings, and of everyone the family came to know there, she was the one they grew closest to.",
      sp: 'Aparece muchas veces en los cuadros de Yukiko, y de toda la gente que conocieron allí, fue con quien más se unieron.',
    },
  },
  {
    id: 'takahashi',
    name: { ja: '高橋氏', en: 'Mr. Takahashi', sp: 'Sr. Takahashi' },
    role: { ja: '現地ガイド協力者', en: 'On-Site Guide and Collaborator', sp: 'Colaborador y Guía Local' },
    blurb: {
      ja: 'カンポの風車の丘を日本人団体が訪れる際、ガイド役を買って出てくれる心強い協力者。',
      en: 'A dependable friend who volunteers as a guide whenever a Japanese group visits the windmill hill in Campo.',
      sp: 'Un amigo con quien siempre se puede contar, que se ofrece como guía cada vez que un grupo japonés visita la colina de los molinos en Campo.',
    },
  },
];

export interface CampoHistoryContent {
  historyHeading: string;
  historyIntro: string;
  figuresHeading: string;
  figuresIntro: string;
  readFullText: string;
  interviewPendingNotice: string;
}

export const campoHistoryContent: Record<Lang, CampoHistoryContent> = {
  ja: {
    historyHeading: '沿革',
    historyIntro: '徳永卓磨とカンポ・デ・クリプターナとの関わりを、既存の寄稿文・現地の記録から年表として再構成した。',
    figuresHeading: '主要人物の証言',
    figuresIntro: '2017年の「エル・ポシト美術館」展に際して寄せられた寄稿文、および徳永卓磨自身の現地記録から、カンポでお世話になった方々を紹介する。Q&A形式のインタビューは、2026年9〜11月の現地取材後に別途追加予定。',
    readFullText: '寄稿文の全文を読む →',
    interviewPendingNotice: '本人への聞き取り（インタビュー）は現地取材後に追加予定です。',
  },
  en: {
    historyHeading: 'History',
    historyIntro: "The relationship between Takuma Tokunaga and Campo de Criptana, reconstructed as a timeline from the existing contributed essays and field notes.",
    figuresHeading: 'Voices from Key Figures',
    figuresIntro: 'Drawn from the essays contributed for the 2017 exhibition at the Museo "El Pósito," and from Takuma Tokunaga\'s own field notes, introducing the people who looked after him in Campo. Q&A-style interviews will be added separately after the on-site research trip planned for September–November 2026.',
    readFullText: 'Read the full text →',
    interviewPendingNotice: 'A direct interview with this person will be added after the on-site research trip.',
  },
  sp: {
    historyHeading: 'Historia',
    historyIntro: 'La relación entre Takuma Tokunaga y Campo de Criptana, reconstruida como cronología a partir de los textos ya recopilados y de las notas de campo existentes.',
    figuresHeading: 'Voces de Personas Clave',
    figuresIntro: 'A partir de los textos aportados para la exposición de 2017 en el Museo "El Pósito", y de las propias notas de campo de Takuma Tokunaga, se presenta a las personas que lo acompañaron en Campo. Las entrevistas en formato de preguntas y respuestas se añadirán por separado tras el viaje de investigación previsto para septiembre–noviembre de 2026.',
    readFullText: 'Leer el texto completo →',
    interviewPendingNotice: 'Una entrevista directa con esta persona se añadirá tras el viaje de investigación in situ.',
  },
};
