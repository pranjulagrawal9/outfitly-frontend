"use client";

import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { Heart } from "lucide-react";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DesktopDropdown() {
  const user = useSelector((state) => state.user);
  const pathName = usePathname();
  const [onClient, setOnClient] = useState(false);

  useEffect(() => {
    setOnClient(true);
  }, []);

  return (
    <div className="flex gap-10 items-center">
      {onClient && user && (
        <div className="hidden lg:block">
          <ProfileDropdown />
        </div>
      )}

      {onClient && !user && (
        <Link
          href={`/login?ref=${pathName}`}
          className={
            pathName.startsWith("/login") || pathName.startsWith("/signup")
              ? "hidden"
              : ""
          }
        >
          <span className="hidden lg:block text-appPrimary font-bold uppercase">
            Login
          </span>
        </Link>
      )}

      <Heart className="cursor-pointer hidden lg:block" />
      <div className="max-lg:hidden">
        <CartIcon />
      </div>
    </div>
  );
}
