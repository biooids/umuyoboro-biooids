// src/components/pages/exams/ExamDetails.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
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

type ExamData = StartExamApiResponse["data"]["exam"];
type ResultsData = SubmitExamApiResponse["data"];
// NEW: A type for our dynamic feedback object.
type Feedback = {
  message: string;
  color: string; // Tailwind CSS color class (e.g., 'text-green-500')
  emoji: string;
};

interface ExamDetailsProps {
  examId: string;
}

// NEW: A helper function to determine feedback based on score percentage.
const getFeedbackForScore = (score: number, total: number): Feedback => {
  if (total === 0)
    return {
      message: "No questions?",
      color: "text-muted-foreground",
      emoji: "🤔",
    };
  const percentage = (score / total) * 100;

  if (percentage >= 90) {
    return {
      message: "Excellent! You're ready!",
      color: "text-green-500",
      emoji: "🏆",
    };
  }
  if (percentage >= 70) {
    return {
      message: "Great Job! Almost perfect.",
      color: "text-blue-500",
      emoji: "🎉",
    };
  }
  if (percentage >= 50) {
    return {
      message: "Good Effort! Keep practicing.",
      color: "text-yellow-500",
      emoji: "👍",
    };
  }
  return {
    message: "Keep Trying! You'll get there.",
    color: "text-red-500",
    emoji: "💪",
  };
};

export default function ExamDetails({ examId }: ExamDetailsProps) {
  const [startExam, { isLoading: isStarting, error: startError }] =
    useStartExamMutation();
  const [submitExam, { isLoading: isSubmitting, error: submitError }] =
    useSubmitExamMutation();

  // --- Component State Management ---
  const [examData, setExamData] = useState<ExamData | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [results, setResults] = useState<ResultsData | null>(null);
  const [timer, setTimer] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  // NEW: State for the dynamic feedback and for the "Try Again" loading state.
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  const startNewExam = useCallback(async () => {
    try {
      const response = await startExam({ examId }).unwrap();
      setExamData(response.data.exam);
      setAttemptId(response.data.attemptId);
      setTimer(response.data.exam.questions.length * 60);
    } catch (err) {
      console.error("Failed to start exam:", err);
    }
  }, [startExam, examId]);

  useEffect(() => {
    startNewExam();
  }, [startNewExam]);

  const handleSubmit = useCallback(async () => {
    if (!attemptId || isSubmitting || results) return;
    try {
      const response = await submitExam({
        attemptId,
        answers: selectedAnswers,
      }).unwrap();
      const resultData = response.data;
      setResults(resultData);
      // NEW: Set the dynamic feedback based on the score.
      setFeedback(
        getFeedbackForScore(resultData.score, resultData.totalQuestions)
      );
    } catch (err) {
      console.error("Failed to submit exam:", err);
    }
  }, [attemptId, selectedAnswers, submitExam, isSubmitting, results]);

  // --- SEPARATED EFFECTS for robust timer and submission logic ---
  useEffect(() => {
    if (!examData || results) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examData, results]);

  useEffect(() => {
    if (isTimeUp && !results) {
      handleSubmit();
    }
  }, [isTimeUp, results, handleSubmit]);

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (results || isTimeUp) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  // CHANGE: The "Try Again" button now has fully working logic.
  const handleReset = async () => {
    setIsResetting(true);
    // Reset all state variables to their initial values.
    setExamData(null);
    setAttemptId(null);
    setSelectedAnswers({});
    setResults(null);
    setTimer(0);
    setIsTimeUp(false);
    setFeedback(null);
    // Fetch a completely new exam attempt.
    await startNewExam();
    setIsResetting(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  // --- Render Logic ---
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
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card>
        <CardHeader className="sticky top-0 bg-background/90 backdrop-blur-sm z-10 border-b">
          <div className="flex justify-between items-center">
            <CardTitle>{examData.title}</CardTitle>
            <div
              className={cn(
                "text-lg font-mono font-semibold",
                isTimeUp && "text-destructive"
              )}
            >
              {isTimeUp ? "Time's Up!" : formatTime(timer)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          {/* NEW: Completely redesigned results card with dynamic feedback */}
          {results && feedback && (
            <div
              className={cn(
                "text-center p-6 border-b rounded-lg",
                feedback.color
                  .replace("text-", "bg-")
                  .replace("-500", "-500/10")
              )}
            >
              <h2 className={`text-3xl font-bold ${feedback.color}`}>
                {feedback.emoji} {feedback.message}
              </h2>
              <p className="text-4xl font-bold my-4">
                Your Score: {results.score} / {results.totalQuestions}
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={handleReset} disabled={isResetting}>
                  {isResetting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Try Again
                </Button>
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
                      disabled={!!results || isTimeUp}
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
                disabled={isSubmitting || isTimeUp}
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
