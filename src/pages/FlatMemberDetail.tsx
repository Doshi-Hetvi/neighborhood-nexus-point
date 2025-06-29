
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Car,
  Key,
  Edit,
  Camera,
  Shield
} from 'lucide-react';

const FlatMemberDetail = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const memberDetails = {
    name: 'Rajesh Kumar',
    flatNo: 'A-304',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    emergencyContact: '+91 98765 43211',
    occupation: 'Software Engineer',
    company: 'Tech Solutions Pvt. Ltd.',
    memberSince: '2020-03-15',
    familyMembers: 4,
    vehicleCount: 2,
    status: 'active'
  };

  const familyMembers = [
    { name: 'Priya Kumar', relation: 'Spouse', age: 32, occupation: 'Teacher' },
    { name: 'Arjun Kumar', relation: 'Son', age: 8, occupation: 'Student' },
    { name: 'Anita Kumar', relation: 'Daughter', age: 5, occupation: 'Student' }
  ];

  const vehicles = [
    { type: 'Car', make: 'Maruti Swift', number: 'KA-01-AB-1234', color: 'White', parkingSlot: 'A-12' },
    { type: 'Bike', make: 'Honda Activa', number: 'KA-01-CD-5678', color: 'Red', parkingSlot: 'B-08' }
  ];

  const emergencyContacts = [
    { name: 'Suresh Kumar', relation: 'Father', phone: '+91 98765 43211' },
    { name: 'Dr. Sharma', relation: 'Family Doctor', phone: '+91 98765 43212' },
    { name: 'Amit Singh', relation: 'Neighbor (A-305)', phone: '+91 98765 43213' }
  ];

  const accessCards = [
    { cardNo: 'AC-001234', type: 'Main Entry', status: 'active', issuedDate: '2020-03-20' },
    { cardNo: 'AC-001235', type: 'Parking', status: 'active', issuedDate: '2020-03-20' },
    { cardNo: 'AC-001236', type: 'Gym', status: 'inactive', issuedDate: '2023-01-15' }
  ];

  return (
    <DashboardLayout userRole="flat">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Member Profile</h1>
            <p className="text-gray-600 mt-1">Manage your profile and family details</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
                <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8">
                  <Camera className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{memberDetails.name}</h2>
                  <Badge className="bg-green-500 text-white">
                    {memberDetails.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Flat {memberDetails.flatNo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{memberDetails.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{memberDetails.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Since {memberDetails.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Family Members</p>
                  <p className="text-2xl font-bold text-gray-900">{memberDetails.familyMembers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Vehicles</p>
                  <p className="text-2xl font-bold text-gray-900">{memberDetails.vehicleCount}</p>
                </div>
                <Car className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Access Cards</p>
                  <p className="text-2xl font-bold text-gray-900">{accessCards.length}</p>
                </div>
                <Key className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Emergency Contacts</p>
                  <p className="text-2xl font-bold text-gray-900">{emergencyContacts.length}</p>
                </div>
                <Shield className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Member Information</CardTitle>
            <CardDescription>Detailed profile and family information</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="profile">Personal Details</TabsTrigger>
                <TabsTrigger value="family">Family Members</TabsTrigger>
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
                <TabsTrigger value="access">Access Cards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <p className="text-lg font-semibold">{memberDetails.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Flat Number</label>
                      <p className="text-lg font-semibold">{memberDetails.flatNo}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <p className="text-lg">{memberDetails.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <p className="text-lg">{memberDetails.phone}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Emergency Contact</label>
                      <p className="text-lg">{memberDetails.emergencyContact}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Occupation</label>
                      <p className="text-lg">{memberDetails.occupation}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Company</label>
                      <p className="text-lg">{memberDetails.company}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Member Since</label>
                      <p className="text-lg">{memberDetails.memberSince}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="family" className="mt-6">
                <div className="space-y-4">
                  {familyMembers.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="h-6 w-6 text-gray-500" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{member.name}</h3>
                              <div className="flex gap-4 text-sm text-gray-600">
                                <span>{member.relation}</span>
                                <span>Age: {member.age}</span>
                                <span>{member.occupation}</span>
                              </div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Add Family Member
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="vehicles" className="mt-6">
                <div className="space-y-4">
                  {vehicles.map((vehicle, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Car className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{vehicle.make}</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                                <span>Type: {vehicle.type}</span>
                                <span>Number: {vehicle.number}</span>
                                <span>Color: {vehicle.color}</span>
                                <span>Parking: {vehicle.parkingSlot}</span>
                              </div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Car className="h-4 w-4 mr-2" />
                    Add Vehicle
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="emergency" className="mt-6">
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                              <Shield className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{contact.name}</h3>
                              <div className="flex gap-4 text-sm text-gray-600">
                                <span>{contact.relation}</span>
                                <span>{contact.phone}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Add Emergency Contact
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="access" className="mt-6">
                <div className="space-y-4">
                  {accessCards.map((card, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <Key className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{card.type} Card</h3>
                              <div className="flex gap-4 text-sm text-gray-600">
                                <span>Card No: {card.cardNo}</span>
                                <span>Issued: {card.issuedDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={card.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                              {card.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              {card.status === 'active' ? 'Deactivate' : 'Activate'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Key className="h-4 w-4 mr-2" />
                    Request New Card
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FlatMemberDetail;
