// src/data/aboutNav.ts
// ヘッダーの「概要」ドロップダウンと、アバウト系ページ間の相互リンクで共有するナビゲーション定義

export type Lang = 'ja' | 'en' | 'sp';

export interface AboutNavLink {
  label: string;
  href: string;
}

export interface AboutNavGroup {
  label: string;
  children: AboutNavLink[];
}

export type AboutNavEntry = AboutNavLink | AboutNavGroup;

export const aboutNavLabel: Record<Lang, string> = {
  ja: '概要',
  en: 'Overview',
  sp: 'Resumen',
};

const labels: Record<Lang, Record<
  'intro' | 'contact' | 'takuma' | 'sachiko' | 'biography' | 'essay' | 'philosophy' | 'records'
  | 'campo' | 'campoCollection' | 'campoOverview' | 'campoWorks' | 'campoNotes',
  string
>> = {
  ja: {
    intro: 'はじめに',
    contact: '製作者と連絡先',
    takuma: '德永卓磨',
    sachiko: '德永幸子',
    biography: '経歴',
    essay: '随想',
    philosophy: '「白」の哲学',
    records: '記録',
    campo: 'カンポ・デ・クリプターナ',
    campoCollection: '★ 特別コレクション',
    campoOverview: '概要',
    campoWorks: '作品目録',
    campoNotes: '現地の記録',
  },
  en: {
    intro: 'Introduction',
    contact: 'Creator & Contact',
    takuma: 'Takuma Tokunaga',
    sachiko: 'Sachiko Tokunaga',
    biography: 'Biography',
    essay: 'Essays',
    philosophy: 'Philosophy of White',
    records: 'Records',
    campo: 'Campo de Criptana',
    campoCollection: '★ Special Collection',
    campoOverview: 'Overview',
    campoWorks: 'Paintings Catalog',
    campoNotes: 'Field Notes',
  },
  sp: {
    intro: 'Introducción',
    contact: 'Autor y contacto',
    takuma: 'Takuma Tokunaga',
    sachiko: 'Sachiko Tokunaga',
    biography: 'Biografía',
    essay: 'Ensayos',
    philosophy: 'Filosofía del Blanco',
    records: 'Registros',
    campo: 'Campo de Criptana',
    campoCollection: '★ Colección Especial',
    campoOverview: 'Resumen',
    campoWorks: 'Catálogo de obras',
    campoNotes: 'Notas de campo',
  },
};

export function getAboutNav(lang: Lang, base: string): AboutNavEntry[] {
  const L = labels[lang] ?? labels.ja;
  const p = `${base}/${lang}/about`;

  return [
    { label: L.intro, href: `${p}/intro/` },
    { label: L.contact, href: `${p}/contact/` },
    {
      label: L.takuma,
      children: [
        { label: L.biography, href: `${p}/takuma-biography/` },
        { label: L.essay, href: `${p}/` },
        { label: L.philosophy, href: `${p}/philosophy/` },
        { label: L.records, href: `${p}/takuma-records/` },
      ],
    },
    {
      label: L.sachiko,
      children: [
        { label: L.biography, href: `${p}/sachiko-biography/` },
        { label: L.records, href: `${p}/sachiko-records/` },
      ],
    },
    {
      label: L.campo,
      children: [
        { label: L.campoCollection, href: `${p}/campo-collection/` },
        { label: L.campoOverview, href: `${p}/campo-de-criptana/` },
        { label: L.campoWorks, href: `${p}/campo-works/` },
        { label: L.campoNotes, href: `${p}/campo-notes/` },
      ],
    },
  ];
}
