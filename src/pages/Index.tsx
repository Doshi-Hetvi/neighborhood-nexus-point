
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Users,
  Shield,
  Calendar,
  TrendingUp,
  Bell,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: 'Admin Control',
      description: 'Complete system oversight with user management and society configuration',
      color: 'text-red-500',
    },
    {
      icon: Users,
      title: 'Committee Management',
      description: 'Streamline member services, events, and financial operations',
      color: 'text-purple-500',
    },
    {
      icon: Building2,
      title: 'Resident Services',
      description: 'Easy maintenance requests, announcements, and event bookings',
      color: 'text-green-500',
    },
  ];

  const stats = [
    { label: 'Societies Managed', value: '500+', icon: Building2 },
    { label: 'Happy Residents', value: '50,000+', icon: Users },
    { label: 'Service Requests', value: '1M+', icon: CheckCircle },
    { label: 'Uptime', value: '99.9%', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Building2 className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Society<span className="text-blue-600">Hub</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The complete society management solution that brings residents, committees, and administrators together on one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => navigate('/login')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Powerful Interfaces
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored experiences for every stakeholder in your society ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-full bg-gray-100 mx-auto mb-4`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-blue-500 mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Society Management?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of societies already using SocietyHub to streamline their operations and enhance resident experience.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => navigate('/login')}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">SocietyHub</span>
            </div>
            <p className="text-gray-400">
              Empowering communities through smart management solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
