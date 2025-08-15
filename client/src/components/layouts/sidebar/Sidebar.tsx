"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import { useAuth } from "@/lib/hooks/useAuth"; // Import the useAuth hook
import { navLinks } from "@/components/shared/nav-links";

/**
 * The main sidebar navigation for desktop screens.
 */
export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth(); // Get the current user from your auth state

  return (
    <aside className="hidden h-full w-64 flex-col border-r bg-background md:flex">
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {navLinks.map((link) => {
            // NEW: Check if the link requires a specific role
            if (
              link.requiredRole &&
              (!user || !link.requiredRole.includes(user.role))
            ) {
              // If the role is required but the user doesn't have it, don't render the link
              return null;
            }

            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
