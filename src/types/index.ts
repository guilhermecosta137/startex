/**
 * Core TypeScript Types for SaaS Starter
 * 
 * This file contains all the type definitions used throughout the application.
 * Following strict typing ensures better IDE support and fewer runtime errors.
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  created_at: string;
  updated_at?: string;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  owner_id: string;
  plan: 'free' | 'starter' | 'pro' | 'enterprise';
  created_at: string;
  updated_at?: string;
}

export interface WorkspaceMember {
  id: string;
  workspace_id: string;
  user_id: string;
  role: 'owner' | 'admin' | 'member';
  created_at: string;
}

export interface AuthSession {
  access_token: string;
  refresh_token?: string;
  user: User;
}

export interface DashboardStats {
  total_users: number;
  active_users: number;
  revenue: number;
  growth_rate: number;
}

// API Response types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

export interface ResetPasswordFormData {
  email: string;
}

export interface UpdateProfileFormData {
  name: string;
  avatar_url?: string;
}
