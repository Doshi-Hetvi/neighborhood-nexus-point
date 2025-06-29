
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Users,
  Calendar,
  Shield,
  Save,
  Edit,
  Plus,
  Trash2,
} from 'lucide-react';

const SocietyDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [societyData, setSocietyData] = useState({
    name: 'Greenfield Society',
    address: '123 Park Avenue, Mumbai, Maharashtra 400001',
    phone: '+91 98765 43210',
    email: 'admin@greenfieldsociety.com',
    registrationNumber: 'SOC/2020/12345',
    establishedYear: '2020',
    totalFlats: '200',
    totalResidents: '456',
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Parking', 'Security'],
  });

  const [committees, setCommittees] = useState([
    { id: 1, name: 'Managing Committee', members: 7, head: 'Mr. Sharma' },
    { id: 2, name: 'Sports Committee', members: 5, head: 'Ms. Patel' },
    { id: 3, name: 'Cultural Committee', members: 6, head: 'Mr. Gupta' },
  ]);

  const handleSave = () => {
    console.log('Saving society data:', societyData);
    setIsEditing(false);
    // TODO: API call to save data
  };

  const handleInputChange = (field: string, value: string) => {
    setSocietyData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Society Details</h1>
            <p className="text-gray-600 mt-1">Manage your society information and settings</p>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Details
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList>
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="committees">Committees</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Society Information
                </CardTitle>
                <CardDescription>Basic details about your society</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="societyName">Society Name</Label>
                    <Input
                      id="societyName"
                      value={societyData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regNumber">Registration Number</Label>
                    <Input
                      id="regNumber"
                      value={societyData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={societyData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={societyData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={societyData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="established">Established Year</Label>
                    <Input
                      id="established"
                      value={societyData.establishedYear}
                      onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalFlats">Total Flats</Label>
                    <Input
                      id="totalFlats"
                      value={societyData.totalFlats}
                      onChange={(e) => handleInputChange('totalFlats', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="committees">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Committees
                </CardTitle>
                <CardDescription>Manage society committees and their members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {committees.map((committee) => (
                    <div key={committee.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">{committee.name}</h3>
                        <p className="text-sm text-gray-600">
                          {committee.members} members • Head: {committee.head}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Committee
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="amenities">
            <Card>
              <CardHeader>
                <CardTitle>Society Amenities</CardTitle>
                <CardDescription>Manage available facilities and amenities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {societyData.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        {amenity}
                        {isEditing && (
                          <button className="ml-2 hover:text-red-500">×</button>
                        )}
                      </Badge>
                    ))}
                  </div>
                  {isEditing && (
                    <Button variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Amenity
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Flats</p>
                      <p className="text-2xl font-bold">{societyData.totalFlats}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Residents</p>
                      <p className="text-2xl font-bold">{societyData.totalResidents}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Years Active</p>
                      <p className="text-2xl font-bold">{new Date().getFullYear() - parseInt(societyData.establishedYear)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SocietyDetails;
