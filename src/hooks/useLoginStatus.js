import { useEffect, useState } from "react";

export function useLoginStatus() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
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
  }, []);

  return isUserLoggedIn;
}
