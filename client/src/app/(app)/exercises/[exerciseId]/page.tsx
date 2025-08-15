import ExerciseDetails from "@/components/pages/exercises/ExerciseDetails";

// The page is now an async function
export default async function ExerciseTakingPage({
  params,
}: {
  // The params prop is a Promise
  params: Promise<{ exerciseId: string }>;
}) {
  // We await the promise to get the actual ID
  const { exerciseId } = await params;

  // Then we pass the clean string prop to our client component
  return (
    <div>
      <ExerciseDetails exerciseId={exerciseId} />
    </div>
  );
}
