'use client';

import { useState, useEffect } from 'react';
import { usageService, UsageLog, UsageStats } from '@/lib/services/usage';

const MODELS = ['全部', 'Claude Opus', 'Claude Sonnet', 'Claude Haiku', 'Codex', 'Gemini Pro'];

export default function UsagePage() {
  const [filter, setFilter] = useState('全部');
  const [logs, setLogs] = useState<UsageLog[]>([]);
  const [stats, setStats] = useState<UsageStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      usageService.list({ model: filter !== '全部' ? filter : undefined }).catch(() => []),
      usageService.stats().catch(() => null),
    ]).then(([logsData, statsData]) => {
      setLogs(logsData || []);
      setStats(statsData);
      setLoading(false);
    });
  }, [filter]);

  const totalTokens = stats?.total_tokens ?? logs.reduce((s, l) => s + l.tokens, 0);
  const totalCost = stats?.total_cost ?? logs.reduce((s, l) => s + l.cost, 0);
  const topModel = stats?.top_model ?? '—';

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">用量明细</h1>
      </div>

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

      <div className="console-card">
        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>加载中...</p>
        ) : (
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
              {logs.map((l) => (
                <tr key={l.id}>
                  <td>{l.date}</td>
                  <td>{l.model}</td>
                  <td>{l.tokens.toLocaleString()}</td>
                  <td>¥{l.cost.toFixed(2)}</td>
                  <td><span className="badge" style={{ fontSize: '0.78rem' }}>{l.type}</span></td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--muted)' }}>暂无记录</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
