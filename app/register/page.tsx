'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { ApiError } from '@/lib/api';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) router.replace('/console');
  }, [isAuthenticated, router]);
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '', invitation_code: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleRegister = async () => {
    if (!form.username || !form.email || !form.password) {
      setError('请填写所有必填项');
      return;
    }
    if (form.password !== form.confirm) {
      setError('两次输入的密码不一致');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await register({
        username: form.username,
        email: form.email,
        password: form.password,
        invitation_code: form.invitation_code || undefined,
      });
      router.push('/console');
    } catch (e) {
      setError(e instanceof ApiError ? e.message : '注册失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <h1>注册</h1>
        {error && <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="username">用户名</label>
          <input id="username" type="text" placeholder="请输入用户名" value={form.username} onChange={(e) => update('username', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input id="email" type="email" placeholder="请输入邮箱地址" value={form.email} onChange={(e) => update('email', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input id="password" type="password" placeholder="请输入密码" value={form.password} onChange={(e) => update('password', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">确认密码</label>
          <input id="confirmPassword" type="password" placeholder="请再次输入密码" value={form.confirm} onChange={(e) => update('confirm', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="invitationCode">邀请码（选填）</label>
          <input id="invitationCode" type="text" placeholder="请输入邀请码" value={form.invitation_code} onChange={(e) => update('invitation_code', e.target.value)} />
        </div>
        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? '注册中...' : '注册'}
        </button>
        <p className="auth-footer">
          已有账号？<Link href="/login">立即登录</Link>
        </p>
      </form>
    </main>
  );
}
