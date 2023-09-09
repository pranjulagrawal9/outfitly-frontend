"use client";

import { addUser } from "@/app/store/features/user/userSlice";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Page() {
  const searchparams = useSearchParams();
  const access_token = searchparams.get("access_token");
  const router = useRouter();
  const dispatch= useDispatch();
  console.log(access_token);
  console.log(process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL);

  useEffect(() => {
    async function request() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/auth/google/callback?access_token=${access_token}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      localStorage.setItem("jwt", jsonData.jwt);
      dispatch(addUser(jsonData.user));
      router.replace("/");
    }
    request();
  });

  return <div>Loading...</div>;
}

export default Page;
