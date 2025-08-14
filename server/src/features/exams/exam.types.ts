// src/features/exams/exam.types.ts

/**
 * Defines the shape of the data transfer object (DTO) for submitting exam answers.
 */
export interface SubmitExamInputDto {
  /**
   * An object where each key is a question ID (string) and the value
   * is the index (number) of the option selected by the user.
   * e.g., { "questionId1": 0, "questionId2": 3 }
   */
  answers: Record<string, number>;
}
