'use client';

import { useState } from 'react';
import { MOCK_USER } from '@/lib/console-mock-data';

export default function ConsoleDashboard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">仪表板概览</h1>
        <span style={{ color: 'var(--muted)' }}>欢迎回到 Claude Code 用户中心</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="console-card">
            <h3>当前余额</h3>
            <p style={{ fontSize: '2rem', fontWeight: 600 }}>¥ {MOCK_USER.balance.toFixed(2)}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>仅充值消费,在订阅过期后生效</p>
          </div>

          <div className="console-card">
            <h3>订阅余额</h3>
            <p style={{ fontSize: '2rem', fontWeight: 600 }}>¥ {MOCK_USER.subscriptionBalance.toFixed(2)}</p>
            <span className="console-nav-badge">FREE</span>
          </div>

          <div className="console-card">
            <h3>邀请好友</h3>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>我的邀请人</p>
              <p>{MOCK_USER.referralInviter}</p>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>我的邀请码</p>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <code>{MOCK_USER.referralCode}</code>
                <button
                  onClick={() => copyToClipboard(MOCK_USER.referralCode, 'code')}
                  className="btn-ghost"
                  style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                >
                  {copiedField === 'code' ? '已复制' : '复制'}
                </button>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>我的邀请链接</p>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <code style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>{MOCK_USER.referralLink}</code>
                <button
                  onClick={() => copyToClipboard(MOCK_USER.referralLink, 'link')}
                  className="btn-ghost"
                  style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                >
                  {copiedField === 'link' ? '已复制' : '复制'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="console-card">
            <h3>当前订阅</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, margin: '1rem 0' }}>{MOCK_USER.plan}</p>
            <button className="btn-ghost" style={{ width: '100%' }}>仅换高级</button>
          </div>

          <div className="console-card" style={{ marginTop: '1.5rem' }}>
            <h3>最新公告</h3>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>新春活动来袭,7折优惠券再回归!</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>2026-02-13 03:57:36</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                限时活动页面已上线,在订阅过期前可以续费享受7折优惠...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
