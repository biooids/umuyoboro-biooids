//src/components/layouts/AuthInitializer.tsx
"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { setCredentials } from "@/lib/features/auth/authSlice";
import storage from "@/lib/utils/storage"; // <-- IMPORT our new DIY storage
import { Loader2 } from "lucide-react";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const rehydrateAuth = async () => {
      try {
        const token = await storage.getItem("authToken");
        if (token) {
          // If we found a token, put it back in the Redux store
          dispatch(setCredentials({ token }));
        }
      } catch (error) {
        console.error("Failed to rehydrate auth state:", error);
      } finally {
        // No matter what, we're done loading
        setIsLoading(false);
      }
    };

    rehydrateAuth();
  }, [dispatch]);

  // While we're checking for the token, show a loading screen.
  // This prevents the race condition and stops the logout-on-reload issue.
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
