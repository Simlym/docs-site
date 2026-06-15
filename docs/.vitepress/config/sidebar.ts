import type { ThemeSidebarItem } from 'vitepress/theme'

export const sidebar: ThemeSidebarItem[] = [
  {
    text: 'OpenClaw',
    collapsed: false,
    items: [
      { text: '介绍', link: '/openclaw/' },
      { text: '快速开始', link: '/openclaw/quickstart' },
      { text: '核心特性', link: '/openclaw/features' },
      { text: '架构概览', link: '/openclaw/architecture' },
    ],
  },
  {
    text: 'Hermes Agent',
    collapsed: false,
    items: [{ text: '介绍', link: '/hermes-agent/' }],
  },
]
