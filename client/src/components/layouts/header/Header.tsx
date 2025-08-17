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

export default function Header() {
  const { user } = useAuth();
  const { isPlaying } = useAppSelector((state) => state.audio);
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 shadow-sm backdrop-blur-lg p-3">
      <div className="container flex h-16 items-center justify-between">
        {/* === Left Side === */}
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <Link
            href="/"
            className="hidden items-center gap-2 font-semibold md:flex"
          >
            <Logo />
          </Link>
        </div>

        {/* === Center === */}
        <div className="hidden flex-1 justify-center md:flex">
          {user && (
            <h1 className="text-lg font-semibold text-foreground">
              Welcome back,{" "}
              <span className="text-primary">{user.username}</span>
            </h1>
          )}
        </div>

        {/* === Right Side: Actions & User Menu === */}
        {/* Adjusted gap for better mobile spacing */}
        <div className="flex items-center gap-1">
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

          {/* --- THIS IS THE FIX --- */}
          {/* This button is now responsive. It's an icon on mobile and has text on larger screens. */}
          <Button variant="ghost" size="sm" asChild className="px-2 sm:px-3">
            <Link href="/help" className="text-primary">
              <CircleQuestionMark className="h-5 w-5" />
              {/* This span hides the text on extra-small screens */}
              <span className="hidden sm:inline sm:ml-2">baza</span>
            </Link>
          </Button>

          <ThemeToggler />
          <UserAccountNav />
        </div>
      </div>
    </header>
  );
}
