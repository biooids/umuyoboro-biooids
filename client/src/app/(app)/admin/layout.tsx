"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/hooks/useAuth"; // UPDATED: Using your custom useAuth hook
import { Role } from "@/types/role.enum"; // UPDATED: Using your app's Role enum
import AdminSidebar from "@/components/pages/admin/layouts/AdminSidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PanelLeft, ShieldAlert, LogIn } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth(); // UPDATED: Get the user from your Redux state via the hook
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // The AuthInitializer component already handles the initial loading state for the whole app,
  // so we just need to check if the user object exists.

  // 1. Handle users who are not logged in at all.
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <LogIn className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4 text-2xl">
              Authentication Required
            </CardTitle>
            <CardDescription>
              You must be logged in to access the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/auth/login?callbackUrl=/admin">
                Proceed to Login
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 2. Handle logged-in users who are not authorized.
  const isAuthorized =
    user.role === Role.SUPER_ADMIN || user.role === Role.DEVELOPER;

  if (!isAuthorized) {
    return (
      <div className="flex h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <ShieldAlert className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="mt-4 text-2xl">Access Denied</CardTitle>
            <CardDescription>
              Your current role ({user.role}) does not have permission to access
              the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link href="/">Go to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 3. If the user is authorized, show the admin layout.
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <AdminSidebar
        userRole={user.role}
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
      />
      <div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
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
