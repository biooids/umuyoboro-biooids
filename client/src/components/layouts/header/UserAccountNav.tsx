// src/components/layouts/header/UserAccountNav.tsx
"use client";

import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useLogoutMutation } from "@/lib/features/auth/authApiSlice";
import { useAuth } from "@/lib/hooks/useAuth";

const getInitials = (username: string | undefined): string => {
  if (!username) return "U";
  return username.slice(0, 2).toUpperCase();
};

export function UserAccountNav() {
  const { user } = useAuth();
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      // The auth state will be cleared automatically by the onQueryStarted logic
      // in authApiSlice. No need to call signOut.
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // If there's no user, show a simple Log In button
  if (!user) {
    return (
      <Button asChild>
        <Link href="/auth/login">Log In</Link>
      </Button>
    );
  }

  // If there is a user, show the avatar and dropdown menu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{getInitials(user.username)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">@{user.username}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Links to Profile and Settings have been removed for simplicity */}
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
