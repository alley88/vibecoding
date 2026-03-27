import { MOCK_ORDERS } from '@/lib/console-mock-data';

export default function OrdersPage() {
  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">订单记录</h1>
      </div>

      <div className="console-card">
        <table className="console-table">
          <thead>
            <tr>
              <th>订单号</th>
              <th>日期</th>
              <th>类型</th>
              <th>金额 (¥)</th>
              <th>状态</th>
              <th>到期日期</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ORDERS.map((order) => (
              <tr key={order.id}>
                <td><code style={{ fontSize: '0.85rem' }}>{order.id}</code></td>
                <td>{order.date}</td>
                <td>{order.type}</td>
                <td>¥{order.amount}</td>
                <td><span className="status-success">{order.status}</span></td>
                <td>{order.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
