
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertCircle, CheckCircle, Clock, Wrench, Building2, Users, Calendar, Edit, Eye, Trash2 } from 'lucide-react';

const CommitteeMaintenance = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const maintenanceRequests = [
    {
      id: 1,
      flat: 'A-204',
      resident: 'Rajesh Kumar',
      issue: 'Water leakage in bathroom',
      category: 'Plumbing',
      priority: 'high',
      status: 'pending',
      dateSubmitted: '2024-01-15',
      description: 'Water is leaking from the bathroom ceiling. Need urgent repair.',
      assignedTo: null
    },
    {
      id: 2,
      flat: 'B-101',
      resident: 'Priya Sharma',
      issue: 'Electrical socket not working',
      category: 'Electrical',
      priority: 'medium',
      status: 'in-progress',
      dateSubmitted: '2024-01-12',
      description: 'Main hall electrical socket is not working properly.',
      assignedTo: 'Ram Electrician'
    },
    {
      id: 3,
      flat: 'C-305',
      resident: 'Amit Patel',
      issue: 'Door lock repair',
      category: 'Hardware',
      priority: 'low',
      status: 'completed',
      dateSubmitted: '2024-01-10',
      description: 'Main door lock is stuck and needs repair.',
      assignedTo: 'Suresh Carpenter',
      completedDate: '2024-01-14'
    },
    {
      id: 4,
      flat: 'A-301',
      resident: 'Sunita Gupta',
      issue: 'AC not cooling properly',
      category: 'HVAC',
      priority: 'medium',
      status: 'pending',
      dateSubmitted: '2024-01-14',
      description: 'Air conditioner in bedroom is not cooling efficiently.',
      assignedTo: null
    }
  ];

  const commonAreaMaintenance = [
    {
      id: 1,
      area: 'Elevator - Block A',
      issue: 'Regular servicing due',
      priority: 'high',
      status: 'scheduled',
      scheduledDate: '2024-01-20',
      contractor: 'Otis Elevator Service'
    },
    {
      id: 2,
      area: 'Swimming Pool',
      issue: 'Water filtration system check',
      priority: 'medium',
      status: 'in-progress',
      scheduledDate: '2024-01-18',
      contractor: 'AquaTech Solutions'
    },
    {
      id: 3,
      area: 'Garden Area',
      issue: 'Landscape maintenance',
      priority: 'low',
      status: 'completed',
      scheduledDate: '2024-01-12',
      contractor: 'Green Thumb Landscaping',
      completedDate: '2024-01-15'
    }
  ];

  const maintenanceStaff = [
    {
      id: 1,
      name: 'Ram Electrician',
      specialty: 'Electrical',
      phone: '+91 9876543210',
      rating: 4.5,
      activeJobs: 2,
      status: 'available'
    },
    {
      id: 2,
      name: 'Suresh Carpenter',
      specialty: 'Carpentry',
      phone: '+91 9876543211',
      rating: 4.8,
      activeJobs: 1,
      status: 'busy'
    },
    {
      id: 3,
      name: 'Ravi Plumber',
      specialty: 'Plumbing',
      phone: '+91 9876543212',
      rating: 4.3,
      activeJobs: 3,
      status: 'available'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'in-progress': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'scheduled': return 'bg-purple-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Maintenance Management</h1>
            <p className="text-gray-600 mt-1">Track and manage all maintenance requests</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Wrench className="h-4 w-4 mr-2" />
            Schedule Maintenance
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">8</p>
                </div>
                <Wrench className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Today</p>
                  <p className="text-2xl font-bold text-green-600">5</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Urgent Issues</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Dashboard</CardTitle>
            <CardDescription>Manage all maintenance activities and staff</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="requests">Flat Requests</TabsTrigger>
                <TabsTrigger value="common">Common Areas</TabsTrigger>
                <TabsTrigger value="staff">Staff Management</TabsTrigger>
              </TabsList>
              
              <TabsContent value="requests" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request Details</TableHead>
                      <TableHead>Resident</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {maintenanceRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.issue}</p>
                            <p className="text-sm text-gray-600">{request.flat} • {request.dateSubmitted}</p>
                          </div>
                        </TableCell>
                        <TableCell>{request.resident}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{request.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(request.status)} text-white`}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {request.assignedTo || <span className="text-gray-400">Unassigned</span>}
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
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="common" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Area/Facility</TableHead>
                      <TableHead>Issue/Task</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Scheduled Date</TableHead>
                      <TableHead>Contractor</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commonAreaMaintenance.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">{item.area}</span>
                          </div>
                        </TableCell>
                        <TableCell>{item.issue}</TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(item.priority)}>
                            {item.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(item.status)} text-white`}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            {item.scheduledDate}
                          </div>
                        </TableCell>
                        <TableCell>{item.contractor}</TableCell>
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

              <TabsContent value="staff" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {maintenanceStaff.map((staff) => (
                    <Card key={staff.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{staff.name}</h3>
                            <p className="text-gray-600">{staff.specialty}</p>
                            <p className="text-sm text-gray-500">{staff.phone}</p>
                          </div>
                          <Badge 
                            variant={staff.status === 'available' ? 'default' : 'secondary'}
                            className={staff.status === 'available' ? 'bg-green-500' : 'bg-orange-500'}
                          >
                            {staff.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Rating:</span>
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm">{staff.rating}/5</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Active Jobs:</span>
                            <span className="text-sm font-medium">{staff.activeJobs}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Users className="h-4 w-4 mr-2" />
                            Assign
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
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

export default CommitteeMaintenance;
