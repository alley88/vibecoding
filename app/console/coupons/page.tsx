'use client';

import { useState, useEffect } from 'react';
import { redeemService, RedeemHistory } from '@/lib/services/redeem';
import { ApiError } from '@/lib/api';

export default function CouponsPage() {
  const [history, setHistory] = useState<RedeemHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [redeeming, setRedeeming] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const fetchHistory = async () => {
    try {
      const data = await redeemService.history();
      setHistory(data || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchHistory(); }, []);

  const handleRedeem = async () => {
    if (!code.trim()) return;
    setRedeeming(true);
    setMessage('');
    try {
      const result = await redeemService.redeem(code.trim());
      setMessage(result.message || `兑换成功！金额：¥${result.amount}`);
      setMessageType('success');
      setCode('');
      fetchHistory();
    } catch (e) {
      setMessage(e instanceof ApiError ? e.message : '兑换失败');
      setMessageType('error');
    } finally {
      setRedeeming(false);
    }
  };

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">兑换卡密</h1>
      </div>

      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>输入兑换码</h3>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'end' }}>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <input
              type="text"
              placeholder="请输入兑换码"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button className="btn-primary" onClick={handleRedeem} disabled={redeeming}>
            {redeeming ? '兑换中...' : '兑换'}
          </button>
        </div>
        {message && (
          <p style={{ color: messageType === 'success' ? '#4ade80' : '#ff6b6b', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            {message}
          </p>
        )}
      </div>

      <div className="console-card">
        <h3 style={{ marginBottom: '1rem' }}>兑换历史</h3>
        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>加载中...</p>
        ) : (
          <table className="console-table">
            <thead>
              <tr>
                <th>兑换码</th>
                <th>金额 (¥)</th>
                <th>兑换时间</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h) => (
                <tr key={h.id}>
                  <td><code style={{ fontSize: '0.85rem' }}>{h.code}</code></td>
                  <td>¥{h.amount}</td>
                  <td>{h.redeemed_at}</td>
                </tr>
              ))}
              {history.length === 0 && (
                <tr><td colSpan={3} style={{ textAlign: 'center', color: 'var(--muted)' }}>暂无兑换记录</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
