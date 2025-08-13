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
import { ClipboardList } from "lucide-react";

interface ExerciseCardProps {
  exercise: {
    id: string;
    exerciseNumber: number;
    title: string;
    isFree: boolean;
  };
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card className="w-full sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <ClipboardList className="h-6 w-6 text-primary" />
          <span>{exercise.title}</span>
        </CardTitle>
        <CardDescription>
          Exercise Number: {exercise.exerciseNumber}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={`/exercises/${exercise.id}`}>Start Exercise</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
