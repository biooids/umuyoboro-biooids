import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  LifeBuoy,
  Mail,
  MessageSquare,
  Phone,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// A small reusable component for the contact cards
const ContactCard = ({
  icon,
  title,
  description,
  href,
  cta,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  cta: string;
}) => {
  const Icon = icon;
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Icon className="h-8 w-8 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild className="w-full">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {cta}
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default function HelpPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* --- Header --- */}
        <section className="text-center">
          <LifeBuoy className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Ubufasha
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Ufite ikibazo, ushaka ubufasha, ufite igitekerezo? turahangaha
            kubafasha rwose.
          </p>
        </section>

        {/* --- Contact Section --- */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contact Us Directly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard
              icon={Phone}
              title="WhatsApp"
              description="For quick questions or support, chat with us directly on WhatsApp."
              href="https://wa.me/250790931024"
              cta="Chat on WhatsApp"
            />
            <ContactCard
              icon={Mail}
              title="Email Support"
              description="For general questions, feedback, or business proposals, send us an email."
              href="mailto:intellbiooid@gmail.com"
              cta="Send Email"
            />

            <ContactCard
              icon={Globe}
              title="Our Website"
              description="Learn more about our company and other projects we're working on."
              href="https://www.biooids.com"
              cta="Visit biooids.com"
            />
            <ContactCard
              icon={Twitter}
              title="@biooids on X"
              description="Follow us on X (formerly Twitter) for updates, tips, and announcements."
              href="https://x.com/biooids"
              cta="Follow on X"
            />
            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              description="Connect with the lead developer, Hwapyong Maniragaba Edouard."
              href="https://www.linkedin.com/in/hwapyong-maniragaba-edouard-415961344/"
              cta="Connect on LinkedIn"
            />
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is UMUYOBORO really free to use?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Our mission is to help as many people as possible pass
                their provisional driving test in Rwanda. All exams and
                exercises on our platform are completely free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How is the exam score calculated?
              </AccordionTrigger>
              <AccordionContent>
                Your score is calculated based on the number of questions you
                answer correctly out of the total number of questions in the
                exam, just like in the official test.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                I found a mistake in a question. What should I do?
              </AccordionTrigger>
              <AccordionContent>
                Thank you for helping us improve! Please send us an email or a
                message on WhatsApp with the exam number and the question you
                believe is incorrect. We'll review it right away.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Who is behind UMUYOBORO?</AccordionTrigger>
              <AccordionContent>
                UMUYOBORO is developed and maintained by Biooids, a technology
                company focused on creating effective digital learning tools in
                Rwanda.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
}
