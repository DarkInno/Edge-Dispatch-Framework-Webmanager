# EDF Webmanager

**Edge Dispatch Framework（EDF）** 的管理控制台 —— 一个开源边缘内容分发与加速框架，通过中心调度将用户请求分配到最优边缘节点，支持 302 重定向、DNS/GSLB、网关反代等多种接入方式。

## 功能特性

- **实时仪表盘** — QPS、延迟、命中率、错误率、节点状态，每 30 秒轮询刷新
- **边缘节点管理** — 节点列表、详情、启停、标签编辑
- **多租户管理** — 租户、项目、用户的 CRUD，基于角色的访问控制（RBAC）
- **策略管理** — 分发策略与拦截策略，支持版本历史
- **入口管理** — DNS、302 重定向、网关反向代理等入口配置
- **缓存任务** — 预热、清除、封禁操作，支持进度跟踪
- **审计日志** — 变更前后对比，支持 CSV/JSON 导出
- **系统设置** — OIDC 配置、可观测性 URL、IP 白名单

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript 5.6 |
| 构建工具 | Vite 6 |
| UI 组件库 | Ant Design 5 |
| 数据请求 | @tanstack/react-query 5 |
| 状态管理 | Zustand 5 |
| 路由 | React Router 6 |
| 图表 | @ant-design/charts |
| 测试 | Vitest + Playwright + MSW |

## 环境要求

- Node.js >= 18
- EDF 后端（Go）运行在 `localhost:8080`

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（监听 0.0.0.0:8443，API 代理到 localhost:8080）
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 脚本说明

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动 Vite 开发服务器 |
| `npm run build` | TypeScript 检查 + 生产构建 |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | ESLint 代码检查 |
| `npm run test` | Vitest 单元测试 |
| `npm run test:ui` | Vitest 可视化界面 |
| `npm run test:e2e` | Playwright 端到端测试 |

## 项目结构

```
src/
├── api/client.ts              # Axios 实例（含 JWT 自动刷新）
├── components/layout/         # 应用布局（侧边栏 + 顶栏）
├── pages/                     # 页面组件
│   ├── DashboardPage.tsx      # 仪表盘
│   ├── LoginPage.tsx          # 登录
│   ├── nodes/                 # 节点列表与详情
│   ├── tenants/               # 租户列表与详情
│   ├── users/                 # 用户列表与详情
│   ├── policies/              # 策略列表与详情
│   ├── ingresses/             # 入口列表与详情
│   ├── tasks/                 # 缓存任务列表与详情
│   ├── AuditPage.tsx          # 审计日志
│   ├── SettingsPage.tsx       # 系统设置
│   └── AccountPage.tsx        # 个人中心
├── router/index.tsx           # 路由定义与鉴权守卫
├── store/authStore.ts         # Zustand 认证状态（JWT + RBAC）
├── types/api.ts               # TypeScript API 类型定义
└── theme.ts                   # Ant Design 暗色主题
```

## 许可证

参见 EDF 项目许可证。
