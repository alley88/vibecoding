'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('zhangsan@example.com');
  const [password, setPassword] = useState('test123456');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'zhangsan@example.com' && password === 'test123456') {
      router.push('/console');
    } else {
      setError('邮箱或密码错误，请使用测试账号登录');
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>登录</h1>
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          测试账号已预填，直接点击登录即可
        </p>
        {error && <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn-primary" onClick={handleLogin}>登录</button>
        <p className="auth-footer">
          还没有账号？<Link href="/register">立即注册</Link>
        </p>
      </div>
    </main>
  );
}
