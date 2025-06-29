
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Users,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Shield,
  User,
  UserCheck,
  Mail,
  Phone,
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'committee' | 'flat';
  flatNumber?: string;
  status: 'active' | 'inactive' | 'pending';
  joinedDate: string;
}

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 98765 43210',
      role: 'admin',
      status: 'active',
      joinedDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+91 98765 43211',
      role: 'committee',
      status: 'active',
      joinedDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@email.com',
      phone: '+91 98765 43212',
      role: 'flat',
      flatNumber: 'A-101',
      status: 'active',
      joinedDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@email.com',
      phone: '+91 98765 43213',
      role: 'flat',
      flatNumber: 'B-205',
      status: 'pending',
      joinedDate: '2023-06-15',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@email.com',
      phone: '+91 98765 43214',
      role: 'committee',
      status: 'inactive',
      joinedDate: '2023-04-05',
    },
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Shield className="h-4 w-4 text-red-500" />;
      case 'committee': return <UserCheck className="h-4 w-4 text-purple-500" />;
      case 'flat': return <User className="h-4 w-4 text-green-500" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  const getRoleBadge = (role: string) => {
    const colors = {
      admin: 'bg-red-100 text-red-800',
      committee: 'bg-purple-100 text-purple-800',
      flat: 'bg-green-100 text-green-800',
    };
    return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    pending: users.filter(u => u.status === 'pending').length,
    admin: users.filter(u => u.role === 'admin').length,
    committee: users.filter(u => u.role === 'committee').length,
    flat: users.filter(u => u.role === 'flat').length,
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-1">Manage users, roles, and permissions</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{userStats.total}</p>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{userStats.active}</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{userStats.pending}</p>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">{userStats.admin}</p>
                <p className="text-sm text-gray-600">Admins</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{userStats.committee}</p>
                <p className="text-sm text-gray-600">Committee</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{userStats.flat}</p>
                <p className="text-sm text-gray-600">Residents</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>User Directory</CardTitle>
            <CardDescription>Search and filter users by role and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedRole === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRole('all')}
                >
                  All Roles
                </Button>
                <Button
                  variant={selectedRole === 'admin' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRole('admin')}
                >
                  Admin
                </Button>
                <Button
                  variant={selectedRole === 'committee' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRole('committee')}
                >
                  Committee
                </Button>
                <Button
                  variant={selectedRole === 'flat' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRole('flat')}
                >
                  Residents
                </Button>
              </div>
            </div>

            {/* Users Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Flat</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            {getRoleIcon(user.role)}
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            <span>{user.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getRoleBadge(user.role)}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {user.flatNumber || '-'}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(user.joinedDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No users found matching your criteria</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
