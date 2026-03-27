import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutShell from '@/components/LayoutShell';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AICodeMirror 官方共享平台 — 一站式 Vibe Coding',
  description:
    '稳定、安全、优惠地使用 Claude Code、Codex 与 Gemini CLI。无需编程基础，仅依靠自然语言，就能将您的想法变为现实。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body suppressHydrationWarning>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
