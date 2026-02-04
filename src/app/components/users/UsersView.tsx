/**
 * Users View Component
 * 
 * User management page with list and actions.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Search, UserPlus, Mail, MoreVertical } from 'lucide-react';
import type { User } from '@/types';

interface UsersViewProps {
  user: User;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  joinedAt: string;
}

const mockUsers: UserData[] = [
  {
    id: '1',
    name: 'Current User',
    email: 'user@example.com',
    role: 'admin',
    status: 'active',
    joinedAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'member',
    status: 'active',
    joinedAt: '2024-02-20',
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@example.com',
    role: 'member',
    status: 'active',
    joinedAt: '2024-03-10',
  },
  {
    id: '4',
    name: 'Emily Brown',
    email: 'emily@example.com',
    role: 'viewer',
    status: 'inactive',
    joinedAt: '2024-01-28',
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david@example.com',
    role: 'member',
    status: 'pending',
    joinedAt: '2024-04-05',
  },
];

export function UsersView({ user }: UsersViewProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Users
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your team members and permissions
          </p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Invite User
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search users by name or email..."
                className="pl-10"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Member</option>
              <option>Viewer</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members ({mockUsers.length})</CardTitle>
          <CardDescription>
            People who have access to your workspace
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockUsers.map((userData, idx) => (
              <div
                key={userData.id}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                    {userData.name.charAt(0).toUpperCase()}
                  </div>
                  
                  {/* User Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {userData.name}
                        {userData.email === user.email && (
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">(You)</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-3 h-3 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {userData.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Role and Status */}
                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      userData.role === 'admin'
                        ? 'default'
                        : userData.role === 'member'
                        ? 'secondary'
                        : 'outline'
                    }
                  >
                    {userData.role}
                  </Badge>
                  
                  <Badge
                    variant={
                      userData.status === 'active'
                        ? 'default'
                        : userData.status === 'pending'
                        ? 'secondary'
                        : 'outline'
                    }
                    className={
                      userData.status === 'active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                        : userData.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                    }
                  >
                    {userData.status}
                  </Badge>

                  <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                    Joined {new Date(userData.joinedAt).toLocaleDateString()}
                  </p>

                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {mockUsers.length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {mockUsers.filter(u => u.status === 'active').length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending Invites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {mockUsers.filter(u => u.status === 'pending').length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
