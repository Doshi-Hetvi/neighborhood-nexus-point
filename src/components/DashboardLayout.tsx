
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: 'admin' | 'committee' | 'flat';
}

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar userRole={userRole} />
        <main className="flex-1 overflow-hidden">
          <div className="h-full p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
