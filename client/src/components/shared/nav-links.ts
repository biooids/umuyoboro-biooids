// src/lib/nav-links.ts

import { Home, Compass, Book, Pen } from "lucide-react";

/**
 * A centralized array of navigation link objects.
 * This makes it easy to update navigation across all components (desktop and mobile)
 * by modifying a single file.
 */
export const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/about",
    label: "About",
    icon: Compass,
  },
  {
    href: "/exams",
    label: "Exams",
    icon: Book,
  },
  {
    href: "/exercises",
    label: "Exercises",
    icon: Pen,
  },
];
