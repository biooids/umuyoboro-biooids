// src/app/(app)/exams/history/[attemptId]/page.tsx

"use client";

import ExamReview from "@/components/pages/exams/ExamReview";

export default function ExamReviewPage({
  params,
}: {
  params: { attemptId: string };
}) {
  return <ExamReview attemptId={params.attemptId} />;
}
