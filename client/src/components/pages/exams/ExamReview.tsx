// src/components/pages/exams/ExamReview.tsx

"use client";

import { useGetExamReviewQuery } from "@/lib/features/exams/examApiSlice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Check, X } from "lucide-react";
import { getApiErrorMessage } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useAuth } from "@/lib/hooks/useAuth";
import PleaseLogin from "@/components/shared/PleaseLogin";

interface ExamReviewProps {
  attemptId: string;
}

/**
 * A component that displays a detailed, question-by-question review
 * of a completed exam attempt.
 */
export default function ExamReview({ attemptId }: ExamReviewProps) {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useGetExamReviewQuery({ attemptId });

  const { user } = useAuth(); // UPDATED: Get the user from your Redux state via the hook

  if (!user) {
    return (
      <PleaseLogin
        message="You must be logged in to access the exam hist review panel."
        callbackUrl="/exams/history"
      />
    );
  }

  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-8" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent className="space-y-6">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{getApiErrorMessage(error)}</AlertDescription>
      </Alert>
    );
  }

  const reviewData = response!.data;
  const { attempt, exam } = reviewData;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Reviewing: {exam.title}
        </h1>
        <p className="text-muted-foreground">
          Completed on {format(new Date(attempt.completedAt!), "MMMM d, yyyy")}
        </p>
        <p className="text-2xl font-bold mt-2">
          Final Score: {attempt.score} / {exam.questions.length}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Question Breakdown</CardTitle>
          <CardDescription>
            Review each question to see your answer and the correct answer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {exam.questions.map((q, index) => {
            const userAnswerIndex = attempt.answers[q.id];
            const isCorrect = userAnswerIndex === q.correctAnswerIndex;

            return (
              <div key={q.id} className="border-t pt-6">
                <p className="font-semibold mb-4">
                  {index + 1}. {q.text}
                </p>
                <div className="space-y-2">
                  {q.options.map((option, optionIndex) => {
                    const isUserAnswer = userAnswerIndex === optionIndex;
                    const isCorrectAnswer =
                      q.correctAnswerIndex === optionIndex;

                    return (
                      <div
                        key={optionIndex}
                        className={cn(
                          "flex items-center w-full justify-start h-auto p-3 rounded-md border",
                          // Style for correct answer
                          isCorrectAnswer && "bg-green-500/20 border-green-500",
                          // Style for user's wrong answer
                          isUserAnswer &&
                            !isCorrectAnswer &&
                            "bg-red-500/20 border-red-500"
                        )}
                      >
                        <span className="flex-1 text-left">{option}</span>
                        {/* Add an icon to clearly mark the user's choice */}
                        {isUserAnswer &&
                          (isCorrect ? (
                            <Check className="h-5 w-5 text-green-600 ml-2" />
                          ) : (
                            <X className="h-5 w-5 text-red-600 ml-2" />
                          ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
