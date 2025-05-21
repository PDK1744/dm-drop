// app/auth-pages/sign-up/page.js
"use client";

import { signInAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6">
      <h1 className="text-2xl font-bold text-center font-space-grotesk">Create your account</h1>

      <form className="space-y-4">
        

        <div>
          <Label htmlFor="email" className="mb-2">Email Address</Label>
          <Input name="email" placeholder="you@example.com" required />
        </div>

        <div>
          <Label htmlFor="password" className="mb-2">Password</Label>
          <Input id="password" type="password" name="password"  placeholder="Your password" required />
          <Link
            className="text-xs text-foreground underline "
            href="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>

        

        <Button type="submit" formAction={signInAction} className="w-full">
          Sign In →
        </Button>
      </form>

      <p className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/auth-pages/sign-up" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>

      <p className="text-xs text-center text-gray-500">
        By signing up, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
}
