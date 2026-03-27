'use client';

export default function TransferPage() {
  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">转账管理</h1>
        <span style={{ color: 'var(--muted)' }}>管理您的转账记录</span>
      </div>

      <div className="console-card">
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>转账功能需要联系客服开通</p>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>如需使用转账功能,请联系客服人员</p>
          <button className="btn-primary">联系客服</button>
        </div>
      </div>
    </div>
  );
}
