// src/components/layouts/header/Header.tsx

"use client";

import Link from "next/link";
import { useAuth } from "@/lib/hooks/useAuth";
import ThemeToggler from "./ThemeToggler";
import { UserAccountNav } from "./UserAccountNav";
import MobileSidebar from "../sidebar/MobileSidebar";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { CircleQuestionMark, Volume2, VolumeX } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { toggleAudio } from "@/lib/features/audio/audioSlice";

/**
 * The main application header. It is responsive and adapts its content
 * based on the user's authentication state.
 */
export default function Header() {
  const { user } = useAuth();
  const { isPlaying } = useAppSelector((state) => state.audio);
  const dispatch = useAppDispatch();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 shadow-sm backdrop-blur-lg p-3">
      <div className="container flex h-16 items-center justify-between">
        {/* === Left Side: App Logo and Mobile Nav Trigger === */}
        <div className="flex items-center gap-4">
          {/* CHANGE: The mobile sidebar trigger is now part of the unified header. */}
          <MobileSidebar />
          {/* CHANGE: The app name/logo is now in the header for a consistent look. */}
          <Link
            href="/"
            className="hidden items-center gap-2 font-semibold md:flex"
          >
            <Logo />{" "}
          </Link>
        </div>

        {/* === Center (Visible for logged-in users on larger screens) === */}
        <div className="hidden flex-1 justify-center md:flex">
          {user && (
            <h1 className="text-lg font-semibold text-foreground">
              Welcome back,{" "}
              <span className="text-primary">{user.username}</span>
            </h1>
          )}
        </div>

        {/* === Right Side: Theme and User Account Buttons === */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch(toggleAudio())}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/help" className="text-primary">
              <CircleQuestionMark className="mr-2 h-4 w-4" />
              baza
            </Link>
          </Button>{" "}
          <ThemeToggler />
          <UserAccountNav />
        </div>
      </div>
    </header>
  );
}
