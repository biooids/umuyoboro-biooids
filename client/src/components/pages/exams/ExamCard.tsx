"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, Loader2 } from "lucide-react";

interface ExamCardProps {
  exam: {
    id: string;
    examNumber: number;
    title: string;
    isFree: boolean;
  };
}

export default function ExamCard({ exam }: ExamCardProps) {
  // 1. Add router and loading state
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 2. Create a click handler
  const handleClick = () => {
    setIsLoading(true);
    router.push(`/exams/${exam.id}`);
  };

  return (
    <Card className="w-full sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <span>{exam.title}</span>
        </CardTitle>
        <CardDescription>
          Numero y'ikizamini : {exam.examNumber}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* 3. Update the button to use the handler and show loading state */}
        <Button onClick={handleClick} disabled={isLoading} className="w-full">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Tangira ikizamini"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
