// --- Data shapes from the backend ---

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
    exam: Exam & {
      questions: ExamQuestion[];
    };
    attemptId: string;
    startedAt: string; // The official ISO date string from the server
  };
}

export interface SubmitExamApiResponse {
  status: string;
  data: {
    score: number;
    totalQuestions: number;
    correctAnswers: Record<string, number>;
  };
}

export interface ExamHistoryApiResponse {
  status: string;
  data: {
    id: string;
    score: number | null;
    completedAt: string;
    exam: {
      title: string;
      _count: {
        questions: number;
      };
    };
  }[];
}

export interface ExamReviewApiResponse {
  status: string;
  data: {
    attempt: {
      id: string;
      score: number | null;
      completedAt: string;
      answers: Record<string, number>;
    };
    exam: {
      title: string;
      questions: (ExamQuestion & { correctAnswerIndex: number })[];
    };
  };
}
