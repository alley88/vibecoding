'use client';

import { useState } from 'react';
import { MOCK_USER, MOCK_REFERRALS } from '@/lib/console-mock-data';

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`https://www.aicodemirror.com/register?ref=${MOCK_USER.referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">推荐返利</h1>
      </div>

      {/* Referral Stats */}
      <div className="console-stats-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="console-card">
          <p className="console-card-label">推荐码</p>
          <p className="console-card-value" style={{ fontFamily: 'monospace' }}>{MOCK_USER.referralCode}</p>
        </div>
        <div className="console-card">
          <p className="console-card-label">累计收益</p>
          <p className="console-card-value">¥{MOCK_USER.referralEarnings.toFixed(2)}</p>
        </div>
        <div className="console-card">
          <p className="console-card-label">推荐人数</p>
          <p className="console-card-value">{MOCK_REFERRALS.length} 人</p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>推荐链接</h3>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <input
            type="text"
            readOnly
            value={`https://www.aicodemirror.com/register?ref=${MOCK_USER.referralCode}`}
            style={{
              flex: 1,
              padding: '0.7rem 1rem',
              border: '1px solid var(--line)',
              borderRadius: '10px',
              background: '#0b1222',
              color: 'var(--text)',
              fontSize: '0.9rem',
            }}
          />
          <button className="btn-primary" onClick={handleCopy} style={{ width: 'auto' }}>
            {copied ? '已复制' : '复制链接'}
          </button>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.8rem' }}>
          分享此链接，好友注册并首次充值后，您将获得 10% 返利奖励
        </p>
      </div>

      {/* Referral List */}
      <div className="console-card">
        <h3 style={{ marginBottom: '1rem' }}>推荐记录</h3>
        <table className="console-table">
          <thead>
            <tr>
              <th>用户</th>
              <th>注册日期</th>
              <th>状态</th>
              <th>返利金额 (¥)</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REFERRALS.map((ref) => (
              <tr key={ref.id}>
                <td>{ref.user}</td>
                <td>{ref.date}</td>
                <td>
                  <span className={ref.status === '已激活' ? 'status-success' : 'badge'} style={{ fontSize: '0.85rem' }}>
                    {ref.status}
                  </span>
                </td>
                <td>¥{ref.earnings.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
