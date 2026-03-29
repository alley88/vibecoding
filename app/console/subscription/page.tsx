'use client';

import { useState, useEffect } from 'react';
import PricingCard from '@/components/PricingCard';
import { PLANS } from '@/lib/constants';
import { useAuth } from '@/contexts/AuthContext';
import { subscriptionService, Subscription } from '@/lib/services/subscription';

export default function SubscriptionPage() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    subscriptionService.list()
      .then((subs) => {
        const active = (subs || []).find((s) => s.status === 'active');
        setSubscription(active || null);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const plan = subscription?.plan || user?.plan || 'FREE';
  const balance = user?.balance ?? 0;
  const expiry = subscription?.end_date || user?.subscription_expiry || '—';

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">订阅管理</h1>
      </div>

      <div className="console-card featured" style={{ marginBottom: '2rem' }}>
        {loading ? (
          <p style={{ color: 'var(--muted)', padding: '1rem' }}>加载中...</p>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="console-card-label">当前方案</p>
                <p className="console-card-value" style={{ fontSize: '1.5rem' }}>{plan}</p>
                <p className="console-card-sub">到期日期：{expiry}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="console-card-label">剩余余额</p>
                <p className="balance-display" style={{ fontSize: '2rem' }}>¥{balance.toLocaleString()}</p>
              </div>
            </div>
            <div style={{ marginTop: '1rem', background: 'rgba(91,140,255,0.1)', borderRadius: '8px', height: '8px' }}>
              <div style={{ background: 'var(--brand)', borderRadius: '8px', height: '100%', width: '62%' }} />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>已使用约 62% 的周期额度</p>
          </>
        )}
      </div>

      <h2 className="section-title">切换方案</h2>
      <div className="pricing-grid">
        {PLANS.map((p) => (
          <PricingCard key={p.name} plan={p} />
        ))}
      </div>
    </>
  );
}
