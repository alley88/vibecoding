'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleRegister = () => {
    if (!form.username || !form.email || !form.password) {
      setError('请填写所有必填项');
      return;
    }
    if (form.password !== form.confirm) {
      setError('两次输入的密码不一致');
      return;
    }
    // Mock: 注册成功直接跳转登录页
    router.push('/login');
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
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
        <button className="btn-primary" onClick={handleRegister}>注册</button>
        <p className="auth-footer">
          已有账号？<Link href="/login">立即登录</Link>
        </p>
      </div>
    </main>
  );
}
