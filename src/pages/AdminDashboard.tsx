
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Building2,
  TrendingUp,
  Shield,
  Settings,
  AlertTriangle,
  CheckCircle,
  Plus,
} from 'lucide-react';

const AdminDashboard = () => {
  const systemStats = [
    { label: 'Total Residents', value: '456', icon: Users, color: 'bg-blue-500', change: '+12' },
    { label: 'Active Flats', value: '198', icon: Building2, color: 'bg-green-500', change: '+3' },
    { label: 'Monthly Revenue', value: '₹8,75,000', icon: TrendingUp, color: 'bg-purple-500', change: '+15%' },
    { label: 'System Health', value: '98.5%', icon: Shield, color: 'bg-orange-500', change: '+0.2%' },
  ];

  const systemAlerts = [
    { message: 'Database backup completed successfully', type: 'success', time: '2 hours ago' },
    { message: 'Payment gateway maintenance scheduled', type: 'warning', time: '4 hours ago' },
    { message: 'New user registration pending approval', type: 'info', time: '1 day ago' },
    { message: 'Security update available', type: 'warning', time: '2 days ago' },
  ];

  const recentActivities = [
    { action: 'New committee member added', user: 'Admin', time: '1 hour ago' },
    { action: 'Society details updated', user: 'Super Admin', time: '3 hours ago' },
    { action: 'System backup completed', user: 'System', time: '6 hours ago' },
    { action: 'User permissions modified', user: 'Admin', time: '1 day ago' },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <Shield className="h-4 w-4 text-blue-500" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getAlertBg = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'warning': return 'bg-yellow-50 border-yellow-200';
      case 'info': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Complete system overview and management controls</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Admin Actions
            </Button>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Alerts
              </CardTitle>
              <CardDescription>Important system notifications and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {systemAlerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${getAlertBg(alert.type)}`}>
                    <div className="flex items-start gap-3">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Recent Admin Activities
              </CardTitle>
              <CardDescription>Latest administrative actions and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">by {activity.user}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Administrative Tools</CardTitle>
            <CardDescription>Quick access to essential admin functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Manage Users', icon: Users, color: 'bg-blue-500' },
                { label: 'Society Config', icon: Building2, color: 'bg-green-500' },
                { label: 'System Reports', icon: TrendingUp, color: 'bg-purple-500' },
                { label: 'Security Settings', icon: Shield, color: 'bg-red-500' },
              ].map((tool, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-gray-50"
                >
                  <div className={`p-2 rounded-full ${tool.color}`}>
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm">{tool.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              System Status
            </CardTitle>
            <CardDescription>Real-time system performance monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900">Database</h3>
                <p className="text-sm text-gray-600">Online & Healthy</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900">API Services</h3>
                <p className="text-sm text-gray-600">All Systems Go</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900">Backup</h3>
                <p className="text-sm text-gray-600">Scheduled Tonight</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
