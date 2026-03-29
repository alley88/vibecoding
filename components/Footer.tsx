import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>产品</h3>
          <Link href="/about-claude-code">AICodeMirror 介绍</Link>
          <Link href="/pricing">价格方案</Link>
          <Link href="/login">登录</Link>
        </div>
        <div>
          <h3>资源</h3>
          <Link href="/docs">使用教程</Link>
          <Link href="/why-aicodemirror">品牌故事</Link>
        </div>
        <div>
          <h3>Claude 模型</h3>
          <p>Claude Opus 4</p>
          <p>Claude Sonnet 4.5</p>
          <p>Claude Haiku 3.5</p>
        </div>
        <div>
          <h3>服务承诺</h3>
          <p>透明定价</p>
          <p>隐私保护</p>
          <p>安全合规</p>
        </div>
      </div>
      <p className="copyright">© 2025 AICodeMirror共享平台. 保留所有权利. 华峥科技有限公司</p>
    </footer>
  );
}
