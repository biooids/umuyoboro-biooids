// src/components/pages/auth/Login.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, LoginFormValues } from "@/lib/features/auth/auth.schemas";
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
import { useLoginMutation } from "@/lib/features/auth/authApiSlice";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { setCredentials } from "@/lib/features/auth/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  useFocusOnError(errors, setFocus);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setFormError(null);
    try {
      const response = await login(data).unwrap();
      // CHANGE: Dispatch both the user object and the token to the store.
      dispatch(
        setCredentials({
          user: response.data.user,
          token: response.data.accessToken,
        })
      );
      // Redirect to the home page on successful login.
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
            Urakza neza k'Umuyoboro!
          </CardTitle>
          <CardDescription>
            Niba uri mushya ahangaha, kanda aha <br />
            <Link
              href="/auth/signup"
              className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-ring rounded-sm"
            >
              👉 Sign Up
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

            {/* --- CHANGE: The login field is now 'phone' instead of 'username' --- */}
            <div className="space-y-1.5">
              <Label htmlFor="phone">Numero ya Phone </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
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
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  {...register("password")}
                  className={cn(
                    "pr-10", // Add padding for the icon
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
          </CardContent>

          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full mt-5">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Logging In...
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
