// トップページの「コンセプト・ストーリー」「ローンチング展示会」「スペイン特設サイト」「ご感想・ご意見」の文言
// 展示会チラシ（2026年11月 ローンチング展示会）の趣旨に合わせた区画

// スペイン・カンポ・デ・クリプターナ特設サイト
export const CAMPO_LP_URL = 'https://campo-criptana-lp.vercel.app/';

// ご感想・ご意見の受付先。Googleフォームを作ったら FEEDBACK_FORM_URL に貼ると、
// トップのフォームが「アンケートに回答する」ボタンに切り替わる（空のままならメール作成画面を開く）
export const FEEDBACK_FORM_URL = '';
export const FEEDBACK_EMAIL = 'info@second-penguin.com';

// 展示会の会期（日本時間）。終了後はトップの案内に「終了しました」と表示し、入口のお知らせを隠す
export const EXHIBITION = {
  start: '2026-11-12T10:00:00+09:00',
  end:   '2026-11-15T14:00:00+09:00',
  // Googleマップの検索語（地図の埋め込みと「地図を開く」に使う）
  mapQuery: 'ゲストハウス萬家 神戸市灘区城之内通4-4-10',
  // Googleカレンダーに追加（初日〜最終日の終日予定）
  calendarDates: '20261112/20261116',
};

export const launch = {
  ja: {
    storyEyebrow: 'STORY',
    storyHeading: '神戸とスペイン、\n二つの故郷を描き抜いた画家の軌跡',
    storyLead:    '父、卓磨が70年近く描き続けてきた約200点の作品たち。',
    storyBody: [
      '港町・神戸に育ち、異人館や造船所のドックを描くことから始まった油彩の道。1973年、列車の窓から見えたラ・マンチャの白い風車に心を奪われてからは、スペインの小さな町カンポ・デ・クリプターナが、もう一つの故郷になりました。',
      'このオンライン美術館は、二つの故郷で描かれた作品を一点ずつ記録し、いつでも、どこからでもご覧いただけるようにするためのものです。',
    ],
    storySign:    '徳永 良雄（画家の息子）',
    storyStats: [
      { num: '約200', unit: '点', label: '描き続けてきた作品' },
      { num: '70',    unit: '年近く', label: '絵筆をとり続けた歳月' },
      { num: '2',     unit: 'つ', label: '故郷：神戸とスペイン' },
    ],

    exEyebrow:  'LAUNCH EXHIBITION',
    exHeading:  'ローンチング展示会のご案内',
    exLead:     'オンライン美術館の公開を記念して、神戸で展示会を開きます。画面ではお伝えしきれない油彩の質感を、ぜひ原画でご覧ください。',
    exBadge:    'ローンチング展示会',
    exBadgeWhen:'2026.11.12 — 11.15　神戸・萬家ギャラリー',
    exRows: [
      { label: '日時', value: '2026年11月12日（木）〜 15日（日）', sub: '10:00〜18:00（最終日は14:00まで）' },
      { label: '会場', value: 'ゲストハウス萬家（MAYA）併設ギャラリー', sub: '神戸市灘区城之内通り4-4-10' },
      { label: '内容', value: '一部の原画などの展示', sub: '一部の複製などの販売' },
    ],
    exMap:      'Googleマップで開く',
    exCalendar: 'カレンダーに追加',
    exCalTitle: '徳永卓磨 オンライン美術館 ローンチング展示会',
    exMapTitle: '会場の地図',
    exEnded:    'この展示会は終了しました。ご来場いただいた皆さま、ありがとうございました。',
    navExhibition: '展示会',

    lpEyebrow:  'TWO HOMELANDS',
    lpHeading:  'もう一つの故郷、\nラ・マンチャへ',
    lpBody:     '風車の丘、白壁の家並み、そして画家と町との半世紀の絆。スペイン・カンポ・デ・クリプターナの特設サイトでは、町の魅力と日西文化交流の取り組みを、日本語とスペイン語でご紹介しています。',
    lpCta:      'カンポ・デ・クリプターナ特設サイトへ',
    lpShort:    'スペイン特設サイト',
    navLp:      'スペイン特設サイト',

    fbEyebrow:  'FEEDBACK',
    fbHeading:  'ご感想・ご意見をお寄せください',
    fbLead:     'オンライン美術館のご感想や、作品の管理・AIの活用など今後の展開についてのご意見を募集しています。いただいた声は、これからの美術館づくりの参考にさせていただきます。',
    fbFormButton: 'アンケートに回答する（Googleフォーム）',
    fbName:     'お名前（任意）',
    fbEmail:    'メールアドレス（返信をご希望の場合）',
    fbTopic:    'ご意見の種類',
    fbTopics:   ['オンライン美術館の感想', '作品管理・AI活用など将来の展開について', '展示会について', 'その他'],
    fbMessage:  'ご感想・ご意見',
    fbPlaceholder: '例：好きだった作品／見づらかったところ／AIによる作品解説や多言語の音声ガイドがあれば使ってみたい など',
    fbSubmit:   '送信する',
    fbNote:     '送信ボタンを押すと、入力内容が入ったメールの作成画面が開きます。そのまま送信してください。',
    fbError:    'ご感想・ご意見の欄をご記入ください。',
    fbSubject:  '【徳永アートミュージアム】ご感想・ご意見',
    navFeedback:'ご感想・ご意見',
  },
  en: {
    storyEyebrow: 'STORY',
    storyHeading: 'Kobe and Spain: a painter who captured his two homelands',
    storyLead:    'Some 200 works my father, Takuma, has painted over nearly 70 years.',
    storyBody: [
      'His path in oil painting began in the port city of Kobe, where he grew up painting the Western-style mansions and the shipyard docks. In 1973 he was captivated by the white windmills of La Mancha seen from a train window, and the small Spanish town of Campo de Criptana became his second home.',
      'This online museum records, one by one, the works painted in his two homelands, so that anyone can see them anytime, from anywhere.',
    ],
    storySign:    'Yoshio Tokunaga, the artist\'s son',
    storyStats: [
      { num: '~200', unit: '', label: 'works painted' },
      { num: '70',   unit: 'yrs', label: 'nearly, with the brush' },
      { num: '2',    unit: '', label: 'homelands: Kobe and Spain' },
    ],

    exEyebrow:  'LAUNCH EXHIBITION',
    exHeading:  'Launch Exhibition',
    exLead:     'To celebrate the opening of the online museum, we are holding an exhibition in Kobe. Come and see the texture of the oil paint in the originals, something a screen cannot fully convey.',
    exBadge:    'Launch Exhibition',
    exBadgeWhen:'12–15 Nov 2026 · Kobe',
    exRows: [
      { label: 'Dates', value: 'Thu 12 – Sun 15 November 2026', sub: '10:00–18:00 (until 14:00 on the last day)' },
      { label: 'Venue', value: 'Gallery at Guesthouse MAYA (萬家)', sub: '4-4-10 Jonouchi-dori, Nada-ku, Kobe' },
      { label: 'On show', value: 'Selected original paintings', sub: 'Selected reproductions for sale' },
    ],
    exMap:      'Open in Google Maps',
    exCalendar: 'Add to calendar',
    exCalTitle: 'Takuma Tokunaga Online Museum — Launch Exhibition',
    exMapTitle: 'Venue map',
    exEnded:    'This exhibition has ended. Thank you to everyone who came.',
    navExhibition: 'Exhibition',

    lpEyebrow:  'TWO HOMELANDS',
    lpHeading:  'To his second home in La Mancha',
    lpBody:     'Windmill hills, whitewashed streets, and half a century of friendship between the painter and the town. The Campo de Criptana website introduces the town and the Japan–Spain cultural exchange in Japanese and Spanish.',
    lpCta:      'Visit the Campo de Criptana website',
    lpShort:    'Spain website',
    navLp:      'Spain Site',

    fbEyebrow:  'FEEDBACK',
    fbHeading:  'Share your thoughts',
    fbLead:     'We welcome your impressions of the online museum, and your ideas on its future, such as caring for the collection and using AI. Your voice will help shape the museum.',
    fbFormButton: 'Answer the survey (Google Forms)',
    fbName:     'Name (optional)',
    fbEmail:    'Email (if you would like a reply)',
    fbTopic:    'Topic',
    fbTopics:   ['Impressions of the online museum', 'Future plans: collection care, AI and more', 'The exhibition', 'Other'],
    fbMessage:  'Your comments',
    fbPlaceholder: 'e.g. works you liked / anything hard to see / whether you would use AI commentary or a multilingual audio guide',
    fbSubmit:   'Send',
    fbNote:     'Pressing the button opens your email app with your message filled in. Please send it as is.',
    fbError:    'Please write your comments.',
    fbSubject:  '[Tokunaga Art Museum] Feedback',
    navFeedback:'Feedback',
  },
  sp: {
    storyEyebrow: 'HISTORIA',
    storyHeading: 'Kobe y España: la trayectoria de un pintor que retrató sus dos patrias',
    storyLead:    'Unas 200 obras que mi padre, Takuma, ha pintado durante casi 70 años.',
    storyBody: [
      'Su camino en la pintura al óleo comenzó en Kobe, la ciudad portuaria donde creció pintando las casas de extranjeros y los diques de los astilleros. En 1973 quedó cautivado por los molinos blancos de La Mancha que vio desde la ventanilla de un tren, y el pequeño pueblo de Campo de Criptana se convirtió en su segunda patria.',
      'Este museo en línea registra, una a una, las obras pintadas en sus dos patrias, para que cualquiera pueda verlas en cualquier momento y desde cualquier lugar.',
    ],
    storySign:    'Yoshio Tokunaga, hijo del pintor',
    storyStats: [
      { num: '~200', unit: '', label: 'obras pintadas' },
      { num: '70',   unit: 'años', label: 'casi, con el pincel' },
      { num: '2',    unit: '', label: 'patrias: Kobe y España' },
    ],

    exEyebrow:  'EXPOSICIÓN DE LANZAMIENTO',
    exHeading:  'Exposición de lanzamiento',
    exLead:     'Para celebrar la apertura del museo en línea, organizamos una exposición en Kobe. Venga a ver en los originales la textura del óleo, que una pantalla no puede transmitir del todo.',
    exBadge:    'Exposición de lanzamiento',
    exBadgeWhen:'12–15 nov. 2026 · Kobe',
    exRows: [
      { label: 'Fechas', value: 'Del jueves 12 al domingo 15 de noviembre de 2026', sub: '10:00–18:00 (el último día hasta las 14:00)' },
      { label: 'Lugar', value: 'Galería de la Guesthouse MAYA (萬家)', sub: '4-4-10 Jonouchi-dori, Nada-ku, Kobe' },
      { label: 'Contenido', value: 'Selección de obras originales', sub: 'Venta de algunas reproducciones' },
    ],
    exMap:      'Abrir en Google Maps',
    exCalendar: 'Añadir al calendario',
    exCalTitle: 'Museo en línea Takuma Tokunaga — Exposición de lanzamiento',
    exMapTitle: 'Mapa del lugar',
    exEnded:    'Esta exposición ha finalizado. Gracias a todos los que nos visitaron.',
    navExhibition: 'Exposición',

    lpEyebrow:  'DOS PATRIAS',
    lpHeading:  'Hacia su segunda patria, La Mancha',
    lpBody:     'La sierra de los molinos, las calles encaladas y medio siglo de amistad entre el pintor y el pueblo. La web de Campo de Criptana presenta el pueblo y el intercambio cultural Japón–España en japonés y en español.',
    lpCta:      'Visitar la web de Campo de Criptana',
    lpShort:    'Web de Campo de Criptana',
    navLp:      'Web de Campo',

    fbEyebrow:  'OPINIONES',
    fbHeading:  'Comparta su opinión',
    fbLead:     'Agradecemos sus impresiones sobre el museo en línea y sus ideas sobre su futuro, como la conservación de la colección o el uso de la IA. Sus opiniones nos ayudarán a construir el museo.',
    fbFormButton: 'Responder la encuesta (Google Forms)',
    fbName:     'Nombre (opcional)',
    fbEmail:    'Correo electrónico (si desea respuesta)',
    fbTopic:    'Tema',
    fbTopics:   ['Impresiones del museo en línea', 'El futuro: gestión de la colección, IA, etc.', 'La exposición', 'Otro'],
    fbMessage:  'Sus comentarios',
    fbPlaceholder: 'p. ej.: obras que le gustaron / algo difícil de ver / si usaría comentarios de obras con IA o una audioguía multilingüe',
    fbSubmit:   'Enviar',
    fbNote:     'Al pulsar el botón se abrirá su programa de correo con el mensaje ya escrito. Envíelo tal cual.',
    fbError:    'Escriba sus comentarios, por favor.',
    fbSubject:  '[Museo de Arte Tokunaga] Opiniones',
    navFeedback:'Opiniones',
  },
};
