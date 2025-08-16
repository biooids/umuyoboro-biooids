// src/app/(app)/exams/history/[attemptId]/page.tsx

import ExamReview from "@/components/pages/exams/ExamReview";

export default async function ExamReviewPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  return (
    <div>
      <ExamReview attemptId={attemptId} />;
    </div>
  );
}
