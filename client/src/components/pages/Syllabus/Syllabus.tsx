import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookCheck, FileText, ArrowDownToLine } from "lucide-react";
import Link from "next/link";

// Define your PDF files in an array. It's easy to add more here later!
const syllabusData = [
  {
    title: "Ibisubizo Byose (Main Syllabus)",
    description:
      "Inyoborabumenyi yuzuye irimo ibibazo n'ibisibuzo byose by'ingenzi byagufasha kwitegura neza.",
    href: "/umuyoboro-syllabus.pdf",
    icon: FileText,
  },
  {
    title: "Ibyapa Byose (Traffic Signs)",
    description:
      "Urutonde rw'ibyapa byo mu muhanda byose n'ubusobanuro bwabyo. Ni ingenzi cyane kubimenya byose.",
    href: "/ibyapa.pdf",
    icon: BookCheck,
  },
  // Add more PDFs here in the future
];

export default function SyllabusPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* --- Header --- */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Inyoborabumenyi (Syllabus), nibindi
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Hano hari inyoborabumenyi n'ibindi byagufasha kwitegura neza
            ikizamini cya provisoire. Kanda ku inyandiko ushaka gusoma.
          </p>
        </section>

        {/* --- PDF List Section --- */}
        <section className="py-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabusData.map((item) => (
              <Card key={item.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <item.icon className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full">
                    {/* This link opens the PDF in a new browser tab */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowDownToLine className="mr-2 h-4 w-4" />
                      Open & Read
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
