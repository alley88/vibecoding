import Link from 'next/link';
import { INSTALLATION_PLATFORMS } from '@/lib/console-constants';

export default function OfficialInstallationPage() {
  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">官方安装</h1>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
          选择您的操作系统，按照步骤安装 AICodeMirror CLI 工具。安装完成后，使用您的 API Key 登录即可开始使用。
        </p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        {INSTALLATION_PLATFORMS.map((platform) => (
          <div key={platform.slug} className="console-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>{platform.icon}</span>
              <h2 style={{ margin: 0 }}>{platform.name}</h2>
            </div>
            <ol style={{ paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: 1.8 }}>
              {platform.steps.map((step, i) => (
                <li key={i} style={{ marginBottom: '0.6rem', color: 'var(--text)' }}>
                  {step.includes('curl') || step.includes('aicodemirror') ? (
                    <code style={{
                      display: 'block',
                      marginTop: '0.3rem',
                      padding: '0.5rem',
                      background: '#0b1222',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: 'var(--brand)',
                    }}>
                      {step.split(': ')[1] || step}
                    </code>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ol>
            <Link href="/console/api-keys" className="btn-primary" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
              获取 API Key
            </Link>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="console-card" style={{ marginTop: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.8rem' }}>需要帮助？</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0.8rem' }}>
          如果在安装过程中遇到问题，请查看我们的详细文档或联系客服支持。
        </p>
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          <Link href="/docs" className="btn-ghost">查看文档</Link>
          <Link href="/about-claude-code" className="btn-ghost">联系客服</Link>
        </div>
      </div>
    </>
  );
}
