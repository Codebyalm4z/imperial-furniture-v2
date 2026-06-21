import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  ADMIN_CREDENTIALS,
  isAdminLoggedIn,
  setAdminLoggedIn,
  clearAdminSession,
} from '../admin/constants/auth';

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(isAdminLoggedIn);

  const login = useCallback((email: string, password: string): boolean => {
    const isValid =
      email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;

    if (isValid) {
      setAdminLoggedIn();
      setIsAuthenticated(true);
      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    clearAdminSession();
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
