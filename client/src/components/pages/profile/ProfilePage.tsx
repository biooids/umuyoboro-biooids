// src/components/pages/profile/ProfilePage.tsx

"use client";

import { useState } from "react";
import { useGetProfileQuery } from "@/lib/features/user/userApiSlice";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getApiErrorMessage } from "@/lib/utils/utils";
import ProfileDetails from "./ProfileDetails";
import ProfileEditForm from "./ProfileEditForm";
import DeleteAccountDialog from "./DeleteAccountDialog";

/**
 * The main component for the user profile page.
 * It handles fetching the user's data and manages the view,
 * edit, and delete confirmation states.
 */
export default function ProfilePage() {
  const { data: response, isLoading, isError, error } = useGetProfileQuery();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Show a loader while fetching the user's profile.
  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-20">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Show an error message if the profile fails to load.
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
    <div className="container max-w-2xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground">
          View and manage your account details.
        </p>
      </div>

      {/* Conditionally render the view or edit component */}
      {isEditing ? (
        <ProfileEditForm user={user} onFinished={() => setIsEditing(false)} />
      ) : (
        <ProfileDetails
          user={user}
          onEdit={() => setIsEditing(true)}
          onDelete={() => setIsDeleteDialogOpen(true)}
        />
      )}

      {/* The delete confirmation dialog is controlled by its own state */}
      <DeleteAccountDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      />
    </div>
  );
}
