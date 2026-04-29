import { create } from 'zustand';
import type { User, RoleBinding } from '../types/api';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  roles: RoleBinding[];
  isAuthenticated: boolean;

  setAuth: (token: string, refreshToken: string, user: User, roles: RoleBinding[]) => void;
  setTokens: (token: string, refreshToken: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
  hasRole: (role: string) => boolean;
  hasTenantAccess: (tenantId: string) => boolean;
  hasProjectAccess: (tenantId: string, projectId: string) => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  refreshToken: null,
  user: null,
  roles: [],
  isAuthenticated: false,

  setAuth: (token, refreshToken, user, roles) => {
    set({ token, refreshToken, user, roles, isAuthenticated: true });
  },

  setTokens: (token, refreshToken) => {
    set({ token, refreshToken });
  },

  setUser: (user) => {
    set({ user });
  },

  logout: () => {
    set({
      token: null,
      refreshToken: null,
      user: null,
      roles: [],
      isAuthenticated: false,
    });
  },

  hasRole: (role: string) => {
    return get().roles.some((r) => r.role === role);
  },

  hasTenantAccess: (tenantId: string) => {
    const { roles } = get();
    return roles.some((r) => r.tenant_id === tenantId || r.role === 'tenant_owner' || r.role === 'tenant_admin');
  },

  hasProjectAccess: (_tenantId: string, projectId: string) => {
    const { roles } = get();
    return roles.some(
      (r) =>
        r.project_id === projectId ||
        r.role === 'tenant_owner' ||
        r.role === 'tenant_admin',
    );
  },
}));
