// src/lib/features/exams/examTypes.ts

// --- Data shapes returned by the backend ---
interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
}

interface Exam {
  id: string;
  examNumber: number;
  title: string;
  isFree: boolean;
}

// --- API Response Shapes ---
export interface AllExamsApiResponse {
  status: string;
  data: Exam[];
}

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

export interface SubmitExamApiResponse {
  status: string;
  data: {
    score: number;
    totalQuestions: number;
    correctAnswers: Record<string, number>; // Map of questionId to correct answer index
  };
}
