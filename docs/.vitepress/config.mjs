import { defineConfig } from 'vitepress'

const base = process.env.DOCS_BASE || '/'

export default defineConfig({
  base,
  lang: 'id-ID',
  title: 'ZAKICIT CGT',
  description: 'Dokumentasi simpel ZAKICIT PNB untuk CreativeGrowtopia (CGT)',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'Cara PNB', link: '/guide/pnb' },
      { text: 'Settings', link: '/settings' },
    ],
    sidebar: [
      {
        text: 'Panduan',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Cara Pakai PNB', link: '/guide/pnb' },
        ],
      },
      {
        text: 'Pengaturan',
        items: [
          { text: 'Daftar Settings', link: '/settings' },
        ],
      },
    ],
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AkhmadZaki14/zakicit' },
    ],
    footer: {
      message: 'ZAKICIT PNB v2 — Simpel Docs',
      copyright: 'AkhmadZaki14',
    },
  },
})
