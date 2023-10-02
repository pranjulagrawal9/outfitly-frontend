"use client";

import Link from "next/link";
import { SignupForm } from "@/app/components/SignupForm";
import { redirect } from "next/navigation";
import { useLoginStatus } from "@/hooks/useLoginStatus";
import Image from "next/image";
import shoppingImg from "../../../public/shopping.webp";

function Signup() {
  const isUserLoggedIn = useLoginStatus();

  if (isUserLoggedIn === false)
    return (
      <>
        <div className="container min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-64px)] mt-5 relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex items-center bg-gradient-to-t from-orange-200 to-white">
            <h2 className="text-appPrimary tracking-wider mt-12 text-3xl font-bold mx-5">
              Welcome to the world of Outfitly!
            </h2>
            <Image
              src={shoppingImg}
              alt="image"
              width={500}
              height={500}
              className="w-4/5 h-auto absolute bottom-10"
            />
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 items-center">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-appSecondary">
                  Create your account
                </h1>
                <p className="text-muted-foreground text-sm lg:text-base">
                  for Latest trends, exciting offers and everything Outfitly!
                </p>
              </div>
              <div className="sm:w-[400px]">
                <SignupForm />
                <p className="px-8 mt-5 text-center text-xs lg:text-sm text-muted-foreground">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else if (isUserLoggedIn === true) redirect("/");
  else
    return <div className="h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)]"></div>;
}

export default Signup;
