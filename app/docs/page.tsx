import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '使用教程 — AICodeMirror',
  description: '学习如何使用 AICodeMirror 平台，快速上手 Claude Code、Codex 与 Gemini CLI。',
};

const wechatArticles = [
  {
    tag: '微信公众号',
    title: 'Claude Code 新手入门完全指南',
    desc: '从注册到第一次使用，手把手教你配置和运行 Claude Code。',
  },
  {
    tag: '微信公众号',
    title: '如何用 Claude Code 进行项目级开发',
    desc: '深入了解多文件编辑、上下文管理和项目最佳实践。',
  },
  {
    tag: '微信公众号',
    title: 'AICodeMirror 平台使用技巧与常见问题',
    desc: '充值、订阅管理、额度查询等平台功能详解。',
  },
];

const blogArticles = [
  {
    tag: '博客',
    title: 'Codex vs Claude Code：如何选择合适的 AI 编程工具',
    desc: '对比分析两款工具的特点、适用场景与定价策略。',
  },
  {
    tag: '博客',
    title: 'Gemini CLI 上手指南：Google AI 编程新选择',
    desc: '了解 Gemini CLI 的安装配置和核心功能。',
  },
];

const videos = [
  {
    tag: 'B站视频',
    title: 'Claude Code 实战演示：30 分钟搭建一个完整项目',
    desc: '视频演示从零开始使用 Claude Code 完成一个 Web 应用开发。',
  },
];

export default function DocsPage() {
  return (
    <main>
      <section className="hero container">
        <p className="badge">学习资源</p>
        <h1>使用教程与学习资料</h1>
        <p className="sub">丰富的图文和视频教程，帮助你快速上手 AI 编程工具。</p>
      </section>

      {/* WeChat Articles */}
      <section className="section container">
        <h2 className="section-title">微信公众号文章</h2>
        <div className="docs-grid">
          {wechatArticles.map((a) => (
            <article key={a.title} className="docs-card">
              <span className="docs-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="section container">
        <h2 className="section-title">博客文章</h2>
        <div className="docs-grid">
          {blogArticles.map((a) => (
            <article key={a.title} className="docs-card">
              <span className="docs-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="section container">
        <h2 className="section-title">教学视频</h2>
        <div className="docs-grid">
          {videos.map((v) => (
            <article key={v.title} className="docs-card">
              <span className="docs-tag">{v.tag}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
