
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building2, Users, IndianRupee, Calendar, Plus, Edit, Eye, FileText, Key } from 'lucide-react';

const CommitteeRentals = () => {
  const [activeTab, setActiveTab] = useState('properties');

  const rentalProperties = [
    {
      id: 1,
      flat: 'A-105',
      owner: 'Rajesh Kumar',
      tenant: 'Amit Singh',
      rentAmount: 25000,
      deposit: 50000,
      leaseStart: '2023-06-01',
      leaseEnd: '2024-05-31',
      status: 'occupied',
      paymentStatus: 'current',
      lastPayment: '2024-01-01',
      contact: '+91 9876543210'
    },
    {
      id: 2,
      flat: 'B-203',
      owner: 'Priya Sharma',
      tenant: 'Ravi Patel',
      rentAmount: 28000,
      deposit: 56000,
      leaseStart: '2023-08-15',
      leaseEnd: '2024-08-14',
      status: 'occupied',
      paymentStatus: 'overdue',
      lastPayment: '2023-12-01',
      contact: '+91 9876543220'
    },
    {
      id: 3,
      flat: 'C-401',
      owner: 'Sunita Gupta',
      tenant: null,
      rentAmount: 30000,
      deposit: 60000,
      leaseStart: null,
      leaseEnd: null,
      status: 'vacant',
      paymentStatus: null,
      lastPayment: null,
      contact: '+91 9876543240'
    },
    {
      id: 4,
      flat: 'A-302',
      owner: 'Vikash Agarwal',
      tenant: 'Deepak Kumar',
      rentAmount: 22000,
      deposit: 44000,
      leaseStart: '2023-12-01',
      leaseEnd: '2024-11-30',
      status: 'occupied',
      paymentStatus: 'current',
      lastPayment: '2024-01-01',
      contact: '+91 9876543250'
    }
  ];

  const tenantApplications = [
    {
      id: 1,
      flat: 'C-401',
      applicantName: 'Rohit Sharma',
      phone: '+91 9876543260',
      email: 'rohit.sharma@email.com',
      proposedRent: 29000,
      moveInDate: '2024-02-01',
      occupation: 'Software Engineer',
      familySize: 3,
      applicationDate: '2024-01-10',
      status: 'pending',
      documents: ['ID Proof', 'Salary Slip', 'Bank Statement']
    },
    {
      id: 2,
      flat: 'C-401',
      applicantName: 'Neha Agarwal',
      phone: '+91 9876543270',
      email: 'neha.agarwal@email.com',
      proposedRent: 30000,
      moveInDate: '2024-01-25',
      occupation: 'Marketing Manager',
      familySize: 2,
      applicationDate: '2024-01-12',
      status: 'under-review',
      documents: ['ID Proof', 'Salary Slip', 'Reference Letter']
    }
  ];

  const rentalStats = {
    totalProperties: rentalProperties.length,
    occupied: rentalProperties.filter(p => p.status === 'occupied').length,
    vacant: rentalProperties.filter(p => p.status === 'vacant').length,
    overduePayments: rentalProperties.filter(p => p.paymentStatus === 'overdue').length,
    monthlyIncome: rentalProperties.filter(p => p.status === 'occupied').reduce((sum, p) => sum + p.rentAmount, 0)
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied': return 'bg-green-500';
      case 'vacant': return 'bg-orange-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'pending': return 'bg-blue-500';
      case 'under-review': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'text-green-600 bg-green-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'advance': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Rental Management</h1>
            <p className="text-gray-600 mt-1">Manage rental properties and tenant applications</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Rental Property
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Properties</p>
                  <p className="text-2xl font-bold text-gray-900">{rentalStats.totalProperties}</p>
                </div>
                <Building2 className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Occupied</p>
                  <p className="text-2xl font-bold text-green-600">{rentalStats.occupied}</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Vacant</p>
                  <p className="text-2xl font-bold text-orange-600">{rentalStats.vacant}</p>
                </div>
                <Key className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">{rentalStats.overduePayments}</p>
                </div>
                <Calendar className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Income</p>
                  <p className="text-2xl font-bold text-purple-600">₹{rentalStats.monthlyIncome.toLocaleString()}</p>
                </div>
                <IndianRupee className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Rental Properties Management</CardTitle>
            <CardDescription>Manage all rental properties and tenant information</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="properties">All Properties</TabsTrigger>
                <TabsTrigger value="occupied">Occupied</TabsTrigger>
                <TabsTrigger value="vacant">Vacant</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="properties" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property Details</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Tenant</TableHead>
                      <TableHead>Rent Details</TableHead>
                      <TableHead>Lease Period</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentalProperties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">{property.flat}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{property.owner}</p>
                            <p className="text-sm text-gray-600">{property.contact}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {property.tenant ? (
                            <div>
                              <p className="font-medium">{property.tenant}</p>
                              {property.paymentStatus && (
                                <Badge className={getPaymentStatusColor(property.paymentStatus)}>
                                  {property.paymentStatus}
                                </Badge>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-400">Vacant</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">₹{property.rentAmount.toLocaleString()}/month</p>
                            <p className="text-sm text-gray-600">Deposit: ₹{property.deposit.toLocaleString()}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {property.leaseStart && property.leaseEnd ? (
                            <div>
                              <p className="text-sm">{property.leaseStart}</p>
                              <p className="text-sm text-gray-600">to {property.leaseEnd}</p>
                            </div>
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(property.status)} text-white`}>
                            {property.status}
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
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="occupied" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property</TableHead>
                      <TableHead>Tenant Details</TableHead>
                      <TableHead>Rent & Payment</TableHead>
                      <TableHead>Lease Info</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentalProperties.filter(p => p.status === 'occupied').map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">{property.flat}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{property.tenant}</p>
                            <p className="text-sm text-gray-600">Owner: {property.owner}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">₹{property.rentAmount.toLocaleString()}/month</p>
                            <p className="text-sm text-gray-600">Last: {property.lastPayment}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{property.leaseStart}</p>
                            <p className="text-sm text-gray-600">to {property.leaseEnd}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPaymentStatusColor(property.paymentStatus)}>
                            {property.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <IndianRupee className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="vacant" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property</TableHead>
                      <TableHead>Owner Details</TableHead>
                      <TableHead>Expected Rent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentalProperties.filter(p => p.status === 'vacant').map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">{property.flat}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{property.owner}</p>
                            <p className="text-sm text-gray-600">{property.contact}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">₹{property.rentAmount.toLocaleString()}/month</p>
                            <p className="text-sm text-gray-600">Deposit: ₹{property.deposit.toLocaleString()}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(property.status)} text-white`}>
                            Available
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <Users className="h-4 w-4 mr-2" />
                              Find Tenant
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

              <TabsContent value="applications" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant Details</TableHead>
                      <TableHead>Property</TableHead>
                      <TableHead>Proposed Terms</TableHead>
                      <TableHead>Profile Info</TableHead>
                      <TableHead>Documents</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tenantApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{application.applicantName}</p>
                            <p className="text-sm text-gray-600">{application.phone}</p>
                            <p className="text-sm text-gray-600">{application.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">{application.flat}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">₹{application.proposedRent.toLocaleString()}/month</p>
                            <p className="text-sm text-gray-600">Move-in: {application.moveInDate}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{application.occupation}</p>
                            <p className="text-sm text-gray-600">{application.familySize} family members</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {application.documents.map((doc, index) => (
                              <Badge key={index} variant="outline" className="text-xs block w-fit">
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
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
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

export default CommitteeRentals;
