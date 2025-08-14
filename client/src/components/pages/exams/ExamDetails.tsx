// src/components/pages/exams/ExamDetails.tsx

"use client";

import { useState, useEffect, useCallback } from "react"; // CHANGE: Import useCallback
import {
  useStartExamMutation,
  useSubmitExamMutation,
} from "@/lib/features/exams/examApiSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertCircle, Check, X } from "lucide-react";
import { cn, getApiErrorMessage } from "@/lib/utils/utils";
import {
  StartExamApiResponse,
  SubmitExamApiResponse,
} from "@/lib/features/exams/examTypes";
import Link from "next/link";
import { useRouter } from "next/navigation"; // CHANGE: Import useRouter for retakes

type ExamData = StartExamApiResponse["data"]["exam"];
type ResultsData = SubmitExamApiResponse["data"];

interface ExamDetailsProps {
  examId: string;
}

/**
 * A component that handles the entire exam-taking process:
 * starting, answering questions, timing, submitting, and viewing results.
 */
export default function ExamDetails({ examId }: ExamDetailsProps) {
  const router = useRouter(); // CHANGE: Initialize router for retakes
  const [startExam, { isLoading: isStarting, error: startError }] =
    useStartExamMutation();
  const [submitExam, { isLoading: isSubmitting, error: submitError }] =
    useSubmitExamMutation();

  // Component state management
  const [examData, setExamData] = useState<ExamData | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [results, setResults] = useState<ResultsData | null>(null);
  const [timer, setTimer] = useState(0);

  // Effect to start the exam when the component mounts.
  useEffect(() => {
    const beginExam = async () => {
      try {
        const response = await startExam({ examId }).unwrap();
        setExamData(response.data.exam);
        setAttemptId(response.data.attemptId);
        // Set the timer based on 1 minute per question.
        setTimer(response.data.exam.questions.length * 60);
      } catch (err) {
        console.error("Failed to start exam:", err);
      }
    };
    if (examId) {
      beginExam();
    }
  }, [startExam, examId]);

  // CHANGE: Wrap handleSubmit in useCallback to memoize the function.
  // This is a good practice for functions passed as dependencies to other hooks (like useEffect).
  const handleSubmit = useCallback(async () => {
    if (!attemptId || results) return; // Prevent submission if no attempt ID or already submitted
    try {
      const response = await submitExam({
        attemptId,
        answers: selectedAnswers,
      }).unwrap();
      setResults(response.data);
      setTimer(0); // Stop the timer
    } catch (err) {
      console.error("Failed to submit exam:", err);
    }
  }, [attemptId, selectedAnswers, submitExam, results]);

  // Effect to manage the countdown timer.
  useEffect(() => {
    if (timer > 0 && !results) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && examData && !results) {
      // Auto-submit the exam when the timer runs out.
      handleSubmit();
    }
  }, [timer, results, examData, handleSubmit]);

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    // Don't allow changing answers after the exam is submitted.
    if (results) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  // CHANGE: Add a function to handle retaking the exam.
  const handleReset = () => {
    // A simple page reload will trigger the `startExam` useEffect again,
    // creating a fresh attempt.
    router.refresh();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  if (isStarting) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-4">Preparing your exam...</p>
      </div>
    );
  }

  if (startError) {
    return (
      <Alert variant="destructive" className="mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{getApiErrorMessage(startError)}</AlertDescription>
      </Alert>
    );
  }

  if (!examData) {
    return null; // Render nothing if the exam data hasn't loaded yet.
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card>
        <CardHeader className="sticky top-0 bg-background/90 backdrop-blur-sm z-10 border-b">
          <div className="flex justify-between items-center">
            <CardTitle>{examData.title}</CardTitle>
            <div className="text-lg font-mono font-semibold">
              {formatTime(timer)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          {results && (
            <div className="text-center p-6 border-b">
              <h2 className="text-2xl font-bold">Exam Complete!</h2>
              <p className="text-4xl font-bold my-4">
                Your Score: {results.score} / {results.totalQuestions}
              </p>
              <div className="flex justify-center gap-4">
                {/* CHANGE: Enable the "Try Again" button */}
                <Button onClick={handleReset}>Try Again</Button>
                <Button variant="outline" asChild>
                  <Link href="/exams">Back to Exams</Link>
                </Button>
              </div>
            </div>
          )}

          {examData.questions.map((q, index) => (
            <div key={q.id}>
              <p className="font-semibold mb-4">
                {index + 1}. {q.text}
              </p>
              <div className="space-y-2">
                {q.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[q.id] === optionIndex;
                  const isCorrect =
                    results?.correctAnswers[q.id] === optionIndex;
                  const isWrong = isSelected && !isCorrect;

                  return (
                    <Button
                      key={optionIndex}
                      variant="outline"
                      className={cn(
                        "w-full justify-start h-auto py-3 whitespace-normal text-left",
                        isSelected && !results && "ring-2 ring-primary",
                        results &&
                          isCorrect &&
                          "bg-green-500/20 border-green-500 text-green-800 dark:text-green-300 hover:bg-green-500/30",
                        results &&
                          isWrong &&
                          "bg-red-500/20 border-red-500 text-red-800 dark:text-red-300 hover:bg-red-500/30"
                      )}
                      onClick={() => handleSelectAnswer(q.id, optionIndex)}
                      disabled={!!results}
                    >
                      <div className="flex items-center w-full">
                        <span className="flex-1">{option}</span>
                        {results && isCorrect && (
                          <Check className="h-5 w-5 text-green-600 ml-2" />
                        )}
                        {results && isWrong && (
                          <X className="h-5 w-5 text-red-600 ml-2" />
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}

          {!results && (
            <div className="pt-6 border-t">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit Exam"
                )}
              </Button>
              {submitError && (
                <p className="text-destructive text-sm mt-2">
                  {getApiErrorMessage(submitError)}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
