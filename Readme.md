# EDF Webmanager

Admin management console for **Edge Dispatch Framework** — an open-source edge content delivery and acceleration framework that routes user requests to the optimal edge node via centralized dispatch.

## Features

- **Real-time Dashboard** — QPS, latency, hit rate, error rate, and node status with 30s polling
- **Edge Node Management** — List, detail, enable/disable, and label editing per node
- **Multi-tenant Management** — CRUD for tenants, projects, and users with role-based access control
- **Policy Management** — Dispatch and block policies with versioning
- **Ingress Management** — DNS, 302 redirect, and gateway reverse proxy configurations
- **Cache Tasks** — Prewarm, purge, and block operations with progress tracking
- **Audit Logging** — Before/after change diffing with CSV/JSON export
- **System Settings** — OIDC, observability URLs, and IP allowlists

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript 5.6 |
| Build Tool | Vite 6 |
| UI Library | Ant Design 5 |
| Data Fetching | @tanstack/react-query 5 |
| State Management | Zustand 5 |
| Routing | React Router 6 |
| Charts | @ant-design/charts |
| Testing | Vitest + Playwright + MSW |

## Prerequisites

- Node.js >= 18
- The EDF backend (Go) running on `localhost:8080`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (binds to 0.0.0.0:8443, proxies API to localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests |
| `npm run test:ui` | Vitest UI |
| `npm run test:e2e` | Playwright E2E tests |

## Project Structure

```
src/
├── api/client.ts              # Axios instance with JWT refresh
├── components/layout/         # App layout (sidebar + header)
├── pages/                     # Page components
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   ├── nodes/                 # Node list & detail
│   ├── tenants/               # Tenant list & detail
│   ├── users/                 # User list & detail
│   ├── policies/              # Policy list & detail
│   ├── ingresses/             # Ingress list & detail
│   ├── tasks/                 # Cache task list & detail
│   ├── AuditPage.tsx
│   ├── SettingsPage.tsx
│   └── AccountPage.tsx
├── router/index.tsx           # Route definitions & auth guard
├── store/authStore.ts         # Zustand auth state (JWT + RBAC)
├── types/api.ts               # TypeScript API type definitions
└── theme.ts                   # Ant Design dark theme tokens
```

## License

See the EDF project license.
