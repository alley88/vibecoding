'use client';

export default function ApiZonePage() {
  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">API 专区</h1>
        <span style={{ color: 'var(--muted)' }}>API 文档和使用示例</span>
      </div>

      <div className="console-card">
        <h3>API 端点</h3>
        <div style={{ marginTop: '1rem' }}>
          <code style={{ display: 'block', padding: '1rem', background: 'var(--bg)', borderRadius: '4px' }}>
            https://api.aicodemirror.com/v1/chat/completions
          </code>
        </div>

        <h3 style={{ marginTop: '2rem' }}>使用示例</h3>
        <pre style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--bg)',
          borderRadius: '4px',
          overflow: 'auto'
        }}>
{`curl https://api.aicodemirror.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "claude-sonnet-4-6",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`}
        </pre>

        <h3 style={{ marginTop: '2rem' }}>SDK 下载</h3>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button className="btn-primary">Python SDK</button>
          <button className="btn-primary">Node.js SDK</button>
          <button className="btn-primary">Go SDK</button>
        </div>
      </div>
    </div>
  );
}
