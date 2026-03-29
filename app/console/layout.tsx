import ConsoleSidebar from '@/components/ConsoleSidebar';
import ConsoleAuthGuard from '@/components/ConsoleAuthGuard';

export const metadata = {
  title: '控制台 — AICodeMirror',
};

export default function ConsoleLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConsoleAuthGuard>
      <div className="console-layout">
        <ConsoleSidebar />
        <main className="console-main">
          {children}
        </main>
      </div>
    </ConsoleAuthGuard>
  );
}
