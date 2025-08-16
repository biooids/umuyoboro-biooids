"use client";

import { useReducer, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  useLockAttemptMutation,
  useStartExamMutation,
  useSubmitExamMutation,
} from "@/lib/features/exams/examApiSlice";
import {
  StartExamApiResponse,
  SubmitExamApiResponse,
} from "@/lib/features/exams/examTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertCircle, Check, X } from "lucide-react";
import { cn, getApiErrorMessage } from "@/lib/utils/utils";
import PleaseLogin from "@/components/shared/PleaseLogin";
import { useAuth } from "@/lib/hooks/useAuth";

// --- Type Definitions ---
type ExamData = StartExamApiResponse["data"]["exam"];
type ResultsData = SubmitExamApiResponse["data"];
type Feedback = { message: string; color: string; emoji: string };

// --- State and Action Types for the Reducer ---
type State = {
  status:
    | "loading"
    | "starting"
    | "in_progress"
    | "submitting"
    | "finished"
    | "error";
  examData: ExamData | null;
  attemptId: string | null;
  startTime: number | null;
  selectedAnswers: Record<string, number>;
  results: ResultsData | null;
  timer: number;
  error: any | null;
};

type Action =
  | { type: "START_SUCCESS"; payload: StartExamApiResponse["data"] }
  | { type: "START_FAILURE"; payload: any }
  | { type: "SELECT_ANSWER"; payload: { questionId: string; index: number } }
  | { type: "TIMER_TICK"; payload: number }
  | { type: "SUBMIT" }
  | { type: "SUBMIT_SUCCESS"; payload: ResultsData }
  | { type: "SUBMIT_FAILURE"; payload: any }
  | { type: "RESET" };

// --- Initial State ---
const initialState: State = {
  status: "loading",
  examData: null,
  attemptId: null,
  startTime: null,
  selectedAnswers: {},
  results: null,
  timer: 0,
  error: null,
};

// --- Reducer function ---
function examReducer(state: State, action: Action): State {
  switch (action.type) {
    case "START_SUCCESS":
      const durationSeconds = action.payload.exam.questions.length * 60;
      return {
        ...initialState,
        status: "in_progress",
        examData: action.payload.exam,
        attemptId: action.payload.attemptId,
        startTime: Date.parse(action.payload.startedAt),
        timer: durationSeconds,
      };
    case "START_FAILURE":
      return { ...state, status: "error", error: action.payload };
    case "SELECT_ANSWER":
      if (state.status !== "in_progress") return state;
      return {
        ...state,
        selectedAnswers: {
          ...state.selectedAnswers,
          [action.payload.questionId]: action.payload.index,
        },
      };
    case "TIMER_TICK":
      return { ...state, timer: action.payload };
    case "SUBMIT":
      return { ...state, status: "submitting" };
    case "SUBMIT_SUCCESS":
      return { ...state, status: "finished", results: action.payload };
    case "SUBMIT_FAILURE":
      return { ...state, status: "in_progress", error: action.payload };
    case "RESET":
      return { ...initialState, status: "starting" };
    default:
      return state;
  }
}

// --- Helper Functions ---
const getFeedbackForScore = (score: number, total: number): Feedback => {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  if (percentage >= 90)
    return {
      message: "Excellent! You're ready!",
      color: "text-green-500",
      emoji: "🏆",
    };
  if (percentage >= 70)
    return {
      message: "Great Job! Almost perfect.",
      color: "text-blue-500",
      emoji: "🎉",
    };
  if (percentage >= 50)
    return {
      message: "Good Effort! Keep practicing.",
      color: "text-yellow-500",
      emoji: "👍",
    };
  return {
    message: "Keep Trying! You'll get there.",
    color: "text-red-500",
    emoji: "💪",
  };
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

// --- Component Definition ---
export default function ExamDetails({ examId }: { examId: string }) {
  const [state, dispatch] = useReducer(examReducer, initialState);
  const {
    status,
    examData,
    attemptId,
    startTime,
    selectedAnswers,
    results,
    timer,
    error,
  } = state;

  const [startExam] = useStartExamMutation();
  const [lockAttempt] = useLockAttemptMutation();
  const [submitExam] = useSubmitExamMutation();
  const { user } = useAuth(); // UPDATED: Get the user from your Redux state via the hook

  if (!user) {
    return (
      <PleaseLogin
        message="You must be logged in to access the exam panel."
        callbackUrl="/exams"
      />
    );
  }

  const startNewExam = useCallback(async () => {
    try {
      const response = await startExam({ examId }).unwrap();
      dispatch({ type: "START_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "START_FAILURE", payload: err });
    }
  }, [startExam, examId]);

  const handleSubmit = useCallback(async () => {
    if (status !== "in_progress") return;

    dispatch({ type: "SUBMIT" });
    try {
      await lockAttempt({ attemptId: attemptId! }).unwrap();
      const response = await submitExam({
        attemptId: attemptId!,
        answers: selectedAnswers,
      }).unwrap();
      dispatch({ type: "SUBMIT_SUCCESS", payload: response.data });
    } catch (err) {
      console.error("Failed to submit exam:", err);
      dispatch({ type: "SUBMIT_FAILURE", payload: err });
    }
  }, [attemptId, selectedAnswers, lockAttempt, submitExam, status]);

  // Create a ref to hold the latest version of handleSubmit
  const handleSubmitRef = useRef(handleSubmit);

  // Keep the ref updated with the latest handleSubmit function on every render
  useEffect(() => {
    handleSubmitRef.current = handleSubmit;
  }, [handleSubmit]);

  // Effect to start the exam initially or on reset
  useEffect(() => {
    if (status === "loading" || status === "starting") {
      startNewExam();
    }
  }, [status, startNewExam]);

  // Effect for the timer logic
  useEffect(() => {
    if (!startTime || !examData || status !== "in_progress") return;

    const totalDurationMillis = examData.questions.length * 60 * 1000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(
        0,
        Math.round((totalDurationMillis - elapsed) / 1000)
      );
      dispatch({ type: "TIMER_TICK", payload: remaining });

      if (remaining <= 0) {
        // Call the up-to-date function from the ref
        handleSubmitRef.current();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
    // This effect now only re-runs when the exam starts, not on every click
  }, [startTime, examData, status]);

  const feedback = results
    ? getFeedbackForScore(results.score, results.totalQuestions)
    : null;
  const isExamActive = status === "in_progress" || status === "submitting";

  if (status === "loading" || status === "starting") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4 text-muted-foreground">Preparing your exam...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <Alert variant="destructive" className="mt-8 max-w-3xl mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{getApiErrorMessage(error)}</AlertDescription>
      </Alert>
    );
  }

  if (!examData) return null;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card>
        <CardHeader className="sticky top-0 bg-background/90 backdrop-blur-sm z-10 border-b">
          <div className="flex justify-between items-center">
            <CardTitle>{examData.title}</CardTitle>
            <div
              className={cn(
                "text-lg font-mono font-semibold",
                timer < 60 && isExamActive && "text-yellow-500",
                timer <= 0 && isExamActive && "text-destructive"
              )}
            >
              {timer <= 0 && isExamActive ? "Time's Up!" : formatTime(timer)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          {status === "finished" && results && feedback && (
            <div
              className={cn(
                "text-center p-6 border rounded-lg",
                feedback.color
                  .replace("text-", "bg-")
                  .replace("-500", "-500/10"),
                feedback.color.replace("text-", "border-")
              )}
            >
              <h2 className={`text-3xl font-bold ${feedback.color}`}>
                {feedback.emoji} {feedback.message}
              </h2>
              <p className="text-4xl font-bold my-4">
                Your Score: {results.score} / {results.totalQuestions}
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => dispatch({ type: "RESET" })}>
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
                        isSelected &&
                          status === "in_progress" &&
                          "ring-2 ring-primary",
                        status === "finished" &&
                          isCorrect &&
                          "bg-green-500/20 border-green-500 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300",
                        status === "finished" &&
                          isWrong &&
                          "bg-red-500/20 border-red-500 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300"
                      )}
                      onClick={() =>
                        dispatch({
                          type: "SELECT_ANSWER",
                          payload: { questionId: q.id, index: optionIndex },
                        })
                      }
                      disabled={status !== "in_progress"}
                    >
                      <div className="flex items-center w-full">
                        <span className="flex-1">{option}</span>
                        {status === "finished" && isCorrect && (
                          <Check className="h-5 w-5 text-green-600 ml-2" />
                        )}
                        {status === "finished" && isWrong && (
                          <X className="h-5 w-5 text-red-600 ml-2" />
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}

          {isExamActive && (
            <div className="pt-6 border-t">
              <Button
                onClick={handleSubmit}
                disabled={
                  status !== "in_progress" ||
                  Object.keys(selectedAnswers).length === 0
                }
                className="w-full"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit Exam"
                )}
              </Button>
              {error && status === "in_progress" && (
                <p className="text-destructive text-sm mt-2 text-center">
                  {getApiErrorMessage(error)}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
