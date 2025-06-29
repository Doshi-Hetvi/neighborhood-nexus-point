
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CommitteeDashboard from "./pages/CommitteeDashboard";
import FlatDashboard from "./pages/FlatDashboard";
import SocietyDetails from "./pages/SocietyDetails";
import UserManagement from "./pages/UserManagement";
import SystemSettings from "./pages/SystemSettings";
import CommitteeEvents from "./pages/CommitteeEvents";
import CommitteeFestivals from "./pages/CommitteeFestivals";
import CommitteeFinancial from "./pages/CommitteeFinancial";
import CommitteeMaintenance from "./pages/CommitteeMaintenance";
import CommitteeMembers from "./pages/CommitteeMembers";
import CommitteeRentals from "./pages/CommitteeRentals";
import CommitteeWaterBills from "./pages/CommitteeWaterBills";
import FlatBooking from "./pages/FlatBooking";
import FlatAnnouncements from "./pages/FlatAnnouncements";
import FlatMaintenance from "./pages/FlatMaintenance";
import FlatMemberDetail from "./pages/FlatMemberDetail";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/society" element={<SocietyDetails />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/settings" element={<SystemSettings />} />
          <Route path="/committee-dashboard" element={<CommitteeDashboard />} />
          <Route path="/committee/members" element={<CommitteeMembers />} />
          <Route path="/committee/rentals" element={<CommitteeRentals />} />
          <Route path="/committee/events" element={<CommitteeEvents />} />
          <Route path="/committee/festivals" element={<CommitteeFestivals />} />
          <Route path="/committee/water-bills" element={<CommitteeWaterBills />} />
          <Route path="/committee/financial" element={<CommitteeFinancial />} />
          <Route path="/committee/maintenance" element={<CommitteeMaintenance />} />
          <Route path="/flat-dashboard" element={<FlatDashboard />} />
          <Route path="/flat/booking" element={<FlatBooking />} />
          <Route path="/flat/announcements" element={<FlatAnnouncements />} />
          <Route path="/flat/maintenance" element={<FlatMaintenance />} />
          <Route path="/flat/member-detail" element={<FlatMemberDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
