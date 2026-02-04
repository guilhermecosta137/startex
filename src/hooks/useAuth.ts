/**
 * Hook useAuth
 *
 * Hook personalizado do React para gerenciamento do estado de autenticação.
 * Esta é a única fonte de verdade para o estado de auth na aplicação.
 *
 * @example
 * ```tsx
 * const { user, loading, login, logout } = useAuth();
 * ```
 */

import { useState, useEffect, useCallback } from 'react';
import { authService } from '@/services/auth.service';
import { userService } from '@/services/user.service';
import type { User, LoginFormData, SignupFormData, AuthSession } from '@/types';

interface UseAuthReturn {
  user: User | null;
  session: AuthSession | null;
  loading: boolean;
  login: (data: LoginFormData) => Promise<{ success: boolean; error?: string }>;
  signup: (data: SignupFormData) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  refreshUser: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Buscar dados do perfil do usuário
   */
  const fetchUserProfile = useCallback(async (accessToken: string) => {
    const { user: userData, error } = await userService.getProfile(accessToken);
    
    if (userData && !error) {
      setUser(userData);
    } else {
      console.error('Error fetching user profile:', error);
    }
  }, []);

  /**
   * Inicializar estado de auth na montagem
   */
  useEffect(() => {
    const initAuth = async () => {
      const currentSession = await authService.getSession();
      
      if (currentSession) {
        setSession(currentSession);
        setUser(currentSession.user);
        await fetchUserProfile(currentSession.access_token);
      }
      
      setLoading(false);
    };

    initAuth();

    // Listen for auth state changes
    const unsubscribe = authService.onAuthStateChange((newSession) => {
      setSession(newSession);
      if (newSession) {
        setUser(newSession.user);
        fetchUserProfile(newSession.access_token);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [fetchUserProfile]);

  /**
   * Fazer login do usuário
   */
  const login = useCallback(async (data: LoginFormData) => {
    const result = await authService.login(data);
    
    if (result.session) {
      setSession(result.session);
      setUser(result.session.user);
      await fetchUserProfile(result.session.access_token);
      return { success: true };
    }
    
    return { success: false, error: result.error };
  }, [fetchUserProfile]);

  /**
   * Cadastrar novo usuário
   */
  const signup = useCallback(async (data: SignupFormData) => {
    return await authService.signup(data);
  }, []);

  /**
   * Fazer logout do usuário
   */
  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
    setSession(null);
  }, []);

  /**
   * Resetar senha
   */
  const resetPassword = useCallback(async (email: string) => {
    return await authService.resetPassword(email);
  }, []);

  /**
   * Atualizar dados do usuário
   */
  const refreshUser = useCallback(async () => {
    if (session?.access_token) {
      await fetchUserProfile(session.access_token);
    }
  }, [session, fetchUserProfile]);

  return {
    user,
    session,
    loading,
    login,
    signup,
    logout,
    resetPassword,
    refreshUser,
  };
}
