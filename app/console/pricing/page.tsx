'use client';

export default function PricingPage() {
  const models = [
    { name: 'Claude Sonnet 4.6', inputPrice: '3.00', outputPrice: '15.00', unit: '每百万tokens' },
    { name: 'Claude Opus 4.6', inputPrice: '15.00', outputPrice: '75.00', unit: '每百万tokens' },
    { name: 'Claude Haiku 4.5', inputPrice: '0.80', outputPrice: '4.00', unit: '每百万tokens' },
    { name: 'Codex', inputPrice: '0.40', outputPrice: '0.40', unit: '每千tokens' },
    { name: 'Gemini Pro', inputPrice: '0.10', outputPrice: '0.10', unit: '每千tokens' },
  ];

  return (
    <div>
      <div className="console-topbar">
        <h1 className="console-page-title">模型价格</h1>
        <span style={{ color: 'var(--muted)' }}>查看各模型的定价信息</span>
      </div>

      <div className="console-card">
        <table className="console-table">
          <thead>
            <tr>
              <th>模型名称</th>
              <th>输入价格</th>
              <th>输出价格</th>
              <th>计费单位</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.name}>
                <td>{model.name}</td>
                <td>¥{model.inputPrice}</td>
                <td>¥{model.outputPrice}</td>
                <td>{model.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
