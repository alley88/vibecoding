'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { ApiError } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace('/console');
  }, [isAuthenticated, router]);

  const handleLogin = async () => {
    if (!username || !password) {
      setError('请输入用户名和密码');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await login({ username, password });
      router.push('/console');
    } catch (e) {
      setError(e instanceof ApiError ? e.message : '登录失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <h1>登录</h1>
        {error && <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="username">用户名</label>
          <input id="username" type="text" placeholder="请输入用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input id="password" type="password" placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? '登录中...' : '登录'}
        </button>
        <p className="auth-footer">
          还没有账号？<Link href="/register">立即注册</Link>
        </p>
      </form>
    </main>
  );
}
