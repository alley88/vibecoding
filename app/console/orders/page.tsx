'use client';

import { useState, useEffect } from 'react';
import { usageService, UsageLog } from '@/lib/services/usage';

export default function OrdersPage() {
  const [orders, setOrders] = useState<UsageLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usageService.list({ page_size: 50 })
      .then((data) => setOrders(data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">订单记录</h1>
      </div>

      <div className="console-card">
        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>加载中...</p>
        ) : (
          <table className="console-table">
            <thead>
              <tr>
                <th>订单号</th>
                <th>日期</th>
                <th>类型</th>
                <th>费用 (¥)</th>
                <th>模型</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td><code style={{ fontSize: '0.85rem' }}>{order.id}</code></td>
                  <td>{order.date}</td>
                  <td>{order.type}</td>
                  <td>¥{order.cost.toFixed(2)}</td>
                  <td>{order.model}</td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--muted)' }}>暂无订单</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
