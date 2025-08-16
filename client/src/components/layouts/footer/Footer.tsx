// FILE: src/components/layouts/footer/Footer.tsx

"use client";

import Link from "next/link";
import { Car, Twitter, Linkedin } from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* --- Main Footer Content (Columns) --- */}
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {/* Column 1: Branding and Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div>
                <Logo />
              </div>{" "}
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping you pass your Rwandan driving test with confidence.
              Practice makes perfect.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/exams"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Exams
              </Link>
              <Link
                href="/exercises"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Exercises
              </Link>
            </nav>
          </div>

          {/* Column 3: Legal & Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright and Socials --- */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Biooids. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/biooids"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hwapyong-maniragaba-edouard-415961344/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
