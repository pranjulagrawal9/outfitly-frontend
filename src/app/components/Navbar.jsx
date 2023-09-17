"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import logo from "../../../public/logo.png";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import ProfileDropdown from "./ProfileDropdown";
import { Heart } from "lucide-react";
import { removeUser } from "../store/features/user/userSlice";
import { redirect, useRouter } from "next/navigation";
import CartIcon from "./CartIcon";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const GetMainCategories = gql`
    {
      maincategories {
        data {
          id
          attributes {
            name
            categories {
              data {
                id
                attributes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(GetMainCategories);
  const mainCategories = data?.maincategories.data;

  function handleLogout() {
    localStorage.removeItem("jwt");
    dispatch(removeUser());
    setIsMenuOpen(false);
    router.replace("/login");
  }

  useEffect(() => {
    const cartCount = cart
      .map((item) => item.qty)
      .reduce((total, current) => total + current, 0);
    setCartCount(cartCount);
  }, [cart]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="fixed left-0 top-0 right-0 z-20">
      <div className="select-none bg-white overflow-auto shadow-md lg:flex lg:overflow-visible lg:h-16 lg:items-center lg:justify-between w-screen">
        <div className="flex justify-between p-3 h-16 shadow-md lg:shadow-none lg:h-full lg:ml-10 items-center">
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
              document.body.classList.toggle("nav-open");
            }}
          >
            {isMenuOpen ? (
              <RxCross1 fontSize="32px" />
            ) : (
              <RxHamburgerMenu fontSize="32px" />
            )}
          </div>

          <Link href="/">
            <div className="w-32 relative">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          <div className="lg:hidden">
            <CartIcon cartCount={cartCount} />
          </div>
        </div>

        <div
          className={`p-5 h-[calc(100vh-64px)] hidden lg:mr-20 ${
            isMenuOpen ? "!flex flex-col" : ""
          } lg:flex lg:flex-row lg:h-fit lg:p-0 lg:gap-10`}
        >
          {isClient && !user && (
            <div className="border-b-2 lg:hidden">
              <h2 className="text-lg font-semibold mb-3">Welcome Guest</h2>
              <Link href="/login">
                <p className="mb-3 text-appPrimary font-bold uppercase">
                  Login / Sign Up
                </p>
              </Link>
            </div>
          )}
          {isClient && user && (
            <h1 className="text-lg font-bold border-b-2 pb-4 lg:hidden">
              Hello, {user.name.split(" ")[0]}
            </h1>
          )}
          {mainCategories?.map((mainCategory) => (
            <MenuItem
              title={mainCategory.attributes.name}
              key={mainCategory.id}
              categories={mainCategory.attributes.categories.data}
              setIsMenuOpen={setIsMenuOpen}
            />
          ))}

          {isClient && user && (
            <div className="mt-5 flex flex-col gap-5 lg:hidden">
              <h2 className="cursor-pointer">My Account</h2>
              <h2
                onClick={() => router.push("/myorders")}
                className="cursor-pointer"
              >
                My Orders
              </h2>
              <h2 className="cursor-pointer">My Wishlist</h2>
              <h2
                onClick={handleLogout}
                className="text-appPrimary cursor-pointer font-bold uppercase"
              >
                Logout
              </h2>
            </div>
          )}
        </div>

        <div className="flex gap-10 items-center">
          {isClient && user ? (
            <div className="hidden lg:block">
              <ProfileDropdown />
            </div>
          ) : (
            <Link href="/login">
              <span className="hidden lg:block text-appPrimary font-bold uppercase">
                Login
              </span>
            </Link>
          )}

          <Heart className="cursor-pointer hidden lg:block" />
          <div className="max-lg:hidden">
            <CartIcon cartCount={cartCount} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
