//src/components/shared/nav-links.ts
import { Home, Compass, Book, Pen, History, ShieldCheck } from "lucide-react";
import { Role } from "@/types/role.enum"; // Import your Role enum

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
  {
    href: "/exams/history",
    label: "History",
    icon: History,
  },
  // NEW: Add the link to the admin panel
  {
    href: "/admin",
    label: "Admin",
    icon: ShieldCheck,
    // This link will only be shown to users with these roles
    requiredRole: [Role.SUPER_ADMIN, Role.DEVELOPER],
  },
];
