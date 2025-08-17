// src/components/pages/profile/ProfileNav.tsx

"use client";

import { cn } from "@/lib/utils";
import { User, Shield } from "lucide-react";

const navItems = [
  { name: "Profile", icon: User, href: "/profile", current: true },
  { name: "Security", icon: Shield, href: "#", current: false },
  // Add more links like "Billing", "Notifications" here in the future
];

/**
 * A reusable navigation component for the settings/profile page layout.
 */
export default function ProfileNav() {
  return (
    <nav className="flex space-x-2 md:flex-col md:space-x-0 md:space-y-1">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
            item.current
              ? "bg-muted text-primary"
              : "text-muted-foreground hover:bg-muted/50",
            !item.current && "cursor-not-allowed opacity-50" // Style for future links
          )}
          aria-current={item.current ? "page" : undefined}
          onClick={(e) => !item.current && e.preventDefault()}
        >
          <item.icon className="h-4 w-4" />
          {item.name}
        </a>
      ))}
    </nav>
  );
}
