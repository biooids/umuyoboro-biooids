"use client"; // This component now needs to be a client component

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { playAudio } from "@/lib/features/audio/audioSlice";

export default function AuthPageWithSweetWords() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleEnter = () => {
    // Dispatch the action to play the audio
    dispatch(playAudio());
    // Navigate to the signup page
    router.push("/auth/signup");
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
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={handleEnter} className="group w-full">
            Injira{" "}
            <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
