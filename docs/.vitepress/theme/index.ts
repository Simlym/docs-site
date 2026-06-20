import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import OpenClawStructure from './components/OpenClawStructure.vue'

// 在默认文档主题基础上扩展：注册自定义页面组件。
// 用法：在 .md 中 import 或直接以全局组件标签使用。
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('OpenClawStructure', OpenClawStructure)
  },
} satisfies Theme
