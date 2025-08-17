import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function AuthPageWithSweetWords() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-md">
        {/* App Name / Logo */}
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Urakaza neza kuri UMUYOBORO
        </h1>

        {/* Your 'sweet words' go here, polished for impact */}
        <p className="mt-4 text-lg text-muted-foreground">
          Mugihe izindi mbuga wishyura, hano ni{" "}
          <span className="font-bold text-primary">Ubuntu rwose!</span>. We're
          Duhora twongera ibibazo kugirango utsinde ikizamini cya{" "}
          <span className="font-bold text-primary">provisoire</span>
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="group w-full">
            <Link href="/auth/signup">
              Injira{" "}
              <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
