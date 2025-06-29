
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Home, Phone, Mail, Calendar, Plus, Edit, Eye, UserCheck, UserX } from 'lucide-react';

const CommitteeMembers = () => {
  const [activeTab, setActiveTab] = useState('all');

  const members = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      flat: 'A-204',
      phone: '+91 9876543210',
      email: 'rajesh.kumar@email.com',
      membershipType: 'Owner',
      status: 'active',
      joinDate: '2020-03-15',
      familyMembers: 4,
      vehicles: 2,
      emergencyContact: '+91 9876543211',
      occupation: 'Software Engineer'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      flat: 'B-101',
      phone: '+91 9876543220',
      email: 'priya.sharma@email.com',
      membershipType: 'Owner',
      status: 'active',
      joinDate: '2019-07-22',
      familyMembers: 3,
      vehicles: 1,
      emergencyContact: '+91 9876543221',
      occupation: 'Doctor'
    },
    {
      id: 3,
      name: 'Amit Patel',
      flat: 'C-305',
      phone: '+91 9876543230',
      email: 'amit.patel@email.com',
      membershipType: 'Tenant',
      status: 'active',
      joinDate: '2023-01-10',
      familyMembers: 2,
      vehicles: 1,
      emergencyContact: '+91 9876543231',
      occupation: 'Business Owner'
    },
    {
      id: 4,
      name: 'Sunita Gupta',
      flat: 'A-301',
      phone: '+91 9876543240',
      email: 'sunita.gupta@email.com',
      membershipType: 'Owner',
      status: 'inactive',
      joinDate: '2021-11-05',
      familyMembers: 5,
      vehicles: 2,
      emergencyContact: '+91 9876543241',
      occupation: 'Teacher'
    }
  ];

  const pendingApplications = [
    {
      id: 1,
      name: 'Vikash Singh',
      flat: 'B-205',
      phone: '+91 9876543250',
      email: 'vikash.singh@email.com',
      membershipType: 'Owner',
      applicationDate: '2024-01-10',
      status: 'pending',
      documents: ['ID Proof', 'Address Proof', 'Ownership Papers']
    },
    {
      id: 2,
      name: 'Ritu Agarwal',
      flat: 'C-402',
      phone: '+91 9876543260',
      email: 'ritu.agarwal@email.com',
      membershipType: 'Tenant',
      applicationDate: '2024-01-12',
      status: 'under-review',
      documents: ['ID Proof', 'Rental Agreement']
    }
  ];

  const memberStats = {
    total: members.length,
    active: members.filter(m => m.status === 'active').length,
    owners: members.filter(m => m.membershipType === 'Owner').length,
    tenants: members.filter(m => m.membershipType === 'Tenant').length,
    pending: pendingApplications.length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'inactive': return 'bg-red-500';
      case 'pending': return 'bg-yellow-500';
      case 'under-review': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getMembershipColor = (type: string) => {
    return type === 'Owner' ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100';
  };

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Member Management</h1>
            <p className="text-gray-600 mt-1">Manage society members and applications</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-gray-900">{memberStats.total}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Members</p>
                  <p className="text-2xl font-bold text-green-600">{memberStats.active}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Owners</p>
                  <p className="text-2xl font-bold text-blue-600">{memberStats.owners}</p>
                </div>
                <Home className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tenants</p>
                  <p className="text-2xl font-bold text-purple-600">{memberStats.tenants}</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-orange-600">{memberStats.pending}</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Member Directory</CardTitle>
            <CardDescription>Manage all society members and their details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Members</TabsTrigger>
                <TabsTrigger value="owners">Owners</TabsTrigger>
                <TabsTrigger value="tenants">Tenants</TabsTrigger>
                <TabsTrigger value="pending">Pending Applications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member Details</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Membership</TableHead>
                      <TableHead>Family Size</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.flat} • {member.occupation}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-3 w-3" />
                              {member.phone}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="h-3 w-3" />
                              {member.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <Badge className={getMembershipColor(member.membershipType)}>
                              {member.membershipType}
                            </Badge>
                            <p className="text-xs text-gray-600 mt-1">Since {member.joinDate}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{member.familyMembers} members</p>
                            <p className="text-xs text-gray-600">{member.vehicles} vehicles</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(member.status)} text-white`}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="owners" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Owner Details</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Property Info</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.filter(m => m.membershipType === 'Owner').map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.occupation}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{member.phone}</p>
                            <p className="text-sm text-gray-600">{member.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{member.flat}</p>
                            <p className="text-sm text-gray-600">Owned since {member.joinDate}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(member.status)} text-white`}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="tenants" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tenant Details</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Rental Info</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.filter(m => m.membershipType === 'Tenant').map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.occupation}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{member.phone}</p>
                            <p className="text-sm text-gray-600">{member.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{member.flat}</p>
                            <p className="text-sm text-gray-600">Tenant since {member.joinDate}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(member.status)} text-white`}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="pending" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant Details</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Application Info</TableHead>
                      <TableHead>Documents</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{application.name}</p>
                            <p className="text-sm text-gray-600">{application.flat}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{application.phone}</p>
                            <p className="text-sm text-gray-600">{application.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <Badge className={getMembershipColor(application.membershipType)}>
                              {application.membershipType}
                            </Badge>
                            <p className="text-xs text-gray-600 mt-1">Applied {application.applicationDate}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {application.documents.map((doc, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(application.status)} text-white`}>
                            {application.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <UserCheck className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="destructive">
                              <UserX className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CommitteeMembers;
