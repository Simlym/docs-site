import type { ThemeNavItem } from 'vitepress/theme'

export const navbar: ThemeNavItem[] = [
  {
    text: 'OpenClaw',
    items: [
      { text: '介绍', link: '/openclaw/' },
      { text: '快速开始', link: '/openclaw/quickstart' },
      { text: '核心特性', link: '/openclaw/features' },
      { text: '架构概览', link: '/openclaw/architecture' },
      { text: '项目结构', link: '/openclaw/structure' },
    ],
  },
  { text: 'Hermes Agent', link: '/hermes-agent/' },
  {
    text: 'GitHub',
    link: 'https://github.com/Simlym/docs-site',
  },
]
