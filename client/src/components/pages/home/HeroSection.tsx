//src/components/HeroSection.tsx

import Link from "next/link";

function HeroSection() {
  return (
    <div>
      <div>
        <Link href="/exams">Start Exam</Link>
      </div>
      <div>
        <Link href="/exercises">Start Exercise</Link>
      </div>{" "}
    </div>
  );
}
export default HeroSection;
