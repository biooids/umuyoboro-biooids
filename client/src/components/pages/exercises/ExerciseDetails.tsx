"use client";

import { useReducer, useEffect, useCallback } from "react";
import Link from "next/link";
import { useGetExerciseByIdQuery } from "@/lib/features/exercises/exerciseApiSlice";
import { ExerciseQuestion } from "@/lib/features/exercises/exerciseTypes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Loader2,
  AlertCircle,
  Lightbulb,
  Check,
  X,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn, getApiErrorMessage } from "@/lib/utils/utils";

// --- Type Definitions ---
type AnswerInfo = {
  selected: number;
  isCorrect: boolean;
  correctAnswer: number;
};
type Feedback = { message: string; color: string; emoji: string };

// --- State and Action types for the reducer ---
type State = {
  status: "loading" | "active" | "finished" | "error";
  title: string;
  questions: ExerciseQuestion[];
  currentIndex: number;
  userAnswers: Record<string, AnswerInfo>;
  score: number;
  timer: number;
  showHint: boolean;
  feedback: Feedback | null;
  error: any | null;
};

type Action =
  | {
      type: "FETCH_SUCCESS";
      payload: { title: string; questions: ExerciseQuestion[] };
    }
  | { type: "FETCH_FAILURE"; payload: any }
  | { type: "SELECT_ANSWER"; payload: { selectedIndex: number } }
  | { type: "TIMER_TICK" }
  | { type: "NEXT_QUESTION" }
  | { type: "FINISH_EXERCISE" }
  | { type: "TOGGLE_HINT" }
  | { type: "RESTART" };

// --- Initial State ---
const initialState: State = {
  status: "loading",
  title: "",
  questions: [],
  currentIndex: 0,
  userAnswers: {},
  score: 0,
  timer: 60,
  showHint: false,
  feedback: null,
  error: null,
};

// --- Helper Functions ---
const getFeedbackForScore = (score: number, total: number): Feedback => {
  if (total === 0)
    return {
      message: "No questions?",
      color: "text-muted-foreground",
      emoji: "🤔",
    };
  const percentage = (score / total) * 100;
  if (percentage >= 90)
    return {
      message: "Excellent! You've mastered this.",
      color: "text-green-500",
      emoji: "🏆",
    };
  if (percentage >= 70)
    return {
      message: "Great Job! Solid understanding.",
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
    message: "Keep Trying! You'll get it.",
    color: "text-red-500",
    emoji: "💪",
  };
};

// --- Reducer function ---
function exerciseReducer(state: State, action: Action): State {
  const currentQuestion = state.questions[state.currentIndex];

  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...initialState, status: "active", ...action.payload };
    case "FETCH_FAILURE":
      return { ...initialState, status: "error", error: action.payload };
    case "SELECT_ANSWER": {
      if (!currentQuestion || state.userAnswers[currentQuestion.id])
        return state;
      const { selectedIndex } = action.payload;
      const isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        userAnswers: {
          ...state.userAnswers,
          [currentQuestion.id]: {
            selected: selectedIndex,
            isCorrect: isCorrect,
            correctAnswer: currentQuestion.correctAnswerIndex,
          },
        },
      };
    }
    case "TIMER_TICK":
      return { ...state, timer: state.timer - 1 };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        timer: 60,
        showHint: false,
      };
    case "FINISH_EXERCISE":
      return {
        ...state,
        status: "finished",
        feedback: getFeedbackForScore(state.score, state.questions.length),
      };
    case "TOGGLE_HINT":
      return { ...state, showHint: !state.showHint };
    case "RESTART":
      return {
        ...initialState,
        title: state.title,
        questions: state.questions,
        status: "active",
      };
    default:
      return state;
  }
}

// --- Component Definition ---
export default function ExerciseDetails({
  exerciseId,
}: {
  exerciseId: string;
}) {
  const [state, dispatch] = useReducer(exerciseReducer, initialState);
  const {
    status,
    title,
    questions,
    currentIndex,
    userAnswers,
    score,
    timer,
    showHint,
    feedback,
    error,
  } = state;

  const {
    data: response,
    isLoading,
    isError,
    error: fetchError,
  } = useGetExerciseByIdQuery({ exerciseId });

  useEffect(() => {
    if (response) {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          title: response.data.title,
          questions: response.data.questions,
        },
      });
    } else if (isError && fetchError) {
      dispatch({ type: "FETCH_FAILURE", payload: fetchError });
    }
  }, [response, isError, fetchError]);

  const currentQuestion = questions[currentIndex];
  const isAnswered = currentQuestion
    ? userAnswers[currentQuestion.id] !== undefined
    : false;

  useEffect(() => {
    if (status === "active" && !isAnswered) {
      if (timer <= 0) {
        dispatch({ type: "SELECT_ANSWER", payload: { selectedIndex: -1 } });
        return;
      }
      const interval = setInterval(
        () => dispatch({ type: "TIMER_TICK" }),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [status, isAnswered, timer]);

  // --- Render Logic ---
  if (isLoading || status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (status === "error") {
    return (
      <Alert variant="destructive" className="m-4 max-w-2xl mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{getApiErrorMessage(error)}</AlertDescription>
      </Alert>
    );
  }

  if (status === "finished" && feedback) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
        <Card
          className={cn(
            "text-center",
            feedback.color.replace("text-", "border-")
          )}
        >
          <CardHeader>
            <div className={`text-6xl mx-auto mb-4`}>{feedback.emoji}</div>
            <CardTitle className={`text-3xl font-bold ${feedback.color}`}>
              {feedback.message}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-4xl font-bold">
              Your Final Score: {score} / {questions.length}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => dispatch({ type: "RESTART" })}>
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/exercises">Back to Exercises</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Answer Review</CardTitle>
            <CardDescription>A breakdown of your answers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {questions.map((q, index) => {
              const answerInfo = userAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="border-t pt-6 first:border-t-0 first:pt-0"
                >
                  <p className="font-semibold mb-4">
                    {index + 1}. {q.text}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option, optionIndex) => {
                      const isSelected = answerInfo?.selected === optionIndex;
                      const isCorrectAnswer =
                        q.correctAnswerIndex === optionIndex;
                      return (
                        <div
                          key={optionIndex}
                          className={cn(
                            "flex items-center w-full justify-start h-auto p-3 rounded-md border text-left",
                            isCorrectAnswer &&
                              "bg-green-500/20 border-green-500",
                            isSelected &&
                              !isCorrectAnswer &&
                              "bg-red-500/20 border-red-500"
                          )}
                        >
                          <span className="flex-1">{option}</span>
                          {isSelected &&
                            (isCorrectAnswer ? (
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

  if (!currentQuestion) {
    return <p className="text-center mt-8">Exercise has no questions.</p>;
  }

  const answerInfo = userAnswers[currentQuestion.id];
  const isLastQuestion = currentIndex >= questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Question {currentIndex + 1} of {questions.length}
        </p>
        <Progress
          value={((currentIndex + 1) / questions.length) * 100}
          className="w-full"
        />
      </div>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{title}</CardTitle>
            <div
              className={cn(
                "text-lg font-mono font-semibold",
                !isAnswered && timer <= 10 && "text-destructive"
              )}
            >
              {/* --- THIS IS THE FIX --- */}
              {/* It no longer shows "Answered!", just the frozen timer value. */}
              {`${timer}s`}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-semibold text-lg mb-4">{currentQuestion.text}</p>
            <div className="space-y-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = answerInfo?.selected === optionIndex;
                const isCorrectAnswer =
                  answerInfo?.correctAnswer === optionIndex;
                return (
                  <Button
                    key={optionIndex}
                    variant="outline"
                    className={cn(
                      "w-full justify-start h-auto py-3 whitespace-normal text-left",
                      isAnswered &&
                        isCorrectAnswer &&
                        "bg-green-500/20 border-green-500 text-green-800 dark:text-green-300",
                      isAnswered &&
                        isSelected &&
                        !answerInfo.isCorrect &&
                        "bg-red-500/20 border-red-500 text-red-800 dark:text-red-300"
                    )}
                    onClick={() =>
                      dispatch({
                        type: "SELECT_ANSWER",
                        payload: { selectedIndex: optionIndex },
                      })
                    }
                    disabled={isAnswered}
                  >
                    <div className="flex items-center w-full">
                      <span className="flex-1">{option}</span>
                      {isAnswered && isCorrectAnswer && (
                        <Check className="h-5 w-5 text-green-600 ml-2" />
                      )}
                      {isAnswered && isSelected && !answerInfo.isCorrect && (
                        <X className="h-5 w-5 text-red-600 ml-2" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>
          {currentQuestion.hint && (
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => dispatch({ type: "TOGGLE_HINT" })}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                {showHint ? "Hide" : "Show"} Hint
              </Button>
              {showHint && (
                <p className="text-sm text-muted-foreground p-3 bg-muted rounded-md mt-2">
                  {currentQuestion.hint}
                </p>
              )}
            </div>
          )}

          {isAnswered && (
            <div className="flex justify-end pt-6 border-t">
              <Button
                onClick={() =>
                  dispatch({
                    type: isLastQuestion ? "FINISH_EXERCISE" : "NEXT_QUESTION",
                  })
                }
              >
                {isLastQuestion ? "Finish Exercise" : "Next Question"}
                {!isLastQuestion && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
