
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, IndianRupee, Users, Sparkles, Plus, Edit, Eye } from 'lucide-react';

const CommitteeFestivals = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingFestivals = [
    {
      id: 1,
      name: 'Holi Celebration',
      date: '2024-03-13',
      budget: 25000,
      spent: 15000,
      participants: 120,
      status: 'planning',
      venue: 'Community Ground',
      activities: ['Color Play', 'Music & Dance', 'Traditional Food']
    },
    {
      id: 2,
      name: 'Diwali Festival',
      date: '2024-11-01',
      budget: 40000,
      spent: 5000,
      participants: 200,
      status: 'approved',
      venue: 'Entire Society',
      activities: ['Decoration', 'Rangoli Competition', 'Fireworks', 'Sweet Distribution']
    },
    {
      id: 3,
      name: 'Navratri Celebration',
      date: '2024-10-15',
      budget: 30000,
      spent: 0,
      participants: 150,
      status: 'proposal',
      venue: 'Community Hall',
      activities: ['Garba Dance', 'Traditional Costumes', 'Live Music']
    }
  ];

  const pastFestivals = [
    {
      id: 4,
      name: 'Christmas Celebration',
      date: '2023-12-25',
      budget: 20000,
      spent: 18500,
      participants: 180,
      status: 'completed',
      venue: 'Community Hall',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Ganesh Chaturthi',
      date: '2023-09-19',
      budget: 35000,
      spent: 33000,
      participants: 250,
      status: 'completed',
      venue: 'Main Entrance',
      rating: 4.9
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'proposal': return 'bg-yellow-500';
      case 'approved': return 'bg-blue-500';
      case 'planning': return 'bg-orange-500';
      case 'ongoing': return 'bg-green-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout userRole="committee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Festival Management</h1>
            <p className="text-gray-600 mt-1">Plan and organize society festivals</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Plan Festival
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Upcoming Festivals</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Sparkles className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold text-gray-900">₹95,000</p>
                </div>
                <IndianRupee className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Expected Participants</p>
                  <p className="text-2xl font-bold text-gray-900">470</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Year</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Festival Planning</CardTitle>
            <CardDescription>Manage all society festival celebrations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Festivals</TabsTrigger>
                <TabsTrigger value="past">Past Festivals</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-6">
                <div className="space-y-4">
                  {upcomingFestivals.map((festival) => (
                    <Card key={festival.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{festival.name}</h3>
                            <p className="text-gray-600">{festival.date} • {festival.venue}</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={`${getStatusColor(festival.status)} text-white`}>
                              {festival.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Budget Progress</p>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>₹{festival.spent.toLocaleString()}</span>
                                <span>₹{festival.budget.toLocaleString()}</span>
                              </div>
                              <Progress value={(festival.spent / festival.budget) * 100} className="h-2" />
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Expected Participants</p>
                            <p className="text-2xl font-bold text-purple-600">{festival.participants}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Activities</p>
                            <div className="flex flex-wrap gap-1">
                              {festival.activities.map((activity, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Festival</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Budget vs Spent</TableHead>
                      <TableHead>Participants</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastFestivals.map((festival) => (
                      <TableRow key={festival.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{festival.name}</p>
                            <p className="text-sm text-gray-600">{festival.venue}</p>
                          </div>
                        </TableCell>
                        <TableCell>{festival.date}</TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">Budget: ₹{festival.budget.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">Spent: ₹{festival.spent.toLocaleString()}</p>
                          </div>
                        </TableCell>
                        <TableCell>{festival.participants}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span>{festival.rating}/5</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
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

export default CommitteeFestivals;
