// src/components/layouts/sidebar/MobileBottomBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/shared/nav-links";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/hooks/useAuth";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const filteredLinks = navLinks.filter(
    (link) =>
      !link.requiredRole || (user && link.requiredRole.includes(user.role))
  );

  return (
    <div className="fixed bottom-0 z-40 w-full border-t bg-background/95 backdrop-blur-sm md:hidden">
      {/* --- MODIFICATION START --- */}
      <nav
        className="grid h-14 items-center justify-center text-xs" // Remove dynamic grid-cols-*
        style={{ gridTemplateColumns: `repeat(${filteredLinks.length}, 1fr)` }} // Add inline style
      >
        {/* --- MODIFICATION END --- */}
        {filteredLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === link.href
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 pt-2 pb-1 text-muted-foreground transition-colors hover:text-primary",
                isActive && "text-primary"
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="text-[10px]">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
