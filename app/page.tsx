const plans = [
  { name: 'PAYGO', price: '按量付费', perks: ['充值金额等价人民币额度', '按实际使用付费', '标准价格', '永不过期'] },
  { name: 'PRO', price: '¥259', perks: ['立即获得￥305额度', '约 8.5 折', '额度有效期 30 天', '基本速率支持'] },
  { name: 'MAX', price: '¥559', perks: ['立即获得￥699额度', '约 8 折', '额度有效期 30 天', '高级速率支持'] },
  { name: 'ULTRA', price: '¥1259', perks: ['立即获得￥1678额度', '约 7.5 折', '额度有效期 30 天', '最高速率支持'] },
];

const stats = [
  { value: '10000+', label: '订阅用户' },
  { value: '200+', label: '知名企业/高校选择' },
  { value: '280天+', label: '稳定提供服务' },
];

export default function Home() {
  return (
    <main>
      <header className="header wrapper">
        <div className="brand">AICodeMirror</div>
        <nav>
          <a href="#">首页</a>
          <a href="#pricing">定价</a>
          <a href="#">使用教程</a>
          <a href="#">关于我们</a>
        </nav>
        <button className="ghost">登录</button>
      </header>

      <section className="hero wrapper">
        <p className="badge">企业级 GPT-5.4</p>
        <h1>一站式 Vibe Coding</h1>
        <p className="sub">
          无需编程基础，仅依靠自然语言，就能将您的想法变为现实。稳定、安全、优惠地使用 Claude Code、Codex 与 Gemini CLI。
        </p>
        <div className="actions">
          <button>免费使用</button>
          <span>加入 AI 社群领取 8 元永久额度</span>
        </div>
      </section>

      <section className="stats wrapper">
        {stats.map((item) => (
          <div key={item.label} className="card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="features wrapper">
        <h2>同时支持 Claude Code / Codex / Gemini CLI</h2>
        <div className="feature-grid">
          {['稳定可靠', '产品多元', '报销合规'].map((item) => (
            <article key={item} className="feature">
              <h3>{item}</h3>
              <p>多网络节点与容灾备份，透明定价并支持企业采购流程。</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing wrapper">
        <h2>选择您的订阅计划</h2>
        <div className="plans">
          {plans.map((plan) => (
            <article key={plan.name} className="plan">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.perks.map((perk) => (
                  <li key={perk}>✓ {perk}</li>
                ))}
              </ul>
              <button>选择 {plan.name}</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer wrapper">
        <p>© 2025 AICodeMirror共享平台. 保留所有权利.</p>
      </footer>
    </main>
  );
}
