'use client';

import { useState } from 'react';
import { RECHARGE_AMOUNTS } from '@/lib/console-constants';
import { MOCK_USER, MOCK_RECHARGE_HISTORY } from '@/lib/console-mock-data';

export default function RechargePage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState('');

  const amount = selected ?? (custom ? Number(custom) : 0);

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">充值</h1>
      </div>

      {/* Current Balance */}
      <div className="console-card" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <p className="console-card-label">当前余额</p>
        <p className="balance-display">¥{MOCK_USER.balance.toLocaleString()}</p>
      </div>

      {/* Amount Selection */}
      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>选择充值金额</h3>
        <div className="recharge-amounts">
          {RECHARGE_AMOUNTS.map((a) => (
            <button
              key={a}
              className={`recharge-amount${selected === a ? ' selected' : ''}`}
              onClick={() => { setSelected(a); setCustom(''); }}
            >
              ¥{a}
            </button>
          ))}
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--muted)' }}>自定义：</span>
          <input
            type="number"
            className="recharge-input"
            placeholder="输入金额"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
          />
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="badge">支付宝</span>
          <button className="btn-primary" disabled={!amount}>
            充值 ¥{amount || '—'}
          </button>
        </div>
      </div>

      {/* Recharge History */}
      <div className="console-card">
        <h3 style={{ marginBottom: '1rem' }}>充值记录</h3>
        <table className="console-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>金额</th>
              <th>支付方式</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_RECHARGE_HISTORY.map((r) => (
              <tr key={r.id}>
                <td>{r.date}</td>
                <td>¥{r.amount}</td>
                <td>{r.method}</td>
                <td><span className="status-success">{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
