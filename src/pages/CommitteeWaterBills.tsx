
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Droplets, IndianRupee, Calendar, FileText, TrendingUp, Download, Plus, Edit, Eye, Send } from 'lucide-react';

const CommitteeWaterBills = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentBills = [
    {
      id: 1,
      flat: 'A-204',
      resident: 'Rajesh Kumar',
      previousReading: 1250,
      currentReading: 1320,
      consumption: 70,
      rate: 15,
      amount: 1050,
      dueDate: '2024-02-15',
      status: 'pending',
      billDate: '2024-01-31',
      paymentDate: null
    },
    {
      id: 2,
      flat: 'B-101',
      resident: 'Priya Sharma',
      previousReading: 980,
      currentReading: 1045,
      consumption: 65,
      rate: 15,
      amount: 975,
      dueDate: '2024-02-15',
      status: 'paid',
      billDate: '2024-01-31',
      paymentDate: '2024-02-01'
    },
    {
      id: 3,
      flat: 'C-305',
      resident: 'Amit Patel',
      previousReading: 1100,
      currentReading: 1180,
      consumption: 80,
      rate: 15,
      amount: 1200,
      dueDate: '2024-02-15',
      status: 'overdue',
      billDate: '2024-01-31',
      paymentDate: null
    },
    {
      id: 4,
      flat: 'A-301',
      resident: 'Sunita Gupta',
      previousReading: 1350,
      currentReading: 1425,
      consumption: 75,
      rate: 15,
      amount: 1125,
      dueDate: '2024-02-15',
      status: 'pending',
      billDate: '2024-01-31',
      paymentDate: null
    }
  ];

  const waterReadings = [
    {
      id: 1,
      date: '2024-01-31',
      reader: 'Mohan Kumar',
      totalFlatsRead: 156,
      pendingReadings: 4,
      status: 'completed',
      notes: 'All readings completed on time'
    },
    {
      id: 2,
      date: '2023-12-31',
      reader: 'Ravi Sharma',
      totalFlatsRead: 152,
      pendingReadings: 8,
      status: 'completed',
      notes: 'Some flats were locked during reading'
    },
    {
      id: 3,
      date: '2023-11-30',
      reader: 'Mohan Kumar',
      totalFlatsRead: 156,
      pendingReadings: 0,
      status: 'completed',
      notes: 'Perfect reading cycle'
    }
  ];

  const waterStats = {
    totalBills: currentBills.length,
    paidBills: currentBills.filter(b => b.status === 'paid').length,
    pendingBills: currentBills.filter(b => b.status === 'pending').length,
    overdueBills: currentBills.filter(b => b.status === 'overdue').length,
    totalAmount: currentBills.reduce((sum, bill) => sum + bill.amount, 0),
    paidAmount: currentBills.filter(b => b.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0),
    pendingAmount: currentBills.filter(b => b.status !== 'paid').reduce((sum, bill) => sum + bill.amount, 0)
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'overdue': return 'bg-red-500';
      case 'partial': return 'bg-orange-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'partial': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Water Bills Management</h1>
            <p className="text-gray-600 mt-1">Manage water consumption and billing</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Bills
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Generate Bills
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-blue-600">₹{waterStats.totalAmount.toLocaleString()}</p>
                </div>
                <IndianRupee className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Paid Amount</p>
                  <p className="text-2xl font-bold text-green-600">₹{waterStats.paidAmount.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                  <p className="text-2xl font-bold text-orange-600">₹{waterStats.pendingAmount.toLocaleString()}</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overdue Bills</p>
                  <p className="text-2xl font-bold text-red-600">{waterStats.overdueBills}</p>
                </div>
                <FileText className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Monthly Water Consumption</CardTitle>
              <CardDescription>Average consumption trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Average Consumption</p>
                    <p className="text-sm text-gray-600">Per flat this month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">72 units</p>
                    <p className="text-sm text-green-600">↑ 5% from last month</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Highest Consumer</p>
                    <p className="text-sm text-gray-600">C-305 • Amit Patel</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-600">80 units</p>
                    <p className="text-sm text-gray-600">₹1,200</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Lowest Consumer</p>
                    <p className="text-sm text-gray-600">B-101 • Priya Sharma</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">65 units</p>
                    <p className="text-sm text-gray-600">₹975</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
              <CardDescription>Current month overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Bills</span>
                  <span className="font-semibold">{waterStats.totalBills}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Paid Bills</span>
                  <span className="font-semibold text-green-600">{waterStats.paidBills}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending Bills</span>
                  <span className="font-semibold text-yellow-600">{waterStats.pendingBills}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Overdue Bills</span>
                  <span className="font-semibold text-red-600">{waterStats.overdueBills}</span>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Collection Rate</span>
                  <span className="font-bold text-blue-600">
                    {Math.round((waterStats.paidBills / waterStats.totalBills) * 100)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Water Bills Management</CardTitle>
            <CardDescription>Track water consumption and billing for all flats</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="current">Current Bills</TabsTrigger>
                <TabsTrigger value="readings">Meter Readings</TabsTrigger>
                <TabsTrigger value="history">Payment History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Flat Details</TableHead>
                      <TableHead>Meter Reading</TableHead>
                      <TableHead>Consumption</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentBills.map((bill) => (
                      <TableRow key={bill.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{bill.flat}</p>
                            <p className="text-sm text-gray-600">{bill.resident}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">Previous: {bill.previousReading}</p>
                            <p className="text-sm">Current: {bill.currentReading}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4 text-blue-500" />
                            <span className="font-medium">{bill.consumption} units</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">₹{bill.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">@₹{bill.rate}/unit</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{bill.dueDate}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusTextColor(bill.status)}>
                            {bill.status}
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
                            {bill.status !== 'paid' && (
                              <Button size="sm" variant="outline">
                                <Send className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="readings" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reading Date</TableHead>
                      <TableHead>Meter Reader</TableHead>
                      <TableHead>Flats Read</TableHead>
                      <TableHead>Pending</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {waterReadings.map((reading) => (
                      <TableRow key={reading.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{reading.date}</span>
                          </div>
                        </TableCell>
                        <TableCell>{reading.reader}</TableCell>
                        <TableCell>
                          <span className="font-medium">{reading.totalFlatsRead}</span>
                        </TableCell>
                        <TableCell>
                          {reading.pendingReadings > 0 ? (
                            <span className="text-red-600 font-medium">{reading.pendingReadings}</span>
                          ) : (
                            <span className="text-green-600">0</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(reading.status)} text-white`}>
                            {reading.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm text-gray-600">{reading.notes}</p>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Payment history feature coming soon...</p>
                  <p className="text-sm">Track historical payment patterns and trends</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CommitteeWaterBills;
