"use client";

import { cn } from "@/lib/utils";

import { Label } from "@/app/components/ui/label";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { signupValidationSchema } from "../validations/signupValidationSchema";
import { useFormik } from "formik";
import { ClipLoader } from "react-spinners";
import { addUser } from "../store/features/user/userSlice";
import { useDispatch } from "react-redux";
import GoogleButton from "./GoogleButton";

export function SignupForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: handleSignup,
  });

  async function handleSignup(values) {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          username: values.email,
          email: values.email,
          password: values.password,
        }),
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
    if (jsonData.error) {
      console.log(jsonData.error.message);
      setIsLoading(false);
      setFormError(jsonData.error.message);
      return;
    }
    localStorage.setItem("jwt", jsonData.jwt);
    dispatch(addUser(jsonData.user));
    if (searchParams.get("ref")) router.replace(searchParams.get("ref"));
    else router.replace("/");
  }

  function clearFormError() {
    if (formError) setFormError(null);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              onFocus={clearFormError}
              className="text-base"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm font-medium">
                {formik.errors.name}
              </div>
            )}

            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              disabled={isLoading}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onFocus={clearFormError}
              className="text-base"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm font-medium">
                {formik.errors.email}
              </div>
            )}

            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              disabled={isLoading}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onFocus={clearFormError}
              className="text-base"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm font-medium">
                {formik.errors.password}
              </div>
            )}

            {formError && (
              <div className="text-red-500 text-sm font-medium">
                {formError}
              </div>
            )}
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            className="bg-appSecondary h-12 lg:text-lg hover:bg-appSecondary"
          >
            {isLoading && (
              <ClipLoader
                color="rgba(255, 255, 255, 1)"
                size={22}
                className="mr-3"
              />
            )}
            Continue
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

      <GoogleButton />
    </div>
  );
}
