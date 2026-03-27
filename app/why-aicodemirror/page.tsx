import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '品牌故事 — AICodeMirror',
  description: '为什么域名是 aicodemirror.com？了解 AICodeMirror 品牌的演进历史。',
};

const reasons = [
  {
    title: '品牌延续',
    desc: '从 Claude Mirror 时代积累的用户认知和口碑，域名承载了社区的信任与记忆。',
  },
  {
    title: 'SEO 价值',
    desc: '域名已建立的搜索引擎权重和反向链接，是宝贵的数字资产。',
  },
  {
    title: '用户习惯',
    desc: '老用户已形成访问习惯，更换域名会造成不必要的流量损失和用户困惑。',
  },
  {
    title: '语义精准',
    desc: 'AI + Code + Mirror 完美表达了"AI 编程工具镜像服务"的产品定位。',
  },
];

export default function WhyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero container">
        <p className="badge">品牌故事</p>
        <h1>为什么域名是 aicodemirror.com？</h1>
        <p className="sub">
          一个域名背后的产品演进与品牌思考。
        </p>
      </section>

      {/* History */}
      <section className="section container">
        <div className="prose">
          <h2>品牌演进历史</h2>
          <p>
            AICodeMirror 的前身是 Claude Mirror —— 一个专注于为中国用户提供 Claude 访问服务的平台。
            随着产品线从单一的 Claude 扩展到 Codex、Gemini CLI 等多款 AI 编程工具，
            我们将品牌升级为 AICodeMirror，更准确地反映了"AI 编程工具镜像服务"的定位。
          </p>
          <p>
            虽然服务范围已远超最初的 Claude Mirror，但我们选择保留 aicodemirror.com 这个域名。
            以下是我们的四个核心理由：
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="section container">
        <h2 className="section-title">保留域名的四个理由</h2>
        <div className="reason-grid">
          {reasons.map((r) => (
            <div key={r.title} className="reason-card">
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Domain Breakdown */}
      <section className="section container">
        <h2 className="section-title">域名语义拆解</h2>
        <div className="domain-breakdown">
          <div className="domain-part">
            <h3>AI</h3>
            <p>人工智能</p>
          </div>
          <div className="domain-part">
            <h3>Code</h3>
            <p>编程开发</p>
          </div>
          <div className="domain-part">
            <h3>Mirror</h3>
            <p>镜像服务</p>
          </div>
        </div>
        <div className="prose" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>
            三个词组合在一起，精准传达了我们的核心价值：<br />
            <strong style={{ color: 'var(--text)' }}>为开发者提供 AI 编程工具的镜像访问服务</strong>
          </p>
        </div>
      </section>
    </main>
  );
}
