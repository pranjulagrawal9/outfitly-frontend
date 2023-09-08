"use client";

import { cn } from "@/lib/utils";

import { Label } from "@/app/components/ui/label";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: formData.email,
        password: formData.password,
      }),
    });
    const jsonData = await response.json();
    console.log(jsonData);
    if (jsonData.error) {
      console.log(jsonData.error.message);
      setIsLoading(false);
      return;
    }
    localStorage.setItem("jwt", jsonData.jwt);

    setIsLoading(false);
    if (searchParams.get("ref")) router.replace(searchParams.get("ref"));
    else router.replace("/");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-4 mb-5">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              disabled={isLoading}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              disabled={isLoading}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <Button disabled={isLoading}>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading} asChild>
        <Link
          href={`${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/connect/google`}
        >
          <FcGoogle className="mr-2" size={18} />
          <span className="uppercase">Google</span>
        </Link>
      </Button>
    </div>
  );
}
