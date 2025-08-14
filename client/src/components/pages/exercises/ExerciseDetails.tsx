// src/components/pages/exercises/ExerciseDetails.tsx

"use client";

import { useState, useEffect } from "react";
import {
  useStartExerciseMutation,
  useSubmitAnswerMutation,
  useFinalizeExerciseMutation,
} from "@/lib/features/exercises/exerciseApiSlice";
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
import Link from "next/link";
import { ExerciseQuestion } from "@/lib/features/exercises/exerciseTypes";

type Feedback = { message: string; color: string; emoji: string };
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

interface ExerciseDetailsProps {
  exerciseId: string;
}

export default function ExerciseDetails({ exerciseId }: ExerciseDetailsProps) {
  const [startExercise, { isLoading: isStarting, error: startError }] =
    useStartExerciseMutation();
  const [submitAnswer, { isLoading: isSubmitting }] = useSubmitAnswerMutation();
  const [finalizeExercise] = useFinalizeExerciseMutation();

  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [exerciseData, setExerciseData] = useState<{
    title: string;
    questions: ExerciseQuestion[];
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    Record<
      string,
      { selected: number; isCorrect: boolean; correctAnswer: number }
    >
  >({});
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [timer, setTimer] = useState(60);
  const [apiError, setApiError] = useState<string | null>(null);

  const questions = exerciseData?.questions ?? [];
  const currentQuestion = questions[currentIndex];
  const isAnswered = userAnswers[currentQuestion?.id] !== undefined;

  useEffect(() => {
    const beginExercise = async () => {
      try {
        const response = await startExercise({ exerciseId }).unwrap();
        setAttemptId(response.data.attemptId);
        setExerciseData(response.data.exercise);
      } catch (err) {
        setApiError(getApiErrorMessage(err));
      }
    };
    beginExercise();
  }, [exerciseId, startExercise]);

  useEffect(() => {
    if (isAnswered || feedback) return;
    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSelectAnswer(-1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnswered, feedback]);

  const handleSelectAnswer = async (selectedOptionIndex: number) => {
    if (isAnswered || !attemptId || !currentQuestion) return;
    setApiError(null);
    try {
      const response = await submitAnswer({
        attemptId,
        answerData: { questionId: currentQuestion.id, selectedOptionIndex },
      }).unwrap();

      const { isCorrect, correctAnswerIndex } = response.data;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          selected: selectedOptionIndex,
          isCorrect,
          correctAnswer: correctAnswerIndex,
        },
      }));
    } catch (err: any) {
      if (err.status === 408) {
        // Handle server-side timeout
        const correctAnswer = parseInt(err.data.message.match(/\d+$/)[0]) - 1;
        setUserAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: {
            selected: -1,
            isCorrect: false,
            correctAnswer,
          },
        }));
      }
      setApiError(getApiErrorMessage(err));
    }
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowHint(false);
    } else {
      if (attemptId) {
        const finalData = await finalizeExercise({ attemptId }).unwrap();
        const finalScore = finalData.data.score;
        setFeedback(getFeedbackForScore(finalScore, questions.length));
      }
    }
  };

  const handleReset = () => window.location.reload();

  const effectiveError = apiError || getApiErrorMessage(startError);

  if (isStarting)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  if (effectiveError)
    return (
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{effectiveError}</AlertDescription>
      </Alert>
    );
  if (!exerciseData || !currentQuestion)
    return (
      <p className="text-center mt-8">
        Exercise not found or has no questions.
      </p>
    );

  if (feedback) {
    return (
      <Card
        className={cn(
          "max-w-2xl mx-auto my-8 border-2",
          feedback.color.replace("text-", "border-")
        )}
      >
        <CardHeader className="text-center">
          <div className={`text-6xl mx-auto mb-4`}>{feedback.emoji}</div>
          <CardTitle className={`text-3xl font-bold ${feedback.color}`}>
            {feedback.message}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-4xl font-bold my-4">
            Your Final Score: {score} / {questions.length}
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
          {apiError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}
          <div>
            <p className="font-semibold text-lg mb-4">{currentQuestion.text}</p>
            <div className="space-y-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const answerInfo = userAnswers[currentQuestion.id];
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
                      isSelected &&
                        answerInfo &&
                        !answerInfo.isCorrect &&
                        "bg-red-500/20 border-red-500 text-red-800 dark:text-red-300"
                    )}
                    onClick={() => handleSelectAnswer(optionIndex)}
                    disabled={isAnswered || isSubmitting}
                  >
                    <div className="flex items-center w-full">
                      <span className="flex-1">{option}</span>
                      {isSubmitting && isSelected && (
                        <Loader2 className="h-5 w-5 ml-2 animate-spin" />
                      )}
                      {isAnswered && isCorrectAnswer && (
                        <Check className="h-5 w-5 text-green-600 ml-2" />
                      )}
                      {isSelected && answerInfo && !answerInfo.isCorrect && (
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
