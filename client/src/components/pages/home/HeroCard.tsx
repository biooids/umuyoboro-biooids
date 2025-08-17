"use client"; // 1. This component now needs to be a Client Component for the onClick event

import { useRouter } from "next/navigation"; // 2. Import the router hook
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter, // 3. Re-import CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // 4. Re-import Button
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

interface HeroCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function HeroCard({
  href,
  icon,
  title,
  description,
  imageUrl,
  imageAlt,
}: HeroCardProps) {
  const router = useRouter(); // 5. Get the router instance

  return (
    // 6. The Card itself now handles the click event
    <Card
      onClick={() => router.push(href)}
      className="flex h-full cursor-pointer flex-col text-left shadow-xl transition-transform hover:scale-105"
    >
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center p-4">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={200}
          height={150}
          className="rounded-md object-cover"
        />
      </CardContent>
      {/* 7. The visible button is back in the footer */}
      <CardFooter>
        <Button asChild size="lg" className="group w-full">
          <Link href={href}>
            Komeza hano
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
