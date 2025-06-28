
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Settings,
  Bell,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
} from 'lucide-react';

const FlatDashboard = () => {
  const maintenanceRequests = [
    { id: 1, title: 'Plumbing Issue - Kitchen Sink', status: 'in-progress', progress: 60 },
    { id: 2, title: 'Electrical Problem - Living Room', status: 'pending', progress: 0 },
    { id: 3, title: 'AC Repair - Bedroom', status: 'completed', progress: 100 },
  ];

  const announcements = [
    {
      title: 'Diwali Celebration 2024',
      type: 'festival',
      date: '2024-11-01',
      content: 'Join us for the grand Diwali celebration in the community hall.',
    },
    {
      title: 'Monthly Maintenance Due',
      type: 'maintenance',
      date: '2024-10-30',
      content: 'Please pay your monthly maintenance charges by November 5th.',
    },
    {
      title: 'Water Supply Maintenance',
      type: 'event',
      date: '2024-10-28',
      content: 'Water supply will be interrupted from 10 AM to 2 PM tomorrow.',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'pending': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getAnnouncementIcon = (type: string) => {
    switch (type) {
      case 'festival': return <Bell className="h-5 w-5 text-purple-500" />;
      case 'event': return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'maintenance': return <Settings className="h-5 w-5 text-orange-500" />;
      default: return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <DashboardLayout userRole="flat">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resident Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening in your society.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Requests</p>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                </div>
                <div className="p-3 rounded-full bg-orange-500">
                  <Settings className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-3xl font-bold text-gray-900">₹12,500</p>
                </div>
                <div className="p-3 rounded-full bg-red-500">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                  <p className="text-3xl font-bold text-gray-900">3</p>
                </div>
                <div className="p-3 rounded-full bg-purple-500">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Maintenance Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Maintenance Requests
              </CardTitle>
              <CardDescription>Track your maintenance request progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceRequests.map((request) => (
                  <div key={request.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{request.title}</h4>
                      <Badge
                        variant={request.status === 'completed' ? 'default' : 
                                request.status === 'in-progress' ? 'secondary' : 'destructive'}
                        className="flex items-center gap-1"
                      >
                        {getStatusIcon(request.status)}
                        {request.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress</span>
                        <span>{request.progress}%</span>
                      </div>
                      <Progress value={request.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Announcements
              </CardTitle>
              <CardDescription>Latest updates from the society</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      {getAnnouncementIcon(announcement.type)}
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                        <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Booking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Event Booking
            </CardTitle>
            <CardDescription>Book community spaces for your personal events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Community Hall', capacity: '100 people', rate: '₹2,500/day' },
                { name: 'Basement Plot', capacity: '50 people', rate: '₹1,500/day' },
                { name: 'Terrace Garden', capacity: '30 people', rate: '₹1,000/day' },
              ].map((venue, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-gray-900">{venue.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">Capacity: {venue.capacity}</p>
                  <p className="text-sm text-gray-600">Rate: {venue.rate}</p>
                  <Button size="sm" className="mt-3 w-full">
                    Book Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FlatDashboard;
