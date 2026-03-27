export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '定价', href: '/pricing' },
  { label: '使用教程', href: '/docs' },
  { label: '关于我们', href: '/about-claude-code' },
];

export interface Plan {
  name: string;
  tag: string;
  price: string;
  unit?: string;
  desc: string;
  perks: string[];
  cta: string;
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: '免费试用',
    tag: '入门体验',
    price: '¥0',
    desc: '适合首次体验产品流程。',
    perks: ['新用户赠送体验额度', '可体验 Claude / Codex / Gemini', '可随时升级到正式方案'],
    cta: '立即注册',
  },
  {
    name: 'Pro 订阅',
    tag: '最受欢迎',
    price: '¥299',
    unit: '/30天',
    desc: '高频开发者的平衡选择。',
    perks: ['积分上限：8000', '恢复速度：200 / 小时', '每天一次恢复至上限', '订阅余额优先消耗'],
    cta: '订阅 Pro',
    featured: true,
  },
  {
    name: '按量付费',
    tag: '按需扩展',
    price: '充值即用',
    desc: '适合波动工作量和备用场景。',
    perks: ['按消耗计费，余额长期有效', '可与订阅方案叠加使用', '支持支付宝支付'],
    cta: '去充值',
  },
  {
    name: 'Ultra 订阅',
    tag: '旗舰方案',
    price: '¥1259',
    unit: '/30天',
    desc: '面向重度使用者和团队。',
    perks: ['立即获得￥1678额度', '约 7.5 折', '额度有效期 30 天', '最高速率支持'],
    cta: '订阅 Ultra',
  },
];

export const STATS = [
  { value: '10000+', label: '订阅用户' },
  { value: '200+', label: '知名企业/高校选择' },
  { value: '280天+', label: '稳定提供服务' },
];

export const FAQ_ITEMS = [
  {
    q: '订阅和按量付费谁优先消耗?',
    a: '订阅余额优先消耗。订阅余额会在 30 天内到期，为了保障您的权益，我们会优先扣除订阅余额。',
  },
  {
    q: '订阅用完后是否可以立即再次购买?',
    a: '可以。每次订阅购买都会开启新的 30 天周期，并获得完整新订阅余额。',
  },
  {
    q: '额度如何补充？',
    a: '可购买订阅，也可以直接充值按量付费，两者可叠加。',
  },
  {
    q: '不同订阅可以使用什么模型？',
    a: '所有订阅与按量付费模式，均可使用 Claude Code、Codex、Gemini CLI。',
  },
];

export const PRODUCTS = [
  { name: 'Claude Code', desc: 'Anthropic 官方 CLI 编程助手' },
  { name: 'Codex', desc: 'OpenAI 代码生成工具' },
  { name: 'Gemini CLI', desc: 'Google AI 命令行工具' },
  { name: 'OpenClaw', desc: '开源 AI 编程框架' },
];

export const PLATFORMS = ['macOS', 'Windows', 'Linux'];

export const CLAUDE_MODELS = [
  { name: 'Haiku', tier: '轻量', desc: '快速响应，适合简单任务', speed: '极快', cost: '低' },
  { name: 'Sonnet', tier: '均衡', desc: '性能与成本的最佳平衡', speed: '快', cost: '中' },
  { name: 'Opus', tier: '旗舰', desc: '最强推理能力，复杂任务首选', speed: '中', cost: '高' },
];

export const ENTERPRISE_LOGOS = ['阿里巴巴', '支付宝', '安利', '字节跳动', '腾讯', '华为'];
