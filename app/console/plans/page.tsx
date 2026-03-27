'use client';

export default function PlansPage() {
  const plans = [
    { name: 'Free', price: '¥0', features: ['基础功能', '每月10万tokens', '社区支持'] },
    { name: 'Pro', price: '¥299/月', features: ['所有基础功能', '每月500万tokens', '优先支持', '7折优惠'] },
    { name: 'Team', price: '¥999/月', features: ['所有Pro功能', '无限tokens', '团队协作', '专属客服'] },
  ];

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">使用计划</h1>
        <span style={{ color: 'var(--muted)' }}>选择适合您的订阅计划</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {plans.map((plan) => (
          <div key={plan.name} className="console-card">
            <h3>{plan.name}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 600, margin: '1rem 0' }}>{plan.price}</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{ padding: '0.5rem 0', color: 'var(--muted)' }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <button className="btn-primary" style={{ width: '100%' }}>
              {plan.name === 'Free' ? '当前计划' : '升级'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
