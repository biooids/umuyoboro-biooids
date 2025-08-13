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
        <Button asChild className="w-full">
          <Link href={`/exams/${exam.id}`}>Start Exam</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
