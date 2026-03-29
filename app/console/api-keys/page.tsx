'use client';

import { useState, useEffect } from 'react';
import { keysService, ApiKey } from '@/lib/services/keys';
import { ApiError } from '@/lib/api';

function maskKey(key: string) {
  if (key.length < 16) return key;
  return key.slice(0, 12) + '••••••••••••' + key.slice(-4);
}

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [creating, setCreating] = useState(false);

  const fetchKeys = async () => {
    try {
      const data = await keysService.list();
      setKeys(data || []);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : '加载失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchKeys(); }, []);

  const handleCopy = async (key: string, id: string) => {
    await navigator.clipboard.writeText(key);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除该密钥吗？此操作不可撤销。')) return;
    try {
      await keysService.delete(id);
      setKeys((prev) => prev.filter((k) => k.id !== id));
    } catch (e) {
      setError(e instanceof ApiError ? e.message : '删除失败');
    }
  };

  const handleCreate = async () => {
    if (!newName.trim()) return;
    setCreating(true);
    try {
      const newKey = await keysService.create(newName);
      setKeys((prev) => [...prev, newKey]);
      setNewName('');
      setShowCreate(false);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : '创建失败');
    } finally {
      setCreating(false);
    }
  };

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">API 密钥</h1>
        <button className="btn-primary" onClick={() => setShowCreate(!showCreate)}>
          {showCreate ? '取消' : '创建新密钥'}
        </button>
      </div>

      {error && <p style={{ color: '#ff6b6b', marginBottom: '1rem' }}>{error}</p>}

      {showCreate && (
        <div className="console-card" style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'end' }}>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label htmlFor="keyName">密钥名称</label>
            <input
              id="keyName"
              type="text"
              placeholder="例如：开发环境"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <button className="btn-primary" onClick={handleCreate} disabled={creating}>
            {creating ? '创建中...' : '创建'}
          </button>
        </div>
      )}

      <div className="console-card">
        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>加载中...</p>
        ) : (
          <>
            <table className="console-table">
              <thead>
                <tr>
                  <th>名称</th>
                  <th>密钥</th>
                  <th>创建时间</th>
                  <th>最近使用</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((k) => (
                  <tr key={k.id}>
                    <td>{k.name}</td>
                    <td><code className="api-key-masked">{maskKey(k.key)}</code></td>
                    <td>{k.created_at}</td>
                    <td>{k.last_used || '—'}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn-sm btn-copy" onClick={() => handleCopy(k.key, k.id)}>
                          {copied === k.id ? '已复制' : '复制'}
                        </button>
                        <button className="btn-sm btn-danger" onClick={() => handleDelete(k.id)}>
                          删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {keys.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>暂无密钥，点击上方按钮创建</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
