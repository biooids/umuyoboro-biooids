// src/components/pages/profile/ProfileDetails.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SanitizedUserDto } from "@/lib/features/auth/authTypes";
import { format } from "date-fns";
import { Pen } from "lucide-react";

interface ProfileDetailsProps {
  user: SanitizedUserDto;
  onEdit: () => void;
}

/**
 * A component to display the user's profile information in a clean, read-only format.
 * The "Edit" button is conveniently located in the header.
 */
export default function ProfileDetails({ user, onEdit }: ProfileDetailsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Profile Details</CardTitle>
          <CardDescription>
            Your personal information is displayed below.
          </CardDescription>
        </div>
        <Button variant="outline" size="icon" onClick={onEdit}>
          <Pen className="h-4 w-4" />
          <span className="sr-only">Edit Profile</span>
        </Button>
      </CardHeader>
      <CardContent>
        <dl className="divide-y divide-border">
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-muted-foreground">
              Username
            </dt>
            <dd className="col-span-2 text-sm">@{user.username}</dd>
          </div>
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-muted-foreground">
              Phone Number
            </dt>
            <dd className="col-span-2 text-sm">{user.phone}</dd>
          </div>
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-muted-foreground">Role</dt>
            <dd className="col-span-2 text-sm capitalize">
              {user.role.toLowerCase()}
            </dd>
          </div>
          <div className="py-4 grid grid-cols-3 gap-4">
            <dt className="text-sm font-medium text-muted-foreground">
              Member Since
            </dt>
            <dd className="col-span-2 text-sm">
              {format(new Date(user.createdAt), "MMMM d, yyyy")}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
