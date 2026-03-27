'use client';

export default function ClaudeCodeInstallPage() {
  const steps = {
    macOS: [
      '打开终端应用',
      '运行安装命令: npm install -g @anthropic-ai/claude-code',
      '等待安装完成',
      '运行 claude-code login 登录',
      '输入您的 API Key',
      '开始使用 Claude Code',
    ],
    windows: [
      '打开 PowerShell 或命令提示符',
      '运行安装命令: npm install -g @anthropic-ai/claude-code',
      '等待安装完成',
      '运行 claude-code login 登录',
      '输入您的 API Key',
      '开始使用 Claude Code',
    ],
  };

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">ClaudeCode 安装</h1>
        <span style={{ color: 'var(--muted)' }}>按照以下步骤安装 Claude Code</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="console-card">
          <h3>macOS / Linux</h3>
          <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            {steps.macOS.map((step, idx) => (
              <li key={idx} style={{ padding: '0.5rem 0', lineHeight: 1.6 }}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="console-card">
          <h3>Windows</h3>
          <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            {steps.windows.map((step, idx) => (
              <li key={idx} style={{ padding: '0.5rem 0', lineHeight: 1.6 }}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
