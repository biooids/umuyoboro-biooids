// src/app/(app)/@header/page.tsx

import Header from "@/components/layouts/header/Header";

/**
 * This is a special Next.js Parallel Route.
 * The content of this page will be rendered in the `@header` slot defined in the layout
 * for the `(app)` route group. It's a clean way to manage complex layouts.
 */
function HeaderPage() {
  return (
    // The sticky positioning ensures the header stays at the top during scroll.
    <div className="sticky top-0 z-50 ">
      <Header />
    </div>
  );
}
export default HeaderPage;
