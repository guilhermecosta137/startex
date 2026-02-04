/**
 * Serviço de Usuário
 *
 * Lida com operações relacionadas ao usuário, como buscar e atualizar perfis de usuário.
 * Todas as operações são limitadas ao usuário autenticado.
 *
 * @module services/user
 */

import { apiRequest } from '@/lib/supabase';
import type { User, UpdateProfileFormData } from '@/types';

export class UserService {
  /**
   * Obter perfil do usuário atual
   *
   * @param {string} accessToken - Token de acesso do usuário
   * @returns {Promise<{ user?: User; error?: string }>}
   */
  async getProfile(accessToken: string): Promise<{ user?: User; error?: string }> {
    try {
      const response = await apiRequest('/profile', {}, accessToken);

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.error || 'Failed to fetch profile' };
      }

      const data = await response.json();
      return { user: data.user };
    } catch (error) {
      console.error('Get profile error:', error);
      return { error: 'Network error while fetching profile' };
    }
  }

  /**
   * Atualizar perfil do usuário
   *
   * @param {string} accessToken - Token de acesso do usuário
   * @param {UpdateProfileFormData} data - Dados do perfil para atualizar
   * @returns {Promise<{ user?: User; error?: string }>}
   */
  async updateProfile(
    accessToken: string,
    data: UpdateProfileFormData
  ): Promise<{ user?: User; error?: string }> {
    try {
      const response = await apiRequest(
        '/profile',
        {
          method: 'PUT',
          body: JSON.stringify(data),
        },
        accessToken
      );

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.error || 'Failed to update profile' };
      }

      const result = await response.json();
      return { user: result.user };
    } catch (error) {
      console.error('Update profile error:', error);
      return { error: 'Network error while updating profile' };
    }
  }
}

// Export singleton instance
export const userService = new UserService();
