# AICodeMirror 控制台完整功能分析

## 从截图识别的完整导航结构

### 1. 我心功能 (My Features)
- **概览** (`/console`) - 仪表板主页
  - 当前余额显示 (¥2.00)
  - 订阅余额显示 (¥0.00, FREE套餐)
  - 按揭付费余额 (¥0.00)
  - 邀请好友功能区
    - 我的邀请人
    - 我的邀请码 (可复制)
    - 我的邀请链接 (可复制)
    - 我邀请的用户列表
  - 最新公告区域

- **API密钥** (`/console/api-keys`)
  - API密钥列表
  - 创建/删除密钥
  - 复制密钥功能

- **使用历史** (`/console/usage`)
  - 使用记录列表
  - 按模型筛选
  - 按时间筛选
  - Token消耗统计

- **模型价格** (`/console/pricing`)
  - 各模型价格表
  - Claude系列价格
  - Codex价格
  - Gemini价格

### 2. 铃铛 & 收藏 (Notifications & Favorites)
- **转账管理** (`/console/transfer`) - 标记"联系客服"
  - 转账功能
  - 转账记录

- **优惠券买** (`/console/coupons`)
  - 可用优惠券列表
  - 已使用优惠券
  - 过期优惠券

- **通知设置** (`/console/notifications`)
  - 邮件通知开关
  - 用量提醒设置
  - 营销信息设置

- **使用计划** (`/console/plans`) - 标记"新春活动"
  - 套餐列表
  - 当前套餐
  - 升级/续费功能

### 3. 推荐 & 返利 (Referral & Rewards)
- **推荐返利** (`/console/referral`) - 标记"新春活动"
  - 推荐码
  - 推荐链接
  - 推荐记录
  - 返利收益

### 4. 更多 & 教程 (More & Tutorials)
- **ClaudeCode安装** (`/console/claude-code-install`)
  - macOS/Linux安装步骤
  - Windows安装步骤
  - 配置说明

- **Codex安装** (`/console/codex-install`)
  - 安装步骤
  - 配置说明

- **GeminiCLI安装** (`/console/gemini-install`)
  - 安装步骤
  - 配置说明

- **API专区** (`/console/api-zone`)
  - API文档
  - 使用示例
  - SDK下载

### 5. 其他功能
- **账号切换** - 底部显示多个VIP0账号
- **用户信息显示** - 186****9334 / VIP0

## 需要实现的页面清单

✅ 已实现:
- [x] /console - 仪表板概览 (需要重新设计)
- [x] /console/api-keys - API密钥管理
- [x] /console/usage - 使用历史
- [x] /console/referral - 推荐返利

❌ 待实现:
- [ ] /console/pricing - 模型价格
- [ ] /console/transfer - 转账管理
- [ ] /console/coupons - 优惠券
- [ ] /console/notifications - 通知设置
- [ ] /console/plans - 使用计划
- [ ] /console/claude-code-install - ClaudeCode安装
- [ ] /console/codex-install - Codex安装
- [ ] /console/gemini-install - GeminiCLI安装
- [ ] /console/api-zone - API专区

## 下一步行动

1. 重新设计 `/console` 主页,完全匹配截图布局
2. 更新侧边栏导航,按照截图的分组结构
3. 逐个实现缺失的页面
4. 添加账号切换功能(如果需要)
