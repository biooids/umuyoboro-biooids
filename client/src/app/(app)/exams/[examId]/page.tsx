//src/app/(app)/exams/[examId]/page.tsx

import ExamDetails from "@/components/pages/exams/ExamDetails";

export default async function ExamTakingPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;

  return (
    <div>
      <ExamDetails examId={examId} />;
    </div>
  );
}
