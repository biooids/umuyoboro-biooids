"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, BookOpen, PenSquare, Download } from "lucide-react";
import { useAuth } from "@/lib/hooks/useAuth";
import Disclaimer from "@/components/shared/Disclaimer";
import { HeroCard } from "./HeroCard"; // Import our new component

function HeroSection() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/auth");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          Tsinnda neza ikizamini cya provisoire
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Toranya imyitozo ikurikira maze utangire{" "}
          <span className="font-bold text-primary">umuyoboro</span> wo gutsinda
          ikizamini cya provisoire (perime){" "}
          <span className="font-bold text-primary">Kubuntu</span>.
        </p>

        <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* CARDS ARE NOW IN THE CORRECT ORDER AND USE THE REUSABLE COMPONENT */}

          <HeroCard
            href="/exercises"
            icon={<PenSquare className="h-6 w-6 text-primary" />}
            title="Imyitozo"
            description="Hano hari imyitozo igufasha gutekereza vuba wimenyereza neza."
            imageUrl="/exercises.jpeg"
            imageAlt="Illustration for practice exercises"
          />

          <HeroCard
            href="/exams"
            icon={<BookOpen className="h-6 w-6 text-primary" />}
            title="Ikizamini"
            description="Itoze neza kugirango utsinde nk'ikizamini cyemewe."
            imageUrl="/exam.jpeg"
            imageAlt="Illustration for official-style exams"
          />

          <HeroCard
            href="/syllabus"
            icon={<Download className="h-6 w-6 text-primary" />}
            title="Inyoborabumenyi (Syllabus)"
            description="Amasomo yose n'ibibazo by'ingenzi."
            imageUrl="/pdf.jpg"
            imageAlt="Illustration for a downloadable PDF syllabus"
          />
        </div>

        <Disclaimer />
      </div>
    </section>
  );
}

export default HeroSection;
