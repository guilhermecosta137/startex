/**
 * Serviço de Autenticação
 *
 * Lida com todas as operações relacionadas à autenticação.
 * Esta camada de serviço abstrai a implementação de auth do Supabase,
 * facilitando a troca de provedores se necessário.
 *
 * @module services/auth
 */

import { getSupabaseClient, apiRequest } from '@/lib/supabase';
import type { LoginFormData, SignupFormData, User, AuthSession } from '@/types';

export class AuthService {
  private supabase = getSupabaseClient();

  /**
   * Cadastrar um novo usuário
   *
   * @param {SignupFormData} data - Dados de cadastro do usuário
   * @returns {Promise<{ success: boolean; error?: string }>}
   */
  async signup(data: SignupFormData): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await apiRequest('/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || 'Signup failed' };
      }

      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: 'Network error during signup' };
    }
  }

  /**
   * Fazer login de um usuário existente
   *
   * @param {LoginFormData} data - Credenciais de login do usuário
   * @returns {Promise<{ session?: AuthSession; error?: string }>}
   */
  async login(data: LoginFormData): Promise<{ session?: AuthSession; error?: string }> {
    try {
      const { data: authData, error } = await this.supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        return { error: error.message };
      }

      if (!authData.session) {
        return { error: 'No session returned' };
      }

      return {
        session: {
          access_token: authData.session.access_token,
          refresh_token: authData.session.refresh_token,
          user: {
            id: authData.user.id,
            email: authData.user.email!,
            name: authData.user.user_metadata?.name || '',
            created_at: authData.user.created_at!,
          },
        },
      };
    } catch (error) {
      console.error('Login error:', error);
      return { error: 'Network error during login' };
    }
  }

  /**
   * Fazer logout do usuário atual
   *
   * @returns {Promise<{ success: boolean; error?: string }>}
   */
  async logout(): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await this.supabase.auth.signOut();

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: 'Network error during logout' };
    }
  }

  /**
   * Obter sessão atual
   *
   * @returns {Promise<AuthSession | null>}
   */
  async getSession(): Promise<AuthSession | null> {
    try {
      const { data: { session }, error } = await this.supabase.auth.getSession();

      if (error || !session) {
        return null;
      }

      return {
        access_token: session.access_token,
        refresh_token: session.refresh_token,
        user: {
          id: session.user.id,
          email: session.user.email!,
          name: session.user.user_metadata?.name || '',
          created_at: session.user.created_at!,
        },
      };
    } catch (error) {
      console.error('Get session error:', error);
      return null;
    }
  }

  /**
   * Enviar email de reset de senha
   *
   * @param {string} email - Email do usuário
   * @returns {Promise<{ success: boolean; error?: string }>}
   */
  async resetPassword(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Reset password error:', error);
      return { success: false, error: 'Network error during password reset' };
    }
  }

  /**
   * Escutar mudanças no estado de auth
   *
   * @param {Function} callback - Função de callback para lidar com mudanças no estado de auth
   * @returns {Function} Função de cancelamento de inscrição
   */
  onAuthStateChange(callback: (session: AuthSession | null) => void) {
    const { data: { subscription } } = this.supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          callback({
            access_token: session.access_token,
            refresh_token: session.refresh_token,
            user: {
              id: session.user.id,
              email: session.user.email!,
              name: session.user.user_metadata?.name || '',
              created_at: session.user.created_at!,
            },
          });
        } else {
          callback(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }
}

// Export singleton instance
export const authService = new AuthService();
