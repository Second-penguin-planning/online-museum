// src/data/philosophy.ts
// 「『白』の哲学」ページ用データ。
// 西洋批評でしばしば指摘される「白が多く、平面的である」という評価に対し、
// 徳永卓磨自身の言葉として、その真の芸術的企図（描き重ねた末に到達する白＝アジア的絵画哲学）を綴る。

export type Lang = 'ja' | 'en' | 'sp';

export interface PhilosophySection {
  heading: string;
  paragraphs: string[];
  pullQuote?: string;
}

export interface PhilosophyComparisonItem {
  label: string;
  text: string;
}

export interface PhilosophyContent {
  metaTitle: string;
  metaDescription: string;
  navTitle: string;
  title: string;
  subtitle: string;
  lead: string[];
  sections: PhilosophySection[]; // expects 3: [flatness/time, east-west+print analogy, campo white]
  comparison: {
    intro: string;
    west: PhilosophyComparisonItem;
    east: PhilosophyComparisonItem;
    etching: PhilosophyComparisonItem;
    woodblock: PhilosophyComparisonItem;
    synthesis: string;
  };
  signature: string;
}

export const philosophyContent: Record<Lang, PhilosophyContent> = {
  ja: {
    metaTitle: '「白」の哲学 — 德永アートミュージアム',
    metaDescription: '描き重ねた末に到達する白。西洋の視線と東洋の還元 — 徳永卓磨の絵画哲学',
    navTitle: '「白」の哲学',
    title: '描き重ねられた「白」の哲学',
    subtitle: '西洋の視線と東洋の還元',
    lead: [
      '以下は、徳永卓磨自身の言葉による、自らの絵画哲学についての省察である。西洋の批評においてしばしば指摘される「白が多く、平面的である」という評に対する応答として、ここに綴られた。',
    ],
    sections: [
      {
        heading: '平面性の誤解と、時間の積層',
        paragraphs: [
          '時に西洋の批評において、私の描く画面の「白さ」や「空間の平坦さ」は、立体感の短縮や簡略化と捉えられることがあります。しかし、それは表面的な結果に過ぎません。',
          '私のキャンバスは、まず徹底的な立体の構築から始まります。形を捉え、光と影の構造を深く描き込んだ後、私は太陽の移動と光の移ろいを追いかけ始めます。刻一刻と変化する光をキャンバスに重ねていくとき、密に描かれた色彩は次第に洗練され、やがて眩いばかりの「白」へと昇華していきます。',
        ],
      },
      {
        heading: '「書き足して白に近づく」— 東洋の視点',
        paragraphs: [
          '西洋画の多くは、影や暗部（黒）を重ねることで世界に立体感と密度を与えていきます。しかし、私の絵画思想の根底にあるのは、「描き足せば描き足すほど、光（白）に近づいていく」というアジア的な絵画哲学です。',
        ],
        pullQuote: '描き足せば描き足すほど、光（白）に近づいていく。',
      },
      {
        heading: 'カンポ・デ・クリプターナの白',
        paragraphs: [
          'ラ・マンチャの強烈な太陽のもと、白い風車や石灰の街並みに向かい合うとき、私が画面に描く「白」は、何も描かれていない余白ではありません。',
          'それは、時間、光、そして風景との対話が何層も積み重なった末に辿り着く、最も雄弁で満たされた「光の還元」なのです。',
        ],
      },
    ],
    comparison: {
      intro: 'これは版画の技法に例えることができます。',
      west: {
        label: '西洋画的アプローチ',
        text: '影や暗部（黒）を塗り重ねることで密度や立体感を構築する。',
      },
      east: {
        label: '卓磨（東洋的）アプローチ',
        text: '描き足せば描き足すほど、光（白）へ近づいていく。',
      },
      etching: {
        label: '銅版画（エッチング）',
        text: '線を描き足すほど画面が濃く（黒く）なる。',
      },
      woodblock: {
        label: '木版画',
        text: '彫り進める（手を加える）ほど、版画紙の素地である白が現れる。',
      },
      synthesis: '私の油彩は、油絵具という西洋のメディアを使いながらも、この「描き重ねることで光（白）に還る」という東洋的・木版画的な精神性を宿しています。',
    },
    signature: '徳永卓磨',
  },
  en: {
    metaTitle: 'Philosophy of White — Tokunaga Art Museum',
    metaDescription: 'The white reached only after layer upon layer of painting. The Western gaze and the Eastern return — Takuma Tokunaga’s philosophy of painting',
    navTitle: 'Philosophy of White',
    title: 'Approaching White: The Asian Philosophy of Light and Overpainting',
    subtitle: 'The Western Gaze and the Eastern Return',
    lead: [
      'What follows is Takuma Tokunaga’s own reflection on the philosophy underlying his painting, written in response to a criticism often leveled by Western critics: that his canvases are too white, too flat.',
    ],
    sections: [
      {
        heading: 'The Misunderstanding of Flatness, and the Accumulation of Time',
        paragraphs: [
          'In Western criticism, the ‘whiteness’ of my canvases — the flatness of their space — is sometimes read as a shorthand, a simplification of volume. But that is only a surface reading of the result.',
          'My canvas always begins with the relentless construction of form. Only after I have grasped the shape and drawn deep into the structure of light and shadow do I begin to follow the sun’s passage and the shifting of light. As I layer, moment by moment, the changing light onto the canvas, the densely worked color is gradually refined, until at last it is sublimated into a dazzling white.',
        ],
      },
      {
        heading: 'Approaching White by Adding — An Eastern View',
        paragraphs: [
          'Much of Western painting builds volume and density in the world by layering shadow and darkness — black. But at the root of my own painting lies an Asian philosophy: the more one adds, the closer one comes to light, to white.',
        ],
        pullQuote: 'The more one adds, the closer one comes to light.',
      },
      {
        heading: 'The White of Campo de Criptana',
        paragraphs: [
          'Standing beneath the fierce sun of La Mancha, facing its white windmills and lime-washed streets, the white I set down on the canvas is not an empty, unpainted space.',
          'It is the most eloquent and most fully inhabited ‘reduction into light’ — arrived at only after time, light, and dialogue with the landscape have been layered, stratum upon stratum.',
        ],
      },
    ],
    comparison: {
      intro: 'This can be likened to the arts of printmaking.',
      west: {
        label: 'The Western Approach',
        text: 'Density and volume are built by layering shadow and darkness — black.',
      },
      east: {
        label: 'Takuma’s Approach (Eastern)',
        text: 'The more one adds, the closer one comes to light — to white.',
      },
      etching: {
        label: 'Copperplate (Etching)',
        text: 'The more lines are added, the darker the surface becomes.',
      },
      woodblock: {
        label: 'Woodblock Print',
        text: 'The more the block is carved, the more the paper’s own white is revealed.',
      },
      synthesis: 'My oils, though made with the Western medium of paint, carry this same Eastern, woodblock spirit — the reduction, through accumulation, back to light and to nothingness.',
    },
    signature: 'Takuma Tokunaga',
  },
  sp: {
    metaTitle: 'Filosofía del Blanco — Museo de Arte Tokunaga',
    metaDescription: 'El blanco alcanzado solo tras capas y capas de pintura. La mirada occidental y el retorno oriental — la filosofía pictórica de Takuma Tokunaga',
    navTitle: 'Filosofía del Blanco',
    title: 'Acercándose al Blanco: La filosofía asiática de la luz y la superposición',
    subtitle: 'La mirada occidental y el retorno oriental',
    lead: [
      'Lo que sigue es la propia reflexión de Takuma Tokunaga sobre la filosofía que sostiene su pintura, escrita en respuesta a una crítica que a menudo le hacen los críticos occidentales: que sus lienzos son demasiado blancos, demasiado planos.',
    ],
    sections: [
      {
        heading: 'El malentendido de la planitud, y la acumulación del tiempo',
        paragraphs: [
          'En la crítica occidental, a veces se interpreta la “blancura” de mis lienzos —la planitud de su espacio— como un atajo, una simplificación del volumen. Pero eso no es más que una lectura superficial del resultado.',
          'Mi lienzo comienza siempre con la construcción implacable de la forma. Solo después de captar la forma y de haber dibujado profundamente la estructura de la luz y la sombra, empiezo a seguir el paso del sol y el desplazamiento de la luz. A medida que voy superponiendo, instante a instante, la luz cambiante sobre el lienzo, el color densamente trabajado se va refinando, hasta sublimarse, al fin, en un blanco deslumbrante.',
        ],
      },
      {
        heading: 'Acercarse al blanco añadiendo — Una mirada oriental',
        paragraphs: [
          'Gran parte de la pintura occidental construye el volumen y la densidad del mundo superponiendo sombra y oscuridad —el negro—. Pero en la raíz de mi propio pensamiento pictórico hay una filosofía asiática: cuanto más se añade, más se acerca uno a la luz, al blanco.',
        ],
        pullQuote: 'Cuanto más se añade, más se acerca uno a la luz.',
      },
      {
        heading: 'El blanco de Campo de Criptana',
        paragraphs: [
          'De pie bajo el sol implacable de La Mancha, frente a sus molinos blancos y sus calles encaladas, el blanco que dejo en el lienzo no es un espacio vacío, sin pintar.',
          'Es la más elocuente y más plenamente habitada “reducción a la luz” —alcanzada solo después de que el tiempo, la luz y el diálogo con el paisaje se han superpuesto, estrato sobre estrato.',
        ],
      },
    ],
    comparison: {
      intro: 'Esto puede compararse con las artes del grabado.',
      west: {
        label: 'El enfoque occidental',
        text: 'La densidad y el volumen se construyen superponiendo sombra y oscuridad —el negro—.',
      },
      east: {
        label: 'El enfoque de Takuma (oriental)',
        text: 'Cuanto más se añade, más se acerca uno a la luz, al blanco.',
      },
      etching: {
        label: 'Grabado en cobre (aguafuerte)',
        text: 'Cuantas más líneas se añaden, más oscura se vuelve la superficie.',
      },
      woodblock: {
        label: 'Xilografía (grabado en madera)',
        text: 'Cuanto más se talla el taco, más aparece el blanco propio del papel.',
      },
      synthesis: 'Mi óleo, aunque hecho con el medio occidental de la pintura, lleva consigo ese mismo espíritu oriental de la xilografía: la reducción, mediante la acumulación, de vuelta hacia la luz y hacia la nada.',
    },
    signature: 'Takuma Tokunaga',
  },
};
