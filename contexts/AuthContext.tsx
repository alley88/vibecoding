'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { getToken, setTokens, removeTokens, isAuthenticated as checkAuth } from '@/lib/auth';
import { authService, LoginRequest, RegisterRequest } from '@/lib/services/auth';
import { userService, UserProfile } from '@/lib/services/user';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    if (!checkAuth()) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const profile = await userService.getProfile();
      setUser(profile);
    } catch {
      removeTokens();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const login = async (data: LoginRequest) => {
    const tokens = await authService.login(data);
    setTokens(tokens.access_token, tokens.refresh_token);
    const profile = await userService.getProfile();
    setUser(profile);
  };

  const register = async (data: RegisterRequest) => {
    const tokens = await authService.register(data);
    setTokens(tokens.access_token, tokens.refresh_token);
    const profile = await userService.getProfile();
    setUser(profile);
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch {
      // ignore
    }
    removeTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        refreshUser,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
