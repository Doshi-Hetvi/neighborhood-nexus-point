
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Download,
  TrendingUp,
  Calendar
} from 'lucide-react';

const FlatMaintenance = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentMaintenance = {
    month: 'November 2024',
    amount: 12500,
    dueDate: '2024-11-05',
    status: 'pending',
    breakdown: [
      { item: 'Building Maintenance', amount: 5000 },
      { item: 'Security Services', amount: 2500 },
      { item: 'Electricity Common Areas', amount: 1500 },
      { item: 'Water Supply', amount: 1000 },
      { item: 'Garbage Collection', amount: 800 },
      { item: 'Garden Maintenance', amount: 700 },
      { item: 'Administrative Charges', amount: 500 },
      { item: 'Sinking Fund', amount: 500 }
    ]
  };

  const paymentHistory = [
    {
      id: 1,
      month: 'October 2024',
      amount: 12500,
      paidDate: '2024-10-03',
      status: 'paid',
      receiptNo: 'REC-2024-1001',
      lateFee: 0
    },
    {
      id: 2,
      month: 'September 2024',
      amount: 12500,
      paidDate: '2024-09-08',
      status: 'paid',
      receiptNo: 'REC-2024-0901',
      lateFee: 250
    },
    {
      id: 3,
      month: 'August 2024',
      amount: 12500,
      paidDate: '2024-08-02',
      status: 'paid',
      receiptNo: 'REC-2024-0801',
      lateFee: 0
    },
    {
      id: 4,
      month: 'July 2024',
      amount: 12500,
      paidDate: '2024-07-15',
      status: 'paid',
      receiptNo: 'REC-2024-0701',
      lateFee: 500
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500';
      case 'pending': return 'bg-orange-500';
      case 'overdue': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const totalPaidThisYear = paymentHistory.reduce((sum, payment) => sum + payment.amount + payment.lateFee, 0);
  const averagePayment = totalPaidThisYear / paymentHistory.length;

  return (
    <DashboardLayout userRole="flat">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Society Maintenance</h1>
            <p className="text-gray-600 mt-1">Manage your monthly maintenance payments</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <CreditCard className="h-4 w-4 mr-2" />
            Pay Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Due</p>
                  <p className="text-2xl font-bold text-gray-900">₹{currentMaintenance.amount.toLocaleString()}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Due Date</p>
                  <p className="text-lg font-bold text-gray-900">Nov 05</p>
                </div>
                <Calendar className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Paid This Year</p>
                  <p className="text-2xl font-bold text-gray-900">₹{totalPaidThisYear.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Payment</p>
                  <p className="text-2xl font-bold text-gray-900">₹{Math.round(averagePayment).toLocaleString()}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Details</CardTitle>
            <CardDescription>View current dues and payment history</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="current">Current Month</TabsTrigger>
                <TabsTrigger value="history">Payment History</TabsTrigger>
                <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{currentMaintenance.month}</h2>
                        <p className="text-gray-600">Monthly Maintenance Charges</p>
                      </div>
                      <Badge className={`${getStatusColor(currentMaintenance.status)} text-white text-lg px-4 py-2`}>
                        {currentMaintenance.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">Amount Due</p>
                        <p className="text-3xl font-bold text-gray-900">₹{currentMaintenance.amount.toLocaleString()}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">Due Date</p>
                        <p className="text-xl font-semibold text-red-600">{currentMaintenance.dueDate}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-800">Payment Reminder</p>
                          <p className="text-yellow-700 text-sm">
                            Your payment is due in 3 days. Late payment will incur additional charges of ₹500.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-green-600 hover:bg-green-700 flex-1">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay Online
                      </Button>
                      <Button variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        View Bill
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <Card key={payment.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{payment.month}</h3>
                              <Badge className={`${getStatusColor(payment.status)} text-white`}>
                                {payment.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                              <div>
                                <p className="font-medium text-gray-700">Amount</p>
                                <p className="font-semibold">₹{payment.amount.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Late Fee</p>
                                <p className={payment.lateFee > 0 ? 'text-red-600 font-semibold' : ''}>
                                  {payment.lateFee > 0 ? `₹${payment.lateFee}` : '-'}
                                </p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Paid Date</p>
                                <p>{payment.paidDate}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Receipt No.</p>
                                <p className="font-mono text-xs">{payment.receiptNo}</p>
                              </div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Receipt
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="breakdown" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Monthly Charges Breakdown</h3>
                    <div className="space-y-3">
                      {currentMaintenance.breakdown.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="text-gray-700">{item.item}</span>
                          <span className="font-semibold">₹{item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center py-3 border-t-2 border-gray-200 font-bold text-lg">
                        <span>Total</span>
                        <span>₹{currentMaintenance.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FlatMaintenance;
