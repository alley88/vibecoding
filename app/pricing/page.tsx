import type { Metadata } from 'next';
import PricingCard from '@/components/PricingCard';
import { PLANS, FAQ_ITEMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: '定价方案 — AICodeMirror',
  description: '灵活计费：订阅 + 按量，始终有可用额度。',
};

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero container">
        <p className="badge">AICodeMirror 官方共享平台</p>
        <h1>灵活计费：订阅 + 按量，始终有可用额度</h1>
        <p className="sub">完全使用官方 API，稳定支持 Claude Code / Codex / Gemini CLI。</p>
      </section>

      {/* Switcher */}
      <div className="switcher container">
        <button className="chip chip-active">常规套餐（按月）</button>
        <button className="chip">优惠套餐（按周）</button>
        <button className="chip">企业方案</button>
      </div>

      {/* Pricing Cards */}
      <section className="section container">
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* Payment Note */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)' }}>支持支付宝支付，安全便捷</p>
      </section>

      {/* Value Props */}
      <section className="section container">
        <div className="value-grid">
          <div className="value-card">
            <h3>为什么选 AICodeMirror</h3>
            <p>同一账号统一管理多个 CLI，计费清晰，余额策略透明。</p>
          </div>
          <div className="value-card">
            <h3>官方通道</h3>
            <p>我们完全使用官方服务，因此总是第一时间支持最新模型。</p>
          </div>
          <div className="value-card">
            <h3>支付便捷</h3>
            <p>支持支付宝，适配个人与团队的不同采购方式。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container">
        <h2 className="section-title">常见问题</h2>
        <div className="faq-section">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
