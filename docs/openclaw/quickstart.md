# 快速开始

本页将带你用几分钟完成 OpenClaw 的安装、配置，并运行第一条命令。

::: warning 环境要求
- Node.js >= 18（用于部分工具插件）
- macOS / Linux / WSL，或 Windows 10+ 的 PowerShell
:::

## 1. 安装

### 通过安装脚本（推荐）

```bash
curl -fsSL https://example.com/openclaw/install.sh | bash
```

### 通过包管理器

```bash
# Homebrew (macOS / Linux)
brew install simlym/tap/openclaw

# 或使用 npm
npm install -g openclaw
```

安装完成后，验证版本：

```bash
openclaw --version
```

## 2. 初始化配置

在任意目录运行初始化命令，生成默认配置文件：

```bash
openclaw init
```

该命令会在 `~/.openclaw/` 下创建配置目录，包含：

```
~/.openclaw/
├── config.toml      # 主配置文件
├── tools/           # 自定义工具脚本
└── plugins/         # 插件目录
```

## 3. 运行第一条命令

列出当前可用的所有工具：

```bash
openclaw list
```

调用某个工具，例如查看系统信息：

```bash
openclaw sysinfo
```

## 4. 下一步

- 阅读 [核心特性](./features) 了解更多功能
- 查看 [架构概览](./architecture) 理解内部设计

::: tip 提示
更多命令请运行 `openclaw --help` 查看内置帮助。
:::
