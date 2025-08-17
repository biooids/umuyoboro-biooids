// src/components/pages/profile/ProfileEditForm.tsx

"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateUserSchema,
  UpdateUserFormValues,
} from "@/lib/features/user/user.schemas";
import { useUpdateProfileMutation } from "@/lib/features/user/userApiSlice";
import { SanitizedUserDto } from "@/lib/features/auth/authTypes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertCircle } from "lucide-react";
import { getApiErrorMessage } from "@/lib/utils";
import { useFocusOnError } from "@/lib/hooks/useFocusOnError";

interface ProfileEditFormProps {
  user: SanitizedUserDto;
  onFinished: () => void;
}

export default function ProfileEditForm({
  user,
  onFinished,
}: ProfileEditFormProps) {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setFocus,
  } = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      username: user.username,
    },
  });

  useFocusOnError(errors, setFocus);

  const onSubmit: SubmitHandler<UpdateUserFormValues> = async (data) => {
    setFormError(null);
    try {
      await updateProfile(data).unwrap();
      onFinished();
    } catch (err) {
      setFormError(getApiErrorMessage(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>
            Make changes to your profile here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {formError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{formError}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              {...register("username")}
              autoComplete="username"
            />
            {errors.username && (
              <p className="text-sm text-destructive">
                {errors.username.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="ghost" type="button" onClick={onFinished}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading || !isDirty}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
