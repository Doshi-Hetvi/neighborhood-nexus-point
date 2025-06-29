
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, Users, Plus, CheckCircle, AlertCircle } from 'lucide-react';

const FlatBooking = () => {
  const [activeTab, setActiveTab] = useState('available');

  const availableVenues = [
    {
      id: 1,
      name: 'Community Hall',
      capacity: '100 people',
      rate: '₹2,500/day',
      amenities: ['AC', 'Sound System', 'Projector', 'Kitchen'],
      image: '/placeholder.svg',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Basement Plot',
      capacity: '50 people',
      rate: '₹1,500/day',
      amenities: ['Parking Space', 'Basic Lighting'],
      image: '/placeholder.svg',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Terrace Garden',
      capacity: '30 people',
      rate: '₹1,000/day',
      amenities: ['Garden View', 'Open Air', 'Basic Seating'],
      image: '/placeholder.svg',
      availability: 'Booked (Today)'
    }
  ];

  const myBookings = [
    {
      id: 1,
      venue: 'Community Hall',
      date: '2024-02-20',
      time: '06:00 PM - 11:00 PM',
      event: 'Birthday Party',
      status: 'confirmed',
      amount: '₹2,500'
    },
    {
      id: 2,
      venue: 'Terrace Garden',
      date: '2024-01-15',
      time: '10:00 AM - 02:00 PM',
      event: 'Family Gathering',
      status: 'completed',
      amount: '₹1,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout userRole="flat">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Event Booking</h1>
            <p className="text-gray-600 mt-1">Book community spaces for your events</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Venues</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">My Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900">₹3,500</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Venue Booking</CardTitle>
            <CardDescription>Manage your venue bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="available">Available Venues</TabsTrigger>
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="available" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableVenues.map((venue) => (
                    <Card key={venue.id} className="hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{venue.name}</h3>
                          <Badge 
                            className={venue.availability === 'Available' ? 'bg-green-500' : 'bg-red-500'}
                          >
                            {venue.availability}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{venue.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{venue.rate}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Amenities:</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {venue.amenities.map((amenity, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-4" 
                          disabled={venue.availability !== 'Available'}
                        >
                          {venue.availability === 'Available' ? 'Book Now' : 'Not Available'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bookings" className="mt-6">
                <div className="space-y-4">
                  {myBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{booking.venue}</h3>
                              <Badge className={`${getStatusColor(booking.status)} text-white`}>
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                              <div>
                                <p className="font-medium text-gray-700">Event</p>
                                <p>{booking.event}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Date</p>
                                <p>{booking.date}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Time</p>
                                <p>{booking.time}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Amount</p>
                                <p className="font-semibold">{booking.amount}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {booking.status === 'confirmed' && (
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            )}
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

export default FlatBooking;
