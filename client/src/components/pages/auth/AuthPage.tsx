"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveRight, Loader2 } from "lucide-react";

export default function AuthPageWithSweetWords() {
  // 1. Add router and a loading state
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 2. Create a handler for the click event
  const handleEnter = () => {
    setIsLoading(true); // Show the loader immediately
    router.push("/auth/signup"); // Start navigating
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Urakaza neza kuri UMUYOBORO
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mugihe izindi mbuga wishyura, hano ni{" "}
          <span className="font-bold text-primary">Ubuntu rwose!</span>. Duhora
          twongera ibibazo kugirango utsinde ikizamini cya{" "}
          <span className="font-bold text-primary">provisoire</span>
        </p>

        {/* 3. Update the Button to use the handler and show the loading state */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={handleEnter}
            disabled={isLoading}
            className="group w-full"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <>
                Injira{" "}
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
