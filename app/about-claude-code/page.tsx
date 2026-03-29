import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于我们 — AICodeMirror',
  description: '为中国工程师打造的 Claude Code 服务平台。了解 AICodeMirror 的使命与团队。',
};

const services = [
  {
    icon: '🌐',
    title: '网络访问',
    desc: '多节点全球加速，确保中国用户也能稳定、低延迟地访问 Claude Code 等 AI 编程服务。',
  },
  {
    icon: '💳',
    title: '简化支付',
    desc: '支持支付宝等国内支付方式，无需国际信用卡，个人和企业均可便捷付款。',
  },
  {
    icon: '🔒',
    title: '账号安全',
    desc: '独立账号体系，数据隔离存储，不共享不混用，保障您的代码和信息安全。',
  },
  {
    icon: '💰',
    title: '优惠价格',
    desc: '批量采购优势，提供低于官方直购的优惠价格，订阅越高折扣越大。',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero container">
        <p className="badge">关于我们</p>
        <h1>为中国工程师打造的 Claude Code 服务平台</h1>
        <p className="sub">
          AICodeMirror 致力于让中国开发者无障碍使用全球领先的 AI 编程工具。
        </p>
      </section>

      {/* Who We Are */}
      <section className="section container">
        <div className="prose">
          <h2>我们是谁</h2>
          <p>
            AICodeMirror 是由华峥科技有限公司运营的 AI 编程工具共享服务平台。
            我们通过官方 API 通道，为中国用户提供稳定、合规、优惠的 Claude Code、Codex 和 Gemini CLI 使用服务。
          </p>
          <p>
            自上线以来，已有超过 10,000 名开发者和 200+ 知名企业及高校选择了我们的服务。
            我们始终坚持透明定价、隐私保护和安全合规的服务理念。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section container">
        <h2 className="section-title">核心服务特性</h2>
        <div className="service-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="section container">
        <div className="prose">
          <h2>服务承诺</h2>
          <p>
            我们承诺：完全使用官方 API 通道，不使用任何逆向工程或非授权方式；
            透明定价，不设隐藏费用；严格保护用户数据，不存储用户代码内容；
            提供专业的中文客服支持，7×12 小时在线响应。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
          公司主体：华峥科技有限公司
        </p>
        <div className="actions">
          <Link href="/register" className="btn-primary">成为推广大使</Link>
          <Link href="/pricing" className="btn-ghost">意见反馈</Link>
        </div>
      </section>
    </main>
  );
}
