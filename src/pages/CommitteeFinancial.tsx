
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IndianRupee, TrendingUp, TrendingDown, DollarSign, FileText, Download, Plus } from 'lucide-react';

const CommitteeFinancial = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const monthlyData = {
    income: 245000,
    expenses: 189000,
    maintenance: 180000,
    utilities: 65000,
    events: 15000,
    repairs: 28000
  };

  const transactions = [
    {
      id: 1,
      date: '2024-01-15',
      description: 'Maintenance Collection - Block A',
      type: 'income',
      amount: 45000,
      category: 'Maintenance',
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-01-14',
      description: 'Electricity Bill Payment',
      type: 'expense',
      amount: 28000,
      category: 'Utilities',
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-01-12',
      description: 'Security Service Payment',
      type: 'expense',
      amount: 25000,
      category: 'Services',
      status: 'completed'
    },
    {
      id: 4,
      date: '2024-01-10',
      description: 'Water Bill Payment',
      type: 'expense',
      amount: 18000,
      category: 'Utilities',
      status: 'completed'
    },
    {
      id: 5,
      date: '2024-01-08',
      description: 'Garden Maintenance',
      type: 'expense',
      amount: 12000,
      category: 'Maintenance',
      status: 'completed'
    }
  ];

  const pendingPayments = [
    {
      id: 1,
      flat: 'A-101',
      owner: 'Rajesh Kumar',
      amount: 3500,
      dueDate: '2024-01-31',
      type: 'Maintenance',
      overdue: 5
    },
    {
      id: 2,
      flat: 'B-205',
      owner: 'Priya Sharma',
      amount: 4200,
      dueDate: '2024-01-31',
      type: 'Maintenance + Penalty',
      overdue: 15
    },
    {
      id: 3,
      flat: 'C-302',
      owner: 'Amit Patel',
      amount: 2800,
      dueDate: '2024-02-01',
      type: 'Water Bill',
      overdue: 0
    }
  ];

  const budgetItems = [
    { category: 'Security', allocated: 50000, spent: 47000, percentage: 94 },
    { category: 'Maintenance', allocated: 40000, spent: 35000, percentage: 87.5 },
    { category: 'Utilities', allocated: 60000, spent: 65000, percentage: 108.3 },
    { category: 'Events', allocated: 20000, spent: 15000, percentage: 75 },
    { category: 'Repairs', allocated: 30000, spent: 28000, percentage: 93.3 }
  ];

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Financial Management</h1>
            <p className="text-gray-600 mt-1">Monitor society finances and transactions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Income</p>
                  <p className="text-2xl font-bold text-green-600">₹{monthlyData.income.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Expenses</p>
                  <p className="text-2xl font-bold text-red-600">₹{monthlyData.expenses.toLocaleString()}</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Balance</p>
                  <p className="text-2xl font-bold text-blue-600">₹{(monthlyData.income - monthlyData.expenses).toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Dues</p>
                  <p className="text-2xl font-bold text-orange-600">₹10,500</p>
                </div>
                <IndianRupee className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Detailed financial management and tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="pending">Pending Payments</TabsTrigger>
                <TabsTrigger value="budget">Budget Tracking</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Income Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Maintenance Fees</span>
                          <span className="font-semibold">₹{monthlyData.maintenance.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Event Bookings</span>
                          <span className="font-semibold">₹15,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Parking Fees</span>
                          <span className="font-semibold">₹25,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Late Fees</span>
                          <span className="font-semibold">₹5,000</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center font-bold">
                          <span>Total Income</span>
                          <span>₹{monthlyData.income.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Expense Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Utilities</span>
                          <span className="font-semibold">₹{monthlyData.utilities.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Security Services</span>
                          <span className="font-semibold">₹45,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Maintenance & Repairs</span>
                          <span className="font-semibold">₹{monthlyData.repairs.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Events & Activities</span>
                          <span className="font-semibold">₹{monthlyData.events.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Administrative</span>
                          <span className="font-semibold">₹36,000</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center font-bold">
                          <span>Total Expenses</span>
                          <span>₹{monthlyData.expenses.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="transactions" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.category}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.type === 'income' ? 'default' : 'secondary'}>
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                          {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {transaction.status}
                          </Badge>
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
                      <TableHead>Flat</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Overdue Days</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.flat}</TableCell>
                        <TableCell>{payment.owner}</TableCell>
                        <TableCell className="text-red-600">₹{payment.amount.toLocaleString()}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>{payment.type}</TableCell>
                        <TableCell>
                          {payment.overdue > 0 ? (
                            <Badge variant="destructive">{payment.overdue} days</Badge>
                          ) : (
                            <Badge variant="secondary">Current</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            Send Reminder
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="budget" className="mt-6">
                <div className="space-y-4">
                  {budgetItems.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{item.category}</h4>
                          <span className={`font-semibold ${item.percentage > 100 ? 'text-red-600' : 'text-green-600'}`}>
                            {item.percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Spent: ₹{item.spent.toLocaleString()}</span>
                          <span>Budget: ₹{item.allocated.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${item.percentage > 100 ? 'bg-red-500' : 'bg-green-500'}`}
                            style={{ width: `${Math.min(item.percentage, 100)}%` }}
                          ></div>
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

export default CommitteeFinancial;
