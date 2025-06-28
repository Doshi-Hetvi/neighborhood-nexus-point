
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Building2,
  Calendar,
  TrendingUp,
  Bell,
  FileText,
  Plus,
  AlertCircle,
} from 'lucide-react';

const CommitteeDashboard = () => {
  const stats = [
    { label: 'Total Members', value: '156', icon: Users, color: 'bg-blue-500' },
    { label: 'Rental Flats', value: '23', icon: Building2, color: 'bg-green-500' },
    { label: 'Upcoming Events', value: '5', icon: Calendar, color: 'bg-purple-500' },
    { label: 'Monthly Revenue', value: '₹2,45,000', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { text: 'New maintenance request from Flat 204', time: '2 hours ago', type: 'maintenance' },
    { text: 'Water bill payment received from Block A', time: '4 hours ago', type: 'payment' },
    { text: 'Event booking request for community hall', time: '1 day ago', type: 'booking' },
    { text: 'Monthly financial report generated', time: '2 days ago', type: 'report' },
  ];

  const pendingTasks = [
    { task: 'Approve 3 new member applications', priority: 'high' },
    { task: 'Update festival celebration details', priority: 'medium' },
    { task: 'Review water bill discrepancies', priority: 'high' },
    { task: 'Schedule maintenance for elevator', priority: 'low' },
  ];

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Committee Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage society operations and member services</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Quick Actions
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
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
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest updates and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Items requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingTasks.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{item.task}</p>
                    <Badge
                      variant={item.priority === 'high' ? 'destructive' : 
                              item.priority === 'medium' ? 'default' : 'secondary'}
                    >
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used committee functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Add Member', icon: Users, color: 'bg-blue-500' },
                { label: 'Create Event', icon: Calendar, color: 'bg-purple-500' },
                { label: 'Generate Report', icon: FileText, color: 'bg-green-500' },
                { label: 'Send Notice', icon: Bell, color: 'bg-orange-500' },
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:bg-gray-50"
                >
                  <div className={`p-2 rounded-full ${action.color}`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CommitteeDashboard;
