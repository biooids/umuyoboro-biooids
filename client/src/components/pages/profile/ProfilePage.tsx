// src/components/pages/profile/ProfilePage.tsx

"use client";

import { useState } from "react";
import { useGetProfileQuery } from "@/lib/features/user/userApiSlice";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getApiErrorMessage } from "@/lib/utils/utils";
import ProfileNav from "./ProfileNav";
import ProfileDetails from "./ProfileDetails";
import ProfileEditForm from "./ProfileEditForm";
import DangerZone from "./DangerZone";
import DeleteAccountDialog from "./DeleteAccountDialog";

/**
 * The main component for the user profile page, acting as a layout container.
 * It uses a modern two-column layout with navigation on the left and content on the right.
 */
export default function ProfilePage() {
  const { data: response, isLoading, isError, error } = useGetProfileQuery();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-20">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive" className="mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{getApiErrorMessage(error)}</AlertDescription>
      </Alert>
    );
  }

  const user = response?.data.user;

  if (!user) {
    return <p>Could not load user profile.</p>;
  }

  return (
    <div className="container max-w-5xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Left Column: Navigation */}
        <div className="md:col-span-1">
          <ProfileNav />
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-3 space-y-8">
          {isEditing ? (
            <ProfileEditForm
              user={user}
              onFinished={() => setIsEditing(false)}
            />
          ) : (
            <ProfileDetails user={user} onEdit={() => setIsEditing(true)} />
          )}

          {/* The "Danger Zone" is now a separate, distinct section. */}
          <DangerZone onDelete={() => setIsDeleteDialogOpen(true)} />
        </div>
      </main>

      <DeleteAccountDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      />
    </div>
  );
}
