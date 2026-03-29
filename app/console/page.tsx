'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { userService, DashboardData } from '@/lib/services/user';
import { miscService, Announcement } from '@/lib/services/misc';

export default function ConsoleDashboard() {
  const { user } = useAuth();
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      userService.getDashboard().catch(() => null),
      miscService.announcements().catch(() => []),
    ]).then(([dash, ann]) => {
      setDashboard(dash);
      setAnnouncements(ann);
      setLoading(false);
    });
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Use dashboard data if available, fallback to auth user
  const u = dashboard?.user || user;
  const balance = u?.balance ?? 0;
  const subBalance = u?.subscription_balance ?? 0;
  const plan = u?.plan ?? 'FREE';
  const referralCode = u?.referral_code ?? '';
  const referralInviter = u?.referral_inviter ?? '—';
  const referralLink = u?.referral_link ?? '';

  if (loading) {
    return (
      <div>
        <div className="console-topbar">
          <h1 className="console-page-title">仪表板概览</h1>
          <span style={{ color: 'var(--muted)' }}>加载中...</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="console-card" style={{ minHeight: '80px', opacity: 0.5 }} />
            ))}
          </div>
          <div>
            <div className="console-card" style={{ minHeight: '80px', opacity: 0.5 }} />
          </div>
        </div>
      </div>
    );
  }

  const latestAnnouncement = announcements[0];

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
            <p style={{ fontSize: '2rem', fontWeight: 600 }}>¥ {balance.toFixed(2)}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>仅充值消费,在订阅过期后生效</p>
          </div>

          <div className="console-card">
            <h3>订阅余额</h3>
            <p style={{ fontSize: '2rem', fontWeight: 600 }}>¥ {subBalance.toFixed(2)}</p>
            <span className="console-nav-badge">{plan}</span>
          </div>

          <div className="console-card">
            <h3>邀请好友</h3>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>我的邀请人</p>
              <p>{referralInviter}</p>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>我的邀请码</p>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <code>{referralCode}</code>
                {referralCode && (
                  <button
                    onClick={() => copyToClipboard(referralCode, 'code')}
                    className="btn-ghost"
                    style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                  >
                    {copiedField === 'code' ? '已复制' : '复制'}
                  </button>
                )}
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>我的邀请链接</p>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <code style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>{referralLink}</code>
                {referralLink && (
                  <button
                    onClick={() => copyToClipboard(referralLink, 'link')}
                    className="btn-ghost"
                    style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                  >
                    {copiedField === 'link' ? '已复制' : '复制'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="console-card">
            <h3>当前订阅</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, margin: '1rem 0' }}>{plan}</p>
            <button className="btn-ghost" style={{ width: '100%' }}>升级订阅</button>
          </div>

          <div className="console-card" style={{ marginTop: '1.5rem' }}>
            <h3>最新公告</h3>
            <div style={{ marginTop: '1rem' }}>
              {latestAnnouncement ? (
                <>
                  <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{latestAnnouncement.title}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>{latestAnnouncement.created_at}</p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{latestAnnouncement.content}</p>
                </>
              ) : (
                <p style={{ color: 'var(--muted)' }}>暂无公告</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
