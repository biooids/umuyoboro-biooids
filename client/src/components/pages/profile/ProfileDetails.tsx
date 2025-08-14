// src/components/pages/profile/ProfileDetails.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SanitizedUserDto } from "@/lib/features/auth/authTypes";
import { format } from "date-fns";

interface ProfileDetailsProps {
  user: SanitizedUserDto;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * A component to display the user's profile information in a read-only view.
 */
export default function ProfileDetails({
  user,
  onEdit,
  onDelete,
}: ProfileDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Details</CardTitle>
        <CardDescription>
          This is your personal information. Keep it safe.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">Username</p>
          <p className="font-semibold">@{user.username}</p>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">
            Phone Number
          </p>
          <p className="font-semibold">{user.phone}</p>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">Role</p>
          <p className="font-semibold capitalize">{user.role.toLowerCase()}</p>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">
            Member Since
          </p>
          <p className="font-semibold">
            {format(new Date(user.createdAt), "MMMM d, yyyy")}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" onClick={onDelete}>
          Delete Account
        </Button>
        <Button onClick={onEdit}>Edit Profile</Button>
      </CardFooter>
    </Card>
  );
}
