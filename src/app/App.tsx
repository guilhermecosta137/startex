import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { LandingPage } from "@/app/components/LandingPage";
import { LoginForm } from "@/app/components/auth/LoginForm";
import { SignupForm } from "@/app/components/auth/SignupForm";
import { ResetPasswordForm } from "@/app/components/auth/ResetPasswordForm";
import { AppLayout } from "@/app/components/layout/AppLayout";
import { DashboardView } from "@/app/components/dashboard/DashboardView";
import { AnalyticsView } from "@/app/components/analytics/AnalyticsView";
import { UsersView } from "@/app/components/users/UsersView";
import { SettingsView } from "@/app/components/settings/SettingsView";
import { Loading } from "@/app/components/Loading";
import { Toaster } from "@/app/components/ui/sonner";
import { toast } from "sonner";

type View = 'landing' | 'login' | 'signup' | 'reset-password' | 'dashboard' | 'analytics' | 'users' | 'settings';

export default function App() {
  const { user, loading, login, signup, logout, resetPassword } = useAuth();
  const [view, setView] = useState<View>('landing');

  // If user is authenticated, show dashboard views
  if (user && !loading) {
    return (
      <>
        <Toaster />
        <AppLayout 
          user={user} 
          onLogout={async () => {
            await logout();
            setView('landing');
            toast.success('Logged out successfully');
          }}
          currentView={view}
          onNavigate={(newView) => setView(newView as View)}
        >
          {view === 'analytics' && <AnalyticsView user={user} />}
          {view === 'users' && <UsersView user={user} />}
          {view === 'settings' && <SettingsView user={user} />}
          {(view === 'dashboard' || (!['analytics', 'users', 'settings'].includes(view))) && (
            <DashboardView user={user} />
          )}
        </AppLayout>
      </>
    );
  }

  // Loading state
  if (loading) {
    return <Loading message="Initializing..." />;
  }

  // Public views (not authenticated)
  return (
    <>
      <Toaster />
      {view === 'landing' && (
        <LandingPage
          onLoginClick={() => setView('login')}
          onSignupClick={() => setView('signup')}
        />
      )}
      
      {view === 'login' && (
        <LoginForm
          onSubmit={async (data) => {
            const result = await login(data);
            if (result.success) {
              setView('dashboard');
              toast.success('Welcome back!');
            } else {
              toast.error(result.error || 'Login failed');
            }
          }}
          onToggleMode={() => setView('signup')}
          onForgotPassword={() => setView('reset-password')}
        />
      )}
      
      {view === 'signup' && (
        <SignupForm
          onSubmit={async (data) => {
            const result = await signup(data);
            if (result.success) {
              toast.success('Account created! Please sign in.');
              setView('login');
            } else {
              toast.error(result.error || 'Signup failed');
            }
          }}
          onToggleMode={() => setView('login')}
        />
      )}
      
      {view === 'reset-password' && (
        <ResetPasswordForm
          onSubmit={async (email) => {
            const result = await resetPassword(email);
            if (result.success) {
              toast.success('Password reset email sent!');
              setView('login');
            } else {
              toast.error(result.error || 'Password reset failed');
            }
          }}
          onBackToLogin={() => setView('login')}
        />
      )}
    </>
  );
}
