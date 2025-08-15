// --- Data shapes from the backend ---

export interface ExerciseQuestion {
  id: string;
  text: string;
  options: string[];
  hint: string | null;
  correctAnswerIndex: number;
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

// This is the new, simpler response for fetching a single exercise.
// It no longer contains an `attemptId`.
export interface ExerciseByIdApiResponse {
  status: string;
  data: Exercise & {
    questions: ExerciseQuestion[];
  };
}
