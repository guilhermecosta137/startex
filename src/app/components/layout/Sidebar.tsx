/**
 * Sidebar Component
 *
 * Application sidebar with navigation links.
 * Responsive: hidden on mobile, visible on desktop.
 */

import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart,
  CreditCard,
  Zap,
  X,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import type { User } from '@/types';

interface SidebarProps {
  user: User;
  open: boolean;
  onClose: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: typeof LayoutDashboard;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { id: 'analytics', label: 'Analytics', icon: BarChart, href: '/analytics' },
  { id: 'users', label: 'Users', icon: Users, href: '/users' },
  { id: 'billing', label: 'Billing', icon: CreditCard, href: '/billing' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar({
  user,
  open,
  onClose,
  currentView,
  onNavigate,
}: SidebarProps) {
  return (
    <aside
      className={`${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-200 ease-in-out flex flex-col`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>

          <span className="text-xl font-bold text-gray-900 dark:text-white">
            StarterX Dashboard
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* User Info Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
