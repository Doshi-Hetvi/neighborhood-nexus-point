
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  Shield,
  Bell,
  Database,
  Mail,
  Key,
  Server,
  Smartphone,
  Save,
  AlertTriangle,
  CheckCircle,
  Clock,
  Lock,
} from 'lucide-react';

const SystemSettings = () => {
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'admin@societyhub.com',
    smtpPassword: '••••••••',
    fromEmail: 'noreply@societyhub.com',
    fromName: 'SocietyHub',
  });

  const [securitySettings, setSecuritySettings] = useState({
    passwordMinLength: '8',
    sessionTimeout: '30',
    maxLoginAttempts: '5',
    twoFactorEnabled: true,
    backupFrequency: 'daily',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    maintenanceAlerts: true,
    paymentReminders: true,
    eventNotifications: true,
  });

  const systemStatus = [
    { service: 'Database', status: 'healthy', uptime: '99.9%', lastCheck: '2 min ago' },
    { service: 'Email Service', status: 'healthy', uptime: '99.5%', lastCheck: '5 min ago' },
    { service: 'Payment Gateway', status: 'warning', uptime: '98.2%', lastCheck: '1 min ago' },
    { service: 'SMS Service', status: 'healthy', uptime: '99.8%', lastCheck: '3 min ago' },
    { service: 'File Storage', status: 'healthy', uptime: '99.9%', lastCheck: '1 min ago' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      healthy: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleSave = (section: string) => {
    console.log(`Saving ${section} settings`);
    // TODO: API call to save settings
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600 mt-1">Configure system preferences and settings</p>
          </div>
          <Button variant="outline">
            <Database className="h-4 w-4 mr-2" />
            Backup System
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="system">System Status</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  General Settings
                </CardTitle>
                <CardDescription>Basic system configuration and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="systemName">System Name</Label>
                    <Input id="systemName" defaultValue="SocietyHub" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="Asia/Kolkata" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Input id="dateFormat" defaultValue="DD/MM/YYYY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Input id="currency" defaultValue="INR" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Default Language</Label>
                    <Input id="language" defaultValue="English" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="maintenanceMode" className="rounded" />
                      <Label htmlFor="maintenanceMode" className="text-sm">Enable maintenance mode</Label>
                    </div>
                  </div>
                </div>
                <Button onClick={() => handleSave('general')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save General Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Configure security policies and authentication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={securitySettings.passwordMinLength}
                      onChange={(e) => setSecuritySettings(prev => ({ ...prev, passwordMinLength: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={securitySettings.sessionTimeout}
                      onChange={(e) => setSecuritySettings(prev => ({ ...prev, sessionTimeout: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={securitySettings.maxLoginAttempts}
                      onChange={(e) => setSecuritySettings(prev => ({ ...prev, maxLoginAttempts: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <Input
                      id="backupFrequency"
                      value={securitySettings.backupFrequency}
                      onChange={(e) => setSecuritySettings(prev => ({ ...prev, backupFrequency: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={securitySettings.twoFactorEnabled}
                      onChange={(e) => setSecuritySettings(prev => ({ ...prev, twoFactorEnabled: e.target.checked }))}
                      className="rounded"
                    />
                  </div>
                </div>
                <Button onClick={() => handleSave('security')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Security Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>Configure notification preferences and channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', description: 'Send notifications via email' },
                    { key: 'smsNotifications', label: 'SMS Notifications', description: 'Send notifications via SMS' },
                    { key: 'pushNotifications', label: 'Push Notifications', description: 'Send browser push notifications' },
                    { key: 'maintenanceAlerts', label: 'Maintenance Alerts', description: 'Notify about maintenance schedules' },
                    { key: 'paymentReminders', label: 'Payment Reminders', description: 'Send payment due reminders' },
                    { key: 'eventNotifications', label: 'Event Notifications', description: 'Notify about society events' },
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">{setting.label}</h3>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notificationSettings[setting.key as keyof typeof notificationSettings] as boolean}
                        onChange={(e) => setNotificationSettings(prev => ({ ...prev, [setting.key]: e.target.checked }))}
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>
                <Button onClick={() => handleSave('notifications')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Configuration
                </CardTitle>
                <CardDescription>Configure SMTP settings for email delivery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="smtpServer">SMTP Server</Label>
                    <Input
                      id="smtpServer"
                      value={emailSettings.smtpServer}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpServer: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPort">SMTP Port</Label>
                    <Input
                      id="smtpPort"
                      value={emailSettings.smtpPort}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpPort: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpUsername">SMTP Username</Label>
                    <Input
                      id="smtpUsername"
                      value={emailSettings.smtpUsername}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpUsername: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPassword">SMTP Password</Label>
                    <Input
                      id="smtpPassword"
                      type="password"
                      value={emailSettings.smtpPassword}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpPassword: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fromEmail">From Email</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      value={emailSettings.fromEmail}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, fromEmail: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fromName">From Name</Label>
                    <Input
                      id="fromName"
                      value={emailSettings.fromName}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, fromName: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Test Email Configuration</Button>
                  <Button onClick={() => handleSave('email')}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Email Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  System Status
                </CardTitle>
                <CardDescription>Monitor system health and service status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <h3 className="font-medium">{service.service}</h3>
                          <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusBadge(service.status)}>
                          {service.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">Last check: {service.lastCheck}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <Button variant="outline">
                    <Database className="h-4 w-4 mr-2" />
                    Run System Check
                  </Button>
                  <Button variant="outline">
                    <Server className="h-4 w-4 mr-2" />
                    View Logs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SystemSettings;
