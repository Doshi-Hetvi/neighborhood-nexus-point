
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Layout,
  Users,
  Building2,
  Calendar,
  Bell,
  Settings,
  FileText,
  TrendingUp,
  User,
  Shield,
  UserCheck,
} from 'lucide-react';

interface AppSidebarProps {
  userRole: 'admin' | 'committee' | 'flat';
}

const adminItems = [
  { title: 'Dashboard', url: '/admin-dashboard', icon: Layout },
  { title: 'Society Details', url: '/admin/society', icon: Building2 },
  { title: 'User Management', url: '/admin/users', icon: Users },
  { title: 'System Settings', url: '/admin/settings', icon: Settings },
];

const committeeItems = [
  { title: 'Dashboard', url: '/committee-dashboard', icon: Layout },
  { title: 'Members', url: '/committee/members', icon: Users },
  { title: 'Rental Flats', url: '/committee/rentals', icon: Building2 },
  { title: 'Events', url: '/committee/events', icon: Calendar },
  { title: 'Festivals', url: '/committee/festivals', icon: Bell },
  { title: 'Water Bills', url: '/committee/water-bills', icon: FileText },
  { title: 'Financial', url: '/committee/financial', icon: TrendingUp },
  { title: 'Maintenance', url: '/committee/maintenance', icon: Settings },
];

const flatItems = [
  { title: 'Dashboard', url: '/flat-dashboard', icon: Layout },
  { title: 'Maintenance', url: '/flat/maintenance', icon: Settings },
  { title: 'Announcements', url: '/flat/announcements', icon: Bell },
  { title: 'Event Booking', url: '/flat/booking', icon: Calendar },
];

export function AppSidebar({ userRole }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isCollapsed = state === 'collapsed';

  const items = userRole === 'admin' ? adminItems : 
               userRole === 'committee' ? committeeItems : flatItems;

  const getRoleInfo = () => {
    switch (userRole) {
      case 'admin':
        return { label: 'Admin Panel', icon: Shield, color: 'text-red-500' };
      case 'committee':
        return { label: 'Committee', icon: UserCheck, color: 'text-purple-500' };
      case 'flat':
        return { label: 'Resident', icon: User, color: 'text-green-500' };
    }
  };

  const roleInfo = getRoleInfo();

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Building2 className="h-8 w-8 text-blue-600" />
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-lg">SocietyHub</h2>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <roleInfo.icon className={`h-3 w-3 ${roleInfo.color}`} />
                <span>{roleInfo.label}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t">
        <SidebarTrigger className="w-full" />
      </div>
    </Sidebar>
  );
}
