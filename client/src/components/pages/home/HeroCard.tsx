"use client";

import { useState, ReactNode } from "react"; // 1. Import useState
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react"; // 2. Import Loader2

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
  const router = useRouter();
  // 3. Add the loading state
  const [isLoading, setIsLoading] = useState(false);

  // 4. Create a single click handler
  const handleClick = () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);
    router.push(href);
  };

  return (
    <Card
      onClick={handleClick}
      // 5. Update card's cursor based on loading state
      className={`flex h-full flex-col text-left shadow-xl transition-transform hover:scale-105 ${
        isLoading ? "cursor-wait" : "cursor-pointer"
      }`}
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
      <CardFooter>
        {/* 6. Update the button to show the loading state */}
        <Button
          onClick={handleClick}
          disabled={isLoading}
          size="lg"
          className="group w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              Komeza hano
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
