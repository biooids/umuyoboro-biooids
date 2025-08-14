// src/lib/features/exercises/exerciseTypes.ts

// --- Data shapes from the backend ---

export interface ExerciseQuestion {
  id: string;
  text: string;
  options: string[];
  hint: string | null;
}

export interface Exercise {
  id: string;
  exerciseNumber: number;
  title: string;
  isFree: boolean;
}

// --- API Response/Input Shapes for the Stateful Flow ---

export interface AllExercisesApiResponse {
  status: string;
  data: Exercise[];
}

export interface StartExerciseApiResponse {
  status: string;
  data: {
    exercise: Exercise & { questions: ExerciseQuestion[] };
    attemptId: string;
  };
}

export interface SubmitAnswerInputDto {
  questionId: string;
  selectedOptionIndex: number;
}

export interface SubmitAnswerApiResponse {
  status: string;
  data: {
    isCorrect: boolean;
    correctAnswerIndex: number;
  };
}

export interface FinalizeExerciseApiResponse {
  status: string;
  data: {
    score: number;
  };
}

// --- Types for Exercise History ---

export interface ExerciseHistoryApiResponse {
  status: string;
  data: {
    id: string;
    score: number | null;
    completedAt: string;
    exercise: {
      title: string;
      _count: {
        questions: number;
      };
    };
  }[];
}

export interface ExerciseReviewApiResponse {
  status: string;
  data: {
    id: string;
    score: number | null;
    completedAt: string;
    exercise: {
      title: string;
      questions: (ExerciseQuestion & { correctAnswerIndex: number })[];
    };
    answers: {
      questionId: string;
      selectedOptionIndex: number;
      isCorrect: boolean;
    }[];
  };
}
