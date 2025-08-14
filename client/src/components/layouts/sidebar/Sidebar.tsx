// src/components/layouts/sidebar/Sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import { navLinks } from "@/components/shared/nav-links";

/**
 * The main sidebar navigation for desktop screens.
 * It is hidden on mobile.
 */
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-64 flex-col border-r bg-background md:flex">
      {/* CHANGE: The header/logo section has been removed and unified into the main Header.tsx */}
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {navLinks.map((link) => {
            // This logic correctly handles the active state for the root path.
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
