'use client';

import PricingCard from '@/components/PricingCard';
import { PLANS } from '@/lib/constants';
import { MOCK_USER } from '@/lib/console-mock-data';

export default function SubscriptionPage() {
  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">订阅管理</h1>
      </div>

      {/* Current Plan */}
      <div className="console-card featured" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="console-card-label">当前方案</p>
            <p className="console-card-value" style={{ fontSize: '1.5rem' }}>{MOCK_USER.plan}</p>
            <p className="console-card-sub">到期日期：{MOCK_USER.subscriptionExpiry}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="console-card-label">剩余余额</p>
            <p className="balance-display" style={{ fontSize: '2rem' }}>¥{MOCK_USER.balance.toLocaleString()}</p>
          </div>
        </div>
        <div style={{ marginTop: '1rem', background: 'rgba(91,140,255,0.1)', borderRadius: '8px', height: '8px' }}>
          <div style={{ background: 'var(--brand)', borderRadius: '8px', height: '100%', width: '62%' }} />
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>已使用约 62% 的周期额度</p>
      </div>

      {/* Plan Comparison */}
      <h2 className="section-title">切换方案</h2>
      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </>
  );
}
