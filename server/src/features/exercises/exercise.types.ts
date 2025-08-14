// src/features/exercises/exercise.types.ts

/**
 * DTO for submitting a single exercise answer.
 */
export interface SubmitExerciseAnswerDto {
  questionId: string;
  selectedOptionIndex: number;
}
