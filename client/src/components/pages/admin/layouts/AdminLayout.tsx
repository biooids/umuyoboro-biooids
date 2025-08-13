"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import AdminSidebar from "./AdminSidebar";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";
import PleaseLogin from "@/components/shared/PleaseLogin";
import { Role } from "@/types/role.enum";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Check if the user is a SUPER_ADMIN or a DEVELOPER
  const hasAdminPermission =
    user?.role === Role.SUPER_ADMIN || user?.role === Role.DEVELOPER;

  if (!hasAdminPermission) {
    return (
      <div className="container py-8">
        <PleaseLogin message="You do not have permission to access the admin panel." />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <AdminSidebar
        userRole={user.role}
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
      />
      <div className="flex flex-col flex-1 sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button
            size="icon"
            variant="outline"
            className="sm:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
      </div>
    </div>
  );
}
