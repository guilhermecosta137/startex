/**
 * Configuração do Cliente Supabase
 *
 * Este módulo fornece uma instância configurada do cliente Supabase.
 * É um padrão singleton para garantir que criemos apenas uma instância do cliente.
 *
 * @see https://supabase.com/docs/reference/javascript/initializing
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Supabase client singleton
let supabaseInstance: SupabaseClient | null = null;

/**
 * Obter ou criar instância do cliente Supabase
 *
 * @returns {SupabaseClient} Cliente Supabase configurado
 */
export function getSupabaseClient(): SupabaseClient {
  if (!supabaseInstance) {
    const supabaseUrl = `https://${projectId}.supabase.co`;
    
    supabaseInstance = createClient(supabaseUrl, publicAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }

  return supabaseInstance;
}

/**
 * URL base da API para endpoints personalizados
 */
export const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-9caf4902`;

/**
 * Fazer requisição autenticada da API para nosso backend
 *
 * @param {string} endpoint - Caminho do endpoint da API
 * @param {RequestInit} options - Opções do fetch
 * @param {string} token - Token de acesso opcional
 * @returns {Promise<Response>} Resposta do fetch
 */
export async function apiRequest(
  endpoint: string,
  options: RequestInit = {},
  token?: string
): Promise<Response> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    headers['Authorization'] = `Bearer ${publicAnonKey}`;
  }

  return fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });
}
