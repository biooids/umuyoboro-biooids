// src/components/pages/exercises/ExerciseDetails.tsx

"use client";

import { useState, useEffect } from "react";
import { useGetExerciseByIdQuery } from "@/lib/features/exercises/exerciseApiSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Loader2,
  AlertCircle,
  Lightbulb,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import { cn, getApiErrorMessage } from "@/lib/utils/utils";
import { Progress } from "@/components/ui/progress";
import PleaseLogin from "@/components/shared/PleaseLogin";
import { useAppSelector } from "@/lib/hooks/hooks";
import Link from "next/link";

interface ExerciseDetailsProps {
  exerciseId: string;
}

/**
 * A component that handles the entire exercise experience, showing questions
 * one by one and providing immediate feedback.
 * For maintainability in a larger application, you could consider splitting the
 * results screen and the question display into separate sub-components.
 */
export default function ExerciseDetails({ exerciseId }: ExerciseDetailsProps) {
  // --- Redux and API Hooks ---
  const token = useAppSelector((state) => state.auth.token);
  // Fetch the exercise data, but only if the user is logged in.
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useGetExerciseByIdQuery({ exerciseId }, { skip: !token });

  // --- Component State ---
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current question index.
  const [selectedOption, setSelectedOption] = useState<number | null>(null); // Tracks the user's answer for the current question.
  const [showHint, setShowHint] = useState(false); // Toggles the hint visibility.
  const [showResults, setShowResults] = useState(false); // Toggles the final results screen.
  const [score, setScore] = useState(0); // Tracks the user's score.
  const [timer, setTimer] = useState(60); // A 60-second timer for each question.

  // --- Derived State ---
  const exerciseData = response?.data;
  const questions = exerciseData?.questions ?? [];
  const currentQuestion = questions[currentIndex];

  // Effect to manage the timer for each question.
  useEffect(() => {
    // Don't run the timer if an answer is selected or the exercise is finished.
    if (selectedOption !== null || showResults) {
      return;
    }

    // Reset the timer to 60 seconds for each new question.
    setTimer(60);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          // If time runs out, auto-select the correct answer to show the user.
          if (currentQuestion) {
            setSelectedOption(currentQuestion.correctAnswerIndex);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    // or when the dependencies (like the current question) change.
    return () => clearInterval(interval);
  }, [currentIndex, showResults, currentQuestion, selectedOption]);

  // --- Event Handlers ---

  /** Handles the user selecting an answer. */
  const handleSelectAnswer = (optionIndex: number) => {
    // Lock the answer once one is chosen.
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);
    // Increment the score immediately if the answer is correct.
    if (optionIndex === currentQuestion.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  /** Handles moving to the next question or finishing the exercise. */
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      // Reset state for the next question.
      setSelectedOption(null);
      setShowHint(false);
    } else {
      // If it's the last question, show the final results screen.
      setShowResults(true);
    }
  };

  /** Handles resetting the exercise to its initial state. */
  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowHint(false);
    setShowResults(false);
    setScore(0);
  };

  // --- Render Logic ---

  if (!token) {
    return (
      <div className="container py-8">
        <PleaseLogin message="You must be logged in to do exercises." />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
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

  if (!exerciseData || !currentQuestion) {
    return (
      <p className="text-center mt-8">
        Exercise not found or has no questions.
      </p>
    );
  }

  // Render the final results card when the exercise is complete.
  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto my-8">
        <CardHeader>
          <CardTitle>Exercise Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-4xl font-bold my-4">
            Your Score: {score} / {questions.length}
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleReset}>Try Again</Button>
            <Button variant="outline" asChild>
              <Link href="/exercises">Back to Exercises</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const isAnswered = selectedOption !== null;

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
            <CardTitle>{exerciseData.title}</CardTitle>
            <div className="text-lg font-mono font-semibold">{timer}s</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-semibold text-lg mb-4">{currentQuestion.text}</p>
            <div className="space-y-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = selectedOption === optionIndex;
                const isCorrectAnswer =
                  currentQuestion.correctAnswerIndex === optionIndex;

                return (
                  <Button
                    key={optionIndex}
                    variant="outline"
                    className={cn(
                      "w-full justify-start h-auto py-3 whitespace-normal text-left",
                      // Style the button to show immediate feedback after an answer is selected.
                      isAnswered &&
                        isCorrectAnswer &&
                        "bg-green-500/20 border-green-500 text-green-800 dark:text-green-300",
                      isSelected &&
                        !isCorrectAnswer &&
                        "bg-red-500/20 border-red-500 text-red-800 dark:text-red-300"
                    )}
                    onClick={() => handleSelectAnswer(optionIndex)}
                    disabled={isAnswered}
                  >
                    <div className="flex items-center w-full">
                      <span className="flex-1">{option}</span>
                      {isAnswered && isCorrectAnswer && (
                        <Check className="h-5 w-5 text-green-600 ml-2" />
                      )}
                      {isSelected && !isCorrectAnswer && (
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
                onClick={() => setShowHint(!showHint)}
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

          {/* Show the "Next" button only after an answer has been selected. */}
          {isAnswered && (
            <div className="flex justify-end pt-6 border-t">
              <Button onClick={handleNext}>
                {currentIndex === questions.length - 1
                  ? "Finish Exercise"
                  : "Next Question"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
