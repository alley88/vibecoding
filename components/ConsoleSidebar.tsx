'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONSOLE_NAV_SECTIONS } from '@/lib/console-constants';

export default function ConsoleSidebar() {
  const pathname = usePathname();

  return (
    <aside className="console-sidebar">
      <div className="console-sidebar-header">
        <Link href="/" className="logo">AICodeMirror</Link>
      </div>
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
      </div>
    </aside>
  );
}
