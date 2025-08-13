// src/features/exams/exam.types.ts
export interface SubmitExamInputDto {
  // A map of questionId to the user's selected option index
  answers: Record<string, number>;
}
