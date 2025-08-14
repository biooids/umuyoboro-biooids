// src/components/pages/profile/DangerZone.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DangerZoneProps {
  onDelete: () => void;
}

/**
 * A dedicated, visually distinct section for irreversible, dangerous actions.
 * This improves safety and user confidence.
 */
export default function DangerZone({ onDelete }: DangerZoneProps) {
  return (
    <Card className="border-destructive">
      <CardHeader>
        <CardTitle className="text-destructive">Danger Zone</CardTitle>
        <CardDescription>
          These actions are permanent and cannot be undone. Please proceed with
          caution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold">Delete Your Account</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Once you delete your account, you will lose all of your data,
          including exam history and progress.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={onDelete}>
          Delete Account
        </Button>
      </CardFooter>
    </Card>
  );
}
