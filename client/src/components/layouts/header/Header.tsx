// src/components/layout/Header.tsx
"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import ThemeToggler from "./ThemeToggler";
import { UserAccountNav } from "./UserAccountNav";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/60 shadow-sm backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* === Left Side === */}
        <div className="flex items-center gap-4">
          {user ? (
            <h1 className="text-lg font-semibold text-foreground">
              Welcome back,{" "}
              <span className="text-primary">{user.username}</span>
            </h1>
          ) : (
            <h1 className="text-lg font-semibold text-foreground">
              Welcome to <span className="text-primary">MyApp</span>
            </h1>
          )}
        </div>

        {/* === Right Side === */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggler />
          <UserAccountNav />
        </div>
      </div>
    </header>
  );
}
