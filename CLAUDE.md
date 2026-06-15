# 项目：docs-site

## 目标
用 VitePress 搭建一个文档站，托管 OpenClaw、Hermes Agent 等项目的介绍文档。
- 部署到本服务器 Nginx 静态托管
- 同时推送 GitHub 做备份
- GitHub Pages 也能构建

## 技术栈
- VitePress
- 纯静态 HTML 构建

## 目录结构要求
```
docs/
├── .vitepress/
│   └── config/          # VitePress 配置分块
│       ├── index.ts     # 主配置
│       ├── navbar.ts    # 导航栏
│       └── sidebar.ts   # 侧边栏
├── openclaw/
│   ├── index.md         # OpenClaw 首页介绍
│   ├── quickstart.md    # 快速开始
│   ├── features.md      # 核心特性
│   └── architecture.md  # 架构概览
├── hermes-agent/
│   └── index.md         # Hermes Agent（占位）
└── index.md             # 站点首页
```

## 内容要求
- OpenClaw 首页：介绍 OpenClaw 是什么、核心价值、使用场景
- 快速开始：简洁的安装/配置步骤
- 核心特性：列出主要功能点
- 架构概览：高层次的架构说明
- 中文内容

## 执行步骤
1. 初始化 package.json，安装 vitepress
2. 创建上述目录结构
3. 编写所有配置和内容文件
4. 构建测试确保能跑通
