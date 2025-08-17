import prisma from "./prisma.js";
import { examsToSeed, exercisesToSeed } from "./seed-data"; // We'll move the data to a separate file for cleanliness

/**
 * A robust shuffle function that randomizes the options for each question
 * and correctly updates the `correctAnswerIndex`.
 * @param {Array} data - The array of exams or exercises.
 * @returns {Array} - The data with shuffled options.
 */
function shuffleData(data: typeof examsToSeed | typeof exercisesToSeed) {
  // Create a deep copy to avoid modifying the original seed data array
  const dataToShuffle = JSON.parse(JSON.stringify(data));

  for (const item of dataToShuffle) {
    for (const question of item.questions) {
      // 1. Get the original correct answer text before shuffling
      const correctAnswerText = question.options[question.correctAnswerIndex];

      // 2. Shuffle the options array using the Fisher-Yates algorithm
      for (let i = question.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.options[i], question.options[j]] = [
          question.options[j],
          question.options[i],
        ];
      }

      // 3. Find the new index of the original correct answer and update it
      const newCorrectIndex = question.options.findIndex(
        (option: string) => option === correctAnswerText
      );
      question.correctAnswerIndex = newCorrectIndex;
    }
  }
  return dataToShuffle;
}

async function main() {
  console.log(`Start seeding ...`);

  // --- STEP 1: SHUFFLE THE DATA IN MEMORY FIRST ---
  const shuffledExams = shuffleData(examsToSeed);
  const shuffledExercises = shuffleData(exercisesToSeed);

  // --- Seed Exams ---
  console.log("Deleting old exam data...");
  await prisma.$transaction([
    prisma.userExamAnswer.deleteMany(),
    prisma.userExamAttempt.deleteMany(),
    prisma.question.deleteMany(),
    prisma.exam.deleteMany(),
  ]);
  console.log("Seeding new exams...");
  for (const examData of shuffledExams) {
    await prisma.exam.create({
      data: {
        examNumber: examData.examNumber,
        title: examData.title,
        isFree: examData.isFree,
        questions: {
          create: examData.questions,
        },
      },
    });
  }
  console.log("🌱 Seeded exams.");

  // --- Seed Exercises ---
  console.log("Deleting old exercise data...");
  await prisma.$transaction([
    prisma.exerciseQuestion.deleteMany(),
    prisma.exercise.deleteMany(),
  ]);
  console.log("Seeding new exercises...");
  for (const exerciseData of shuffledExercises) {
    await prisma.exercise.create({
      data: {
        exerciseNumber: exerciseData.exerciseNumber,
        title: exerciseData.title,
        isFree: exerciseData.isFree,
        questions: {
          create: exerciseData.questions,
        },
      },
    });
  }
  console.log(`🌱 Seeded exercises.`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
