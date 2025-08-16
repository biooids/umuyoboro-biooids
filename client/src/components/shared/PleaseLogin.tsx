import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
import React from "react";

// STEP 1: Define the props, including an optional callbackUrl
interface PleaseLoginProps {
  message: string;
  callbackUrl?: string;
}

export default function PleaseLogin({
  message,
  callbackUrl = "/", // Default to the homepage if no callbackUrl is provided
}: PleaseLoginProps) {
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
          <CardDescription>{message}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            {/* STEP 2: Make the Link's href dynamic using the prop */}
            <Link
              href={`/auth/login?callbackUrl=${encodeURIComponent(
                callbackUrl
              )}`}
            >
              Proceed to Login
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
