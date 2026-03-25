import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AICodeMirror 官方共享平台 - Next.js 还原版',
  description: '使用 Next.js App Router 还原 aicodemirror.com 首页结构与视觉层级。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
