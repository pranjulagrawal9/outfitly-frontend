"use client";

import Link from "next/link";
import MenuItem from "./MenuItem";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../store/features/menu/menuSlice";
import { useEffect, useState } from "react";
import { removeUser } from "../store/features/user/userSlice";

export default function MenuBar({ mainCategories }) {
  const pathName = usePathname();
  const user = useSelector((state) => state.user);
  const isMenuOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const router = useRouter();
  const [onClient, setOnClient] = useState(false);

  function handleLogout() {
    localStorage.removeItem("jwt");
    dispatch(removeUser());
    dispatch(closeMenu());
    router.replace("/login");
  }

  useEffect(() => {
    setOnClient(true);
  }, []);

  return (
    <div
      className={`p-5 h-[calc(100vh-56px)] hidden lg:mr-20 ${
        onClient && isMenuOpen && "!flex flex-col"
      } lg:flex lg:flex-row lg:h-fit lg:p-0 lg:gap-10`}
    >
      {onClient && !user && (
        <div className="border-b-2 lg:hidden">
          <h2 className="text-lg font-semibold mb-3">Welcome Guest</h2>
          <Link
            href="/login"
            className={
              pathName.startsWith("/login") || pathName.startsWith("/signup")
                ? "hidden"
                : ""
            }
            onClick={() => dispatch(closeMenu())}
          >
            <p className="mb-3 text-appPrimary font-bold uppercase">
              Login / Sign Up
            </p>
          </Link>
        </div>
      )}

      {onClient && user && (
        <h1 className="text-lg font-bold border-b-2 pb-4 lg:hidden">
          Hello, {user.name.split(" ")[0]}
        </h1>
      )}

      {mainCategories?.map((mainCategory) => (
        <MenuItem
          title={mainCategory.attributes.name}
          key={mainCategory.id}
          categories={mainCategory.attributes.categories.data}
        />
      ))}

      {onClient && user && (
        <div className="mt-5 flex flex-col gap-5 lg:hidden">
          <h2 className="cursor-pointer">My Account</h2>
          <h2
            onClick={() => {
              router.push("/myorders");
              dispatch(closeMenu());
            }}
            className="cursor-pointer"
          >
            My Orders
          </h2>
          <h2 className="cursor-pointer">My Wishlist</h2>
          <h2
            onClick={handleLogout}
            className="text-appPrimary mb-5 cursor-pointer font-bold uppercase"
          >
            Logout
          </h2>
        </div>
      )}
    </div>
  );
}
