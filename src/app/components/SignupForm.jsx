"use client";

import { cn } from "@/lib/utils";

import { Label } from "@/app/components/ui/label";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export function SignupForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const username= formData.email.split("@")[0];
    const response = await fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        username,
        email: formData.email,
        password: formData.password,
      }),
    });
    const jsonData = await response.json();
    console.log(jsonData);
    localStorage.setItem("jwt", jsonData.jwt);
    localStorage.setItem("user", JSON.stringify(jsonData.user));
    console.log(JSON.parse(localStorage.getItem("user")));

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-4 mb-5">
            <Label className="sr-only" htmlFor="email">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              disabled={isLoading}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
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
          <Button disabled={isLoading}>Continue</Button>
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
