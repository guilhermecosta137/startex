/**
 * Dashboard View Component
 * 
 * Main dashboard page with stats and activity.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Activity,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import type { User } from '@/types';

interface DashboardViewProps {
  user: User;
}

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: typeof DollarSign;
}

const stats: StatCard[] = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Conversion Rate',
    value: '12.5%',
    change: '+2.5%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    title: 'Active Now',
    value: '573',
    change: '-12',
    trend: 'down',
    icon: Activity,
  },
];

interface ActivityItem {
  action: string;
  time: string;
  type: 'success' | 'info' | 'warning';
}

const recentActivity: ActivityItem[] = [
  { action: 'New user signup', time: '2 minutes ago', type: 'success' },
  { action: 'Payment received ($99)', time: '15 minutes ago', type: 'success' },
  { action: 'New feature request', time: '1 hour ago', type: 'info' },
  { action: 'Server update completed', time: '3 hours ago', type: 'success' },
  { action: 'Failed login attempt', time: '5 hours ago', type: 'warning' },
];

export function DashboardView({ user }: DashboardViewProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back, {user.name}! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <Icon className="w-4 h-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`text-xs ${
                    stat.trend === 'up' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change} from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest updates and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === 'success'
                        ? 'bg-green-500'
                        : activity.type === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <span className="text-sm text-gray-900 dark:text-white">
                    {activity.action}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
              <h4 className="font-medium text-gray-900 dark:text-white">Invite Team</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Add new members to your workspace
              </p>
            </button>
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
              <h4 className="font-medium text-gray-900 dark:text-white">View Reports</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Access detailed analytics
              </p>
            </button>
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left">
              <h4 className="font-medium text-gray-900 dark:text-white">Upgrade Plan</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Unlock more features
              </p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
