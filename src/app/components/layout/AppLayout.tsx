/**
 * App Layout Component
 * 
 * Main application layout with sidebar and header.
 * Used for all authenticated pages.
 */

import { useState, ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import type { User } from '@/types';

interface AppLayoutProps {
  user: User;
  children: ReactNode;
  onLogout: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

export function AppLayout({ user, children, onLogout, currentView, onNavigate }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar
        user={user}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentView={currentView}
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header
          user={user}
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={onLogout}
        />

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
