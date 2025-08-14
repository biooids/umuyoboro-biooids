// src/components/HeroSection.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, PenSquare } from "lucide-react";

/**
 * A modern hero section featuring two distinct cards that serve as the
 * primary calls to action for the application's main features.
 */
function HeroSection() {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
        {/* --- Main Heading and Subtitle --- */}
        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          Master Your Driving Theory
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Choose a path below to begin your journey. Practice with targeted
          exercises or test your knowledge with full-length mock exams.
        </p>

        {/* --- Cards Container --- */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* === Exams Card === */}
          <Card className="flex transform flex-col text-left transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Mock Exams</CardTitle>
              <CardDescription>
                Simulate the official test environment.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Take timed, full-length exams to assess your readiness and
                identify areas for improvement under pressure.
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

          {/* === Exercises Card === */}
          <Card className="flex transform flex-col text-left transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <PenSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Practice Exercises
              </CardTitle>
              <CardDescription>
                Learn and review topics one by one.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Focus on specific categories with instant feedback and hints to
                help you master every concept at your own pace.
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
