import ConsoleSidebar from '@/components/ConsoleSidebar';

export const metadata = {
  title: '控制台 — AICodeMirror',
};

export default function ConsoleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="console-layout">
      <ConsoleSidebar />
      <main className="console-main">
        {children}
      </main>
    </div>
  );
}
