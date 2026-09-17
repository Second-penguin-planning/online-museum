// src/data/campoCollection.ts
// 「カンポ・デ・クリプターナ特別コレクション」ページ用データ。
// 絵画画像と現地取材写真を並べて比較し、作品ごとに Impresión（インパクト）・
// Técnica（技能）・Historia（物語・現地の聞き取りに基づく解説）の3要素評価を掲載する。
//
// 注記: fieldPhoto（現地取材写真）と historia（物語）は、2026年9〜11月に予定される
// カンポ・デ・クリプターナ現地取材の結果をもって順次追加する。現時点では絵画画像のみ
// 確定している作品を掲載し、未取材の項目は明示的に「取材後追加予定」と表示する。
// impresion / tecnica の文章は、各作品の画像を直接確認したうえでの構図・色彩・筆致に
// 関する所見であり、学芸員による正式なキュレーション文に差し替え予定の草稿である。
// 年代・サイズ等の情報が原資料（src/data/artworks.json）にない作品については、
// 実在しない数値を記載しないよう配慮している。

export type Lang = 'ja' | 'en' | 'sp';
export type CampoCategory = 'molino' | 'calle' | 'puerta' | 'campo';

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

export const campoCategoryOrder: CampoCategory[] = ['molino', 'calle', 'puerta', 'campo'];

export const campoCategoryLabels: Record<Lang, Record<CampoCategory, string>> = {
  ja: {
    molino: '風車（Molinos）',
    calle: '街並み（Calles）',
    puerta: '扉と窓（Puertas y Ventanas）',
    campo: '風景（Paisajes）',
  },
  en: {
    molino: 'Windmills (Molinos)',
    calle: 'Streets (Calles)',
    puerta: 'Doors & Windows (Puertas y Ventanas)',
    campo: 'Countryside (Paisajes)',
  },
  sp: {
    molino: 'Molinos',
    calle: 'Calles',
    puerta: 'Puertas y Ventanas',
    campo: 'Paisajes',
  },
};

// 現地取材写真・物語（Historia）が未取材であることを示す共通プレースホルダー
const pendingHistoria: Record<Lang, string> = {
  ja: '現地取材後、このアングルで実際に撮影した写真と証言をもとに追記予定。',
  en: 'To be completed after the field research trip, based on a photograph taken from this same vantage point and on-site testimony.',
  sp: 'Se completará tras el viaje de investigación in situ, con una fotografía tomada desde este mismo punto de vista y testimonios recogidos allí.',
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
    historia: pendingHistoria,
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
    historia: pendingHistoria,
  },

  // ===== 風車（Molinos） =====
  {
    id: 'molino-01018',
    category: 'molino',
    paintingImage: '01018.jpg',
    fieldPhoto: null,
    title: { ja: '丘の上の風車群 1', en: 'Windmills on the Hill 1', sp: 'Molinos en la Colina 1' },
    impresion: {
      ja: '丘の稜線に並ぶ白い風車群を、澄んだ青空と黄金色の草原を背景に堂々と描く。',
      en: 'A row of white windmills along a hilltop ridge, set boldly against a clear blue sky and a golden field.',
      sp: 'Una fila de molinos blancos a lo largo de una loma, recortados con fuerza contra un cielo azul despejado y un campo dorado.',
    },
    tecnica: {
      ja: '油彩。白壁の質感を厚塗りで、空との境界は柔らかいぼかしで仕上げている。',
      en: 'Oil on canvas; the whitewashed towers are built up in thick strokes, while the edge against the sky is softly blended.',
      sp: 'Óleo sobre lienzo; las torres encaladas se construyen con pintura espesa, mientras el límite con el cielo se difumina con suavidad.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'molino-01020',
    category: 'molino',
    paintingImage: '01020.jpg',
    fieldPhoto: null,
    title: { ja: '夕暮れの風車群', en: 'Windmills at Dusk', sp: 'Molinos al Atardecer' },
    impresion: {
      ja: '燃えるようなオレンジの夕空を背に、風車群のシルエットが静かに浮かび上がる。',
      en: 'Against a blazing orange sunset, the silhouettes of the windmills rise in quiet stillness.',
      sp: 'Contra un atardecer de naranja ardiente, las siluetas de los molinos se alzan en silenciosa quietud.',
    },
    tecnica: {
      ja: '油彩。空はグラデーションで、風車本体は逆光のシルエットとして平面的に処理している。',
      en: 'Oil on canvas; the sky is rendered in gradient washes, while the windmills themselves are flattened into backlit silhouettes.',
      sp: 'Óleo sobre lienzo; el cielo se resuelve en degradados, mientras los molinos se aplanan en siluetas a contraluz.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'molino-01025',
    category: 'molino',
    paintingImage: '01025.jpg',
    fieldPhoto: null,
    title: { ja: '連なる風車 1', en: 'A Row of Windmills 1', sp: 'Fila de Molinos 1' },
    impresion: {
      ja: '手前の緑の茂みから風車の丘を見上げるような視点で、村と風車が一体となった眺めを描く。',
      en: 'Seen from beside a green thicket in the foreground, the village and its windmills appear as a single, unified view.',
      sp: 'Vistos desde junto a un matorral verde en primer plano, el pueblo y sus molinos aparecen como una sola vista unificada.',
    },
    tecnica: {
      ja: '油彩。近景の緑と遠景の白い風車のコントラストで奥行きを出している。',
      en: 'Oil on canvas; depth is achieved through the contrast between the green foreground and the white windmills in the distance.',
      sp: 'Óleo sobre lienzo; la profundidad se logra por el contraste entre el verde en primer plano y los molinos blancos a lo lejos.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'molino-01028',
    category: 'molino',
    paintingImage: '01028.jpg',
    fieldPhoto: null,
    title: { ja: '村と風車群', en: 'The Village and Its Windmills', sp: 'El Pueblo y sus Molinos' },
    impresion: {
      ja: '麦畑越しに、村の家並みと風車群を横一列に見渡す、カンポらしいパノラマ。',
      en: 'A panoramic view typical of Campo, taking in the village houses and its windmills in a single line beyond the wheat field.',
      sp: 'Una vista panorámica típica de Campo, que abarca las casas del pueblo y sus molinos en una sola línea más allá del trigal.',
    },
    tecnica: {
      ja: '油彩。横長の画面いっぱいに、風車・家・畑の三層を水平の帯で構成している。',
      en: 'Oil on canvas; across a wide horizontal format, the windmills, houses, and fields are arranged in three horizontal bands.',
      sp: 'Óleo sobre lienzo; en un formato horizontal amplio, los molinos, las casas y los campos se organizan en tres franjas horizontales.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'molino-01040',
    category: 'molino',
    paintingImage: '01040.jpg',
    fieldPhoto: null,
    title: { ja: '紺碧の空と風車', en: 'Windmills Under a Deep Blue Sky', sp: 'Molinos Bajo un Cielo Azul' },
    impresion: {
      ja: '濃い紺青の空の下、白壁の風車が際立つ、澄み切った一枚。',
      en: 'Beneath a deep indigo sky, the whitewashed windmills stand out with striking clarity.',
      sp: 'Bajo un cielo de azul intenso, los molinos encalados destacan con una claridad sorprendente.',
    },
    tecnica: {
      ja: '油彩。空の濃い青と風車の白のコントラストを強調し、輪郭をくっきりと描いている。',
      en: 'Oil on canvas; the contrast between the deep blue sky and the white towers is emphasized, with crisply defined outlines.',
      sp: 'Óleo sobre lienzo; se enfatiza el contraste entre el azul profundo del cielo y el blanco de las torres, con contornos muy definidos.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'molino-01044',
    category: 'molino',
    paintingImage: '01044.jpg',
    fieldPhoto: null,
    title: { ja: '夜空の風車群', en: 'Windmills at Nightfall', sp: 'Molinos al Anochecer' },
    impresion: {
      ja: '藍色に沈む空の下、一際大きな風車が手前にそびえ、奥に小さな仲間たちが続く。',
      en: 'Beneath a sky sinking into indigo, one large windmill looms in the foreground while smaller companions continue into the distance.',
      sp: 'Bajo un cielo que se hunde en el añil, un gran molino se alza en primer plano mientras otros más pequeños continúan hacia el fondo.',
    },
    tecnica: {
      ja: '油彩。前景の風車を大きく、遠景を小さく配置し、遠近感を強く打ち出している。',
      en: 'Oil on canvas; the foreground windmill is enlarged and the distant ones diminished, creating a strong sense of perspective.',
      sp: 'Óleo sobre lienzo; el molino en primer plano se agranda y los lejanos se reducen, creando una fuerte sensación de perspectiva.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'molino-01045',
    category: 'molino',
    paintingImage: '01045.jpg',
    fieldPhoto: null,
    title: { ja: '麦畑と風車', en: 'Windmills Over the Wheat Field', sp: 'Molinos Sobre el Trigal' },
    impresion: {
      ja: '単純化された形とはっきりした色面で、風車群をグラフィックに描き出す。',
      en: 'With simplified forms and clean fields of color, the windmills are rendered almost graphically.',
      sp: 'Con formas simplificadas y campos de color nítidos, los molinos se representan de manera casi gráfica.',
    },
    tecnica: {
      ja: '油彩。輪郭線をはっきりと残し、平坦な色面で風車と空を構成している。',
      en: 'Oil on canvas; crisp outlines are retained throughout, with the windmills and sky built from flat, unmodulated color.',
      sp: 'Óleo sobre lienzo; se conservan contornos nítidos en todo el cuadro, con los molinos y el cielo construidos en color plano.',
    },
    historia: pendingHistoria,
  },

  // ===== 街並み（Calles） =====
  {
    id: 'calle-01035',
    category: 'calle',
    paintingImage: '01035.jpg',
    fieldPhoto: null,
    title: { ja: '夜の路地', en: 'Night Alley', sp: 'Callejón de Noche' },
    impresion: {
      ja: '濃紺の夜空の下、白い壁が続く路地を描く。静けさの中に、住まいの気配だけがほのかに漂う。',
      en: 'An alley lined with white walls beneath a deep blue night sky. In the surrounding stillness, only a faint sense of habitation lingers.',
      sp: 'Un callejón bordeado de paredes blancas bajo un cielo nocturno de azul profundo. En la quietud circundante, solo persiste un tenue rastro de vida doméstica.',
    },
    tecnica: {
      ja: '油彩。白壁のマチエールを厚く盛り上げ、夜空との明暗差を強調している。',
      en: 'Oil on canvas; the white walls are built up in thick impasto, sharpening the contrast against the dark night sky.',
      sp: 'Óleo sobre lienzo; las paredes blancas se construyen con empaste grueso, acentuando el contraste con el cielo nocturno.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'calle-01037',
    category: 'calle',
    paintingImage: '01037.jpg',
    fieldPhoto: null,
    title: { ja: '白壁の家並み', en: 'White-Walled Houses', sp: 'Casas de Paredes Blancas' },
    impresion: {
      ja: '青空の下に連なる白壁とオレンジの瓦屋根。カンポの町並みらしい明るさを伝える。',
      en: "White walls and orange tiled roofs stretch beneath a blue sky, capturing the bright, everyday character of Campo's streets.",
      sp: 'Paredes blancas y tejados de teja naranja se extienden bajo un cielo azul, transmitiendo el carácter luminoso y cotidiano de las calles de Campo.',
    },
    tecnica: {
      ja: '油彩。瓦屋根のオレンジと壁の白を対比させ、屋根の重なりでリズムを作っている。',
      en: 'Oil on canvas; the orange of the tiled roofs is set against the white of the walls, their overlapping shapes creating a visual rhythm.',
      sp: 'Óleo sobre lienzo; el naranja de los tejados se contrapone al blanco de las paredes, y su superposición crea un ritmo visual.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'calle-01039',
    category: 'calle',
    paintingImage: '01039.jpg',
    fieldPhoto: null,
    title: { ja: '鐘楼へ続く小路', en: 'Lane Toward the Bell Tower', sp: 'Callejón Hacia el Campanario' },
    impresion: {
      ja: '石壁に挟まれた細い小路の先に、教会の鐘楼がのぞく。歴史ある町の奥行きを感じさせる一枚。',
      en: 'A narrow lane hemmed in by stone walls opens onto a glimpse of a church bell tower, conveying the depth of an old town.',
      sp: 'Un callejón estrecho, encajonado entre muros de piedra, se abre hacia un atisbo del campanario de una iglesia, transmitiendo la profundidad de un pueblo antiguo.',
    },
    tecnica: {
      ja: '油彩。手前の壁は粗いタッチで、奥の鐘楼は淡く小さく描き遠近を表現している。',
      en: 'Oil on canvas; the nearby walls are painted in coarse strokes, while the distant tower is rendered small and pale to suggest depth.',
      sp: 'Óleo sobre lienzo; los muros cercanos se pintan con pinceladas ásperas, mientras la torre lejana se representa pequeña y pálida para sugerir profundidad.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'calle-01041',
    category: 'calle',
    paintingImage: '01041.jpg',
    fieldPhoto: null,
    title: { ja: 'バルコニーのある通り', en: 'Street with Balconies', sp: 'Calle con Balcones' },
    impresion: {
      ja: 'オレンジや黄色に塗られた家々と鉄製のバルコニーが続く通り。カンポの街並みの色彩豊かな一面。',
      en: "A street lined with houses painted in orange and yellow, their iron balconies repeating down the block — a colorful side of Campo's streets.",
      sp: "Una calle bordeada de casas pintadas de naranja y amarillo, con sus balcones de hierro repitiéndose a lo largo de la manzana: una cara colorida de las calles de Campo.",
    },
    tecnica: {
      ja: '油彩。壁面の色を家ごとに変え、バルコニーの鉄格子を細い線で描き込んでいる。',
      en: 'Oil on canvas; the wall color shifts from house to house, with the iron balcony grilles picked out in fine lines.',
      sp: 'Óleo sobre lienzo; el color de las paredes cambia de una casa a otra, y las rejas de los balcones se trazan con líneas finas.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'calle-01047',
    category: 'calle',
    paintingImage: '01047.jpg',
    fieldPhoto: null,
    title: { ja: '赤い屋根の村', en: 'Village of Red Roofs', sp: 'Pueblo de Tejados Rojos' },
    impresion: {
      ja: '赤い瓦屋根の家々が寄り添う村を、丘の上から見渡すように描く。',
      en: 'A village of houses huddled beneath red tile roofs, viewed as if from a rise just above the town.',
      sp: 'Un pueblo de casas apiñadas bajo tejados rojos, visto como desde una loma justo por encima del pueblo.',
    },
    tecnica: {
      ja: '油彩。屋根の赤を強めに彩色し、家々の白壁との対比で村全体の密度を表現している。',
      en: 'Oil on canvas; the red of the roofs is heightened in tone, its contrast with the white walls conveying the density of the village.',
      sp: 'Óleo sobre lienzo; el rojo de los tejados se intensifica, y su contraste con las paredes blancas transmite la densidad del pueblo.',
    },
    historia: pendingHistoria,
  },

  // ===== 扉と窓（Puertas y Ventanas） =====
  {
    id: 'puerta-01012',
    category: 'puerta',
    paintingImage: '01012.jpg',
    fieldPhoto: null,
    title: { ja: '緑の扉の家', en: 'House with a Green Door', sp: 'Casa de la Puerta Verde' },
    impresion: {
      ja: '風化した白壁に映える深緑の扉。素朴な村家の佇まいを丁寧に写し取る。',
      en: 'A deep green door set against a weathered white wall, carefully capturing the modest presence of a village house.',
      sp: 'Una puerta de verde profundo sobre una pared blanca desgastada, que capta con esmero la presencia modesta de una casa del pueblo.',
    },
    tecnica: {
      ja: '油彩。壁のひび割れやシミを丹念に描き込み、扉の艶とのコントラストを出している。',
      en: 'Oil on canvas; the cracks and stains of the wall are rendered in careful detail, contrasting with the sheen of the door.',
      sp: 'Óleo sobre lienzo; las grietas y manchas del muro se representan con detalle, contrastando con el brillo de la puerta.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01013',
    category: 'puerta',
    paintingImage: '01013.jpg',
    fieldPhoto: null,
    title: { ja: 'タバコ店の扉', en: 'The Tobacco Shop Door', sp: 'La Puerta del Estanco' },
    impresion: {
      ja: '「TABACOS」の看板を掲げた赤い扉。商いの営みが今も息づく通りの一角を切り取る。',
      en: 'A red door beneath a "TABACOS" (tobacco shop) sign, capturing a corner of the street where daily commerce still carries on.',
      sp: 'Una puerta roja bajo un cartel de "TABACOS", que capta un rincón de la calle donde el comercio cotidiano todavía sigue vivo.',
    },
    tecnica: {
      ja: '油彩。看板の文字をくっきりと描き、扉は厚塗りで木目の質感を出している。',
      en: 'Oil on canvas; the lettering on the sign is rendered crisply, while the door is built up in thick paint to suggest the grain of the wood.',
      sp: 'Óleo sobre lienzo; las letras del cartel se pintan con nitidez, mientras la puerta se construye con pintura espesa que sugiere la veta de la madera.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01014',
    category: 'puerta',
    paintingImage: '01014.jpg',
    fieldPhoto: null,
    title: { ja: '「ラガルト」の扉', en: 'The Lagarto Door', sp: 'La Puerta de Lagarto' },
    impresion: {
      ja: '鋲打ちの重厚な扉の上に「LAGARTO」の標札。歴史を刻んだ木の扉の存在感を伝える。',
      en: 'A heavy, iron-studded door beneath a plaque reading "LAGARTO," conveying the weight of a wooden door marked by history.',
      sp: 'Una puerta pesada, tachonada de hierro, bajo una placa que dice "LAGARTO", que transmite el peso de una puerta de madera marcada por el tiempo.',
    },
    tecnica: {
      ja: '油彩。鋲の一つひとつを丹念に描き分け、木部の色むらで経年感を出している。',
      en: 'Oil on canvas; each iron stud is individually rendered, and uneven tones in the wood convey its age.',
      sp: 'Óleo sobre lienzo; cada tachón de hierro se representa individualmente, y los tonos desiguales de la madera transmiten su antigüedad.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01015',
    category: 'puerta',
    paintingImage: '01015.jpg',
    fieldPhoto: null,
    title: { ja: '理髪店の扉', en: 'The Barbershop Door', sp: 'La Puerta de la Peluquería' },
    impresion: {
      ja: '「PELUQUERÍA（理髪店）」のガラス扉越しに、店内の灯りとレースのカーテンがのぞく。生活の温度を感じる一枚。',
      en: 'Through the glass door of a "peluquería" (barbershop), the warm light inside and a lace curtain are just visible — a painting that carries the warmth of daily life.',
      sp: 'A través de la puerta de cristal de una peluquería, se vislumbran la luz cálida del interior y una cortina de encaje: un cuadro que transmite la calidez de la vida cotidiana.',
    },
    tecnica: {
      ja: '油彩。ガラスの反射とレースの透け感を細い筆致で描き分けている。',
      en: 'Oil on canvas; the reflections in the glass and the translucency of the lace are distinguished through fine brushwork.',
      sp: 'Óleo sobre lienzo; los reflejos del cristal y la transparencia del encaje se diferencian mediante pinceladas finas.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01017',
    category: 'puerta',
    paintingImage: '01017.jpg',
    fieldPhoto: null,
    title: { ja: '青い扉 1', en: 'Blue Door 1', sp: 'Puerta Azul 1' },
    impresion: {
      ja: '塗料が剥げかけた青い木戸。長年風雨にさらされてきた質感がそのまま画面に残る。',
      en: 'A blue wooden door with its paint peeling away, its texture left on the canvas just as decades of weather have left it.',
      sp: 'Una puerta de madera azul con la pintura desconchada, cuya textura queda en el lienzo tal como décadas de intemperie la han dejado.',
    },
    tecnica: {
      ja: '油彩。剥げた塗装の下地を何層も重ね塗りし、経年劣化の質感を再現している。',
      en: 'Oil on canvas; multiple layers are built up beneath the peeling paint to recreate the texture of years of wear.',
      sp: 'Óleo sobre lienzo; se superponen varias capas bajo la pintura desconchada para recrear la textura del desgaste con los años.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01031',
    category: 'puerta',
    paintingImage: '01031.jpg',
    fieldPhoto: null,
    title: { ja: '緑の扉 2', en: 'Green Door 2', sp: 'Puerta Verde 2' },
    impresion: {
      ja: '白壁と紺色の腰壁に挟まれた緑の扉。カンポの町でよく見る色使いの組み合わせを描く。',
      en: 'A green door framed between a white wall and a dark blue base — a color combination often seen throughout the streets of Campo.',
      sp: 'Una puerta verde enmarcada entre una pared blanca y un zócalo azul oscuro, una combinación de colores muy habitual en las calles de Campo.',
    },
    tecnica: {
      ja: '油彩。扉の金具や取っ手まで丁寧に描き込み、質感の違いを描き分けている。',
      en: "Oil on canvas; even the door's hardware and handle are carefully rendered, distinguishing each different texture.",
      sp: 'Óleo sobre lienzo; incluso los herrajes y el tirador de la puerta se representan con cuidado, diferenciando cada textura.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01032',
    category: 'puerta',
    paintingImage: '01032.jpg',
    fieldPhoto: null,
    title: { ja: '16番地の扉', en: 'Door No. 16', sp: 'Puerta Número 16' },
    impresion: {
      ja: '「16」の番地標識を掲げた、格子模様の重厚な扉。石造りの壁との質感の対比が印象的。',
      en: 'A heavy, paneled door beneath the house number "16," its texture striking against the surrounding stone wall.',
      sp: 'Una puerta pesada y con paneles, bajo el número "16" de la casa, cuya textura destaca frente al muro de piedra que la rodea.',
    },
    tecnica: {
      ja: '油彩。パネルの格子模様を規則正しい筆致で描き、周囲の壁は粗いタッチで仕上げている。',
      en: 'Oil on canvas; the paneled grid of the door is painted with regular, measured strokes, while the surrounding wall is finished in rougher touches.',
      sp: 'Óleo sobre lienzo; el enrejado de paneles de la puerta se pinta con trazos regulares y medidos, mientras el muro circundante se resuelve con toques más ásperos.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01033',
    category: 'puerta',
    paintingImage: '01033.jpg',
    fieldPhoto: null,
    title: { ja: '赤褐色の扉', en: 'Reddish-Brown Door', sp: 'Puerta Rojiza' },
    impresion: {
      ja: '白壁の中央に据えられた赤褐色の大きな扉。素材そのものの重みを感じさせる。',
      en: 'A large reddish-brown door set at the center of a white wall, conveying the sheer physical weight of the material itself.',
      sp: 'Una gran puerta de color rojizo situada en el centro de una pared blanca, que transmite el peso físico del propio material.',
    },
    tecnica: {
      ja: '油彩。木目に沿った縦の筆致を重ね、板戸らしい質感を表現している。',
      en: 'Oil on canvas; vertical strokes follow the grain of the wood, capturing the character of a plank door.',
      sp: 'Óleo sobre lienzo; las pinceladas verticales siguen la veta de la madera, captando el carácter de una puerta de tablones.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01034',
    category: 'puerta',
    paintingImage: '01034.jpg',
    fieldPhoto: null,
    title: { ja: 'アーチ形の青い扉', en: 'Arched Blue Door', sp: 'Puerta Azul en Arco' },
    impresion: {
      ja: 'アーチ型の戸口に収まる紺色の扉。控えめな装飾の石枠が扉を静かに引き立てる。',
      en: 'A dark blue door set within an arched doorway, its modestly decorated stone frame quietly setting it off.',
      sp: 'Una puerta azul oscuro situada dentro de un vano en arco, cuyo marco de piedra, discretamente decorado, la realza con sencillez.',
    },
    tecnica: {
      ja: '油彩。アーチの石組みを淡いグレーの陰影で立体的に描いている。',
      en: 'Oil on canvas; the stonework of the arch is modeled in soft gray shadow to suggest its three-dimensional form.',
      sp: 'Óleo sobre lienzo; la piedra del arco se modela con sombras grises suaves que sugieren su forma tridimensional.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01036',
    category: 'puerta',
    paintingImage: '01036.jpg',
    fieldPhoto: null,
    title: { ja: '1番地の扉', en: 'Door No. 1', sp: 'Puerta Número 1' },
    impresion: {
      ja: '「1」の番地標識を掲げた、幾何学的な模様の木戸。石積みの壁との素材感の違いが際立つ。',
      en: 'A wooden door with a geometric panel pattern beneath the house number "1," its material standing out sharply from the stone wall around it.',
      sp: 'Una puerta de madera con un patrón geométrico de paneles, bajo el número "1" de la casa, cuyo material contrasta con fuerza con el muro de piedra que la rodea.',
    },
    tecnica: {
      ja: '油彩。扉のパネル模様を几帳面な線で描き、壁は粗い筆致で対比させている。',
      en: 'Oil on canvas; the paneled pattern of the door is drawn with meticulous lines, set against the rougher brushwork of the wall.',
      sp: 'Óleo sobre lienzo; el patrón de paneles de la puerta se traza con líneas meticulosas, en contraste con las pinceladas más ásperas del muro.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01042',
    category: 'puerta',
    paintingImage: '01042.jpg',
    fieldPhoto: null,
    title: { ja: '金色の扉', en: 'Golden Door', sp: 'Puerta Dorada' },
    impresion: {
      ja: '金褐色に輝く鋲打ちの扉。差し込む光を受けて、木の温かみが際立つ。',
      en: 'A studded door glowing in golden brown, its warmth heightened by the light falling across it.',
      sp: 'Una puerta tachonada que brilla en tonos dorados y marrones, cuya calidez se intensifica bajo la luz que incide sobre ella.',
    },
    tecnica: {
      ja: '油彩。光の当たる部分を明るい黄色で、陰になる部分を落ち着いた褐色で塗り分けている。',
      en: 'Oil on canvas; the lit areas are rendered in bright yellow while the shadowed parts are painted in a muted brown.',
      sp: 'Óleo sobre lienzo; las zonas iluminadas se pintan en amarillo brillante, mientras las partes en sombra se resuelven en un marrón apagado.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01043',
    category: 'puerta',
    paintingImage: '01043.jpg',
    fieldPhoto: null,
    title: { ja: '錆びた鉄の門', en: 'Rusted Iron Gate', sp: 'Portón de Hierro Oxidado' },
    impresion: {
      ja: '木立に囲まれた鉄製の門扉。錆の赤褐色が経てきた歳月を静かに語る。',
      en: 'An iron gate framed by trees, its reddish-brown rust quietly speaking of the years it has weathered.',
      sp: 'Un portón de hierro enmarcado por árboles, cuyo óxido rojizo habla en silencio de los años que ha resistido.',
    },
    tecnica: {
      ja: '油彩。錆の質感をざらついた筆致で表現し、背景の緑とのコントラストを効かせている。',
      en: 'Oil on canvas; the texture of the rust is rendered in a coarse, granular brushwork, set off by the green of the background.',
      sp: 'Óleo sobre lienzo; la textura del óxido se representa con una pincelada áspera y granulada, resaltada por el verde del fondo.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'puerta-01046',
    category: 'puerta',
    paintingImage: '01046.jpg',
    fieldPhoto: null,
    title: { ja: '十字架のある壁', en: 'Wall with a Wooden Cross', sp: 'Muro con una Cruz' },
    impresion: {
      ja: '風化した石壁に掛けられた素朴な木の十字架と、小さな青い窓。静かな信仰の気配を伝える。',
      en: 'A simple wooden cross hung on a weathered stone wall, beside a small blue window — quietly conveying a sense of everyday faith.',
      sp: 'Una sencilla cruz de madera colgada en un muro de piedra desgastado, junto a una pequeña ventana azul, que transmite en silencio un sentido de fe cotidiana.',
    },
    tecnica: {
      ja: '油彩。石壁の凹凸をパレットナイフで厚く盛り上げ、十字架と窓は細い筆で対照的に描いている。',
      en: 'Oil on canvas; the unevenness of the stone wall is built up thickly with a palette knife, while the cross and window are painted in fine, contrasting strokes.',
      sp: 'Óleo sobre lienzo; la irregularidad del muro de piedra se construye con espátula en capas gruesas, mientras la cruz y la ventana se pintan con pinceladas finas y contrastantes.',
    },
    historia: pendingHistoria,
  },

  // ===== 風景（Paisajes） =====
  {
    id: 'campo-01010',
    category: 'campo',
    paintingImage: '01010.jpg',
    fieldPhoto: null,
    title: { ja: 'ラマンチャ荒野 2', en: 'La Mancha Wilderness 2', sp: 'Páramo de La Mancha 2' },
    impresion: {
      ja: '幾何学的なモザイクのように色分けされた荒野。乾いた大地の表情を色面の組み合わせで見せる。',
      en: 'A wilderness broken into color fields like a geometric mosaic, its dry earth expressed through the interplay of those shapes.',
      sp: 'Un páramo fragmentado en campos de color como un mosaico geométrico, cuya tierra seca se expresa mediante el juego de esas formas.',
    },
    tecnica: {
      ja: '油彩・40号。区画ごとに異なる色を平塗りし、畑の地割れをそのまま構図に生かしている。',
      en: 'Oil on canvas, No. 40; each plot is painted in a flat, distinct color, letting the actual divisions of the fields shape the composition.',
      sp: 'Óleo sobre lienzo, nº 40; cada parcela se pinta en un color plano y distinto, dejando que las divisiones reales de los campos definan la composición.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01019',
    category: 'campo',
    paintingImage: '01019.jpg',
    fieldPhoto: null,
    title: { ja: '麦畑 1', en: 'Wheat Field 1', sp: 'Trigal 1' },
    impresion: {
      ja: '地平線まで続く黄金色の麦畑。空との境界だけの、潔いほど単純な構図。',
      en: 'A golden wheat field stretching to the horizon, its composition pared down to almost nothing but the line where it meets the sky.',
      sp: 'Un trigal dorado que se extiende hasta el horizonte, con una composición reducida casi a nada más que la línea donde se encuentra con el cielo.',
    },
    tecnica: {
      ja: '油彩。麦の穂先を細かい筆致で無数に重ね、画面全体に質感を持たせている。',
      en: 'Oil on canvas; countless fine strokes build up the tips of the wheat, giving the whole surface a tactile texture.',
      sp: 'Óleo sobre lienzo; innumerables pinceladas finas construyen las espigas de trigo, dando textura táctil a toda la superficie.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01021',
    category: 'campo',
    paintingImage: '01021.jpg',
    fieldPhoto: null,
    title: { ja: '麦畑と赤土', en: 'Wheat Field with Red Earth', sp: 'Trigal con Tierra Roja' },
    impresion: {
      ja: '黄金色の畑の中に赤茶けた土が帯となって現れる。カンポの大地そのものの色を描く。',
      en: "Bands of reddish-brown earth emerge within the golden field, capturing the very color of Campo's own soil.",
      sp: 'Franjas de tierra rojiza emergen dentro del campo dorado, captando el propio color de la tierra de Campo.',
    },
    tecnica: {
      ja: '油彩。赤土の部分だけ絵具を厚く盛り、周囲の麦畑とのマチエールの差を出している。',
      en: 'Oil on canvas; only the red-earth passages are built up thickly, creating a difference in surface texture from the wheat around them.',
      sp: 'Óleo sobre lienzo; solo los pasajes de tierra roja se aplican con espesor, creando una diferencia de textura respecto al trigo que los rodea.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01022',
    category: 'campo',
    paintingImage: '01022.jpg',
    fieldPhoto: null,
    title: { ja: '紫の空の下の麦畑', en: 'Wheat Field Under a Violet Sky', sp: 'Trigal Bajo un Cielo Violeta' },
    impresion: {
      ja: '紫がかった重い空の下に広がる麦畑。嵐の前触れを思わせる緊張感がある。',
      en: 'A wheat field spreading beneath a heavy, violet-tinged sky, carrying a tension that suggests a coming storm.',
      sp: 'Un trigal que se extiende bajo un cielo pesado y teñido de violeta, con una tensión que sugiere una tormenta próxima.',
    },
    tecnica: {
      ja: '油彩。空を暗い紫でほぼ単色に塗り、麦畑の黄色との明度差を強調している。',
      en: 'Oil on canvas; the sky is painted in an almost monochrome dark violet, sharpening the contrast in value with the yellow of the field.',
      sp: 'Óleo sobre lienzo; el cielo se pinta en un violeta oscuro casi monocromo, acentuando el contraste de valor con el amarillo del campo.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01023',
    category: 'campo',
    paintingImage: '01023.jpg',
    fieldPhoto: null,
    title: { ja: '起伏する畑', en: 'Undulating Fields', sp: 'Campos Ondulantes' },
    impresion: {
      ja: 'なだらかな起伏を見せる畑のパッチワーク。色の違う区画が緩やかに連なる。',
      en: 'A patchwork of fields over gently rolling ground, plots of differing color linked together in a soft, continuous rhythm.',
      sp: 'Un mosaico de campos sobre un terreno suavemente ondulado, con parcelas de distinto color enlazadas en un ritmo suave y continuo.',
    },
    tecnica: {
      ja: '油彩。丘の起伏に沿って筆を運び、区画ごとの色の切り替えで地形を表している。',
      en: 'Oil on canvas; the brush follows the contours of the hills, and the shifting colors of each plot describe the shape of the land.',
      sp: 'Óleo sobre lienzo; el pincel sigue los contornos de las colinas, y los cambios de color de cada parcela describen la forma del terreno.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01024',
    category: 'campo',
    paintingImage: '01024.jpg',
    fieldPhoto: null,
    title: { ja: '地平線の麦畑', en: 'Wheat Field to the Horizon', sp: 'Trigal Hasta el Horizonte' },
    impresion: {
      ja: 'ほとんど装飾のない、地平線と麦畑だけの構図。カンポの広さをそのまま伝える。',
      en: 'An almost unadorned composition of nothing but the horizon and the wheat field, conveying the sheer vastness of Campo.',
      sp: 'Una composición casi sin adornos, con nada más que el horizonte y el trigal, que transmite la pura vastedad de Campo.',
    },
    tecnica: {
      ja: '油彩。画面の大部分を占める麦畑を、方向の異なる筆致を重ねて表現している。',
      en: 'Oil on canvas; the wheat field, which occupies most of the canvas, is built up through overlapping strokes running in different directions.',
      sp: 'Óleo sobre lienzo; el trigal, que ocupa la mayor parte del lienzo, se construye mediante pinceladas superpuestas en direcciones distintas.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01026',
    category: 'campo',
    paintingImage: '01026.jpg',
    fieldPhoto: null,
    title: { ja: '庭の大壺', en: 'Great Jar in the Garden', sp: 'Gran Vasija en el Jardín' },
    impresion: {
      ja: '緑の茂みを背に置かれた大きな素焼きの壺。奥に白い家の一角がのぞく、静物と風景が重なる一枚。',
      en: 'A large earthenware jar set against a green thicket, with a corner of a white house visible behind — a painting where still life and landscape overlap.',
      sp: 'Una gran vasija de barro colocada contra un matorral verde, con una esquina de una casa blanca visible al fondo: un cuadro donde la naturaleza muerta y el paisaje se superponen.',
    },
    tecnica: {
      ja: '油彩。壺の丸みを陰影のグラデーションで表し、素焼きの粗い質感を筆致で再現している。',
      en: 'Oil on canvas; the roundness of the jar is modeled through gradated shadow, its coarse earthenware texture recreated in the brushwork.',
      sp: 'Óleo sobre lienzo; la redondez de la vasija se modela mediante sombras graduadas, y su textura de barro basto se recrea en la pincelada.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01027',
    category: 'campo',
    paintingImage: '01027.jpg',
    fieldPhoto: null,
    title: { ja: '木立のある麦畑', en: 'Wheat Field with Scattered Trees', sp: 'Trigal con Árboles Dispersos' },
    impresion: {
      ja: '麦畑の中に点々と立つ緑の木立。単調になりがちな畑の風景にリズムを与える。',
      en: 'Green trees standing scattered across the wheat field, giving rhythm to what could otherwise be a monotonous expanse.',
      sp: 'Árboles verdes dispersos por el trigal, que dan ritmo a lo que de otro modo sería una extensión monótona.',
    },
    tecnica: {
      ja: '油彩。木立だけを濃い緑の点として置き、麦畑の黄色との対比を際立たせている。',
      en: 'Oil on canvas; the trees alone are placed as dense green touches, sharpening their contrast with the yellow of the wheat.',
      sp: 'Óleo sobre lienzo; los árboles se colocan como toques de verde denso, acentuando su contraste con el amarillo del trigo.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01029',
    category: 'campo',
    paintingImage: '01029.jpg',
    fieldPhoto: null,
    title: { ja: '層をなす畑', en: 'Layered Fields', sp: 'Campos en Capas' },
    impresion: {
      ja: '手前の黄金色から奥の赤茶色まで、畑の色が層を成して重なる。',
      en: 'From the gold in the foreground to the reddish brown further back, the colors of the fields overlap in layers.',
      sp: 'Desde el dorado en primer plano hasta el marrón rojizo más al fondo, los colores de los campos se superponen en capas.',
    },
    tecnica: {
      ja: '油彩。水平の色帯を何層にも重ね、遠近感と大地の広がりを同時に表している。',
      en: 'Oil on canvas; horizontal bands of color are layered one above another, expressing both depth and the sweep of the land at once.',
      sp: 'Óleo sobre lienzo; se superponen franjas horizontales de color, una sobre otra, expresando a la vez profundidad y la amplitud de la tierra.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01038',
    category: 'campo',
    paintingImage: '01038.jpg',
    fieldPhoto: null,
    title: { ja: 'オリーブ畑の丘', en: 'Hills of Olive Groves', sp: 'Colinas de Olivares' },
    impresion: {
      ja: '起伏する丘に整然と並ぶオリーブの木々。麦畑とはまた違うカンポの農業風景を描く。',
      en: "Olive trees lined up in neat rows across rolling hills, depicting a side of Campo's farmland quite different from its wheat fields.",
      sp: 'Olivos alineados con orden sobre colinas onduladas, que muestran una faceta de la agricultura de Campo distinta a la de los trigales.',
    },
    tecnica: {
      ja: '油彩。オリーブの木を小さな緑の点の連なりとして描き、丘の起伏を色の濃淡で表している。',
      en: 'Oil on canvas; the olive trees are painted as a chain of small green touches, while the rolling hills are shaped through gradations of tone.',
      sp: 'Óleo sobre lienzo; los olivos se pintan como una cadena de pequeños toques verdes, mientras las colinas onduladas se modelan mediante gradaciones de tono.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01048',
    category: 'campo',
    paintingImage: '01048.jpg',
    fieldPhoto: null,
    title: { ja: 'ひびの入った大壺', en: 'The Cracked Jar', sp: 'La Vasija Agrietada' },
    impresion: {
      ja: '大きなひびが入った素焼きの壺が、畑の中にぽつんと置かれている。時の流れを物語る静物。',
      en: 'A large earthenware jar, deeply cracked, standing alone in the middle of a field — a still life that speaks of the passage of time.',
      sp: 'Una gran vasija de barro, profundamente agrietada, de pie sola en medio de un campo: una naturaleza muerta que habla del paso del tiempo.',
    },
    tecnica: {
      ja: '油彩。壺のひび割れを暗い線で丁寧になぞり、内側の暗がりを深い色で表している。',
      en: 'Oil on canvas; the crack in the jar is carefully traced in dark line, its dark interior rendered in deep color.',
      sp: 'Óleo sobre lienzo; la grieta de la vasija se traza con cuidado en línea oscura, y su interior sombrío se representa en color profundo.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01049',
    category: 'campo',
    paintingImage: '01049.jpg',
    fieldPhoto: null,
    title: { ja: '丘陵の道', en: 'Hillside Path', sp: 'Camino en la Colina' },
    impresion: {
      ja: '点在する木々のそばを一筋の道が通る丘陵地。紫がかった空が静けさを添える。',
      en: "A single path winds past scattered trees across hilly ground, a violet-tinged sky lending the scene its quiet.",
      sp: 'Un solo camino serpentea junto a árboles dispersos sobre un terreno de colinas, con un cielo teñido de violeta que aporta quietud a la escena.',
    },
    tecnica: {
      ja: '油彩。道を細い明るい線で示し、周囲の斜面は複雑な色の重なりで表現している。',
      en: 'Oil on canvas; the path is indicated with a thin, bright line, while the surrounding slopes are built from a complex layering of color.',
      sp: 'Óleo sobre lienzo; el camino se indica con una línea fina y clara, mientras las laderas circundantes se construyen mediante una compleja superposición de color.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01050',
    category: 'campo',
    paintingImage: '01050.jpg',
    fieldPhoto: null,
    title: { ja: '夕暮れの村はずれ', en: 'Village Edge at Dusk', sp: 'Las Afueras del Pueblo al Atardecer' },
    impresion: {
      ja: 'ピンクから紫へと変わる夕空の下、遠くに小さく村影が見える。畑の広がりと村の存在が対比される。',
      en: 'Beneath a dusk sky shifting from pink to violet, a small village appears far in the distance — the vast fields set against the presence of the town.',
      sp: 'Bajo un cielo del atardecer que pasa del rosa al violeta, un pequeño pueblo aparece a lo lejos: la vastedad de los campos frente a la presencia del poblado.',
    },
    tecnica: {
      ja: '油彩。空の色の移り変わりをぼかしながら重ね、遠くの村は小さな明るい点で示している。',
      en: 'Oil on canvas; the changing colors of the sky are blended in overlapping layers, while the distant village is indicated with small, bright touches.',
      sp: 'Óleo sobre lienzo; los colores cambiantes del cielo se superponen difuminados, y el pueblo lejano se indica con pequeños toques luminosos.',
    },
    historia: pendingHistoria,
  },
  {
    id: 'campo-01051',
    category: 'campo',
    paintingImage: '01051.jpg',
    fieldPhoto: null,
    title: { ja: '二本の木のある畑', en: 'Field with Two Trees', sp: 'Campo con Dos Árboles' },
    impresion: {
      ja: '起伏する畑の中に、寄り添うように立つ二本の緑の木。静かな存在感を放つ。',
      en: 'Two green trees standing close together amid the rolling fields, holding a quiet presence of their own.',
      sp: 'Dos árboles verdes que se alzan juntos entre los campos ondulados, con una presencia serena propia.',
    },
    tecnica: {
      ja: '油彩。二本の木を濃い緑の塊として描き、畑の淡い色との明暗差を効かせている。',
      en: 'Oil on canvas; the two trees are painted as dense green masses, their contrast in value sharpened against the pale colors of the field.',
      sp: 'Óleo sobre lienzo; los dos árboles se pintan como masas de verde denso, con su contraste de valor acentuado frente a los colores pálidos del campo.',
    },
    historia: pendingHistoria,
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
    subtitle: '絵画 × 現地取材写真 — 風車・街並み・扉と窓・風景',
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
    subtitle: 'Paintings × On-Site Research Photographs — Windmills, Streets, Doors & Windows, Countryside',
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
    subtitle: 'Pinturas × Fotografías in situ — Molinos, Calles, Puertas y Ventanas, Paisajes',
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
