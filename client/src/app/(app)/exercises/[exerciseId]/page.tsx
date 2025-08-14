//src/app/(app)/exercises/[exerciseId]/page.tsx

import ExerciseDetails from "@/components/pages/exercises/ExerciseDetails";

export default function ExerciseTakingPage({
  params,
}: {
  params: { exerciseId: string };
}) {
  return <ExerciseDetails exerciseId={params.exerciseId} />;
}
