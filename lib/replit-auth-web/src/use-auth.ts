import { useState, useEffect, useCallback } from "react";
import type { AuthUser } from "@workspace/api-client-react";

export type { AuthUser };

interface AuthState {
  user: AuthUser | null;
  isAdmin: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (returnTo?: string) => void;
  logout: () => void;
  refresh: () => Promise<void>;
}

async function loadAuth(): Promise<{ user: AuthUser | null; isAdmin: boolean }> {
  const res = await fetch("/api/auth/user", { credentials: "include" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as { user: AuthUser | null; isAdmin?: boolean };
  return { user: data.user ?? null, isAdmin: Boolean(data.isAdmin) };
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const { user, isAdmin } = await loadAuth();
      setUser(user);
      setIsAdmin(isAdmin);
    } catch {
      setUser(null);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadAuth()
      .then(({ user, isAdmin }) => {
        if (!cancelled) {
          setUser(user);
          setIsAdmin(isAdmin);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUser(null);
          setIsAdmin(false);
          setIsLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback((returnTo?: string) => {
    const target =
      returnTo ?? `${window.location.pathname}${window.location.search}`;
    window.location.href = `/api/login?returnTo=${encodeURIComponent(target)}`;
  }, []);

  const logout = useCallback(() => {
    window.location.href = "/api/logout";
  }, []);

  return {
    user,
    isAdmin,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    refresh,
  };
}
