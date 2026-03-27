'use client';

import { useState } from 'react';
import { MOCK_USAGE_LOGS } from '@/lib/console-mock-data';

const MODELS = ['全部', 'Claude Opus', 'Claude Sonnet', 'Claude Haiku', 'Codex', 'Gemini Pro'];

export default function UsagePage() {
  const [filter, setFilter] = useState('全部');

  const filtered = filter === '全部'
    ? MOCK_USAGE_LOGS
    : MOCK_USAGE_LOGS.filter((l) => l.model === filter);

  const totalTokens = filtered.reduce((s, l) => s + l.tokens, 0);
  const totalCost = filtered.reduce((s, l) => s + l.cost, 0);

  const modelCounts: Record<string, number> = {};
  filtered.forEach((l) => { modelCounts[l.model] = (modelCounts[l.model] || 0) + l.tokens; });
  const topModel = Object.entries(modelCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—';

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">用量明细</h1>
      </div>

      {/* Summary */}
      <div className="console-stats-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="console-card">
          <p className="console-card-label">总 Tokens</p>
          <p className="console-card-value">{totalTokens.toLocaleString()}</p>
        </div>
        <div className="console-card">
          <p className="console-card-label">总费用</p>
          <p className="console-card-value">¥{totalCost.toFixed(2)}</p>
        </div>
        <div className="console-card">
          <p className="console-card-label">最常用模型</p>
          <p className="console-card-value">{topModel}</p>
        </div>
      </div>

      {/* Filter */}
      <div className="switcher" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
        {MODELS.map((m) => (
          <button
            key={m}
            className={`chip${filter === m ? ' chip-active' : ''}`}
            onClick={() => setFilter(m)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="console-card">
        <table className="console-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>模型</th>
              <th>Tokens</th>
              <th>费用 (¥)</th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id}>
                <td>{l.date}</td>
                <td>{l.model}</td>
                <td>{l.tokens.toLocaleString()}</td>
                <td>¥{l.cost.toFixed(2)}</td>
                <td><span className="badge" style={{ fontSize: '0.78rem' }}>{l.type}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
