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
import { LogOut, User as UserIcon } from "lucide-react"; // CHANGE: Import User icon
import { useLogoutMutation } from "@/lib/features/auth/authApiSlice";
import { useAuth } from "@/lib/hooks/useAuth";

const getInitials = (username: string): string => {
  return username.slice(0, 2).toUpperCase();
};

/**
 * A component that displays a "Log In" button for guests or a user avatar
 * with a dropdown menu for authenticated users.
 */
export function UserAccountNav() {
  const { user } = useAuth();
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  if (!user) {
    return (
      <Button asChild>
        <Link href="/auth">Log In</Link>
      </Button>
    );
  }

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
            <p className="text-xs leading-none text-muted-foreground">
              {user.phone}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* CHANGE: Add a link to the user's profile page. */}
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/profile">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
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
