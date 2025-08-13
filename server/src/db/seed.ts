// prisma/seed.ts

import prisma from "./prisma.js";

const examsToSeed = [
  {
    examNumber: 1,
    title: "Free Introductory Exam",
    isFree: true,
    questions: [
      {
        text: "What is 1 + 1?",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 1,
      },
      {
        text: "What is the capital of Rwanda?",
        options: ["Huye", "Musanze", "Kigali", "Rubavu"],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    examNumber: 2,
    title: "Advanced Exam 1",
    isFree: false,
    questions: [
      {
        text: "What is 5 x 5?",
        options: ["20", "30", "25", "15"],
        correctAnswerIndex: 2,
      },
      {
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswerIndex: 1,
      },
    ],
  },
];

const exercisesToSeed = [
  {
    exerciseNumber: 1,
    title: "Basic Road Signs",
    isFree: true,
    questions: [
      {
        text: "Which sign indicates a stop is required?",
        options: [
          "Yield Sign",
          "Stop Sign",
          "Speed Limit Sign",
          "No Entry Sign",
        ],
        correctAnswerIndex: 1,
        hint: "It is red and octagonal.",
      },
      {
        text: "What does a triangular sign with a red border typically indicate?",
        options: [
          "Order or Command",
          "Information",
          "Warning or Danger",
          "Direction",
        ],
        correctAnswerIndex: 2,
        hint: "Think about what alerts you to a potential hazard ahead.",
      },
    ],
  },
  {
    exerciseNumber: 2,
    title: "Traffic Light Rules",
    isFree: false,
    questions: [
      {
        text: "What should you do when approaching a steady yellow traffic light?",
        options: [
          "Speed up to cross quickly",
          "Stop if it is safe to do so",
          "Proceed with caution without stopping",
          "Honk your horn",
        ],
        correctAnswerIndex: 1,
        hint: "The yellow light is a warning that the light is about to turn red.",
      },
      {
        text: "A flashing red light is treated the same as a:",
        options: [
          "Green light",
          "Yield sign",
          "Stop sign",
          "Speed bump warning",
        ],
        correctAnswerIndex: 2,
        hint: "You must come to a complete stop before proceeding.",
      },
    ],
  },
];

/**
 * A script to seed the database with initial data for exams and exercises.
 * This is typically run via `prisma db seed`.
 */
async function main() {
  console.log(`Start seeding ...`);

  // --- Seed Exams ---
  // Clear existing data first to prevent duplicates
  await prisma.question.deleteMany({});
  await prisma.exam.deleteMany({});

  for (const examData of examsToSeed) {
    await prisma.exam.create({
      data: {
        examNumber: examData.examNumber,
        title: examData.title,
        isFree: examData.isFree,
        questions: {
          create: examData.questions.map((q) => ({
            text: q.text,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
          })),
        },
      },
    });
  }
  console.log("✅ Seeded exams.");

  // --- Seed Exercises ---
  // Clear existing data first
  await prisma.exerciseQuestion.deleteMany();
  await prisma.exercise.deleteMany();

  for (const exerciseData of exercisesToSeed) {
    await prisma.exercise.create({
      data: {
        exerciseNumber: exerciseData.exerciseNumber,
        title: exerciseData.title,
        isFree: exerciseData.isFree,
        questions: {
          create: exerciseData.questions.map((q) => ({
            text: q.text,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
            hint: q.hint,
          })),
        },
      },
    });
  }
  console.log(`✅ Seeded exercises.`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Disconnect the shared client
    await prisma.$disconnect();
  });
