// 按照截图中的分组结构重新组织导航
export const CONSOLE_NAV_SECTIONS = [
  {
    title: '我心功能',
    links: [
      { label: '概览', href: '/console', icon: '📊' },
      { label: 'API密钥', href: '/console/api-keys', icon: '🔑' },
      { label: '使用历史', href: '/console/usage', icon: '📈' },
      { label: '模型价格', href: '/console/pricing', icon: '💰' },
    ],
  },
  {
    title: '铃铛 & 收藏',
    links: [
      { label: '转账管理', href: '/console/transfer', icon: '💸', badge: '联系客服' },
      { label: '优惠券买', href: '/console/coupons', icon: '🎫' },
      { label: '通知设置', href: '/console/notifications', icon: '🔔' },
      { label: '使用计划', href: '/console/plans', icon: '⭐', badge: '新春活动' },
    ],
  },
  {
    title: '推荐 & 返利',
    links: [
      { label: '推荐返利', href: '/console/referral', icon: '🎁', badge: '新春活动' },
    ],
  },
  {
    title: '更多 & 教程',
    links: [
      { label: 'ClaudeCode安装', href: '/console/claude-code-install', icon: '⚙️' },
      { label: 'Codex安装', href: '/console/codex-install', icon: '⚙️' },
      { label: 'GeminiCLI安装', href: '/console/gemini-install', icon: '⚙️' },
      { label: 'API专区', href: '/console/api-zone', icon: '📚' },
    ],
  },
];

// 保留旧的扁平结构以便向后兼容
export const CONSOLE_NAV_LINKS = CONSOLE_NAV_SECTIONS.flatMap(section => section.links);

export const RECHARGE_AMOUNTS = [50, 100, 200, 500, 1000, 2000];

export const INSTALLATION_PLATFORMS = [
  {
    name: 'macOS / Linux',
    slug: 'macos-linux',
    icon: '🍎',
    steps: [
      '打开终端',
      '运行安装命令: curl -fsSL https://install.aicodemirror.com/install.sh | bash',
      '等待安装完成',
      '运行 aicodemirror login 登录',
      '输入您的 API Key',
    ],
  },
  {
    name: 'Windows',
    slug: 'windows',
    icon: '🪟',
    steps: [
      '下载 Windows 安装包',
      '双击运行安装程序',
      '按照向导完成安装',
      '打开命令提示符或 PowerShell',
      '运行 aicodemirror login 登录',
      '输入您的 API Key',
    ],
  },
];
