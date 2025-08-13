"use client";

import { useState, useEffect, useCallback } from "react";
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

export default function ExerciseDetails({ exerciseId }: ExerciseDetailsProps) {
  const token = useAppSelector((state) => state.auth.token);
  const {
    data: response,
    isLoading,
    isError,
  } = useGetExerciseByIdQuery(
    { exerciseId },
    {
      skip: !token,
    }
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);

  const exerciseData = response?.data;
  const questions = exerciseData?.questions ?? [];
  const currentQuestion = questions[currentIndex];

  // --- THIS IS THE CORRECTED TIMER LOGIC ---
  useEffect(() => {
    // Don't start a timer if the question is already answered or the exercise is over
    if (selectedOption !== null || showResults) {
      return;
    }

    setTimer(60); // Reset timer for the new question

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          // When time is up, lock and reveal the correct answer
          if (currentQuestion) {
            setSelectedOption(currentQuestion.correctAnswerIndex);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // The cleanup function will stop the timer if the question changes
    // or if the component unmounts.
    return () => clearInterval(interval);

    // This effect now only depends on the current question index and showResults state.
    // It will not restart when you select an answer.
  }, [currentIndex, showResults, currentQuestion]);

  const handleSelectAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);
    if (optionIndex === currentQuestion.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowHint(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowHint(false);
    setShowResults(false);
    setScore(0);
  };

  // --- The rest of the component's render logic is the same ---
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
        <AlertDescription>{getApiErrorMessage(isError)}</AlertDescription>
      </Alert>
    );
  }

  if (!exerciseData || !currentQuestion) {
    return <p>Exercise not found or has no questions.</p>;
  }

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
    <div className="max-w-3xl mx-auto py-8">
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
                      "w-full justify-start h-auto py-3 whitespace-normal",
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
                      <span className="flex-1 text-left">{option}</span>
                      {isAnswered && isCorrectAnswer && (
                        <Check className="h-5 w-5 text-green-600" />
                      )}
                      {isSelected && !isCorrectAnswer && (
                        <X className="h-5 w-5 text-red-600" />
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
