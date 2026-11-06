import { defineConfig } from 'vitepress'
import sidebarData from './sidebar.json' with { type: 'json' }

const base = process.env.DOCS_BASE || '/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'ZAKICIT PNB v2',
  description: 'Documentation for ZAKICIT PNB v2 — Growtopia automation script for CGT/BooLua.',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Settings', link: '/settings' },
      { text: 'API', link: '/api/globals' },
      { text: 'Structs', link: '/structs' },
      { text: 'Examples', link: '/examples' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Examples', link: '/examples' },
        ],
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Settings reference', link: '/settings' },
          { text: 'Loader', link: '/loader' },
        ],
      },
      { text: 'CGT Globals', collapsed: false, items: sidebarData.api },
      {
        text: 'Types',
        items: [
          { text: 'Structs', link: '/structs' },
          { text: 'Enums', link: '/enums' },
        ],
      },
      {
        text: 'Modules',
        collapsed: false,
        items: [
          { text: 'PNB Core', link: '/modules/pnb' },
          { text: 'Smart Mag Intel', link: '/modules/smartmag' },
          { text: 'Renting System', link: '/modules/renting' },
          { text: 'Web Monitor', link: '/modules/monitor' },
          { text: 'Paywall Manager', link: '/modules/paywall' },
          { text: 'GUI', link: '/modules/gui' },
        ],
      },
    ],
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AkhmadZaki14/zakicit' },
    ],
    footer: {
      message: 'ZAKICIT PNB v2 — script for CGT/BooLua. Unofficial.',
      copyright: 'AkhmadZaki14 · Community use only.',
    },
  },
})
