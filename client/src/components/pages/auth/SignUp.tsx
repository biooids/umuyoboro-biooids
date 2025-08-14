// src/components/pages/auth/SignUp.tsx
"use client";

import React, { useState } from "react"; // --- UPDATE: Import useState
import Link from "next/link";
import { Loader2, AlertCircle, Eye, EyeOff } from "lucide-react"; // --- UPDATE: Import Eye and EyeOff
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  signUpSchema,
  SignUpFormValues,
} from "@/lib/features/auth/auth.schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn, getApiErrorMessage } from "@/lib/utils/utils";
import { useFocusOnError } from "@/lib/hooks/useFocusOnError";
import { useSignupMutation } from "@/lib/features/auth/authApiSlice";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { setCredentials } from "@/lib/features/auth/authSlice";

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signup, { isLoading }] = useSignupMutation();
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // --- ADD: State for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // --- ADD: State for confirm password

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  useFocusOnError(errors, setFocus);

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    setFormError(null);
    try {
      const response = await signup(data).unwrap();
      dispatch(setCredentials({ token: response.data.accessToken }));
      router.push("/");
    } catch (err) {
      setFormError(getApiErrorMessage(err));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md bg-card border-border shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            Create Your Account
          </CardTitle>
          <CardDescription>
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-ring rounded-sm"
            >
              Log In
            </Link>
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                type="text"
                placeholder="e.g., ada_lovelace"
                autoComplete="username"
                {...register("username")}
                className={cn(errors.username && "border-destructive")}
                aria-invalid={!!errors.username}
              />
              {errors.username && (
                <p className="text-destructive text-xs">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="e.g., 0788123456"
                autoComplete="tel"
                {...register("phone")}
                className={cn(errors.phone && "border-destructive")}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-destructive text-xs">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  {...register("password")}
                  className={cn(
                    "pr-10",
                    errors.password && "border-destructive"
                  )}
                  aria-invalid={!!errors.password}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 h-full px-3 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
              </div>
              {errors.password && (
                <p className="text-destructive text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                  className={cn(
                    "pr-10",
                    errors.confirmPassword && "border-destructive"
                  )}
                  aria-invalid={!!errors.confirmPassword}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 h-full px-3 text-muted-foreground hover:text-foreground"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="text-destructive text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUpForm;
