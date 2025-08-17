//src/components/layouts/sidebar/MobileSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/components/shared/nav-links";
import { useAuth } from "@/lib/hooks/useAuth"; // Import the useAuth hook

/**
 * A slide-out ("sheet") sidebar for mobile screens.
 */
export default function MobileSidebar() {
  const pathname = usePathname();
  const { user } = useAuth(); // Get the current user

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-4">
        <SheetHeader className="text-left border-b pb-4">
          <SheetTitle>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">MyApp</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 mt-4">
          <nav className="grid gap-2 text-base font-medium">
            {navLinks.map((link) => {
              // NEW: Check for required role
              if (
                link.requiredRole &&
                (!user || !link.requiredRole.includes(user.role))
              ) {
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
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
