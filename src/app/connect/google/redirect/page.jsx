"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function page() {
  const searchparams = useSearchParams();
  const access_token = searchparams.get("access_token");
  const router = useRouter();
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
      localStorage.setItem("user", JSON.stringify(jsonData.user));
      console.log(JSON.parse(localStorage.getItem("user")));
      router.replace("/");
    }
    request();
  }, [searchparams]);

  return <div>Loading...</div>;
}

export default page;
