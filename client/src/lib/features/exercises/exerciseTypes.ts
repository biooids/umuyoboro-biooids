// src/lib/features/exercises/exerciseTypes.ts

// --- Data shapes returned by the backend ---
export interface ExerciseQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  hint: string | null;
}

export interface Exercise {
  id: string;
  exerciseNumber: number;
  title: string;
  isFree: boolean;
}

// --- API Response Shapes ---
export interface AllExercisesApiResponse {
  status: string;
  data: Exercise[];
}

export interface SingleExerciseApiResponse {
  status: string;
  data: Exercise & {
    questions: ExerciseQuestion[];
  };
}
