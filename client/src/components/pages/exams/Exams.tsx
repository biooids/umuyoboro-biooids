// src/components/pages/exams/Exams.tsx

"use client";

import React from "react";
import { useGetAllExamsQuery } from "@/lib/features/exams/examApiSlice";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ExamCard from "./ExamCard";

/**
 * A page component that displays a list of all available exams.
 * It handles loading and error states for the API request.
 */
export default function Exams() {
  // Use the RTK Query hook to fetch the list of exams.
  // It automatically handles caching, loading, and error states.
  const { data: response, isLoading, isError } = useGetAllExamsQuery();

  // Display a skeleton loader while the data is being fetched.
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="w-full sm:max-w-sm">
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Display an error message if the API call fails.
  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load exams. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  const exams = response?.data ?? [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Available Exams</h1>
        <p className="text-muted-foreground">Choose an exam to begin.</p>
      </div>
      {exams.length === 0 ? (
        <p>No exams are available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            // Render a separate card component for each exam.
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      )}
    </div>
  );
}
