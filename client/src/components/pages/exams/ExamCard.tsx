// src/components/pages/exams/ExamCard.tsx

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface ExamCardProps {
  exam: {
    id: string;
    examNumber: number;
    title: string;
    isFree: boolean;
  };
}

/**
 * A reusable card component to display summary information for a single exam.
 */
export default function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card className="w-full sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <span>{exam.title}</span>
        </CardTitle>
        <CardDescription>Exam Number: {exam.examNumber}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* The `asChild` prop allows the Button to render the Link component,
            combining the button's styles with the link's navigation behavior. */}
        <Button asChild className="w-full">
          <Link href={`/exams/${exam.id}`}>Start Exam</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
