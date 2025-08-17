// src/components/pages/profile/DeleteAccountDialog.tsx

"use client";

import { useDeleteAccountMutation } from "@/lib/features/user/userApiSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { getApiErrorMessage } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Import Button

interface DeleteAccountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteAccountDialog({
  isOpen,
  onClose,
}: DeleteAccountDialogProps) {
  const [deleteAccount, { isLoading }] = useDeleteAccountMutation();

  const handleDelete = async () => {
    try {
      await deleteAccount().unwrap();
      toast.success("Account deleted successfully.");
      onClose();
    } catch (err) {
      toast.error(getApiErrorMessage(err));
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          {/* Use the Button component with a destructive variant for the action */}
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete Account
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
