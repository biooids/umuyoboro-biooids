// src/lib/features/exams/examTypes.ts

// --- Data shapes returned by the backend ---

/**
 * Represents a single question within an exam, as sent to the client.
 * Note: It intentionally does not include the `correctAnswerIndex`.
 */
interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
}

/**
 * Represents the basic details of a single exam, typically for a list view.
 */
interface Exam {
  id: string;
  examNumber: number;
  title: string;
  isFree: boolean;
}

// --- API Response Shapes ---

/**
 * The expected shape of the API response when fetching all exams.
 */
export interface AllExamsApiResponse {
  status: string;
  data: Exam[];
}

/**
 * The expected shape of the API response after successfully starting an exam.
 */
export interface StartExamApiResponse {
  status: string;
  data: {
    exam: {
      id: string;
      examNumber: number;
      title: string;
      isFree: boolean;
      questions: ExamQuestion[];
    };
    attemptId: string;
  };
}

/**
 * The expected shape of the API response after submitting an exam for grading.
 */
export interface SubmitExamApiResponse {
  status: string;
  data: {
    score: number;
    totalQuestions: number;
    // A map of questionId to the correct answer index for user review.
    correctAnswers: Record<string, number>;
  };
}
