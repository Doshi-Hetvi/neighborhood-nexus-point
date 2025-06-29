
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Calendar, AlertTriangle, Info, Megaphone, Clock } from 'lucide-react';

const FlatAnnouncements = () => {
  const [activeTab, setActiveTab] = useState('all');

  const announcements = [
    {
      id: 1,
      title: 'Diwali Celebration 2024',
      type: 'festival',
      priority: 'high',
      date: '2024-11-01',
      time: '07:00 PM',
      content: 'Join us for the grand Diwali celebration in the community hall. There will be cultural programs, dinner, and fireworks display.',
      author: 'Cultural Committee',
      isRead: false
    },
    {
      id: 2,
      title: 'Monthly Maintenance Due',
      type: 'maintenance',
      priority: 'urgent',
      date: '2024-10-30',
      time: '10:00 AM',
      content: 'Please pay your monthly maintenance charges by November 5th. Late payment will incur additional charges.',
      author: 'Finance Committee',
      isRead: true
    },
    {
      id: 3,
      title: 'Water Supply Maintenance',
      type: 'utility',
      priority: 'high',
      date: '2024-10-28',
      time: '09:00 AM',
      content: 'Water supply will be interrupted from 10 AM to 2 PM tomorrow for routine maintenance work.',
      author: 'Maintenance Team',
      isRead: false
    },
    {
      id: 4,
      title: 'New Security Guidelines',
      type: 'security',
      priority: 'medium',
      date: '2024-10-25',
      time: '02:00 PM',
      content: 'Updated security protocols have been implemented. All visitors must register at the gate with valid ID.',
      author: 'Security Committee',
      isRead: true
    },
    {
      id: 5,
      title: 'Parking Rules Update',
      type: 'general',
      priority: 'medium',
      date: '2024-10-20',
      time: '11:30 AM',
      content: 'New parking allocation has been done. Please check the notice board for your assigned parking slot.',
      author: 'Management Committee',
      isRead: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'festival': return <Megaphone className="h-5 w-5 text-purple-500" />;
      case 'maintenance': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'utility': return <Bell className="h-5 w-5 text-blue-500" />;
      case 'security': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'general': return <Info className="h-5 w-5 text-gray-500" />;
      default: return <Bell className="h-5 w-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filterAnnouncements = (filter: string) => {
    switch (filter) {
      case 'unread': return announcements.filter(a => !a.isRead);
      case 'urgent': return announcements.filter(a => a.priority === 'urgent');
      default: return announcements;
    }
  };

  const filteredAnnouncements = filterAnnouncements(activeTab);
  const unreadCount = announcements.filter(a => !a.isRead).length;
  const urgentCount = announcements.filter(a => a.priority === 'urgent').length;

  return (
    <DashboardLayout userRole="flat">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
            <p className="text-gray-600 mt-1">Stay updated with society notifications</p>
          </div>
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Announcements</p>
                  <p className="text-2xl font-bold text-gray-900">{announcements.length}</p>
                </div>
                <Bell className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Unread</p>
                  <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Urgent</p>
                  <p className="text-2xl font-bold text-gray-900">{urgentCount}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Society Announcements</CardTitle>
            <CardDescription>Latest updates and notifications from the management</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All ({announcements.length})</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                <TabsTrigger value="urgent">Urgent ({urgentCount})</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-6">
                <div className="space-y-4">
                  {filteredAnnouncements.map((announcement) => (
                    <Card key={announcement.id} className={`hover:shadow-md transition-shadow ${!announcement.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          {getTypeIcon(announcement.type)}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <h3 className={`font-semibold text-lg ${!announcement.isRead ? 'text-blue-900' : 'text-gray-900'}`}>
                                  {announcement.title}
                                </h3>
                                {!announcement.isRead && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                              </div>
                              <Badge className={`${getPriorityColor(announcement.priority)} text-white`}>
                                {announcement.priority}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-700 mb-3 leading-relaxed">
                              {announcement.content}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{announcement.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{announcement.time}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500">By {announcement.author}</span>
                                {!announcement.isRead && (
                                  <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                                    Mark as Read
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FlatAnnouncements;
