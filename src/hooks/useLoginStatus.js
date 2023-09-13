import { useEffect, useState } from "react";

export function useLoginStatus() {
  const jwt = localStorage.getItem("jwt");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  useEffect(() => {
    async function getLoginStatus() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/users/me`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        const jsonData = await res.json();
        jsonData.error ? setIsUserLoggedIn(false) : setIsUserLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    }
    getLoginStatus();
  }, [jwt]);

  return isUserLoggedIn;
}
