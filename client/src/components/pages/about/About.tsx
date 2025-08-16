// src/app/(app)/about/page.tsx

import {
  Car,
  Target,
  BookOpen,
  Sparkles,
  Medal,
  Users,
  Mail,
  Phone,
  Linkedin,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

// A custom component for social/contact links to keep the code clean
const ContactLink = ({ href, icon: Icon, children }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
  >
    <Icon className="h-4 w-4" />
    {children}
  </a>
);

// Define a type for your features for better maintainability
type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Array of key features
const features: Feature[] = [
  {
    icon: Medal,
    title: "Ibibazo biva mubibizamini byakozwe",
    description:
      "Our timed exams mimic the official test format to get you comfortable with the pressure and pace.",
  },
  {
    icon: Target,
    title: "Imyotozo yatoranyijwe neza",
    description:
      "Focus on specific categories like road signs, traffic rules, or right-of-way to strengthen your weak spots.",
  },
  {
    icon: Sparkles,
    title: "Bona amanota ako kanya",
    description:
      "Understand why an answer is correct with detailed explanations and helpful hints for tricky questions.",
  },
  {
    icon: BookOpen,
    title: "Ibibazo bihora ari bishya, duhora twongera",
    description:
      "Our questions are constantly reviewed and updated to reflect the latest driving regulations in Rwanda.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-5xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <section className="text-center">
          <div className="p-5">
            <Logo />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Tsinda Ikizamini cyawe cyo Gutwara ufite Icyizere{" "}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Murakaza neza! Aha tugufasha gukora neza ikizamini cya perime, wiga
            amategeko yo gutwara ufite icyizere wizeye no gutsinda ikizamini
            cyogutwara. iki ntago arikizamini cyanyacyo, aha tugufasha gukora
            icyanyacyo.
          </p>
        </section>

        {/* --- Features Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Kuberiki wakorana natwe?{" "}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Developer Section --- */}
        <section>
          <Card className="overflow-hidden border-primary/20">
            <CardHeader className="bg-muted/50 p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border">
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                    B
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">
                    Developed by Biooids
                  </CardTitle>
                  <CardDescription>
                    Innovative Solutions for Modern Learning.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-muted-foreground">
                Biooids is a technology company dedicated to creating intuitive
                and effective digital tools. We believe in leveraging technology
                to simplify complex challenges, like helping you confidently
                pass your driving test.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* --- CORRECTION APPLIED HERE --- */}
                <ContactLink href="https://www.biooids.com" icon={Globe}>
                  biooids.com
                </ContactLink>
                <ContactLink href="mailto:intellbiooid@gmail.com" icon={Mail}>
                  intellbiooid@gmail.com
                </ContactLink>
                <ContactLink href="https://wa.me/250790931024" icon={Phone}>
                  +250 790 931 024
                </ContactLink>
                <ContactLink href="https://x.com/biooids" icon={Users}>
                  @biooids on X
                </ContactLink>
                <ContactLink
                  href="https://www.linkedin.com/in/hwapyong-maniragaba-edouard-415961344/"
                  icon={Linkedin}
                >
                  Hwapyong Maniragaba on LinkedIn
                </ContactLink>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* --- Call to Action Section --- */}
        <section className="text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Your journey to getting your driver's license starts now. Jump into
            a free practice exam and see where you stand!
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/exams">Start a Practice Exam</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
