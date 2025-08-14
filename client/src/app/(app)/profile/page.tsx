// src/app/(app)/profile/page.tsx

import ProfilePage from "@/components/pages/profile/ProfilePage";

/**
 * The page route for the user profile.
 * It's placed within the `(app)` route group, which likely applies
 * a layout and ensures the user is authenticated.
 */
export default function Page() {
  return <ProfilePage />;
}
