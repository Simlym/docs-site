import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

// 通过环境变量 BASE_PATH 控制站点根路径，同时支持：
//   - 本服务器 Nginx 部署（根路径，默认值 BASE_PATH=/）
//   - GitHub Pages 项目站点（BASE_PATH=/docs-site/）
const BASE_PATH = process.env.BASE_PATH || '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'OpenClaw 文档',
  description: 'OpenClaw、Hermes Agent 等项目的介绍文档',
  base: BASE_PATH,
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.ico` }],
  ],

  themeConfig: {
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新于',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    nav: navbar,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Simlym/docs-site' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2024-present Simlym',
    },
  },
})
