// src/features/exams/exam.types.ts

/**
 * Defines the shape of the data transfer object (DTO) for submitting exam answers.
 */
export interface SubmitExamInputDto {
  /**
   * An object where each key is a question ID (string) and the value
   * is the index (number) of the option selected by the user.
   */
  answers: Record<string, number>;
}

// --- NEW TYPES FOR EXAM HISTORY ---

/**
 * Represents a summary of a single completed exam attempt for the history list.
 */
export interface ExamHistorySummaryDto {
  id: string; // The attempt ID
  score: number | null;
  completedAt: Date | null;
  exam: {
    title: string;
    _count: {
      questions: number;
    };
  };
}

/**
 * Represents the detailed data for a single exam review.
 */
export interface ExamReviewDto {
  attempt: {
    id: string;
    score: number | null;
    completedAt: Date | null;
    answers: any; // The user's submitted answers
  };
  exam: {
    title: string;
    questions: {
      id: string;
      text: string;
      options: string[];
      correctAnswerIndex: number;
    }[];
  };
}
