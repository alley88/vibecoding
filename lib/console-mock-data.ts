export const MOCK_USER = {
  name: '张三',
  email: 'zhangsan@example.com',
  plan: 'FREE',
  balance: 2.00,
  subscriptionBalance: 0.00,
  subscriptionExpiry: '2026-04-15',
  referralCode: 'TN3YVR',
  referralInviter: 'j*********g',
  referralEarnings: 156.8,
  referralLink: 'https://www.aicodemirror.com/register?invitecode=TN3YVR',
};

export const MOCK_API_KEYS = [
  { id: '1', name: '开发环境', key: 'acm-sk-7f3a9b2c1d4e5f6a7b8c9d0e1f2a3b4c', createdAt: '2026-03-01', lastUsed: '2026-03-27' },
  { id: '2', name: '生产环境', key: 'acm-sk-9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b', createdAt: '2026-02-15', lastUsed: '2026-03-26' },
  { id: '3', name: '测试环境', key: 'acm-sk-1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d', createdAt: '2026-03-20', lastUsed: '2026-03-25' },
];

export const MOCK_USAGE_LOGS = [
  { id: '1', date: '2026-03-27', model: 'Claude Sonnet', tokens: 12500, cost: 3.75, type: 'Claude Code' },
  { id: '2', date: '2026-03-27', model: 'Claude Opus', tokens: 8200, cost: 12.30, type: 'Claude Code' },
  { id: '3', date: '2026-03-26', model: 'Claude Haiku', tokens: 45000, cost: 4.50, type: 'Claude Code' },
  { id: '4', date: '2026-03-26', model: 'Codex', tokens: 15000, cost: 6.00, type: 'Codex' },
  { id: '5', date: '2026-03-25', model: 'Claude Sonnet', tokens: 22000, cost: 6.60, type: 'Claude Code' },
  { id: '6', date: '2026-03-25', model: 'Gemini Pro', tokens: 30000, cost: 3.00, type: 'Gemini CLI' },
  { id: '7', date: '2026-03-24', model: 'Claude Opus', tokens: 5000, cost: 7.50, type: 'Claude Code' },
  { id: '8', date: '2026-03-24', model: 'Claude Sonnet', tokens: 18000, cost: 5.40, type: 'Claude Code' },
  { id: '9', date: '2026-03-23', model: 'Claude Haiku', tokens: 60000, cost: 6.00, type: 'Claude Code' },
  { id: '10', date: '2026-03-23', model: 'Codex', tokens: 20000, cost: 8.00, type: 'Codex' },
  { id: '11', date: '2026-03-22', model: 'Claude Sonnet', tokens: 14000, cost: 4.20, type: 'Claude Code' },
  { id: '12', date: '2026-03-22', model: 'Gemini Pro', tokens: 25000, cost: 2.50, type: 'Gemini CLI' },
  { id: '13', date: '2026-03-21', model: 'Claude Opus', tokens: 6500, cost: 9.75, type: 'Claude Code' },
  { id: '14', date: '2026-03-21', model: 'Claude Sonnet', tokens: 16000, cost: 4.80, type: 'Claude Code' },
  { id: '15', date: '2026-03-20', model: 'Claude Haiku', tokens: 50000, cost: 5.00, type: 'Claude Code' },
];

export const MOCK_RECHARGE_HISTORY = [
  { id: '1', date: '2026-03-20', amount: 500, method: '支付宝', status: '成功' },
  { id: '2', date: '2026-03-10', amount: 200, method: '支付宝', status: '成功' },
  { id: '3', date: '2026-02-28', amount: 1000, method: '支付宝', status: '成功' },
  { id: '4', date: '2026-02-15', amount: 100, method: '支付宝', status: '成功' },
  { id: '5', date: '2026-01-30', amount: 500, method: '支付宝', status: '成功' },
];

export const MOCK_DAILY_USAGE = [
  { date: '03-21', tokens: 22500 },
  { date: '03-22', tokens: 39000 },
  { date: '03-23', tokens: 80000 },
  { date: '03-24', tokens: 23000 },
  { date: '03-25', tokens: 52000 },
  { date: '03-26', tokens: 60000 },
  { date: '03-27', tokens: 20700 },
];

export const MOCK_NOTIFICATIONS = {
  email: true,
  usageAlert: true,
  marketing: false,
};

export const MOCK_ORDERS = [
  { id: 'ORD-20260315-001', date: '2026-03-15', type: 'Pro 订阅', amount: 299, status: '已完成', expiry: '2026-04-15' },
  { id: 'ORD-20260228-002', date: '2026-02-28', type: '充值', amount: 1000, status: '已完成', expiry: '—' },
  { id: 'ORD-20260210-003', date: '2026-02-10', type: '充值', amount: 200, status: '已完成', expiry: '—' },
  { id: 'ORD-20260125-004', date: '2026-01-25', type: '充值', amount: 500, status: '已完成', expiry: '—' },
  { id: 'ORD-20260110-005', date: '2026-01-10', type: 'Pro 订阅', amount: 299, status: '已完成', expiry: '2026-02-10' },
];

export const MOCK_REFERRALS = [
  { id: '1', user: '用户A', date: '2026-03-20', status: '已激活', earnings: 29.9 },
  { id: '2', user: '用户B', date: '2026-03-15', status: '已激活', earnings: 29.9 },
  { id: '3', user: '用户C', date: '2026-03-10', status: '已激活', earnings: 29.9 },
  { id: '4', user: '用户D', date: '2026-03-05', status: '已激活', earnings: 29.9 },
  { id: '5', user: '用户E', date: '2026-02-28', status: '待激活', earnings: 0 },
  { id: '6', user: '用户F', date: '2026-02-20', status: '已激活', earnings: 37.1 },
];
