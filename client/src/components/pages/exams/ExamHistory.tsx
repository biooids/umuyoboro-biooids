// src/components/pages/exams/ExamHistory.tsx

"use client";

import Link from "next/link";
import { useGetExamHistoryQuery } from "@/lib/features/exams/examApiSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "@/lib/hooks/useAuth";
import PleaseLogin from "@/components/shared/PleaseLogin";

/**
 * A component that fetches and displays a list of the user's completed exam attempts.
 */
export default function ExamHistory() {
  const { data: response, isLoading, isError } = useGetExamHistoryQuery();
  const { user } = useAuth(); // UPDATED: Get the user from your Redux state via the hook

  if (!user) {
    return (
      <PleaseLogin
        message="You must be logged in to access the exam history."
        callbackUrl="/exams/history"
      />
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load exam history. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  const history = response?.data ?? [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Exam History</h1>
        <p className="text-muted-foreground">
          Review your past performance and learn from your mistakes.
        </p>
      </div>
      {history.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No History Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You haven't completed any exams yet. Go take one!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {history.map((attempt) => (
            <Link
              key={attempt.id}
              href={`/exams/history/${attempt.id}`}
              className="block"
            >
              <Card className="hover:border-primary transition-colors">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{attempt.exam.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Completed on{" "}
                      {format(new Date(attempt.completedAt!), "MMMM d, yyyy")}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-lg">
                      {attempt.score} / {attempt.exam._count.questions}
                    </p>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
