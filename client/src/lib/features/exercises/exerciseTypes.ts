// src/lib/features/exercises/exerciseTypes.ts

// --- Data shapes returned by the backend ---

/**
 * Represents a single question within an exercise, including the answer and hint.
 */
export interface ExerciseQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  hint: string | null;
}

/**
 * Represents the basic details of a single exercise, typically for a list view.
 */
export interface Exercise {
  id: string;
  exerciseNumber: number;
  title: string;
  isFree: boolean;
}

// --- API Response Shapes ---

/**
 * The expected shape of the API response when fetching all exercises.
 */
export interface AllExercisesApiResponse {
  status: string;
  data: Exercise[];
}

/**
 * The expected shape of the API response when fetching a single exercise.
 */
export interface SingleExerciseApiResponse {
  status: string;
  data: Exercise & {
    questions: ExerciseQuestion[];
  };
}
