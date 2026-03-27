'use client';

export default function CouponsPage() {
  const coupons = [
    { id: '1', name: '新春7折优惠券', discount: '7折', expiry: '2026-04-30', status: '可用' },
    { id: '2', name: '首充优惠券', discount: '9折', expiry: '2026-03-31', status: '已使用' },
  ];

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">优惠券</h1>
        <span style={{ color: 'var(--muted)' }}>查看和使用您的优惠券</span>
      </div>

      <div className="console-card">
        <table className="console-table">
          <thead>
            <tr>
              <th>优惠券名称</th>
              <th>折扣</th>
              <th>有效期至</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td>{coupon.name}</td>
                <td>{coupon.discount}</td>
                <td>{coupon.expiry}</td>
                <td>
                  <span style={{
                    color: coupon.status === '可用' ? '#4ade80' : 'var(--muted)',
                    fontWeight: coupon.status === '可用' ? 600 : 400
                  }}>
                    {coupon.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
