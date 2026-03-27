'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="logo" href="/">AICodeMirror</Link>
        <nav className="main-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="auth-links">
          <Link href="/register">注册</Link>
          <Link href="/login" className="btn-ghost">登录</Link>
        </div>
      </div>
    </header>
  );
}
