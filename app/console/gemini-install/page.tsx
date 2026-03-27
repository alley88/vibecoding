'use client';

export default function GeminiInstallPage() {
  const steps = [
    '访问 Google AI Studio',
    '创建项目并获取 API Key',
    '安装 Gemini CLI: npm install -g @google/generative-ai-cli',
    '配置 API Key: gemini config set-key YOUR_API_KEY',
    '开始使用 Gemini',
  ];

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">GeminiCLI 安装</h1>
        <span style={{ color: 'var(--muted)' }}>按照以下步骤安装 Gemini CLI</span>
      </div>

      <div className="console-card">
        <h3>安装步骤</h3>
        <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
          {steps.map((step, idx) => (
            <li key={idx} style={{ padding: '0.5rem 0', lineHeight: 1.6 }}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
