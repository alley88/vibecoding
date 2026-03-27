'use client';

import { useState } from 'react';
import { MOCK_USER, MOCK_NOTIFICATIONS } from '@/lib/console-mock-data';

export default function SettingsPage() {
  const [name, setName] = useState(MOCK_USER.name);
  const [email, setEmail] = useState(MOCK_USER.email);
  const [notif, setNotif] = useState(MOCK_NOTIFICATIONS);

  const toggle = (key: keyof typeof notif) => {
    setNotif({ ...notif, [key]: !notif[key] });
  };

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">账号设置</h1>
      </div>

      {/* Profile */}
      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>个人信息</h3>
        <div className="form-group">
          <label htmlFor="settingsName">用户名</label>
          <input id="settingsName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="settingsEmail">邮箱</label>
          <input id="settingsEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn-primary" style={{ width: 'auto' }}>保存</button>
      </div>

      {/* Password */}
      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>修改密码</h3>
        <div className="form-group">
          <label htmlFor="currentPwd">当前密码</label>
          <input id="currentPwd" type="password" placeholder="请输入当前密码" />
        </div>
        <div className="form-group">
          <label htmlFor="newPwd">新密码</label>
          <input id="newPwd" type="password" placeholder="请输入新密码" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPwd">确认新密码</label>
          <input id="confirmPwd" type="password" placeholder="请再次输入新密码" />
        </div>
        <button className="btn-primary" style={{ width: 'auto' }}>修改密码</button>
      </div>

      {/* Notifications */}
      <div className="console-card">
        <h3 style={{ marginBottom: '1rem' }}>通知偏好</h3>
        <div className="toggle-row">
          <span>邮件通知</span>
          <button className={`toggle-btn${notif.email ? ' active' : ''}`} onClick={() => toggle('email')}>
            {notif.email ? '开' : '关'}
          </button>
        </div>
        <div className="toggle-row">
          <span>用量预警</span>
          <button className={`toggle-btn${notif.usageAlert ? ' active' : ''}`} onClick={() => toggle('usageAlert')}>
            {notif.usageAlert ? '开' : '关'}
          </button>
        </div>
        <div className="toggle-row">
          <span>营销通知</span>
          <button className={`toggle-btn${notif.marketing ? ' active' : ''}`} onClick={() => toggle('marketing')}>
            {notif.marketing ? '开' : '关'}
          </button>
        </div>
      </div>
    </>
  );
}
