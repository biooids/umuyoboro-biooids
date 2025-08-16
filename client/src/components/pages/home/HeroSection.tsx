"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. Import the router
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, PenSquare, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/hooks/useAuth";

function HeroSection() {
  const { user } = useAuth();
  const router = useRouter(); // 2. Get the router instance

  // 3. Add a useEffect to handle the redirect
  useEffect(() => {
    // When the user state is confirmed to be null (not logged in),
    // redirect to the login page.
    if (user === null) {
      router.push("/auth/signup");
    }
  }, [user, router]);

  // 4. While the user state is being checked, show a loading indicator.
  // This prevents the page from flashing before the redirect happens.
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // 5. If the user exists, render the full hero section content.
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          Tsinnda neza ikizamini cya perime
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Toranya imyitozo ikurikira maze utagingire{" "}
          <span className="font-bold text-primary">umuyoboro</span> wogutsinda
          ikizamini cya perime. Kanda kumyimitozo cyangwa ukanda kukizamin gisa
          neza nuko babaza mukizamini cya perime,{" "}
          <span className="font-bold text-primary">KUBUNTU</span>.
        </p>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Exams Card */}
          <Card className="flex transform flex-col text-left transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Ikizamini</CardTitle>
              <CardDescription>
                Itoze neza kugirango utsinde nkikizamini cyemewe.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Kora imyitozo isa nkikizamini cya perime, usubizwe byigihe,
                byuzuye kugirango urebe ko witeguye ikizamin cyemewe cya perime.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="group w-full">
                <Link href="/exams">
                  View All Exams
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Exercises Card */}
          <Card className="flex transform flex-col text-left transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <PenSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Imyitozo</CardTitle>
              <CardDescription>
                Hano imyitozo igufasha gurekereza vuba wimenyereza neza.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Rangiza umwitozo kumunota witoza gukora icyizamini cya perime
                wiyizeye byigihe, byuzuye kugirango urebe ko witeguye ikizamin
                cyemewe cya perime.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="group w-full">
                <Link href="/exercises">
                  Start Practicing
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
