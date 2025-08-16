"use client";

import React from "react";
import { useGetAllExercisesQuery } from "@/lib/features/exercises/exerciseApiSlice";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ExerciseCard from "./ExerciseCard";

/**
 * A page component that displays a list of all available practice exercises.
 * It uses RTK Query to handle fetching, loading, and error states.
 */
export default function Exercises() {
  const { data: response, isLoading, isError } = useGetAllExercisesQuery();

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

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Byanze, ugerageza mukanya </AlertDescription>
      </Alert>
    );
  }

  const exercises = response?.data ?? [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Kora imyitozo</h1>
        <p className="text-muted-foreground">
          Toranya imyitozo utangire ukore.
        </p>
      </div>
      {exercises.length === 0 ? (
        <p>No exercises are available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
}
