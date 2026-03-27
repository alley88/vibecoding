import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import { STATS, PLANS, PRODUCTS, PLATFORMS, CLAUDE_MODELS, ENTERPRISE_LOGOS } from '@/lib/constants';

export default function Home() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <section className="hero container">
        <p className="badge">企业级 Claude Code 服务</p>
        <h1>一站式 Vibe Coding</h1>
        <p className="sub">
          无需编程基础，仅依靠自然语言，就能将您的想法变为现实。稳定、安全、优惠地使用 Claude Code、Codex 与 Gemini CLI。
        </p>
        <div className="actions">
          <Link href="/register" className="btn-primary">免费使用</Link>
          <span style={{ color: 'var(--muted)' }}>加入 AI 社群领取 8 元永久额度</span>
        </div>
      </section>

      {/* ── 2. Stats ── */}
      <section className="section container">
        <div className="stats-grid">
          {STATS.map((item) => (
            <div key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Product Support ── */}
      <section className="section container">
        <h2 className="section-title">同时支持多款 AI 编程工具</h2>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="product-card">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="platform-btns">
          {PLATFORMS.map((p) => (
            <span key={p} className="chip">{p}</span>
          ))}
        </div>
      </section>

      {/* ── 4. Features ── */}
      <section className="section container">
        <h2 className="section-title">为什么选择 AICodeMirror</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>稳定可靠</h3>
            <p>多网络节点与容灾备份，全球加速确保低延迟连接，99.9% 可用性保障。</p>
          </article>
          <article className="feature-card">
            <h3>产品多元</h3>
            <p>同一账号管理 Claude Code、Codex、Gemini CLI，统一计费，按需切换。</p>
          </article>
          <article className="feature-card">
            <h3>报销合规</h3>
            <p>透明定价，支持支付宝支付，提供正规发票，适配企业采购流程。</p>
          </article>
        </div>
      </section>

      {/* ── 5. Claude Model Lineup ── */}
      <section className="section container">
        <h2 className="section-title">Claude 模型系列</h2>
        <div className="model-grid">
          {CLAUDE_MODELS.map((m) => (
            <div key={m.name} className="model-card">
              <div className="tier">{m.tier}</div>
              <h3>Claude {m.name}</h3>
              <p>{m.desc}</p>
              <div className="model-meta">
                <div>速度 <span>{m.speed}</span></div>
                <div>成本 <span>{m.cost}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. IDE Integration ── */}
      <section className="section container">
        <h2 className="section-title">IDE 集成支持</h2>
        <div className="ide-grid">
          <div className="ide-card">
            <h3>VS Code</h3>
            <p>通过 Continue、Cline 等扩展，在 VS Code 中直接使用 Claude 编程助手，享受智能补全与代码生成。</p>
          </div>
          <div className="ide-card">
            <h3>JetBrains</h3>
            <p>支持 IntelliJ IDEA、WebStorm、PyCharm 等全系列 JetBrains IDE，无缝集成 AI 编程能力。</p>
          </div>
        </div>
      </section>

      {/* ── 7. Pricing ── */}
      <section id="pricing" className="section container">
        <h2 className="section-title">选择您的订阅计划</h2>
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* ── 8. Enterprise Trust ── */}
      <section className="section container">
        <h2 className="section-title">受到知名企业信赖</h2>
        <div className="logo-wall">
          {ENTERPRISE_LOGOS.map((name) => (
            <div key={name} className="logo-item">{name}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
