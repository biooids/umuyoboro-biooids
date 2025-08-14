// src/lib/nav-links.ts

import { Home, Compass, Book, Pen, History } from "lucide-react"; // CHANGE: Import History icon

/**
 * A centralized array of navigation link objects.
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
  // CHANGE: Add a link to the new exam history page.
  {
    href: "/exams/history",
    label: "History",
    icon: History,
  },
];
