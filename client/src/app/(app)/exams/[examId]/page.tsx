"use client";

import ExamDetails from "@/components/pages/exams/ExamDetails";

export default function ExamTakingPage({
  params,
}: {
  params: { examId: string };
}) {
  return <ExamDetails examId={params.examId} />;
}
