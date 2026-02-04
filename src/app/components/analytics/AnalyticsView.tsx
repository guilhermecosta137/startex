/**
 * Analytics View Component
 * 
 * Analytics and reports page with charts and metrics.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { BarChart, TrendingUp, Users, DollarSign } from 'lucide-react';
import type { User } from '@/types';

interface AnalyticsViewProps {
  user: User;
}

export function AnalyticsView({ user }: AnalyticsViewProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Track your performance and growth metrics
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Revenue
            </CardTitle>
            <DollarSign className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              $124,350
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              +23% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              New Customers
            </CardTitle>
            <Users className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              +573
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              +12% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Growth Rate
            </CardTitle>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              +18.2%
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              Compound monthly
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Churn Rate
            </CardTitle>
            <BarChart className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              2.4%
            </div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              +0.3% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly recurring revenue over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              <div className="text-center text-gray-400">
                <BarChart className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Chart visualization</p>
                <p className="text-xs mt-1">Install Recharts to display charts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Active users over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              <div className="text-center text-gray-400">
                <Users className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Chart visualization</p>
                <p className="text-xs mt-1">Install Recharts to display charts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Metrics</CardTitle>
          <CardDescription>Breakdown of key performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Average Revenue Per User</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">ARPU</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">$47.50</p>
                <p className="text-sm text-green-600 dark:text-green-400">+8.2%</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Customer Lifetime Value</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CLV</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">$1,250</p>
                <p className="text-sm text-green-600 dark:text-green-400">+15.3%</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Customer Acquisition Cost</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CAC</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">$285</p>
                <p className="text-sm text-red-600 dark:text-red-400">-3.1%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Conversion Rate</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Visitors to Customers</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">3.8%</p>
                <p className="text-sm text-green-600 dark:text-green-400">+0.4%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
