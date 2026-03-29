'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CONSOLE_NAV_SECTIONS } from '@/lib/console-constants';
import { useAuth } from '@/contexts/AuthContext';

export default function ConsoleSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <aside className="console-sidebar">
      <div className="console-sidebar-header">
        <Link href="/" className="logo">AICodeMirror</Link>
      </div>
      {user && (
        <div style={{ padding: '0 1rem 0.5rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
          {user.username} ({user.plan || 'FREE'})
        </div>
      )}
      <nav className="console-nav">
        {CONSOLE_NAV_SECTIONS.map((section) => (
          <div key={section.title} className="console-nav-section">
            <div className="console-nav-section-title">{section.title}</div>
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                <span className="console-nav-icon">{link.icon}</span>
                <span className="console-nav-label">{link.label}</span>
                {link.badge && (
                  <span className="console-nav-badge">{link.badge}</span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <div className="console-sidebar-footer">
        <Link href="/">← 返回首页</Link>
        <button
          onClick={handleLogout}
          style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '0.85rem', marginTop: '0.5rem' }}
        >
          退出登录
        </button>
      </div>
    </aside>
  );
}
