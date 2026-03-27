'use client';

import { useState } from 'react';
import { MOCK_API_KEYS } from '@/lib/console-mock-data';

function maskKey(key: string) {
  return key.slice(0, 12) + '••••••••••••' + key.slice(-4);
}

export default function ApiKeysPage() {
  const [keys, setKeys] = useState(MOCK_API_KEYS);
  const [copied, setCopied] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');

  const handleCopy = async (key: string, id: string) => {
    await navigator.clipboard.writeText(key);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDelete = (id: string) => {
    setKeys(keys.filter((k) => k.id !== id));
  };

  const handleCreate = () => {
    if (!newName.trim()) return;
    const rand = Math.random().toString(36).slice(2, 34);
    setKeys([...keys, {
      id: String(Date.now()),
      name: newName,
      key: `acm-sk-${rand}`,
      createdAt: new Date().toISOString().slice(0, 10),
      lastUsed: '—',
    }]);
    setNewName('');
    setShowCreate(false);
  };

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">API 密钥</h1>
        <button className="btn-primary" onClick={() => setShowCreate(!showCreate)}>
          {showCreate ? '取消' : '创建新密钥'}
        </button>
      </div>

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
          <button className="btn-primary" onClick={handleCreate}>创建</button>
        </div>
      )}

      <div className="console-card">
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
                <td>{k.createdAt}</td>
                <td>{k.lastUsed}</td>
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
      </div>
    </>
  );
}
