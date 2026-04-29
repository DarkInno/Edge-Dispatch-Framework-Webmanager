import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import AppLayout from '../components/layout/AppLayout';
import { useAuthStore } from '../store/authStore';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NodeListPage = lazy(() => import('../pages/nodes/NodeListPage'));
const NodeDetailPage = lazy(() => import('../pages/nodes/NodeDetailPage'));
const TenantListPage = lazy(() => import('../pages/tenants/TenantListPage'));
const TenantDetailPage = lazy(() => import('../pages/tenants/TenantDetailPage'));
const UserListPage = lazy(() => import('../pages/users/UserListPage'));
const UserDetailPage = lazy(() => import('../pages/users/UserDetailPage'));
const PolicyListPage = lazy(() => import('../pages/policies/PolicyListPage'));
const PolicyDetailPage = lazy(() => import('../pages/policies/PolicyDetailPage'));
const IngressListPage = lazy(() => import('../pages/ingresses/IngressListPage'));
const IngressDetailPage = lazy(() => import('../pages/ingresses/IngressDetailPage'));
const TaskListPage = lazy(() => import('../pages/tasks/TaskListPage'));
const TaskDetailPage = lazy(() => import('../pages/tasks/TaskDetailPage'));
const AuditPage = lazy(() => import('../pages/AuditPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const AccountPage = lazy(() => import('../pages/AccountPage'));

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
      <Spin size="large" />
    </div>
  );
}

function LazyPage({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

function ProtectedRoute() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <AppLayout />;
}

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <LazyPage>
        <LoginPage />
      </LazyPage>
    ),
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <LazyPage>
            <DashboardPage />
          </LazyPage>
        ),
      },
      {
        path: 'nodes',
        element: (
          <LazyPage>
            <NodeListPage />
          </LazyPage>
        ),
      },
      {
        path: 'nodes/:nodeID',
        element: (
          <LazyPage>
            <NodeDetailPage />
          </LazyPage>
        ),
      },
      {
        path: 'tenants',
        element: (
          <LazyPage>
            <TenantListPage />
          </LazyPage>
        ),
      },
      {
        path: 'tenants/:tenantID',
        element: (
          <LazyPage>
            <TenantDetailPage />
          </LazyPage>
        ),
      },
      {
        path: 'users',
        element: (
          <LazyPage>
            <UserListPage />
          </LazyPage>
        ),
      },
      {
        path: 'users/:userID',
        element: (
          <LazyPage>
            <UserDetailPage />
          </LazyPage>
        ),
      },
      {
        path: 'policies',
        element: (
          <LazyPage>
            <PolicyListPage />
          </LazyPage>
        ),
      },
      {
        path: 'policies/:policyID',
        element: (
          <LazyPage>
            <PolicyDetailPage />
          </LazyPage>
        ),
      },
      {
        path: 'ingresses',
        element: (
          <LazyPage>
            <IngressListPage />
          </LazyPage>
        ),
      },
      {
        path: 'ingresses/:ingressID',
        element: (
          <LazyPage>
            <IngressDetailPage />
          </LazyPage>
        ),
      },
      {
        path: 'tasks',
        element: (
          <LazyPage>
            <TaskListPage />
          </LazyPage>
        ),
      },
      {
        path: 'tasks/:taskID',
        element: (
          <LazyPage>
            <TaskDetailPage />
          </LazyPage>
        ),
      },
      {
        path: 'audit',
        element: (
          <LazyPage>
            <AuditPage />
          </LazyPage>
        ),
      },
      {
        path: 'settings',
        element: (
          <LazyPage>
            <SettingsPage />
          </LazyPage>
        ),
      },
      {
        path: 'account',
        element: (
          <LazyPage>
            <AccountPage />
          </LazyPage>
        ),
      },
    ],
  },
]);

export default router;
