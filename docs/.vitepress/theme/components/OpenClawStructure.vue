<template>
  <div class="oc-structure">
<header>
      <h1>OpenClaw 项目目录结构与整体架构</h1>
      <p>可视化导览：核心引擎、插件生态、原生客户端、共享包与基础设施。基于当前仓库快照统计。</p>
      <a class="github-link" href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        github.com/openclaw/openclaw
      </a>
    </header>

    <div class="container">

      <section id="overview">
        <h2><span class="icon">📊</span> 顶层概览</h2>
        <div class="metric-grid">
          <div class="metric-card"><div class="value">494万+</div><div class="label">核心代码行数</div></div>
          <div class="metric-card"><div class="value">17,894</div><div class="label">核心源码文件</div></div>
          <div class="metric-card"><div class="value">144</div><div class="label">官方插件</div></div>
          <div class="metric-card"><div class="value">21</div><div class="label">共享包</div></div>
          <div class="metric-card"><div class="value">6</div><div class="label">原生客户端</div></div>
          <div class="metric-card"><div class="value">158 MB</div><div class="label">核心代码体积</div></div>
        </div>
        <div class="note">统计口径：排除 <code>node_modules</code>、<code>.git</code>、<code>dist</code>、<code>.generated</code>、lock 文件与超大变更日志后的可人工阅读源码。统计时间：2026-06-20。</div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>目录</th><th>说明</th><th class="num">文件数</th><th class="num">代码行数</th><th class="num">体积</th></tr></thead>
            <tbody>
    <tr><td><strong>src/</strong></td><td>Gateway 与核心引擎源码</td><td class="num">8,921</td><td class="num">2,618,212</td><td class="num">2.5 MB</td></tr>
  
    <tr><td><strong>extensions/</strong></td><td>官方插件（通道、模型、工具等）</td><td class="num">5,980</td><td class="num">1,512,001</td><td class="num">1.4 MB</td></tr>
  
    <tr><td><strong>apps/</strong></td><td>macOS / iOS / Android 原生应用</td><td class="num">889</td><td class="num">213,751</td><td class="num">0.2 MB</td></tr>
  
    <tr><td><strong>scripts/</strong></td><td>构建、E2E、发布、运维脚本</td><td class="num">729</td><td class="num">208,259</td><td class="num">0.2 MB</td></tr>
  
    <tr><td><strong>ui/</strong></td><td>Web 控制面板（Control UI）</td><td class="num">420</td><td class="num">197,368</td><td class="num">0.2 MB</td></tr>
  
    <tr><td><strong>test/</strong></td><td>跨模块集成测试与工具</td><td class="num">547</td><td class="num">127,736</td><td class="num">0.1 MB</td></tr>
  
    <tr><td><strong>packages/</strong></td><td>共享库与协议包</td><td class="num">408</td><td class="num">66,330</td><td class="num">0.1 MB</td></tr>
  </tbody>
          </table>
        </div>
      </section>

      <section id="charts">
        <h2><span class="icon">🍰</span> 代码分布</h2>
        <div class="chart-grid">
          <div class="chart-card"><h4>代码行数占比（顶层）</h4><div class="chart-row"><div class="chart-label">src</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:53.0%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">2,618,212</div></div><div class="chart-row"><div class="chart-label">extensions</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:30.6%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">1,512,001</div></div><div class="chart-row"><div class="chart-label">apps</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:4.3%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">213,751</div></div><div class="chart-row"><div class="chart-label">scripts</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:4.2%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">208,259</div></div><div class="chart-row"><div class="chart-label">ui</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:4.0%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">197,368</div></div><div class="chart-row"><div class="chart-label">test</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:2.6%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">127,736</div></div><div class="chart-row"><div class="chart-label">packages</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:1.3%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">66,330</div></div></div>
          <div class="chart-card"><h4>文件数占比（顶层）</h4><div class="chart-row"><div class="chart-label">src</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:49.9%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">8,921</div></div><div class="chart-row"><div class="chart-label">extensions</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:33.4%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">5,980</div></div><div class="chart-row"><div class="chart-label">apps</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:5.0%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">889</div></div><div class="chart-row"><div class="chart-label">scripts</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:4.1%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">729</div></div><div class="chart-row"><div class="chart-label">test</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:3.1%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">547</div></div><div class="chart-row"><div class="chart-label">ui</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:2.3%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">420</div></div><div class="chart-row"><div class="chart-label">packages</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:2.3%;background:linear-gradient(90deg,#2ec4b6,#5d7cfa)"></div></div><div class="chart-value">408</div></div></div>
        </div>
      </section>

      <section id="core">
        <h2><span class="icon">⚙️</span> 核心引擎：src/</h2>
        <p style="color: var(--text-muted);"><code>src/</code> 占仓库代码量 53%，承载 Gateway 主程序、Agent 循环、CLI、插件 SDK 入口与通道抽象。</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>模块</th><th>职责</th><th class="num">文件数</th><th class="num">代码行数</th><th class="bar-cell">占比</th></tr></thead>
            <tbody><tr><td><strong>agents</strong></td><td>Agent 运行时、执行循环、工具调用</td><td class="num">1,809</td><td class="num">660,318</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:100.0%"></div></div><small style="color:var(--text-muted)">27.7%</small></td></tr><tr><td><strong>gateway</strong></td><td>Gateway WebSocket 服务器、协议处理</td><td class="num">721</td><td class="num">290,497</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:44.0%"></div></div><small style="color:var(--text-muted)">12.2%</small></td></tr><tr><td><strong>plugins</strong></td><td>插件加载、清单解析、生命周期</td><td class="num">627</td><td class="num">220,782</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:33.4%"></div></div><small style="color:var(--text-muted)">9.3%</small></td></tr><tr><td><strong>infra</strong></td><td>数据库、配置、日志、进程、网络、沙箱</td><td class="num">782</td><td class="num">215,692</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:32.7%"></div></div><small style="color:var(--text-muted)">9.1%</small></td></tr><tr><td><strong>commands</strong></td><td>命令系统：命令树、鉴权、执行、状态</td><td class="num">692</td><td class="num">209,932</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:31.8%"></div></div><small style="color:var(--text-muted)">8.8%</small></td></tr><tr><td><strong>auto-reply</strong></td><td>自动回复 / 入站消息路由</td><td class="num">556</td><td class="num">193,372</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:29.3%"></div></div><small style="color:var(--text-muted)">8.1%</small></td></tr><tr><td><strong>cli</strong></td><td>openclaw CLI 命令实现</td><td class="num">451</td><td class="num">133,959</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:20.3%"></div></div><small style="color:var(--text-muted)">5.6%</small></td></tr><tr><td><strong>config</strong></td><td>配置加载、校验、schema、迁移</td><td class="num">383</td><td class="num">104,429</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:15.8%"></div></div><small style="color:var(--text-muted)">4.4%</small></td></tr><tr><td><strong>plugin-sdk</strong></td><td>插件 SDK 入口</td><td class="num">584</td><td class="num">68,761</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:10.4%"></div></div><small style="color:var(--text-muted)">2.9%</small></td></tr><tr><td><strong>channels</strong></td><td>通道抽象、入站/出站管线</td><td class="num">379</td><td class="num">64,826</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:9.8%"></div></div><small style="color:var(--text-muted)">2.7%</small></td></tr><tr><td><strong>cron</strong></td><td>定时任务、调度、存储</td><td class="num">210</td><td class="num">52,545</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:8.0%"></div></div><small style="color:var(--text-muted)">2.2%</small></td></tr><tr><td><strong>skills</strong></td><td>Skill 系统</td><td class="num">115</td><td class="num">31,156</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:4.7%"></div></div><small style="color:var(--text-muted)">1.3%</small></td></tr><tr><td><strong>secrets</strong></td><td>密钥解析与 provider 集成</td><td class="num">127</td><td class="num">29,837</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:4.5%"></div></div><small style="color:var(--text-muted)">1.3%</small></td></tr><tr><td><strong>acp</strong></td><td>ACP 实现</td><td class="num">98</td><td class="num">24,854</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:3.8%"></div></div><small style="color:var(--text-muted)">1.0%</small></td></tr><tr><td><strong>tui</strong></td><td>终端 UI</td><td class="num">62</td><td class="num">21,947</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:3.3%"></div></div><small style="color:var(--text-muted)">0.9%</small></td></tr><tr><td><strong>llm</strong></td><td>LLM 调用、模型路由、流式</td><td class="num">82</td><td class="num">21,044</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:3.2%"></div></div><small style="color:var(--text-muted)">0.9%</small></td></tr><tr><td><strong>daemon</strong></td><td>守护进程模式</td><td class="num">71</td><td class="num">19,797</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:3.0%"></div></div><small style="color:var(--text-muted)">0.8%</small></td></tr><tr><td><strong>tasks</strong></td><td>任务系统</td><td class="num">59</td><td class="num">18,233</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:2.8%"></div></div><small style="color:var(--text-muted)">0.8%</small></td></tr></tbody>
          </table>
        </div>
        <h3>关键入口</h3>
        <div class="flow">
          <div class="flow-step" data-step="1"><strong>CLI 入口</strong><p><code>src/entry.ts</code></p></div>
          <div class="flow-step" data-step="2"><strong>Gateway 服务器</strong><p><code>src/gateway/</code></p></div>
          <div class="flow-step" data-step="3"><strong>Agent 执行循环</strong><p><code>src/agents/</code></p></div>
          <div class="flow-step" data-step="4"><strong>插件加载器</strong><p><code>src/plugins/</code></p></div>
          <div class="flow-step" data-step="5"><strong>通道抽象</strong><p><code>src/channels/</code></p></div>
          <div class="flow-step" data-step="6"><strong>插件 SDK</strong><p><code>src/plugin-sdk/</code></p></div>
        </div>
      </section>

      <section id="core-breakdown">
        <h2><span class="icon">🧩</span> 核心子目录功能拆解</h2>
        <p style="color: var(--text-muted); margin-bottom: 24px;">从功能视角展开 9 个核心模块的直接子目录：每个子目录一句话说明用途，并列出 3–5 个关键文件，便于快速定位代码。</p>
        
    <div class="breakdown-block">
      <div class="breakdown-header">src/agents/ — Agent 生命周期、运行时、会话、工具、认证、沙箱</div>
      <div class="breakdown-grid">
        
          <div class="breakdown-card">
            <div class="breakdown-name">agent-hooks/</div>
            <div class="breakdown-desc">会话上下文压缩（compaction）与微压缩的运行时扩展钩子，负责在压缩前保护会话质量并安全剪枝。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>compaction-safeguard.ts, context-pruning.ts, compaction-instructions.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">auth-profiles/</div>
            <div class="breakdown-desc">统一管理平台认证画像（OAuth / API key / token），负责凭证刷新、外部 CLI 凭证覆盖、运行时状态分类与持久化。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>oauth-manager.ts, external-auth.ts, credential-state.ts, store.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">cli-runner/</div>
            <div class="breakdown-desc">准备并执行基于 CLI 后端（Claude CLI、Codex、Gemini CLI 等）的 Agent 运行，包括 MCP 配置打包与会话准备。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>execute.ts, prepare.ts, bundle-mcp.ts, helpers.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">command/</div>
            <div class="breakdown-desc">编排单次 Agent 命令的运行，协调 embedded/CLI/ACP 运行时，并将结果投递到出向通道。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>attempt-execution.ts, delivery.ts, session-store.ts, session.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">embedded-agent-helpers/</div>
            <div class="breakdown-desc">为 embedded-agent 提供通用辅助：错误分类、引导上下文构建、故障转移匹配、provider 错误模式、轮次规范化。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>errors.ts, bootstrap.ts, failover-matches.ts, provider-error-patterns.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">embedded-agent-runner/</div>
            <div class="breakdown-desc">核心 embedded-agent 运行实现：转录压缩、上下文引擎维护、工具策略生效、扩展工厂构建。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>compact.ts, context-engine-maintenance.ts, effective-tool-policy.ts, extensions.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">harness/</div>
            <div class="breakdown-desc">原生 Agent Harness 的注册、选择、生命周期包装与 native hook 中继。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>selection.ts, lifecycle.ts, native-hook-relay.ts, registry.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">modes/</div>
            <div class="breakdown-desc">Agent 运行模式相关代码，主要为交互式终端 UI 模式（主题、快捷键、差异渲染）。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>interactive/theme/theme.ts, interactive/components/diff.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">runtime-plan/</div>
            <div class="breakdown-desc">为一次 embedded-agent 运行构建“已准备的运行时计划”，集中管理 provider 钩子、认证、工具策略、传输、投递与可观测性。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>build.ts, tools.ts, auth.ts, types.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">runtime/</div>
            <div class="breakdown-desc">OpenClaw 自有的 Agent 运行时 facade，将 agent-core 接入 plugin-sdk LLM 运行时。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>index.ts, proxy.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">sandbox/</div>
            <div class="breakdown-desc">Docker / SSH / Browser 沙箱生命周期管理与文件系统桥接，为 Agent 工具执行提供隔离环境。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>browser.ts, docker.ts, fs-bridge.ts, config.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">schema/</div>
            <div class="breakdown-desc">Agent 工具 schema 辅助：TypeBox 公共字段、Gemini 不兼容关键词清洗。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>clean-for-gemini.ts, typebox.ts, string-enum.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">sessions/</div>
            <div class="breakdown-desc">Agent 会话运行时：会话对象、模型注册表、包/资源管理器、加载器与事件总线。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>agent-session.ts, agent-session-runtime.ts, model-registry.ts, package-manager.ts, resource-loader.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">templates/</div>
            <div class="breakdown-desc">存放 Agent 模板文件（如心跳模板）。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>HEARTBEAT.md</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">tools/</div>
            <div class="breakdown-desc">内置 Agent 工具：gateway、cron、image_generate、goal 等通用工具及共享契约。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>common.ts, gateway-tool.ts, cron-tool.ts, image-generate-tool.ts, goal-tools.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">utils/</div>
            <div class="breakdown-desc">Agent 侧通用工具库：辅助二进制、git 解析、图片缩放、语法高亮、路径规范化。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>tools-manager.ts, git.ts, image-resize.ts, syntax-highlight.ts</div>
          </div>
        
      </div>
    </div>
  
        
    <div class="breakdown-block">
      <div class="breakdown-header">src/gateway/ — Gateway 协议方法、RPC handler、HTTP/WebSocket 服务器</div>
      <div class="breakdown-grid">
        
          <div class="breakdown-card">
            <div class="breakdown-name">methods/</div>
            <div class="breakdown-desc">定义并注册 Gateway 核心 RPC 方法，维护方法名称、授权 scope、启动可用性与写策略表。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>core-descriptors.ts, registry.ts, descriptor.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">server-methods/</div>
            <div class="breakdown-desc">实现面向 UI/操作员的 RPC handler：agent、chat、agents、channels、artifacts 等。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>agent.ts, chat.ts, agents.ts, channels.ts, artifacts.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">server/</div>
            <div class="breakdown-desc">Gateway HTTP/WebSocket 服务器、插件 HTTP 路由、健康/就绪检查、hook 请求处理。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>plugins-http.ts, ws-connection.ts, hooks-request-handler.ts, health-state.ts, readiness.ts</div>
          </div>
        
          <div class="breakdown-card">
            <div class="breakdown-name">test/</div>
            <div class="breakdown-desc">Gateway 会话测试共享夹具。</div>
            <div class="breakdown-files"><strong>关键文件：</strong>server-sessions.test-helpers.ts</div>
          </div>
        
      </div>
    </div>
  
      </section>

      <section id="agents-deep">
        <h2><span class="icon">🤖</span> src/agents/ 详解</h2>
        <p style="color: var(--text-muted); margin-bottom: 24px;">这是 OpenClaw 最重的代码层（66 万行）。下面按子目录深入说明：它解决什么问题、核心概念、生命周期、关键不变式与核心入口文件。</p>
        
    <div class="deep-dive-card" id="agents-0">
      <div class="deep-dive-header">
        <span class="deep-dive-num">1</span>
        <span class="deep-dive-title">agent-hooks/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">在 Agent 运行期间注入可扩展的生命周期钩子，核心关注点是上下文压缩（compaction）的安全兜底与请求级上下文裁剪（context pruning）。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">compaction-safeguard 扩展、context-pruning 扩展、按 SessionManager 身份做键的 WeakMap 运行时注册表。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">在压缩阶段介入：先由 safeguard 生成结构化摘要、审计摘要质量、修复 tool_use/tool_result 配对；context-pruning 仅在当前请求内存上下文中做微压缩，不持久化修改会话历史。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">自定义压缩指令按 event → runtime config → 默认常量优先级解析并截断到约 800 字符；session-manager 注册表要求同一个 SessionManager 实例跨调用保持稳定。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">compaction-safeguard.ts, context-pruning.ts, session-manager-runtime-registry.ts, compaction-instructions.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-1">
      <div class="deep-dive-header">
        <span class="deep-dive-num">2</span>
        <span class="deep-dive-title">auth-profiles/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">解决 Agent 与网关运行时的身份认证凭据解析、刷新与持久化问题，尤其聚焦 OAuth 与外部 CLI 凭证。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">OAuthManagerAdapter、ResolvedOAuthAccess、AuthProfileStore、凭据状态机（AuthCredentialReasonCode / TokenExpiryState）、RuntimeExternalOAuthProfile。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">模型调用前由 oauth-manager.ts 解析可用 access token，过期时通过全局文件锁刷新，并在安全条件下把外部 CLI 凭证覆盖/镜像回主存储。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">OAuth 刷新使用文件锁避免并发刷新冲突；credential-state.ts 统一判断凭据缺失、过期、无效时间戳与未解析引用；外部 auth 覆盖仅在配置允许且身份匹配时才能持久化。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">oauth-manager.ts, credential-state.ts, external-auth.ts, identity.ts, doctor.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-2">
      <div class="deep-dive-header">
        <span class="deep-dive-num">3</span>
        <span class="deep-dive-title">cli-runner/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">负责把 OpenClaw 请求转发给外部 CLI 后端（Claude CLI、Codex、Gemini CLI 等）执行。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">RunCliAgentParams / CliBackendPreparedExecution、准备-执行两阶段、bundle-mcp.ts 对 bundled MCP 配置的适配、claude-live-session.ts 的实时会话路由。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">先由 prepare.ts 构建后端配置、prompt、引导上下文、MCP 循环回环与 auth epoch；再由 execute.ts 启动 CLI、解析 JSONL 流、捕获工具调用、处理 env 隔离与诊断。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">bundled MCP 配置会把 OpenClaw loopback URL 中的动态端口归一化，用于 resume 哈希；execute 路径区分普通执行与 side-question 等一次性模式，避免污染主会话。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">prepare.ts, execute.ts, bundle-mcp.ts, types.ts, claude-live-session.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-3">
      <div class="deep-dive-header">
        <span class="deep-dive-num">4</span>
        <span class="deep-dive-title">command/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">一条 Agent 命令从接收到交付的中央编排层，连接会话解析、运行时选择与渠道投递。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">AgentCommandOpts、AgentRunContext、attempt-execution（一次尝试）、delivery（结果投递）、session 解析。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">session.ts 解析 session id/key/存储；run-context.ts 合并 channel/account/thread 等运行上下文；attempt-execution.ts 在 embedded / CLI / ACP 三种运行时中选择并执行；delivery.ts 把结果归一化并发往 outbound 渠道。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">abort 信号只会在 restart 原因下传播，避免普通取消误清 CLI 会话；投递阶段会调用 resolveAgentDeliveryPlanWithSessionRoute 并处理 suppress/failed 等 payload 级别状态。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">attempt-execution.ts, delivery.ts, session.ts, run-context.ts, types.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-4">
      <div class="deep-dive-header">
        <span class="deep-dive-num">5</span>
        <span class="deep-dive-title">embedded-agent-helpers/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">为嵌入式 Agent 运行提供可复用的辅助逻辑，主要处理引导上下文、错误分类与模型/provider 特殊行为。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">EmbeddedContextFile、FailoverReason、provider 错误模式（provider-error-patterns.ts）、用户可见错误文本清理（sanitize-user-facing-text.ts）以及 thinking/turns 工具。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">在 embedded runner 准备阶段，bootstrap.ts 构建并清理注入到会话的引导文件；在模型调用失败或异常时，errors.ts 将原始错误分类为 auth/rate_limit/billing/server_error 等可恢复/不可恢复原因。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">会剥离 Claude 风格的 thought_signature 字段，避免 Gemini 等模型拿到非 base64 签名；错误格式化会优先使用 provider 特定文案，再回退到通用文案。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">bootstrap.ts, errors.ts, provider-error-patterns.ts, thinking.ts, turns.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-5">
      <div class="deep-dive-header">
        <span class="deep-dive-num">6</span>
        <span class="deep-dive-title">embedded-agent-runner/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">OpenClaw 内置嵌入式 Agent 运行时的实现核心，负责一次完整模型调用/工具执行回合。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">EmbeddedAgentExecutionPhase、transcript compaction（compact.ts）、最终有效工具策略（effective-tool-policy.ts）、上下文引擎异步维护（context-engine-maintenance.ts）、扩展工厂（extensions.ts）。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">运行前建立计划 → 经过 execution-phase 里程碑 → 准备 provider 认证与工具 → 调用模型 → 执行工具 → 把结果写回 transcript → 必要时触发压缩或上下文引擎维护任务。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">工具策略最后会再过滤一次 bundled MCP/LSP 工具，确保 group/sender/subagent 策略生效；上下文引擎维护被放进独立任务队列，避免阻塞主回合。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">compact.ts, execution-phase.ts, effective-tool-policy.ts, context-engine-maintenance.ts, extensions.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-6">
      <div class="deep-dive-header">
        <span class="deep-dive-num">7</span>
        <span class="deep-dive-title">harness/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">提供可插拔的 Agent 运行时 harness 抽象，让同一个 agent.run 可以派发给 OpenClaw 内置运行时、Codex、Copilot 等外部 harness。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">AgentHarness 接口、进程级 harness 注册表（registry.ts）、生命周期诊断包装器（lifecycle.ts）、harness 策略解析（policy.ts）、运行时插件加载器（runtime-plugin.ts）。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">先由 policy.ts 根据 provider/model/config/session-key 解析应使用的 harness id；runtime-plugin.ts 确保 harness 所需插件已安装；registry.ts 返回对应 harness；lifecycle.ts 包装一次尝试并输出诊断事件。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">注册表使用全局 Symbol 状态，保证多次 import / 测试重置 / 插件懒加载共享同一张表；builtin-openclaw harness 通过同一接口暴露嵌入式 runner。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">lifecycle.ts, registry.ts, policy.ts, runtime-plugin.ts, builtin-openclaw.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-7">
      <div class="deep-dive-header">
        <span class="deep-dive-num">8</span>
        <span class="deep-dive-title">modes/interactive/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">负责交互式终端 UI 的展示辅助：差异对比、按键提示、主题与颜色。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">components/ 与 theme/ 下的 diff 渲染器、keybinding 提示、visual-truncate 以及 theme loader/schema。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">由 interactive 模式在渲染代码审查、消息、工具结果时调用，不直接参与 Agent 运行，仅影响 TUI 呈现。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">diff 渲染先做行级解析，再做词级高亮，并去掉行首空白处的反色；theme loader 校验 JSON schema、解析变量、支持自定义主题文件热更新。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">components/diff.ts, components/keybinding-hints.ts, components/visual-truncate.ts, theme/theme.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-8">
      <div class="deep-dive-header">
        <span class="deep-dive-num">9</span>
        <span class="deep-dive-title">runtime-plan/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">把一次 Agent 运行所需的所有运行时决策打包成一个可复用的 AgentRuntimePlan。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">AgentRuntimePlan、auth forwarding plan（auth.ts）、delivery/outcome plan、工具 schema 策略（tools.ts）、AgentRuntimeFailoverReason。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">在 embedded-agent 一次尝试启动前调用，先解析 provider runtime handle、认证别名、系统提示词变换、工具 schema 归一化、传输参数与回退策略，供后续 runner 消费。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">auth 转发只有在 provider/harness 解析后的 auth owner 与会话 auth profile 一致时才允许；工具归一化会保留 owner 元数据，避免 cloned definition 丢失策略与展示信息。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">build.ts, auth.ts, tools.ts, types.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-9">
      <div class="deep-dive-header">
        <span class="deep-dive-num">10</span>
        <span class="deep-dive-title">runtime/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">OpenClaw 对底层 agent-core 的运行时外观层（facade），并额外提供代理流能力。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">Agent extends CoreAgent、openClawAgentCoreRuntime（把 completeSimple / streamSimple 注入 agent-core）、proxy.ts 的 ProxyMessageEventStream。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">构造 Agent 时固定使用 OpenClaw 的运行时依赖；当应用通过 Gateway 代理 LLM 调用时，使用 proxy.ts 解析服务器下发的精简事件流。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">index.ts 统一导出 agent-core 的 API 与代理工具，保证上层只依赖 src/agents/runtime/ 而不直接引用 packages/agent-core。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">index.ts, proxy.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-10">
      <div class="deep-dive-header">
        <span class="deep-dive-num">11</span>
        <span class="deep-dive-title">sandbox/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">负责沙箱后端的注册、配置、Docker/浏览器容器生命周期以及文件系统桥接。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">SandboxBackendFactory / SandboxBackendHandle、Docker 底层命令（docker.ts）、Docker 后端实现（docker-backend.ts）、浏览器容器（browser.ts）、文件桥接（fs-bridge.ts）、配置解析（config.ts）。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">根据 agent 配置解析沙箱范围 → 创建/复用 Docker 容器 → 通过 backend handle 执行命令 → 可选启动浏览器容器 → 工具通过 fs-bridge 读写挂载目录。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">fs-bridge 按容器路径最长匹配挂载点，避免嵌套 agent/skill 挂载被更宽泛的 workspace root 吞掉；Docker 命令在 Windows 上通过 resolveWindowsSpawnProgram 处理执行路径。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">backend.ts, docker.ts, docker-backend.ts, browser.ts, fs-bridge.ts, config.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-11">
      <div class="deep-dive-header">
        <span class="deep-dive-num">12</span>
        <span class="deep-dive-title">schema/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">处理模型/工具 schema 的 provider 特定清洗与通用 TypeBox 构造。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">Gemini 不支持的 JSON Schema 关键字集合（GEMINI_UNSUPPORTED_SCHEMA_KEYWORDS）、clean-for-gemini.ts 的 anyOf/oneOf 扁平化、TypeBox 频道目标/整数辅助（typebox.ts）、string-enum.ts。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">在把工具 schema 发往 provider API 前调用，把 TypeBox 生成的 schema 裁剪为 provider 可接受子集。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">Gemini 清洗会移除 patternProperties、$ref、format、minLength 等关键字，并把 const 转为 enum；typebox.ts 统一了 channel target 与可选正整数/非负整数字段。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">clean-for-gemini.ts, typebox.ts, string-enum.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-12">
      <div class="deep-dive-header">
        <span class="deep-dive-num">13</span>
        <span class="deep-dive-title">sessions/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">Agent 会话生命周期的中心模块，管理会话创建、模型选择、工具加载、资源加载、扩展与转录持久化。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">AgentSession 类、SessionManager JSONL 会话树、ModelRegistry / ModelResolver、扩展系统（extensions/）、AuthStorage、BashExecutor、SDK 工厂（sdk.ts）。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">sdk.ts 选择模型并创建 AgentSession；AgentSession 与 SessionManager 协同读写 JSONL 转录；model-resolver.ts 解析用户输入的模型引用；bash 与扩展在回合中执行。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">会话转录通过 SessionManager.appendMessage 写入以保证 parentId 链正确；模型匹配支持 provider/modelId 与裸 id，并拒绝跨 provider 的歧义匹配。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">agent-session.ts, session-manager.ts, sdk.ts, model-resolver.ts, bash-executor.ts, index.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-13">
      <div class="deep-dive-header">
        <span class="deep-dive-num">14</span>
        <span class="deep-dive-title">templates/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">仅包含一个心跳模板文件 HEARTBEAT.md，用于周期性 heartbeat 自动回复。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">可编辑的 heartbeat 任务模板。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">文件内容为空或仅含注释时，跳过 heartbeat API 调用；填入任务后，Agent 会按模板周期检查状态。由 cron/heartbeat 调度器在需要触发 heartbeat 时加载，作为系统提示的一部分。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">模板编辑直接影响 heartbeat 行为，空模板禁用 heartbeat。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">HEARTBEAT.md</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-14">
      <div class="deep-dive-header">
        <span class="deep-dive-num">15</span>
        <span class="deep-dive-title">test-helpers/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">提供 Agent 相关单元/集成测试所需的固定装置、mock 与快速工具桩。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">fast-openclaw-tools / fast-coding-tools、sandbox 配置 fixtures、assistant message fixtures、subagent gateway stub、embedded runner e2e fixtures。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">仅在测试代码中导入，用于模拟会话、工具、Gateway 调用与沙箱上下文，避免真实启动完整运行时。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">不进入生产路径；fixture 应保持与真实运行时相同的类型契约。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">fast-openclaw-tools.ts, sandbox-agent-config-fixtures.ts, agent-message-fixtures.ts, subagent-gateway.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-15">
      <div class="deep-dive-header">
        <span class="deep-dive-num">16</span>
        <span class="deep-dive-title">tools/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">实现 Agent 可直接调用的内置工具集合。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">通用工具契约（common.ts）、Gateway 调用辅助（gateway.ts）、cron-tool、image-tool、agents-list-tool、agent-step、heartbeat-response-tool、chat-history-text。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">在 sdk.ts 创建会话时注册工具；每次模型工具调用由 runtime 分发到对应 execute；gateway 类工具负责与本地 Gateway 鉴权通信，cron/image 工具则委托给 cron 调度器或媒体理解 provider。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">common.ts 提供 AnyAgentTool、ToolInputError、JSON 结果与图片清理；gateway.ts 使用最小权限 operator scope 并校验 gatewayUrl 协议/路径/凭证格式。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">common.ts, gateway.ts, cron-tool.ts, image-tool.ts, agents-list-tool.ts, agent-step.ts, heartbeat-response-tool.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="agents-16">
      <div class="deep-dive-header">
        <span class="deep-dive-num">17</span>
        <span class="deep-dive-title">utils/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">存放 Agent 模块使用的小型通用工具函数，避免把无关逻辑塞进核心类。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">tools-manager.ts（下载/定位 fd、ripgrep 等辅助二进制）、child-process.ts（处理 Windows 继承 stdio 导致的 close 挂起）、paths.ts、image-resize.ts、ansi.ts、syntax-highlight.ts。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">在工具执行、图片上传、bash 子进程退出时被调用，属于支撑代码。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">tools-manager.ts 优先查找系统二进制，缺失时从 GitHub release 下载；child-process.ts 在 exit 后等待 stdio 结束并主动 destroy pipe，避免 Windows 守护进程句柄导致永远挂起。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">tools-manager.ts, child-process.ts, paths.ts, image-resize.ts, ansi.ts</div></div>
      </div>
    </div>
  
      </section>

      <section id="gateway-deep">
        <h2><span class="icon">🌐</span> src/gateway/ 详解</h2>
        <p style="color: var(--text-muted); margin-bottom: 24px;">Gateway 是 OpenClaw 的控制平面，所有客户端/节点通过 WebSocket 接入。这里深入说明其 4 个子目录的职责与实现要点。</p>
        
    <div class="deep-dive-card" id="gateway-0">
      <div class="deep-dive-header">
        <span class="deep-dive-num">1</span>
        <span class="deep-dive-title">methods/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">定义 Gateway 所有 RPC 方法的可调度描述符与注册表，是方法鉴权、列表、分发的前提。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">GatewayMethodDescriptor、GatewayMethodScope（operator.*、node、dynamic）、GatewayMethodOwner、核心方法策略表 CORE_GATEWAY_METHOD_SPECS、createGatewayMethodRegistry。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">Gateway 启动时由 core、channel、plugin 等方法提供者生成 descriptor 输入，注册表归一化后提供按名查找 handler/scope/startup availability 的能力；WebSocket 消息处理器据此做鉴权并 dispatch。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">插件声明的方法会经过 normalizePluginGatewayMethodScope，防止插件用宽松 scope 削弱受保护的核心方法名；重复方法名会直接抛错，避免鉴权与 handler 不一致。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">descriptor.ts, core-descriptors.ts, registry.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="gateway-1">
      <div class="deep-dive-header">
        <span class="deep-dive-num">2</span>
        <span class="deep-dive-title">server-methods/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">实现 Gateway 面向客户端的 RPC 处理器集合，是 UI/CLI/operator 与后端交互的实际接口。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">agent.ts（agent.run / agent.wait / agent.reset 等）、chat.ts（chat.send/history/abort/inject/metadata）、agents.ts（agent 列表、创建、删除、文件读写）、channels.ts（channel 启动/停止/状态/登出）、config.ts（配置 get/set/patch/apply/schema）、devices.ts（设备配对/token 管理）、artifacts.ts（会话产物列表/下载）、approval-shared.ts（执行/插件审批共享逻辑）。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">WebSocket 连接鉴权后，消息处理器按方法名路由到对应 handler；handler 校验参数、读取/修改配置或会话、调用 Agent 命令，最后通过 respond 返回结果或错误。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">transcript 必须通过 SessionManager.appendMessage 写入，禁止直接写缺 parentId 的 type: "message" JSONL；config write 涉及 secret redaction、base hash 校验与 reload 计划。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">agent.ts, chat.ts, agents.ts, channels.ts, config.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="gateway-2">
      <div class="deep-dive-header">
        <span class="deep-dive-num">3</span>
        <span class="deep-dive-title">server/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">负责 Gateway HTTP/WebSocket 服务器的监听、连接管理、插件 HTTP 路由、健康与就绪检查。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">ws-connection.ts（WebSocket 握手、鉴权、presence、消息 handler 挂载）、plugins-http.ts（插件注册的 HTTP 路由/upgrade 分发）、readiness.ts（基于 channel 健康与启动 sidecar 的就绪探测）、health-state.ts（gateway snapshot 与 health 版本广播）、hooks.ts（外部 hook HTTP 转 agent 运行或唤醒事件）、http-listen.ts（带 EADDRINUSE 重试的端口监听）、event-loop-health.ts。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">启动时监听端口 → 接受 WS → 完成握手与鉴权 → 挂载消息 handler 调用 server-methods；并行的插件 HTTP 路由处理外部/内部 HTTP 请求； readiness/health 周期性向客户端广播 presence 与状态。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">WS 握手阶段限制 pre-auth payload 大小并记录限流日志；插件 HTTP 路由会把 gateway auth 映射为运行时 operator scope；readiness 在 channel 重启 Pending 期间保持绿色，避免健康检查误杀正常重启。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">ws-connection.ts, plugins-http.ts, readiness.ts, health-state.ts, hooks.ts</div></div>
      </div>
    </div>
  
    <div class="deep-dive-card" id="gateway-3">
      <div class="deep-dive-header">
        <span class="deep-dive-num">4</span>
        <span class="deep-dive-title">test/</span>
      </div>
      <div class="deep-dive-body">
        <div class="deep-dive-row"><span class="deep-dive-label">解决什么问题</span><div class="deep-dive-text">提供 Gateway 会话相关测试的共享装置与 mock。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心概念</span><div class="deep-dive-text">server-sessions.test-helpers.ts，封装了 startGatewayServerHarness、session 清理 mock、bootstrap 缓存 mock 与生命周期 hook mock。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">生命周期</span><div class="deep-dive-text">仅被 gateway server 与 server-methods 的测试导入，用于构造受控的 Gateway 测试环境，不进入生产路径。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">关键不变式</span><div class="deep-dive-text">测试辅助保持与真实 Gateway 相同的启动顺序与鉴权流程。</div></div>
        <div class="deep-dive-row"><span class="deep-dive-label">核心入口</span><div class="deep-dive-text deep-dive-files">test/server-sessions.test-helpers.ts</div></div>
      </div>
    </div>
  
      </section>

      <section id="extensions">
        <h2><span class="icon">🔌</span> 插件生态：extensions/</h2>
        <p style="color: var(--text-muted);">OpenClaw 的功能几乎完全插件化。<code>extensions/</code> 包含 144 个插件，占仓库代码量约 31%。</p>
        <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 24px;">
          <p style="margin: 0 0 8px; color: var(--text-muted);"><strong style="color: var(--text)">插件分类：</strong></p>
          <p style="margin: 0;">
            <span class="tag">通道</span> Discord、Telegram、Slack、WhatsApp、Signal、iMessage、Matrix、Teams、Line、Zalo、Feishu 等
            <span class="tag">模型</span> OpenAI、Anthropic、xAI、Ollama、Groq、DeepSeek、Azure OpenAI 等
            <span class="tag">工具</span> Browser、Web Search、Image Generation、Memory Core、Voice Call 等
            <span class="tag">集成</span> Codex、Google、Copilot、ACPX 等
          </p>
        </div>
        <h3>代码量 Top 15 插件</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>插件</th><th>说明</th><th class="num">文件数</th><th class="num">代码行数</th><th class="bar-cell">占比</th></tr></thead>
            <tbody><tr><td><strong>discord</strong></td><td>Discord 通道</td><td class="num">536</td><td class="num">119,277</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:100.0%"></div></div><small style="color:var(--text-muted)">11.9%</small></td></tr><tr><td><strong>codex</strong></td><td>OpenAI Codex harness</td><td class="num">206</td><td class="num">115,210</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:96.6%"></div></div><small style="color:var(--text-muted)">11.5%</small></td></tr><tr><td><strong>telegram</strong></td><td>Telegram 通道</td><td class="num">346</td><td class="num">109,382</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:91.7%"></div></div><small style="color:var(--text-muted)">10.9%</small></td></tr><tr><td><strong>qa-lab</strong></td><td>QA 实验室自动化</td><td class="num">253</td><td class="num">93,223</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:78.2%"></div></div><small style="color:var(--text-muted)">9.3%</small></td></tr><tr><td><strong>matrix</strong></td><td>Matrix 通道</td><td class="num">333</td><td class="num">87,221</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:73.1%"></div></div><small style="color:var(--text-muted)">8.7%</small></td></tr><tr><td><strong>browser</strong></td><td>浏览器工具</td><td class="num">334</td><td class="num">71,883</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:60.3%"></div></div><small style="color:var(--text-muted)">7.2%</small></td></tr><tr><td><strong>slack</strong></td><td>Slack 通道</td><td class="num">276</td><td class="num">64,192</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:53.8%"></div></div><small style="color:var(--text-muted)">6.4%</small></td></tr><tr><td><strong>memory-core</strong></td><td>内置记忆系统</td><td class="num">145</td><td class="num">63,705</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:53.4%"></div></div><small style="color:var(--text-muted)">6.4%</small></td></tr><tr><td><strong>feishu</strong></td><td>飞书通道</td><td class="num">203</td><td class="num">57,949</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:48.6%"></div></div><small style="color:var(--text-muted)">5.8%</small></td></tr><tr><td><strong>whatsapp</strong></td><td>WhatsApp 通道</td><td class="num">264</td><td class="num">49,358</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:41.4%"></div></div><small style="color:var(--text-muted)">4.9%</small></td></tr><tr><td><strong>msteams</strong></td><td>Microsoft Teams</td><td class="num">184</td><td class="num">42,077</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:35.3%"></div></div><small style="color:var(--text-muted)">4.2%</small></td></tr><tr><td><strong>qqbot</strong></td><td>QQ 机器人</td><td class="num">219</td><td class="num">35,649</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:29.9%"></div></div><small style="color:var(--text-muted)">3.6%</small></td></tr><tr><td><strong>voice-call</strong></td><td>语音通话</td><td class="num">118</td><td class="num">31,351</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:26.3%"></div></div><small style="color:var(--text-muted)">3.1%</small></td></tr><tr><td><strong>imessage</strong></td><td>iMessage 通道</td><td class="num">146</td><td class="num">31,071</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:26.0%"></div></div><small style="color:var(--text-muted)">3.1%</small></td></tr><tr><td><strong>qa-matrix</strong></td><td>Matrix QA 场景</td><td class="num">63</td><td class="num">30,154</td><td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:25.3%"></div></div><small style="color:var(--text-muted)">3.0%</small></td></tr></tbody>
          </table>
        </div>
      </section>

      <section id="plugin-trees">
        <h2><span class="icon">🌳</span> 插件子目录展开</h2>
        <p style="color: var(--text-muted); margin-bottom: 20px;">以代码量最大的两个通道插件为例，展示其 2 级目录结构。</p>
        
          <details class="tree-details">
            <summary><span class="tree-title">extensions/discord/</span><span class="tree-desc">Discord 通道插件</span></summary>
            <div class="tree-content"><pre class="tree"><code>├── account-inspect-api.ts
├── action-runtime-api.ts
├── api.ts
├── channel-config-api.ts
├── channel-plugin-api.ts
├── config-api.ts
├── configured-state.ts
├── contract-api.ts
├── directory-contract-api.ts
├── doctor-contract-api.ts
├── index.test.ts
├── index.ts
├── legacy-state-migrations-api.ts
├── npm-shrinkwrap.json
├── openclaw.plugin.json
├── package.json
├── README.md
├── runtime-api.actions.ts
├── runtime-api.lookup.ts
├── runtime-api.monitor.ts
├── runtime-api.send.ts
├── runtime-api.threads.ts
├── runtime-api.ts
├── runtime-setter-api.ts
├── secret-contract-api.ts
├── security-audit-contract-api.ts
├── security-contract-api.ts
├── session-binding-contract-api.ts
├── session-key-api.ts
├── setup-entry.test.ts
├── setup-entry.ts
├── setup-plugin-api.ts
├── src/
│   ├── account-inspect.test.ts
│   ├── account-inspect.ts
│   ├── account-token-inspect.ts
│   ├── accounts.test.ts
│   ├── accounts.ts
│   ├── actions/
│   │   ├── handle-action.guild-admin.ts
│   │   ├── handle-action.test.ts
│   │   ├── handle-action.ts
│   │   ├── runtime.guild.ts
│   │   ├── runtime.messaging.messages.ts
│   │   ├── runtime.messaging.reactions.ts
│   │   ├── runtime.messaging.runtime.ts
│   │   ├── runtime.messaging.send.ts
│   │   ├── runtime.messaging.shared.ts
│   │   ├── runtime.messaging.ts
│   │   ├── runtime.moderation-shared.ts
│   │   ├── runtime.moderation.authz.test.ts
│   │   ├── runtime.moderation.ts
│   │   ├── runtime.presence.test.ts
│   │   ├── runtime.presence.ts
│   │   ├── runtime.shared.ts
│   │   ├── runtime.test.ts
│   │   └── runtime.ts
│   ├── api-barrel.test.ts
│   ├── api.test.ts
│   ├── api.ts
│   ├── approval-handler.runtime.test.ts
│   ├── approval-handler.runtime.ts
│   ├── approval-native.test.ts
│   ├── approval-native.ts
│   ├── approval-runtime.ts
│   ├── approval-shared.ts
│   ├── audit-core.ts
│   ├── audit.test.ts
│   ├── audit.ts
│   ├── channel-actions.contract.test.ts
│   ├── channel-actions.runtime.ts
│   ├── channel-actions.test.ts
│   ├── channel-actions.ts
│   ├── channel-api.ts
│   ├── channel.conversation.test.ts
│   ├── channel.conversation.ts
│   ├── channel.loaders.ts
│   ├── channel.message-adapter.test.ts
│   ├── channel.runtime.ts
│   ├── channel.setup.ts
│   ├── channel.test.ts
│   ├── channel.ts
│   ├── chunk.test.ts
│   ├── chunk.ts
│   ├── client.proxy.test.ts
│   ├── client.test.ts
│   ├── client.ts
│   ├── component-custom-id.ts
│   ├── components-registry.ts
│   ├── components.builders.ts
│   ├── components.modal.ts
│   ├── components.parse.ts
│   ├── components.test.ts
│   ├── components.ts
│   ├── components.types.ts
│   ├── config-schema.test.ts
│   ├── config-schema.ts
│   ├── config-ui-hints.ts
│   ├── conversation-identity.ts
│   ├── delivery-retry.ts
│   ├── directory-cache.ts
│   ├── directory-config.ts
│   ├── directory-contract.test.ts
│   ├── directory-live.test.ts
│   ├── directory-live.ts
│   ├── doctor-contract.ts
│   ├── doctor-shared.ts
│   ├── doctor.test.ts
│   ├── doctor.ts
│   ├── draft-chunking.test.ts
│   ├── draft-chunking.ts
│   ├── draft-stream.test.ts
│   ├── draft-stream.ts
│   ├── durable-delivery.test.ts
│   ├── error-body.ts
│   ├── exec-approvals.test.ts
│   ├── exec-approvals.ts
│   ├── gateway-logging.test.ts
│   ├── gateway-logging.ts
│   ├── group-policy.ts
│   ├── guilds.ts
│   ├── inbound-context.contract.test.ts
│   ├── inbound-event-delivery.ts
│   ├── interactive-dispatch.ts
│   ├── internal/
│   │   ├── api.commands.ts
│   │   ├── api.guild.ts
│   │   ├── api.interactions.ts
│   │   ├── api.messages.ts
│   │   ├── api.reactions.ts
│   │   ├── api.test.ts
│   │   ├── api.ts
│   │   ├── api.users.ts
│   │   ├── api.webhooks.ts
│   │   ├── client.test.ts
│   │   ├── client.ts
│   │   ├── command-deploy.test.ts
│   │   ├── command-deploy.ts
│   │   ├── commands.ts
│   │   ├── components.base.ts
│   │   ├── components.message.ts
│   │   ├── components.modal.ts
│   │   ├── components.ts
│   │   ├── discord.ts
│   │   ├── embeds.ts
│   │   ├── entity-cache.test.ts
│   │   ├── entity-cache.ts
│   │   ├── event-queue.ts
│   │   ├── gateway-close-codes.ts
│   │   ├── gateway-dispatch.ts
│   │   ├── gateway-identify-limiter.ts
│   │   ├── gateway-lifecycle.test.ts
│   │   ├── gateway-lifecycle.ts
│   │   ├── gateway-rate-limit.ts
│   │   ├── gateway.test.ts
│   │   ├── gateway.ts
│   │   ├── interaction-dispatch.test.ts
│   │   ├── interaction-dispatch.ts
│   │   ├── interaction-options.ts
│   │   ├── interaction-response.ts
│   │   ├── interactions.test.ts
│   │   ├── interactions.ts
│   │   ├── listeners.ts
│   │   ├── live-smoke.live.test.ts
│   │   ├── modal-fields.ts
│   │   ├── payload.ts
│   │   ├── rest-body.ts
│   │   ├── rest-errors.ts
│   │   ├── rest-routes.test.ts
│   │   ├── rest-routes.ts
│   │   ├── rest-scheduler.test.ts
│   │   ├── rest-scheduler.ts
│   │   ├── rest.test.ts
│   │   ├── rest.ts
│   │   ├── schemas.ts
│   │   ├── structures.test.ts
│   │   ├── structures.ts
│   │   ├── test-builders.test-support.ts
│   │   └── voice.ts
│   ├── media-detection.ts
│   ├── mentions.test.ts
│   ├── mentions.ts
│   ├── monitor/
│   │   ├── ack-reactions.ts
│   │   ├── acp-bind-here.integration.test.ts
│   │   ├── agent-components-auth.ts
│   │   ├── agent-components-context.ts
│   │   ├── agent-components-data.ts
│   │   ├── agent-components-dm-auth.ts
│   │   ├── agent-components-guild-auth.ts
│   │   ├── agent-components-helpers.runtime.ts
│   │   ├── agent-components-helpers.ts
│   │   ├── agent-components-reply.ts
│   │   ├── agent-components.deps.runtime.ts
│   │   ├── agent-components.dispatch.ts
│   │   ├── agent-components.handlers.ts
│   │   ├── agent-components.modal.ts
│   │   ├── agent-components.plugin-interactive.ts
│   │   ├── agent-components.runtime.ts
│   │   ├── agent-components.system-controls.ts
│   │   ├── agent-components.ts
│   │   ├── agent-components.types.ts
│   │   ├── agent-components.wildcard-controls.ts
│   │   ├── agent-components.wildcard.test.ts
│   │   ├── allow-list.test.ts
│   │   ├── allow-list.ts
│   │   ├── auto-presence.test.ts
│   │   ├── auto-presence.ts
│   │   ├── channel-access.test.ts
│   │   ├── channel-access.ts
│   │   ├── commands.test.ts
│   │   ├── commands.ts
│   │   ├── dm-command-auth.test.ts
│   │   ├── dm-command-auth.ts
│   │   ├── dm-command-decision.test.ts
│   │   ├── dm-command-decision.ts
│   │   ├── exec-approvals.test.ts
│   │   ├── exec-approvals.ts
│   │   ├── format.ts
│   │   ├── gateway-handle.ts
│   │   ├── gateway-metadata.test.ts
│   │   ├── gateway-metadata.ts
│   │   ├── gateway-plugin.test.ts
│   │   ├── gateway-plugin.ts
│   │   ├── gateway-registry.ts
│   │   ├── gateway-supervisor.test.ts
│   │   ├── gateway-supervisor.ts
│   │   ├── inbound-context.test-helpers.ts
│   │   ├── inbound-context.test.ts
│   │   ├── inbound-context.ts
│   │   ├── inbound-dedupe.ts
│   │   ├── inbound-job.test.ts
│   │   ├── inbound-job.ts
│   │   ├── listeners.queue.ts
│   │   ├── listeners.reactions.ts
│   │   ├── listeners.test.ts
│   │   ├── listeners.ts
│   │   ├── message-channel-info.ts
│   │   ├── message-forwarded.ts
│   │   ├── message-handler.batch-gate.test.ts
│   │   ├── message-handler.batch-gate.ts
│   │   ├── message-handler.bot-self-filter.test.ts
│   │   ├── message-handler.context.ts
│   │   ├── message-handler.dm-preflight.ts
│   │   ├── message-handler.draft-preview.ts
│   │   ├── message-handler.hydration.test.ts
│   │   ├── message-handler.hydration.ts
│   │   ├── message-handler.inbound-context.test.ts
│   │   ├── message-handler.module-test-helpers.ts
│   │   ├── message-handler.preflight-channel-access.ts
│   │   ├── message-handler.preflight-channel-context.test.ts
│   │   ├── message-handler.preflight-channel-context.ts
│   │   ├── message-handler.preflight-context.ts
│   │   ├── message-handler.preflight-helpers.ts
│   │   ├── message-handler.preflight-history.ts
│   │   ├── message-handler.preflight-logging.ts
│   │   ├── message-handler.preflight-pluralkit.ts
│   │   ├── message-handler.preflight-runtime.ts
│   │   ├── message-handler.preflight-thread.ts
│   │   ├── message-handler.preflight.acp-bindings.test.ts
│   │   ├── message-handler.preflight.test-helpers.ts
│   │   ├── message-handler.preflight.test.ts
│   │   ├── message-handler.preflight.ts
│   │   ├── message-handler.preflight.types.ts
│   │   ├── message-handler.process.abort-skip.test.ts
│   │   ├── message-handler.process.test.ts
│   │   ├── message-handler.process.ts
│   │   ├── message-handler.queue.test.ts
│   │   ├── message-handler.reply-typing-policy.test.ts
│   │   ├── message-handler.reply-typing-policy.ts
│   │   ├── message-handler.routing-preflight.ts
│   │   ├── message-handler.test-harness.ts
│   │   ├── message-handler.test-helpers.ts
│   │   ├── message-handler.ts
│   │   ├── message-media.ts
│   │   ├── message-run-queue.ts
│   │   ├── message-text.ts
│   │   ├── message-utils.test.ts
│   │   ├── message-utils.ts
│   │   ├── model-picker-preferences-migrations.test.ts
│   │   ├── model-picker-preferences-migrations.ts
│   │   ├── model-picker-preferences.test.ts
│   │   ├── model-picker-preferences.ts
│   │   ├── model-picker.state.ts
│   │   ├── model-picker.test-utils.ts
│   │   ├── model-picker.test.ts
│   │   ├── model-picker.ts
│   │   ├── model-picker.view.ts
│   │   ├── monitor.agent-components.test.ts
│   │   ├── monitor.test.ts
│   │   ├── monitor.threading-utils.test.ts
│   │   ├── native-command-agent-reply.ts
│   │   ├── native-command-arg-ui.ts
│   │   ├── native-command-auth.ts
│   │   ├── native-command-bypass.ts
│   │   ├── native-command-context.test.ts
│   │   ├── native-command-context.ts
│   │   ├── native-command-dispatch.ts
│   │   ├── native-command-model-picker-apply.ts
│   │   ├── native-command-model-picker-interaction.ts
│   │   ├── native-command-model-picker-ui.ts
│   │   ├── native-command-reply.test.ts
│   │   ├── native-command-reply.ts
│   │   ├── native-command-route.ts
│   │   ├── native-command-status.ts
│   │   ├── native-command-ui.ts
│   │   ├── native-command-ui.types.ts
│   │   ├── native-command.args.ts
│   │   ├── native-command.command-arg.test.ts
│   │   ├── native-command.commands-allowfrom.test.ts
│   │   ├── native-command.model-picker.test.ts
│   │   ├── native-command.options.test.ts
│   │   ├── native-command.options.ts
│   │   ├── native-command.plugin-dispatch.test.ts
│   │   ├── native-command.runtime.ts
│   │   ├── native-command.status-direct.test.ts
│   │   ├── native-command.test-helpers.ts
│   │   ├── native-command.think-autocomplete.test.ts
│   │   ├── native-command.ts
│   │   ├── native-command.types.ts
│   │   ├── native-interaction-channel-context.ts
│   │   ├── preflight-audio.runtime.ts
│   │   ├── preflight-audio.test.ts
│   │   ├── preflight-audio.ts
│   │   ├── presence-cache.ts
│   │   ├── presence.test.ts
│   │   ├── presence.ts
│   │   ├── provider-session.runtime.ts
│   │   ├── provider.acp.ts
│   │   ├── provider.allowlist.test.ts
│   │   ├── provider.allowlist.ts
│   │   ├── provider.cleanup.ts
│   │   ├── provider.commands.ts
│   │   ├── provider.config-log.ts
│   │   ├── provider.deploy-errors.ts
│   │   ├── provider.deploy.ts
│   │   ├── provider.interactions.ts
│   │   ├── provider.lifecycle.test.ts
│   │   ├── provider.lifecycle.ts
│   │   ├── provider.proxy.test.ts
│   │   ├── provider.rest-proxy.test.ts
│   │   ├── provider.runtime.ts
│   │   ├── provider.skill-dedupe.test.ts
│   │   ├── provider.startup-log.ts
│   │   ├── provider.startup.test.ts
│   │   ├── provider.startup.ts
│   │   ├── provider.test.ts
│   │   ├── provider.ts
│   │   ├── reply-context.ts
│   │   ├── reply-delivery.test.ts
│   │   ├── reply-delivery.ts
│   │   ├── reply-safety.ts
│   │   ├── reply-typing-feedback.ts
│   │   ├── rest-fetch.ts
│   │   ├── route-resolution.test.ts
│   │   ├── route-resolution.ts
│   │   ├── sender-identity.ts
│   │   ├── startup-status.test.ts
│   │   ├── startup-status.ts
│   │   ├── status.ts
│   │   ├── system-events.ts
│   │   ├── thread-bindings.config.ts
│   │   ├── thread-bindings.discord-api.test.ts
│   │   ├── thread-bindings.discord-api.ts
│   │   ├── thread-bindings.lifecycle.test.ts
│   │   ├── thread-bindings.lifecycle.ts
│   │   ├── thread-bindings.manager.ts
│   │   ├── thread-bindings.messages.ts
│   │   ├── thread-bindings.persona.test.ts
│   │   ├── thread-bindings.persona.ts
│   │   ├── thread-bindings.session-adapter.ts
│   │   ├── thread-bindings.session-shared.ts
│   │   ├── thread-bindings.session-updates.ts
│   │   ├── thread-bindings.shared-state.test.ts
│   │   ├── thread-bindings.state.ts
│   │   ├── thread-bindings.ts
│   │   ├── thread-bindings.types.ts
│   │   ├── thread-channel-context.ts
│   │   ├── thread-session-close.test.ts
│   │   ├── thread-session-close.ts
│   │   ├── thread-title.generate.test.ts
│   │   ├── thread-title.test.ts
│   │   ├── thread-title.ts
│   │   ├── threading.auto-thread.test.ts
│   │   ├── threading.auto-thread.ts
│   │   ├── threading.cache.ts
│   │   ├── threading.parent-info.test.ts
│   │   ├── threading.starter.test.ts
│   │   ├── threading.starter.ts
│   │   ├── threading.ts
│   │   ├── threading.types.ts
│   │   ├── timeouts.test.ts
│   │   ├── timeouts.ts
│   │   ├── typing.test.ts
│   │   └── typing.ts
│   ├── monitor.gateway.test.ts
│   ├── monitor.gateway.ts
│   ├── monitor.test.ts
│   ├── monitor.ts
│   ├── network-config.test.ts
│   ├── network-config.ts
│   ├── normalize.test.ts
│   ├── normalize.ts
│   ├── outbound-adapter.interactive-order.test.ts
│   ├── outbound-adapter.test-harness.ts
│   ├── outbound-adapter.test.ts
│   ├── outbound-adapter.ts
│   ├── outbound-approval.ts
│   ├── outbound-components.ts
│   ├── outbound-payload.contract.test.ts
│   ├── outbound-payload.ts
│   ├── outbound-send-context.ts
│   ├── outbound-session-route.test.ts
│   ├── outbound-session-route.ts
│   ├── pluralkit.test.ts
│   ├── pluralkit.ts
│   ├── preview-streaming.ts
│   ├── probe.intents.test.ts
│   ├── probe.parse-token.test.ts
│   ├── probe.runtime.ts
│   ├── probe.ts
│   ├── proxy-fetch.ts
│   ├── proxy-request-client.test.ts
│   ├── proxy-request-client.ts
│   ├── recipient-resolution.ts
│   ├── resolve-allowlist-common.test.ts
│   ├── resolve-allowlist-common.ts
│   ├── resolve-channels.test.ts
│   ├── resolve-channels.ts
│   ├── resolve-users.test.ts
│   ├── resolve-users.ts
│   ├── retry-after.ts
│   ├── retry.test.ts
│   ├── retry.ts
│   ├── runtime-api.ts
│   ├── runtime-config.ts
│   ├── runtime.ts
│   ├── secret-config-contract.ts
│   ├── security-audit.runtime.ts
│   ├── security-audit.test.ts
│   ├── security-audit.ts
│   ├── security-contract.ts
│   ├── security-doctor.test.ts
│   ├── security-doctor.ts
│   ├── security.ts
│   ├── send-target-parsing.ts
│   ├── send.channels.ts
│   ├── send.components.test.ts
│   ├── send.components.ts
│   ├── send.creates-thread.test.ts
│   ├── send.emojis-stickers.ts
│   ├── send.guild.ts
│   ├── send.message-request.ts
│   ├── send.messages.test.ts
│   ├── send.messages.ts
│   ├── send.outbound.ts
│   ├── send.permissions.authz.test.ts
│   ├── send.permissions.ts
│   ├── send.reactions.ts
│   ├── send.receipt.ts
│   ├── send.sends-basic-channel-messages.test.ts
│   ├── send.shared.ts
│   ├── send.test-harness.ts
│   ├── send.ts
│   ├── send.types.ts
│   ├── send.typing.test.ts
│   ├── send.typing.ts
│   ├── send.voice.test.ts
│   ├── send.voice.ts
│   ├── send.webhook-activity.test.ts
│   ├── send.webhook.proxy.test.ts
│   ├── send.webhook.ts
│   ├── session-contract.ts
│   ├── session-key-normalization.test.ts
│   ├── session-key-normalization.ts
│   ├── setup-account-state.test.ts
│   ├── setup-account-state.ts
│   ├── setup-adapter.ts
│   ├── setup-core.ts
│   ├── setup-runtime-helpers.ts
│   ├── setup-surface.test.ts
│   ├── setup-surface.ts
│   ├── shared-interactive.test.ts
│   ├── shared-interactive.ts
│   ├── shared.test.ts
│   ├── shared.ts
│   ├── status-issues.test.ts
│   ├── status-issues.ts
│   ├── subagent-hooks.test.ts
│   ├── subagent-hooks.ts
│   ├── target-parsing.ts
│   ├── target-resolver.ts
│   ├── targets.test.ts
│   ├── targets.ts
│   ├── test-http-helpers.ts
│   ├── test-support/
│   │   ├── component-runtime.ts
│   │   ├── config.ts
│   │   ├── configured-binding-runtime.ts
│   │   ├── partial-channel.ts
│   │   └── provider.test-support.ts
│   ├── token.test.ts
│   ├── token.ts
│   ├── trusted-requester-actions.ts
│   ├── ui-colors.ts
│   ├── ui.ts
│   ├── voice/
│   │   ├── access.test.ts
│   │   ├── access.ts
│   │   ├── agent-control.test.ts
│   │   ├── agent-control.ts
│   │   ├── audio.test.ts
│   │   ├── audio.ts
│   │   ├── capture-state.test.ts
│   │   ├── capture-state.ts
│   │   ├── command.test.ts
│   │   ├── command.ts
│   │   ├── config.ts
│   │   ├── ingress.ts
│   │   ├── manager.e2e.test.ts
│   │   ├── manager.ready-listener.test.ts
│   │   ├── manager.runtime.ts
│   │   ├── manager.ts
│   │   ├── prompt.test.ts
│   │   ├── prompt.ts
│   │   ├── realtime.ts
│   │   ├── realtime.wake-name-followup.test.ts
│   │   ├── receive-recovery.test.ts
│   │   ├── receive-recovery.ts
│   │   ├── sanitize.test.ts
│   │   ├── sanitize.ts
│   │   ├── sdk-runtime.ts
│   │   ├── segment.ts
│   │   ├── session.ts
│   │   ├── speaker-context.test.ts
│   │   ├── speaker-context.ts
│   │   ├── transcripts-source.test.ts
│   │   ├── transcripts-source.ts
│   │   └── tts.ts
│   ├── voice-message.test.ts
│   └── voice-message.ts
├── subagent-hooks-api.ts
├── test-api.ts
├── thread-binding-api.ts
├── timeouts.ts
├── transcripts-source-api.ts
└── tsconfig.json
</code></pre></div>
          </details>
        
          <details class="tree-details">
            <summary><span class="tree-title">extensions/telegram/</span><span class="tree-desc">Telegram 通道插件</span></summary>
            <div class="tree-content"><pre class="tree"><code>├── account-inspect-api.ts
├── allow-from.ts
├── api.test.ts
├── api.ts
├── channel-config-api.test.ts
├── channel-config-api.ts
├── channel-plugin-api.ts
├── config-api.ts
├── configured-state.ts
├── contract-api.ts
├── directory-contract-api.ts
├── doctor-contract-api.ts
├── index.test.ts
├── index.ts
├── legacy-state-migrations-api.ts
├── openclaw.plugin.json
├── package.json
├── runtime-api.ts
├── runtime-setter-api.ts
├── secret-contract-api.ts
├── security-audit-contract-api.ts
├── session-binding-contract-api.ts
├── session-key-api.ts
├── setup-entry.ts
├── setup-plugin-api.ts
├── src/
│   ├── access-groups.ts
│   ├── account-config.ts
│   ├── account-inspect.test.ts
│   ├── account-inspect.ts
│   ├── account-selection.ts
│   ├── account-throttler.test.ts
│   ├── account-throttler.ts
│   ├── accounts.test.ts
│   ├── accounts.ts
│   ├── action-runtime.test.ts
│   ├── action-runtime.ts
│   ├── action-threading.test.ts
│   ├── action-threading.ts
│   ├── agent-config.ts
│   ├── allow-from.ts
│   ├── allowed-updates.test.ts
│   ├── allowed-updates.ts
│   ├── api-fetch.test.ts
│   ├── api-fetch.ts
│   ├── api-logging.ts
│   ├── api-root.test.ts
│   ├── api-root.ts
│   ├── approval-callback-data.test.ts
│   ├── approval-callback-data.ts
│   ├── approval-handler.runtime.test.ts
│   ├── approval-handler.runtime.ts
│   ├── approval-native.test.ts
│   ├── approval-native.ts
│   ├── audit-membership-runtime.ts
│   ├── audit.test.ts
│   ├── audit.ts
│   ├── audit.types.ts
│   ├── auto-topic-label-config.ts
│   ├── auto-topic-label.test.ts
│   ├── auto-topic-label.ts
│   ├── bot/
│   │   ├── body-helpers.ts
│   │   ├── delivery.replies.ts
│   │   ├── delivery.resolve-media-retry.test.ts
│   │   ├── delivery.resolve-media.runtime.ts
│   │   ├── delivery.resolve-media.ts
│   │   ├── delivery.send.ts
│   │   ├── delivery.test.ts
│   │   ├── delivery.ts
│   │   ├── helpers.test.ts
│   │   ├── helpers.ts
│   │   ├── native-quote.test.ts
│   │   ├── native-quote.ts
│   │   ├── reply-threading.ts
│   │   └── types.ts
│   ├── bot-access.ts
│   ├── bot-core.raw-update-log.test.ts
│   ├── bot-core.ts
│   ├── bot-deps.ts
│   ├── bot-handlers.agent.runtime.ts
│   ├── bot-handlers.debounce-key.ts
│   ├── bot-handlers.media.ts
│   ├── bot-handlers.runtime.test.ts
│   ├── bot-handlers.runtime.ts
│   ├── bot-info-cache.test.ts
│   ├── bot-info-cache.ts
│   ├── bot-info.ts
│   ├── bot-message-context.acp-bindings.test.ts
│   ├── bot-message-context.audio-transcript.test-support.ts
│   ├── bot-message-context.body.test.ts
│   ├── bot-message-context.body.ts
│   ├── bot-message-context.dm-session.test.ts
│   ├── bot-message-context.dm-threads.test.ts
│   ├── bot-message-context.dm-topic-threadid.test.ts
│   ├── bot-message-context.group-body.test.ts
│   ├── bot-message-context.implicit-mention.test-support.ts
│   ├── bot-message-context.named-account-dm.test-support.ts
│   ├── bot-message-context.reactions.test.ts
│   ├── bot-message-context.require-mention.test.ts
│   ├── bot-message-context.route-test-support.ts
│   ├── bot-message-context.runtime.ts
│   ├── bot-message-context.sender-prefix.test-support.ts
│   ├── bot-message-context.session-recreate.test-support.ts
│   ├── bot-message-context.session.runtime.ts
│   ├── bot-message-context.session.ts
│   ├── bot-message-context.silent-ingest.test-support.ts
│   ├── bot-message-context.sticker-media.test.ts
│   ├── bot-message-context.test-harness.ts
│   ├── bot-message-context.thread-binding.test.ts
│   ├── bot-message-context.topic-agentid.test.ts
│   ├── bot-message-context.ts
│   ├── bot-message-context.types.ts
│   ├── bot-message-context.typing.test.ts
│   ├── bot-message-dispatch.agent.runtime.ts
│   ├── bot-message-dispatch.media-dedup.test.ts
│   ├── bot-message-dispatch.media-dedup.ts
│   ├── bot-message-dispatch.runtime.ts
│   ├── bot-message-dispatch.test.ts
│   ├── bot-message-dispatch.ts
│   ├── bot-message.test.ts
│   ├── bot-message.ts
│   ├── bot-native-command-deps.runtime.ts
│   ├── bot-native-command-menu.test.ts
│   ├── bot-native-command-menu.ts
│   ├── bot-native-commands.delivery.runtime.ts
│   ├── bot-native-commands.fixture-test-support.ts
│   ├── bot-native-commands.group-auth.test.ts
│   ├── bot-native-commands.menu-test-support.ts
│   ├── bot-native-commands.registry.test.ts
│   ├── bot-native-commands.runtime.ts
│   ├── bot-native-commands.session-meta.test.ts
│   ├── bot-native-commands.skills-allowlist.test.ts
│   ├── bot-native-commands.test-helpers.ts
│   ├── bot-native-commands.test.ts
│   ├── bot-native-commands.ts
│   ├── bot-processing-outcome.ts
│   ├── bot-update-tracker.test.ts
│   ├── bot-update-tracker.ts
│   ├── bot-updates.ts
│   ├── bot.agent.runtime.ts
│   ├── bot.command-menu.test.ts
│   ├── bot.create-telegram-bot.channel-post-media.test.ts
│   ├── bot.create-telegram-bot.media-group-skip-warning.test.ts
│   ├── bot.create-telegram-bot.test-harness.ts
│   ├── bot.create-telegram-bot.test.ts
│   ├── bot.fetch-abort.test.ts
│   ├── bot.helpers.test.ts
│   ├── bot.media.downloads-media-file-path-no-file-download.e2e.test.ts
│   ├── bot.media.e2e-harness.ts
│   ├── bot.media.stickers-and-fragments.e2e.test.ts
│   ├── bot.media.test-utils.ts
│   ├── bot.runtime.ts
│   ├── bot.test.ts
│   ├── bot.ts
│   ├── bot.types.ts
│   ├── button-types.test-helpers.ts
│   ├── button-types.test.ts
│   ├── button-types.ts
│   ├── callback-query-answer-state.ts
│   ├── caption.ts
│   ├── channel-actions.contract.test.ts
│   ├── channel-actions.test.ts
│   ├── channel-actions.ts
│   ├── channel-message-flows.qa.e2e.test.ts
│   ├── channel.gateway.test.ts
│   ├── channel.message-adapter.test.ts
│   ├── channel.setup.ts
│   ├── channel.ts
│   ├── client-fetch.ts
│   ├── command-config.ts
│   ├── command-ui.test.ts
│   ├── command-ui.ts
│   ├── config-schema.test.ts
│   ├── config-schema.ts
│   ├── config-ui-hints.ts
│   ├── conversation-route.base-session-key.test.ts
│   ├── conversation-route.ts
│   ├── directory-config.ts
│   ├── directory-contract.test.ts
│   ├── dm-access.test.ts
│   ├── dm-access.ts
│   ├── doctor-contract.ts
│   ├── doctor.test.ts
│   ├── doctor.ts
│   ├── draft-chunking.ts
│   ├── draft-stream.test-helpers.ts
│   ├── draft-stream.test.ts
│   ├── draft-stream.ts
│   ├── error-policy.test.ts
│   ├── error-policy.ts
│   ├── exec-approval-forwarding.ts
│   ├── exec-approval-resolver.test.ts
│   ├── exec-approval-resolver.ts
│   ├── exec-approvals.test.ts
│   ├── exec-approvals.ts
│   ├── fetch.test.ts
│   ├── fetch.ts
│   ├── format.test.ts
│   ├── format.ts
│   ├── format.wrap-md.test.ts
│   ├── forum-service-message.ts
│   ├── group-access.base-access.test.ts
│   ├── group-access.ts
│   ├── group-config-helpers.ts
│   ├── group-history-context.ts
│   ├── group-migration.test.ts
│   ├── group-migration.ts
│   ├── group-policy.test.ts
│   ├── group-policy.ts
│   ├── inbound-context.contract.test.ts
│   ├── inbound-event-delivery.test.ts
│   ├── inbound-event-delivery.ts
│   ├── ingress.ts
│   ├── inline-buttons.test.ts
│   ├── inline-buttons.ts
│   ├── inline-keyboard.ts
│   ├── interactive-dispatch.ts
│   ├── interactive-fallback.ts
│   ├── lane-delivery-state.ts
│   ├── lane-delivery-text-deliverer.ts
│   ├── lane-delivery.test.ts
│   ├── lane-delivery.ts
│   ├── media-understanding.runtime.ts
│   ├── message-cache.test.ts
│   ├── message-cache.ts
│   ├── message-dispatch-dedupe.test.ts
│   ├── message-dispatch-dedupe.ts
│   ├── message-tool-schema.ts
│   ├── model-buttons.test.ts
│   ├── model-buttons.ts
│   ├── monitor-polling.runtime.ts
│   ├── monitor-webhook.runtime.ts
│   ├── monitor.test.ts
│   ├── monitor.ts
│   ├── monitor.types.ts
│   ├── native-command-callback-data.ts
│   ├── network-config.test.ts
│   ├── network-config.ts
│   ├── network-errors.test.ts
│   ├── network-errors.ts
│   ├── normalize.ts
│   ├── outbound-adapter.test.ts
│   ├── outbound-adapter.ts
│   ├── outbound-message-context.ts
│   ├── outbound-params.test.ts
│   ├── outbound-params.ts
│   ├── poll-visibility.test.ts
│   ├── poll-visibility.ts
│   ├── polling-lease.test.ts
│   ├── polling-lease.ts
│   ├── polling-liveness.test.ts
│   ├── polling-liveness.ts
│   ├── polling-session.test.ts
│   ├── polling-session.ts
│   ├── polling-status.test.ts
│   ├── polling-status.ts
│   ├── polling-transport-state.test.ts
│   ├── polling-transport-state.ts
│   ├── preview-streaming.ts
│   ├── probe.test.ts
│   ├── probe.ts
│   ├── prompt-media-path.ts
│   ├── proxy.ts
│   ├── raw-update-log.ts
│   ├── reaction-level.test.ts
│   ├── reaction-level.ts
│   ├── reasoning-lane-coordinator.test.ts
│   ├── reasoning-lane-coordinator.ts
│   ├── reply-parameters.test.ts
│   ├── reply-parameters.ts
│   ├── request-timeouts.test.ts
│   ├── request-timeouts.ts
│   ├── rich-message.ts
│   ├── runtime.ts
│   ├── runtime.types.ts
│   ├── secret-contract.ts
│   ├── security-audit.test.ts
│   ├── security-audit.ts
│   ├── security.ts
│   ├── send.chunks.test.ts
│   ├── send.proxy.test.ts
│   ├── send.runtime.ts
│   ├── send.test-harness.ts
│   ├── send.test.ts
│   ├── send.ts
│   ├── sendchataction-401-backoff.test.ts
│   ├── sendchataction-401-backoff.ts
│   ├── sent-message-cache.ts
│   ├── sequential-key.test.ts
│   ├── sequential-key.ts
│   ├── session-conversation.test.ts
│   ├── session-conversation.ts
│   ├── session-route.test.ts
│   ├── setup-contract.ts
│   ├── setup-core.ts
│   ├── setup-surface.helpers.ts
│   ├── setup-surface.test.ts
│   ├── setup-surface.ts
│   ├── shared.test.ts
│   ├── shared.ts
│   ├── startup-probe-limiter.ts
│   ├── state-migrations.test.ts
│   ├── state-migrations.ts
│   ├── status-issues.ts
│   ├── status-reaction-variants.ts
│   ├── status.test.ts
│   ├── sticker-cache-store.ts
│   ├── sticker-cache.describe.test.ts
│   ├── sticker-cache.test.ts
│   ├── sticker-cache.ts
│   ├── sticker-vision.runtime.ts
│   ├── target-writeback.test-shared.ts
│   ├── target-writeback.ts
│   ├── targets.test.ts
│   ├── targets.ts
│   ├── telegram-ingress-spool.test.ts
│   ├── telegram-ingress-spool.ts
│   ├── telegram-ingress-worker.runtime.ts
│   ├── telegram-ingress-worker.ts
│   ├── telegram-media.runtime.ts
│   ├── telegram-outbound.test.ts
│   ├── telegram-reply-fence.test.ts
│   ├── telegram-reply-fence.ts
│   ├── test-support/
│   │   ├── channel-message-flows.ts
│   │   ├── inbound-context-contract.ts
│   │   ├── plugin-command.ts
│   │   └── write-skill.ts
│   ├── thread-bindings.test.ts
│   ├── thread-bindings.ts
│   ├── threading-tool-context.test.ts
│   ├── threading-tool-context.ts
│   ├── token-fingerprint.ts
│   ├── token.test.ts
│   ├── token.ts
│   ├── topic-conversation.test.ts
│   ├── topic-conversation.ts
│   ├── topic-name-cache.test.ts
│   ├── topic-name-cache.ts
│   ├── update-offset-store.runtime.ts
│   ├── update-offset-store.test.ts
│   ├── update-offset-store.ts
│   ├── voice.test.ts
│   ├── voice.ts
│   ├── webhook-status.test.ts
│   ├── webhook-status.ts
│   ├── webhook.test.ts
│   └── webhook.ts
├── test-api.ts
├── tsconfig.json
└── update-offset-runtime-api.ts
</code></pre></div>
          </details>
        
      </section>

      <section id="packages-apps">
        <h2><span class="icon">📦</span> 共享包与客户端</h2>
        <h3>packages/（21 个共享包，66,330 行）</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>包</th><th>职责</th><th class="num">文件数</th><th class="num">代码行数</th></tr></thead>
            <tbody>
              <tr><td>memory-host-sdk</td><td>记忆宿主 SDK</td><td class="num">109</td><td class="num">13,193</td></tr>
              <tr><td>agent-core</td><td>Agent 核心类型与逻辑</td><td class="num">43</td><td class="num">11,044</td></tr>
              <tr><td>gateway-protocol</td><td>Gateway WebSocket 协议 schema 与类型</td><td class="num">43</td><td class="num">10,652</td></tr>
              <tr><td>sdk</td><td>公共 SDK 入口</td><td class="num">10</td><td class="num">4,452</td></tr>
              <tr><td>speech-core</td><td>语音核心</td><td class="num">6</td><td class="num">4,046</td></tr>
              <tr><td>markdown-core</td><td>Markdown 处理</td><td class="num">21</td><td class="num">3,706</td></tr>
              <tr><td>gateway-client</td><td>Gateway 客户端</td><td class="num">10</td><td class="num">2,928</td></tr>
              <tr><td>terminal-core</td><td>终端会话核心</td><td class="num">29</td><td class="num">2,567</td></tr>
              <tr><td>tool-call-repair</td><td>工具调用修复</td><td class="num">5</td><td class="num">2,335</td></tr>
              <tr><td>acp-core</td><td>ACP 核心</td><td class="num">22</td><td class="num">2,274</td></tr>
            </tbody>
          </table>
        </div>
        <h3>apps/（6 个原生应用，213,751 行）</h3>
        <div class="chart-grid">
          <div class="chart-card"><h4>macOS / iOS / Android 代码量</h4><div class="chart-row"><div class="chart-label">macos</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:100.0%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">68,528</div></div><div class="chart-row"><div class="chart-label">android</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:75.3%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">51,585</div></div><div class="chart-row"><div class="chart-label">ios</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:72.2%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">49,498</div></div><div class="chart-row"><div class="chart-label">shared</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:61.6%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">42,228</div></div><div class="chart-row"><div class="chart-label">swabble</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:2.5%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">1,701</div></div><div class="chart-row"><div class="chart-label">macos-mlx-tts</div><div class="chart-bar-wrap"><div class="chart-bar" style="width:0.3%;background:linear-gradient(90deg,#ff6b35,#f7c59f)"></div></div><div class="chart-value">211</div></div></div>
          <div class="chart-card">
            <h4>技术栈分布</h4>
            <div class="legend">
              <span><span class="dot" style="background:#ff6b35"></span>Swift ~199k 行</span>
              <span><span class="dot" style="background:#2ec4b6"></span>Kotlin ~50k 行</span>
              <span><span class="dot" style="background:#f7c59f"></span>JS/TS ~12k 行</span>
            </div>
            <p style="margin-top:18px;color:var(--text-muted);font-size:.9rem">macOS 菜单栏应用（68k）、iOS 节点（49k）、Android 节点（51k）为主要代码贡献方；<code>shared/</code> 提供跨平台 Swift/JS 共享逻辑。</p>
          </div>
        </div>
      </section>

      <section id="architecture">
        <h2><span class="icon">🏗️</span> 整体架构</h2>
        <div class="arch-stack">
          <div class="arch-layer"><div class="layer-num">1</div><div><div class="layer-title">Clients / Nodes</div><div class="layer-desc">macOS app · iOS · Android · Windows Hub · WebChat · CLI → WebSocket over 127.0.0.1:18789（或 Tailscale/SSH 隧道）</div></div></div>
          <div class="arch-arrow">↓</div>
          <div class="arch-layer"><div class="layer-num">2</div><div><div class="layer-title">Gateway（src/gateway/）</div><div class="layer-desc">长期运行的守护进程；WebSocket 控制面、JSON Schema 校验、设备配对、事件推送；维护 provider / channel 连接。</div></div></div>
          <div class="arch-arrow">↓</div>
          <div class="arch-layer"><div class="layer-num">3</div><div><div class="layer-title">Agent Runtime（src/agents/）</div><div class="layer-desc">执行循环、模型调用、工具编排、会话管理、流式输出与结果汇总。</div></div></div>
          <div class="arch-arrow">↓</div>
          <div class="arch-layer"><div class="layer-num">4</div><div><div class="layer-title">Plugin SDK + Plugin Loader</div><div class="layer-desc">src/plugin-sdk/ + src/plugins/ + extensions/*；承载通道插件、Provider 插件、工具插件与 Skill。</div></div></div>
          <div class="arch-arrow">↓</div>
          <div class="arch-layer"><div class="layer-num">5</div><div><div class="layer-title">Infrastructure（src/infra/ + packages/*）</div><div class="layer-desc">SQLite 状态库、Kysely 访问层、配置、日志、沙箱、网络与 SSRF 策略。</div></div></div>
        </div>
        <h3>核心数据流</h3>
        <div class="flow">
          <div class="flow-step" data-step="1"><strong>入站消息</strong><p>通道插件接收原生消息 → 通用 channel-message → 路由给 Agent</p></div>
          <div class="flow-step" data-step="2"><strong>Agent 执行</strong><p>决定调用工具、生成回复；工具由插件提供</p></div>
          <div class="flow-step" data-step="3"><strong>出站回复</strong><p>经过 chunking/dedupe/send 管线 → 通道插件渲染为平台消息</p></div>
          <div class="flow-step" data-step="4"><strong>控制面</strong><p>客户端通过 WebSocket 与 Gateway 交互，协议在 gateway-protocol 定义</p></div>
        </div>
        <h3>关键边界原则</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>原则</th><th>说明</th></tr></thead>
            <tbody>
              <tr><td>Core 保持插件无关</td><td>核心不硬编码插件 ID 或默认策略，统一通过 manifest / capability 契约发现。</td></tr>
              <tr><td>插件通过 SDK 进入核心</td><td>插件只能依赖 <code>openclaw/plugin-sdk/*</code> 与公开的 api.ts / runtime-api.ts。</td></tr>
              <tr><td>通道只负责传输</td><td>渲染可移植的 presentation / action，不拥有产品命令树。</td></tr>
              <tr><td>状态默认 SQLite</td><td>运行时状态、缓存、队列、索引均存入 SQLite，不在文件系统中散落 JSON/JSONL。</td></tr>
              <tr><td>运行时只读当前配置</td><td>旧配置 shape 只在 <code>openclaw doctor --fix</code> 迁移代码中处理，运行时无 shim/alias/fallback。</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="guide">
        <h2><span class="icon">🧭</span> 如何开始阅读代码</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>目标</th><th>起点</th></tr></thead>
            <tbody>
              <tr><td>了解 Gateway 协议</td><td><code>packages/gateway-protocol/</code>、<code>docs/concepts/architecture.md</code></td></tr>
              <tr><td>了解 Agent 执行循环</td><td><code>src/agents/</code>、<code>docs/concepts/agent-loop.md</code></td></tr>
              <tr><td>了解插件如何接入</td><td><code>src/plugin-sdk/</code>、<code>extensions/telegram/src/</code></td></tr>
              <tr><td>了解通道抽象</td><td><code>src/channels/</code>、<code>src/plugin-sdk/channel-*.ts</code></td></tr>
              <tr><td>了解 CLI 命令</td><td><code>src/cli/</code>、<code>src/entry.ts</code></td></tr>
              <tr><td>了解配置系统</td><td><code>src/config/</code>、<code>src/plugin-sdk/config-*.ts</code></td></tr>
              <tr><td>了解构建与脚本</td><td><code>scripts/lib/</code>、<code>package.json</code> scripts</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>

    <footer>
      数据基于 OpenClaw 仓库当前快照 · 统计时间 2026-06-20 ·
      <a href="https://docs.openclaw.ai/concepts/architecture" target="_blank" rel="noopener">官方架构文档</a>
    </footer>
  </div>
</template>

<style scoped>
/* 变量挂在 .oc-structure 上，而非 :root —— scoped 模式下 :root 会被改写成
   :root[data-v-xxx] 而无法匹配 <html>，导致所有 CSS 变量失效（颜色塌成单色）。 */
.oc-structure {
      --bg: #0f1115;
      --surface: #161921;
      --surface-2: #1e222d;
      --surface-3: #252a36;
      --text: #e8eaf0;
      --text-muted: #9aa3b2;
      --accent: #ff6b35;
      --accent-2: #f7c59f;
      --accent-3: #2ec4b6;
      --border: #2a2f3a;
      --shadow: 0 10px 40px rgba(0,0,0,0.35);
      --radius: 16px;
      --sidebar-w: 280px;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.7;
    }
    a { color: var(--accent-2); text-decoration: none; }
    a:hover { text-decoration: underline; }

    header {
      padding: 70px 30px 60px;
      text-align: center;
      background: radial-gradient(ellipse at 50% 0%, #252a36 0%, transparent 60%);
      border-bottom: 1px solid var(--border);
    }
    header h1 {
      margin: 0 0 16px;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      letter-spacing: -0.03em;
    }
    header p {
      max-width: 760px;
      margin: 0 auto 28px;
      color: var(--text-muted);
      font-size: 1.05rem;
    }
    .github-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border-radius: 999px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--text);
      font-weight: 600;
    }
    .github-link:hover { background: var(--surface-3); }

    .container { max-width: 1100px; margin: 0 auto; padding: 50px 30px; }
    section { margin-bottom: 80px; scroll-margin-top: 24px; }
    h2 {
      font-size: 1.7rem;
      margin: 0 0 24px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    h2 .icon { font-size: 1.3em; }
    h3 { color: var(--accent-2); margin: 36px 0 18px; font-size: 1.2rem; }
    h4 { margin: 20px 0 10px; color: var(--text); }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
      margin-bottom: 28px;
    }
    .metric-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px;
      text-align: center;
      transition: transform .2s, border-color .2s;
    }
    .metric-card:hover { transform: translateY(-4px); border-color: var(--accent); }
    .metric-card .value { font-size: 2rem; font-weight: 800; color: var(--accent); line-height: 1.1; margin-bottom: 6px; }
    .metric-card .label { color: var(--text-muted); font-size: 0.9rem; }

    .table-wrap { overflow-x: auto; border-radius: var(--radius); border: 1px solid var(--border); }
    table { width: 100%; border-collapse: collapse; font-size: 0.93rem; }
    th, td { padding: 11px 14px; text-align: left; border-bottom: 1px solid var(--border); }
    th { background: var(--surface-2); color: var(--accent-2); font-weight: 700; position: sticky; top: 0; }
    tr:hover td { background: rgba(255,255,255,0.03); }
    td.num, th.num { text-align: right; font-variant-numeric: tabular-nums; }
    .bar-cell { width: 130px; padding-right: 18px; }
    .bar-bg { height: 7px; background: var(--surface-3); border-radius: 4px; overflow: hidden; }
    .bar-fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: 4px; }

    .chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; }
    .chart-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; }
    .chart-card h4 { margin-top: 0; margin-bottom: 16px; color: var(--accent-2); }
    .chart-row { display: flex; align-items: center; margin-bottom: 9px; }
    .chart-label { width: 100px; font-size: 0.82rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .chart-bar-wrap { flex: 1; margin: 0 10px; }
    .chart-bar { height: 20px; border-radius: 5px; background: linear-gradient(90deg, var(--accent), var(--accent-2)); }
    .chart-value { font-size: 0.82rem; color: var(--text); font-variant-numeric: tabular-nums; }
    .legend { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 14px; font-size: 0.82rem; color: var(--text-muted); }
    .legend span { display: inline-flex; align-items: center; gap: 6px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; }

    /* Functional breakdown cards */
    .breakdown-block { margin-bottom: 28px; }
    .breakdown-header {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--accent-2);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
      font-family: monospace;
    }
    .breakdown-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 14px;
    }
    .breakdown-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px 18px;
      transition: border-color .2s;
    }
    .breakdown-card:hover { border-color: var(--accent-3); }
    .breakdown-name {
      font-family: monospace;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--accent-3);
      margin-bottom: 8px;
    }
    .breakdown-desc {
      color: var(--text);
      font-size: 0.93rem;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .breakdown-files {
      color: var(--text-muted);
      font-size: 0.82rem;
      line-height: 1.5;
    }
    .breakdown-files strong { color: var(--accent-2); font-weight: 600; }

    /* Deep dive cards */
    .deep-dive-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      margin-bottom: 18px;
      overflow: hidden;
      transition: border-color .2s;
    }
    .deep-dive-card:hover { border-color: var(--accent); }
    .deep-dive-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      background: rgba(255,255,255,0.02);
      border-bottom: 1px solid var(--border);
    }
    .deep-dive-num {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--accent);
      color: #fff;
      display: grid; place-items: center;
      font-weight: 800;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .deep-dive-title {
      font-family: monospace;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--accent-2);
    }
    .deep-dive-body { padding: 18px 20px; }
    .deep-dive-row {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 14px;
      margin-bottom: 12px;
    }
    .deep-dive-row:last-child { margin-bottom: 0; }
    .deep-dive-label {
      color: var(--text-muted);
      font-size: 0.82rem;
      font-weight: 700;
      padding-top: 2px;
    }
    .deep-dive-text {
      color: var(--text);
      font-size: 0.94rem;
      line-height: 1.65;
    }
    .deep-dive-files {
      font-family: monospace;
      color: var(--accent-3);
      font-size: 0.86rem;
    }
    @media (max-width: 600px) {
      .deep-dive-row { grid-template-columns: 1fr; gap: 4px; }
    }

    /* Tree details */
    .tree-details { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; overflow: hidden; }
    .tree-details summary {
      padding: 14px 18px;
      cursor: pointer;
      list-style: none;
      display: flex; align-items: center; gap: 12px;
      transition: background .15s;
    }
    .tree-details summary:hover { background: var(--surface-2); }
    .tree-details summary::-webkit-details-marker { display: none; }
    .tree-details summary::before { content: '▸'; color: var(--accent); transition: transform .2s; margin-right: 4px; }
    .tree-details[open] summary::before { transform: rotate(90deg); }
    .tree-title { font-weight: 700; color: var(--accent-2); font-family: monospace; font-size: 0.98rem; }
    .tree-desc { color: var(--text-muted); font-size: 0.9rem; font-weight: 400; }
    .tree-content { padding: 0 18px 18px; }
    .tree {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 16px;
      margin: 0;
      overflow-x: auto;
      font-size: 0.82rem;
      line-height: 1.55;
      color: var(--text-muted);
    }
    .tree code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; }

    .arch-stack { display: flex; flex-direction: column; gap: 10px; max-width: 820px; margin: 0 auto; }
    .arch-layer {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 18px 22px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .arch-layer .layer-num { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: var(--surface-3); color: var(--accent-3); font-weight: 800; flex-shrink: 0; }
    .arch-layer .layer-title { font-weight: 700; margin-bottom: 2px; }
    .arch-layer .layer-desc { color: var(--text-muted); font-size: 0.9rem; }
    .arch-arrow { text-align: center; color: var(--text-muted); font-size: 1.3rem; margin: -4px 0; }

    .flow { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
    .flow-step { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; position: relative; }
    .flow-step::before { content: attr(data-step); position: absolute; top: -12px; left: 18px; background: var(--accent); color: #fff; width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; font-size: 0.8rem; font-weight: 800; }
    .flow-step strong { display: block; margin-bottom: 6px; color: var(--accent-2); }
    .flow-step p { margin: 0; color: var(--text-muted); font-size: 0.9rem; }

    .note { background: rgba(46, 196, 182, 0.08); border-left: 4px solid var(--accent-3); padding: 14px 18px; border-radius: 0 10px 10px 0; color: var(--text-muted); margin: 20px 0; }
    .tag { display: inline-block; padding: 2px 8px; border-radius: 4px; background: var(--surface-3); font-size: 0.75rem; color: var(--text-muted); margin-right: 4px; margin-bottom: 4px; }

    footer { text-align: center; padding: 40px 30px; color: var(--text-muted); border-top: 1px solid var(--border); font-size: 0.9rem; }
</style>
