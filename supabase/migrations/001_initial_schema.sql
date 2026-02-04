/**
 * SaaS Starter - Initial Database Schema
 * 
 * This migration creates the core tables for a multi-tenant SaaS application.
 * 
 * IMPORTANT: This file is for REFERENCE ONLY.
 * In Figma Make environment, run these migrations manually via Supabase Dashboard.
 * 
 * Tables:
 * - profiles: Extended user information
 * - workspaces: Multi-tenant workspaces/organizations
 * - workspace_members: User memberships in workspaces
 * 
 * Security:
 * - Row Level Security (RLS) enabled on all tables
 * - Policies ensure users only access their own data
 */

-- ============================================================================
-- PROFILES TABLE
-- ============================================================================
-- Extends Supabase auth.users with additional profile information

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT,
  avatar_url TEXT,
  bio TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- WORKSPACES TABLE
-- ============================================================================
-- Multi-tenant workspaces/organizations

CREATE TABLE IF NOT EXISTS public.workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan TEXT NOT NULL DEFAULT 'free',
  settings JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view workspaces they belong to"
  ON public.workspaces
  FOR SELECT
  USING (
    auth.uid() = owner_id OR
    EXISTS (
      SELECT 1 FROM public.workspace_members
      WHERE workspace_id = workspaces.id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create workspaces"
  ON public.workspaces
  FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Workspace owners can update their workspaces"
  ON public.workspaces
  FOR UPDATE
  USING (auth.uid() = owner_id);

CREATE POLICY "Workspace owners can delete their workspaces"
  ON public.workspaces
  FOR DELETE
  USING (auth.uid() = owner_id);

-- ============================================================================
-- WORKSPACE MEMBERS TABLE
-- ============================================================================
-- Links users to workspaces with specific roles

CREATE TABLE IF NOT EXISTS public.workspace_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(workspace_id, user_id)
);

-- Enable RLS
ALTER TABLE public.workspace_members ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view members of their workspaces"
  ON public.workspace_members
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.workspaces
      WHERE workspaces.id = workspace_members.workspace_id
      AND (workspaces.owner_id = auth.uid() OR workspace_members.user_id = auth.uid())
    )
  );

CREATE POLICY "Workspace owners can add members"
  ON public.workspace_members
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.workspaces
      WHERE workspaces.id = workspace_id
      AND workspaces.owner_id = auth.uid()
    )
  );

CREATE POLICY "Workspace owners can update member roles"
  ON public.workspace_members
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.workspaces
      WHERE workspaces.id = workspace_id
      AND workspaces.owner_id = auth.uid()
    )
  );

CREATE POLICY "Workspace owners can remove members"
  ON public.workspace_members
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.workspaces
      WHERE workspaces.id = workspace_id
      AND workspaces.owner_id = auth.uid()
    )
  );

-- ============================================================================
-- INDEXES
-- ============================================================================
-- Improve query performance

CREATE INDEX IF NOT EXISTS idx_workspaces_owner_id ON public.workspaces(owner_id);
CREATE INDEX IF NOT EXISTS idx_workspaces_slug ON public.workspaces(slug);
CREATE INDEX IF NOT EXISTS idx_workspace_members_workspace_id ON public.workspace_members(workspace_id);
CREATE INDEX IF NOT EXISTS idx_workspace_members_user_id ON public.workspace_members(user_id);

-- ============================================================================
-- UPDATED_AT TRIGGERS
-- ============================================================================
-- Automatically update updated_at timestamp

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_workspaces_updated_at
  BEFORE UPDATE ON public.workspaces
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================================
-- VIEWS (Optional)
-- ============================================================================
-- Convenient views for common queries

CREATE OR REPLACE VIEW public.workspace_members_with_profiles AS
SELECT
  wm.id,
  wm.workspace_id,
  wm.user_id,
  wm.role,
  wm.created_at,
  p.email,
  p.name,
  p.avatar_url
FROM public.workspace_members wm
JOIN public.profiles p ON p.id = wm.user_id;

-- ============================================================================
-- NOTES
-- ============================================================================
-- 
-- To apply these migrations in Supabase:
-- 1. Go to your Supabase Dashboard
-- 2. Navigate to SQL Editor
-- 3. Copy and paste this entire file
-- 4. Click "Run"
-- 
-- Common Plan Types:
-- - 'free': Free tier
-- - 'starter': Basic paid plan
-- - 'pro': Professional plan
-- - 'enterprise': Enterprise plan
-- 
-- Common Roles:
-- - 'owner': Full access, can delete workspace
-- - 'admin': Can manage members and settings
-- - 'member': Basic access
-- 
-- ============================================================================
