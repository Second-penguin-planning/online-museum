// src/data/campoNotes.ts
// 「現地の記録」ページ用データ。
// 出典: "Campo_de_Criptana_Record.pdf"（徳永画伯の現地計画・人物・滞在手引きについての筆記文書より校正・整理）
// 注記: 実在する知人・友人については、名前・関係性・感謝の言葉程度に簡略化して掲載している
// （持病・家族構成・出身地など、本人の同意なく公開すべきでない私的詳細は割愛した）。

export type Lang = 'ja' | 'en' | 'sp';

export interface NoteItem {
  label?: string;
  text: string;
}

export interface NoteBlock {
  subheading?: string;
  badge?: string;
  paragraphs?: string[];
  items?: NoteItem[];
  bullets?: string[];
  callout?: string;
}

export interface NoteSection {
  heading: string;
  blocks: NoteBlock[];
}

export interface RelatedLink {
  label: string;
  slug: string; // e.g. 'philosophy/'
}

export interface CampoNotesContent {
  metaTitle: string;
  metaDescription: string;
  navTitle: string;
  title: string;
  subtitle: string;
  lead: string[];
  sections: NoteSection[];
  relatedLink: RelatedLink;
}

export const campoNotesContent: Record<Lang, CampoNotesContent> = {
  ja: {
    metaTitle: '現地の記録 — カンポ・デ・クリプターナ — 德永アートミュージアム',
    metaDescription: 'カンポ・デ・クリプターナの人々への謝辞・小旅行の記録・芸術についての覚書',
    navTitle: '現地の記録',
    title: 'カンポ・デ・クリプターナ　現地の記録',
    subtitle: '人々への謝辞、小旅行の記録、そして芸術についての覚書',
    lead: [
      '以下は、徳永卓磨が長年のカンポ・デ・クリプターナ滞在の中で書き残した覚書を、校正・整理して掲載するものである。現地でお世話になった方々への謝辞、旅の記録、そして芸術についての考察をまとめた。',
      '人物紹介については、ご本人の同意なく公開すべきでない私的な事柄（近況の詳細など）を割愛し、名前・関係性・感謝の言葉に絞って掲載している。',
    ],
    sections: [
      {
        heading: '1. カンポでお世話になった方々',
        blocks: [
          { subheading: '宿の女将 カルメン', badge: '故人' },
          {
            subheading: 'フランシスコ・バルブエナ',
            badge: '故人',
            paragraphs: ['現地の画家。出会いから最期まで、公私にわたり支えてくれた。'],
          },
          {
            subheading: 'ヴィセンテ',
            paragraphs: ['宿の長男。14歳で初めて出会って以来、今も変わらず力になってくれている。'],
          },
          {
            subheading: 'アンドレ',
            paragraphs: ['町立「文化の家」元館長。カンポでの展覧会を全面的に支えてくれた中心人物。'],
          },
          {
            subheading: 'ミゲル（元編集長）',
            paragraphs: ['スペイン三大紙の一つ『エル・ムンド（El Mundo）』紙の元編集長。かつて新聞記事で私たちを紹介してくれた。'],
          },
          {
            subheading: 'ミゲル（フランス語教師）',
            paragraphs: ['故フランシスコ・バルブエナの息子。父の跡を継ぐように、今も絵を描き続けている。教養が高く、頼りになる存在。'],
          },
          {
            subheading: 'カルメン（親戚一同）',
            paragraphs: ['宿の女将カルメンの親戚にあたる女性。幸子の絵にもたびたび描かれ、現地での暮らしの中で最も親しくしてくれた一人。'],
          },
          {
            subheading: '高橋氏',
            paragraphs: ['カンポの風車の丘を日本人団体が訪れる際、ガイド役を買って出てくれる心強い協力者。'],
          },
          {
            subheading: '町長・行政関係者',
            paragraphs: ['皇太子ゆかりの展覧会を、これまでにこの町で2度開催してきた（2回目は日本・スペイン修好150周年記念）。将来の構想として、ドン・キホーテゆかりのこの地にふさわしい「ラ・マンチャ美術館」も思い描いている。'],
          },
        ],
      },
      {
        heading: '2. お勧め：カンポでの小旅行（ドライブコース）',
        blocks: [
          {
            subheading: 'おすすめ午後ドライブコース',
            bullets: [
              'カンポ出発 → ビルヘンの丘（小さな教会エルミータがある）',
              '東へ13km進み、エル・トボソ（El Toboso）へ。（『ドン・キホーテ』の想い人・ドルシネア姫の生地。人口約3,600人）',
              '街道を西へ折り返しアルカサル方面へ。途中に広がる雄大な畑の風景を楽しむ（時々車を止めて見学）。',
              'アルカサルから4つの風車のある丘へ（カンポの町からもよく見える場所）。丘の上から北東にかけての眺望が素晴らしい。',
              '見学後、カンポ・デ・クリプターナへ帰還（約8km）。',
            ],
          },
          {
            callout: 'スペインでは飲酒運転の取り締まりが厳しいため、運転する場合はアルコールにくれぐれも注意すること。',
          },
        ],
      },
      {
        heading: '3. バー・食物の手引き',
        blocks: [
          {
            subheading: 'おすすめのバー',
            items: [
              { label: 'バー「アティラ」（Attila）', text: '宿の女将カルメンとよく通った、思い出深い店。店名はスペインの幻の名馬から。おつまみの「オレハ（豚の耳）」が大変おいしい。' },
              { label: 'バー「アンドレ」', text: '長年お世話になっている、地元で親しまれる店。バー「ロス・モリーノス」のすぐ近くにある。' },
            ],
          },
          {
            subheading: '食物・注文のアドバイス',
            items: [
              { label: 'チョーリッソ（Chorizo）', text: 'スーパーで小ぶりのものを買い、パンと一緒に食べると非常に良い。' },
              { label: 'チューレッタ（Chuleta）', text: '小さい骨付き肉を焼いたもの。美味。' },
              { label: 'ボカディージョ（Bocadillo）', text: 'パンに具材を挟んだサンドイッチ。手頃で温かく美味しい。特にイカのカラマリ（から揚げ）を挟んだものが一番安くてお勧め。' },
              { label: '【注意】生ハムの注文について', text: '生ハムを一般的な料理の感覚で注文しないこと。以前注文した際、大変な大皿一杯が出された経験があり、盛り付けや量の調節が難しい。' },
            ],
          },
          {
            subheading: '交通・防犯・安全管理',
            bullets: [
              '鍵の保管を徹底・完璧にすること。',
              '交通規則が変更されている場合があるため注意（飲酒運転は厳禁）。',
              '車に限らず、外国人は防犯上ターゲットにされやすいため日常的に注意を払うこと。',
            ],
          },
        ],
      },
      {
        heading: '4. 芸術・展覧会に関する考察・画論メモ',
        blocks: [
          {
            subheading: 'バルブエナ作『死せる自画像』について',
            paragraphs: [
              'もし小生の絵が美術館に並ぶとしたら、スペイン語版『ドン・キホーテ』の舞台において（正確かつリアルに展示されるべき作品として）、故バルブエナの『死せる自画像』が挙げられる。彼が生前に描いた自らの死後の姿であり、朽ち木のような凄まじい表現である。美術史上初めての理念と思われるが、現在は行方不明とも言われている。',
            ],
          },
          {
            subheading: '「白」の扱いと日欧の文化的感性の違い',
            paragraphs: [
              '小生の絵と現地の描き手・観客との間にある「壁」の一つが「白」の扱いである。何度説明しても理解してもらいにくいが、彼らにとって白は「印刷感・印字感」が強く感じられるようである。',
            ],
            items: [
              { label: '西洋', text: '羊皮紙' },
              { label: '日本', text: '上質な和紙' },
              { label: '韓国', text: '厚手の白革' },
            ],
          },
          {
            paragraphs: ['「白は太陽に向かい（木版・絵画）、黒は地下へ向かう（エッチング他）」という造形理念の相違が存在する。'],
          },
        ],
      },
    ],
    relatedLink: { label: '→ 関連ページ：「白」の哲学', slug: 'philosophy/' },
  },
  en: {
    metaTitle: 'Field Notes — Campo de Criptana — Tokunaga Art Museum',
    metaDescription: 'Notes of thanks to the people of Campo de Criptana, a day trip, and reflections on art',
    navTitle: 'Field Notes',
    title: 'Field Notes from Campo de Criptana',
    subtitle: 'Thanks to the people there, a recommended day trip, and reflections on art',
    lead: [
      "What follows is a record Takuma Tokunaga kept over his many years staying in Campo de Criptana, edited and organized here: words of thanks to the people who looked after him there, notes from a day trip, and his own reflections on art.",
      'For the people mentioned, private matters that should not be published without their consent have been omitted; what remains is limited to names, relationships, and words of gratitude.',
    ],
    sections: [
      {
        heading: '1. People We Are Grateful to in Campo',
        blocks: [
          { subheading: 'Carmen, the innkeeper', badge: 'Deceased' },
          {
            subheading: 'Francisco Valbuena',
            badge: 'Deceased',
            paragraphs: ['A local painter. He supported us, in every way, from the day we met until his last.'],
          },
          {
            subheading: 'Vicente',
            paragraphs: ["The innkeeper's eldest son. He has looked after us ever since we first met, when he was fourteen, and does so still."],
          },
          {
            subheading: 'Andrés',
            paragraphs: ['Former director of the town’s "House of Culture." The central figure who gave full support to our exhibition in Campo.'],
          },
          {
            subheading: 'Miguel (the former editor)',
            paragraphs: ['Former editor of El Mundo, one of Spain’s three major newspapers. He once featured us in a newspaper article.'],
          },
          {
            subheading: 'Miguel (the French teacher)',
            paragraphs: ["Son of the late Francisco Valbuena. As if carrying on his father's path, he still paints today. Highly cultured, and someone we can always rely on."],
          },
          {
            subheading: 'Carmen (a relative of the family)',
            paragraphs: ["A relative of Carmen the innkeeper. She appears often in Sachiko's paintings, and of everyone we came to know there, she was the one we grew closest to."],
          },
          {
            subheading: 'Mr. Takahashi',
            paragraphs: ['A dependable friend who volunteers as a guide whenever a Japanese group visits the windmill hill in Campo.'],
          },
          {
            subheading: 'The Mayor and Local Officials',
            paragraphs: ['An exhibition connected to the Crown Prince has already been held twice in this town (the second to mark the 150th anniversary of Japan–Spain friendship). Looking ahead, I picture a "Museum of La Mancha" — a fitting addition to this land tied to Don Quixote.'],
          },
        ],
      },
      {
        heading: '2. A Recommended Half-Day Drive Around Campo',
        blocks: [
          {
            subheading: 'A Recommended Afternoon Drive',
            bullets: [
              'Leave Campo → the Hill of the Virgin, where there is a small chapel, the ermita.',
              "Continue 13 km east to El Toboso, birthplace of Dulcinea, Don Quixote's beloved (population roughly 3,600).",
              'Double back west along the highway toward Alcázar, taking in the sweeping farmland along the way (stop the car now and then to enjoy it).',
              'From Alcázar, head to the hill with the four windmills (visible even from Campo itself) — the view to the northeast from the top is superb.',
              'After visiting, return to Campo de Criptana (about 8 km).',
            ],
          },
          {
            callout: "Drunk-driving enforcement in Spain is strict, so if you're driving, be very careful with alcohol.",
          },
        ],
      },
      {
        heading: '3. A Guide to Bars and Food',
        blocks: [
          {
            subheading: 'Recommended Bars',
            items: [
              { label: 'Bar Atila (Attila)', text: "A memorable place we often visited with Carmen, the innkeeper. Named after Spain's legendary phantom horse. The bar snack orejas (pig's ears) are excellent." },
              { label: 'Bar Andrés', text: "A bar we've long relied on, well loved locally. It sits right next to Bar Los Molinos." },
            ],
          },
          {
            subheading: 'Advice on Food and Ordering',
            items: [
              { label: 'Chorizo', text: 'Buy a small one at the supermarket and eat it with bread — excellent.' },
              { label: 'Chuleta', text: 'A small grilled bone-in chop. Delicious.' },
              { label: 'Bocadillo', text: 'A filled bread roll — affordable, warm, and satisfying. The one filled with fried calamari is both the cheapest and the best.' },
              { label: 'A Note on Ordering Jamón (Cured Ham)', text: "Do not order jamón the way you would an ordinary dish. Once, an enormous platter arrived that was hard to finish — the portion and presentation are difficult to judge in advance." },
            ],
          },
          {
            subheading: 'Getting Around, Safety, and Security',
            bullets: [
              'Be thorough and careful about keeping track of your keys.',
              'Traffic rules can change, so stay alert (drunk driving is strictly forbidden).',
              'Foreigners, whether in a car or on foot, are easy targets — stay attentive at all times.',
            ],
          },
        ],
      },
      {
        heading: '4. Notes on Art and Exhibitions',
        blocks: [
          {
            subheading: "On Valbuena's \"Dead Self-Portrait\"",
            paragraphs: [
              "If my own paintings were ever to hang in a museum, then — on the very stage of the Spanish Don Quixote, as a work that deserves to be shown accurately and truthfully — the late Valbuena's \"Dead Self-Portrait\" should be there too. It is the image he painted of his own body after death, rendered with the terrible force of dead, decaying wood. I believe it may be the first work of its kind in the history of art, though it is now said to be lost.",
            ],
          },
          {
            subheading: '"White," and the Difference Between Japanese and European Sensibility',
            paragraphs: [
              "One of the \"walls\" standing between my paintings and the local painters and audience there is the treatment of white. However many times I explain it, it is hard for them to grasp — to them, white seems to carry a strong sense of \"print\" or \"blank paper.\"",
            ],
            items: [
              { label: 'The West', text: 'Parchment' },
              { label: 'Japan', text: 'Fine washi paper' },
              { label: 'Korea', text: 'Thick white leather' },
            ],
          },
          {
            paragraphs: [
              'There is a real difference in formal philosophy here: white moves toward the sun (woodblock print, painting), while black moves down into the earth (etching, and the like).',
            ],
          },
        ],
      },
    ],
    relatedLink: { label: '→ Related: Philosophy of White', slug: 'philosophy/' },
  },
  sp: {
    metaTitle: 'Notas de campo — Campo de Criptana — Museo de Arte Tokunaga',
    metaDescription: 'Palabras de gratitud a la gente de Campo de Criptana, una excursión, y reflexiones sobre el arte',
    navTitle: 'Notas de campo',
    title: 'Notas de campo de Campo de Criptana',
    subtitle: 'Gratitud hacia la gente del lugar, una excursión recomendada, y reflexiones sobre el arte',
    lead: [
      'Lo que sigue es un registro que Takuma Tokunaga fue dejando a lo largo de sus muchos años de estancias en Campo de Criptana, editado y ordenado aquí: palabras de agradecimiento a quienes le atendieron allí, notas de una excursión, y sus propias reflexiones sobre el arte.',
      'En cuanto a las personas mencionadas, se han omitido los asuntos privados que no deberían publicarse sin su consentimiento; lo que queda se limita a nombres, relaciones y palabras de gratitud.',
    ],
    sections: [
      {
        heading: '1. Personas a las que agradecemos en Campo',
        blocks: [
          { subheading: 'Carmen, la posadera', badge: 'fallecida' },
          {
            subheading: 'Francisco Valbuena',
            badge: 'fallecido',
            paragraphs: ['Pintor local. Nos apoyó en todo, desde el día en que nos conocimos hasta el final de su vida.'],
          },
          {
            subheading: 'Vicente',
            paragraphs: ['El hijo mayor de la posada. Nos ha cuidado desde que nos conocimos, cuando él tenía catorce años, y sigue haciéndolo.'],
          },
          {
            subheading: 'Andrés',
            paragraphs: ['Antiguo director de la "Casa de la Cultura" municipal. La figura central que dio pleno apoyo a nuestra exposición en Campo.'],
          },
          {
            subheading: 'Miguel (el exdirector)',
            paragraphs: ['Exdirector de El Mundo, uno de los tres grandes periódicos de España. En su día nos dedicó un artículo.'],
          },
          {
            subheading: 'Miguel (el profesor de francés)',
            paragraphs: ['Hijo del difunto Francisco Valbuena. Como continuando el camino de su padre, sigue pintando hoy en día. Muy culto, y alguien con quien siempre podemos contar.'],
          },
          {
            subheading: 'Carmen (familiar de la posadera)',
            paragraphs: ['Familiar de Carmen, la posadera. Aparece muchas veces en los cuadros de Sachiko, y de toda la gente que conocimos allí, fue con quien más nos unimos.'],
          },
          {
            subheading: 'Sr. Takahashi',
            paragraphs: ['Un amigo con quien siempre podemos contar, que se ofrece como guía cada vez que un grupo japonés visita la colina de los molinos en Campo.'],
          },
          {
            subheading: 'El alcalde y las autoridades locales',
            paragraphs: ['En este pueblo ya se han celebrado dos exposiciones relacionadas con el Príncipe heredero (la segunda con motivo del 150.º aniversario de la amistad entre Japón y España). Mirando hacia el futuro, imagino un "Museo de La Mancha", un buen complemento para esta tierra ligada a Don Quijote.'],
          },
        ],
      },
      {
        heading: '2. Una recomendación: pequeña excursión en coche por Campo',
        blocks: [
          {
            subheading: 'Ruta recomendada para una tarde en coche',
            bullets: [
              'Salir de Campo → el Cerro de la Virgen (hay una pequeña ermita).',
              'Seguir 13 km al este hasta El Toboso, cuna de Dulcinea, el amor de Don Quijote (unos 3.600 habitantes).',
              'Volver hacia el oeste por la carretera en dirección a Alcázar, disfrutando de los amplios campos de labranza por el camino (parar el coche de vez en cuando para contemplarlos).',
              'Desde Alcázar, ir a la colina de los cuatro molinos (visible incluso desde el propio Campo); la vista hacia el noreste desde lo alto es magnífica.',
              'Tras la visita, regresar a Campo de Criptana (unos 8 km).',
            ],
          },
          {
            callout: 'En España los controles de alcoholemia son muy estrictos, así que si conduces, ten mucho cuidado con la bebida.',
          },
        ],
      },
      {
        heading: '3. Guía de bares y comida',
        blocks: [
          {
            subheading: 'Bares recomendados',
            items: [
              { label: 'Bar Atila (Attila)', text: 'Un lugar memorable al que íbamos a menudo con Carmen, la posadera. Su nombre viene del legendario caballo fantasma de España. Las orejas de cerdo que sirven de tapa están buenísimas.' },
              { label: 'Bar Andrés', text: 'Un bar en el que confiamos desde hace mucho, muy querido en el pueblo. Está justo al lado del Bar Los Molinos.' },
            ],
          },
          {
            subheading: 'Consejos sobre comida y cómo pedir',
            items: [
              { label: 'Chorizo', text: 'Comprar uno pequeño en el supermercado y comerlo con pan: excelente.' },
              { label: 'Chuleta', text: 'Un pequeño trozo de carne con hueso a la parrilla. Delicioso.' },
              { label: 'Bocadillo', text: 'Pan relleno; económico, calentito y sabroso. El de calamares fritos es a la vez el más barato y el más recomendable.' },
              { label: 'Aviso sobre cómo pedir jamón', text: 'No pidas jamón como si fuera un plato cualquiera. En una ocasión llegó una fuente enorme, difícil de terminar: la ración y la presentación son difíciles de calcular de antemano.' },
            ],
          },
          {
            subheading: 'Desplazamientos, seguridad y prevención',
            bullets: [
              'Sé meticuloso y no descuides nunca la guarda de las llaves.',
              'Las normas de tráfico pueden haber cambiado, así que ten cuidado (conducir bebido está terminantemente prohibido).',
              'Los extranjeros, vayan en coche o a pie, son un blanco fácil: mantén la atención en todo momento.',
            ],
          },
        ],
      },
      {
        heading: '4. Reflexiones sobre arte y exposiciones',
        blocks: [
          {
            subheading: 'Sobre el "Autorretrato muerto" de Valbuena',
            paragraphs: [
              'Si algún día mis cuadros llegaran a colgar en un museo, entonces —en el propio escenario del Don Quijote español, como obra que merece exhibirse con precisión y verdad— también debería estar allí el "Autorretrato muerto" del difunto Valbuena. Es la imagen que él mismo pintó de su cuerpo después de morir, con la fuerza terrible de la madera muerta y podrida. Creo que puede haber sido la primera obra de su clase en la historia del arte, aunque hoy se dice que está perdida.',
            ],
          },
          {
            subheading: 'El "blanco", y la diferencia de sensibilidad entre Japón y Europa',
            paragraphs: [
              'Uno de los "muros" entre mis cuadros y los pintores y el público de allí es el tratamiento del blanco. Por más que lo explico, cuesta que lo entiendan: para ellos, el blanco parece transmitir sobre todo una sensación de "impreso" o de "papel en blanco".',
            ],
            items: [
              { label: 'Occidente', text: 'Pergamino' },
              { label: 'Japón', text: 'Washi de calidad' },
              { label: 'Corea', text: 'Cuero blanco grueso' },
            ],
          },
          {
            paragraphs: [
              'Existe aquí una verdadera diferencia de filosofía formal: el blanco se dirige hacia el sol (la xilografía, la pintura), mientras que el negro desciende hacia la tierra (el aguafuerte y técnicas afines).',
            ],
          },
        ],
      },
    ],
    relatedLink: { label: '→ Relacionado: Filosofía del Blanco', slug: 'philosophy/' },
  },
};
