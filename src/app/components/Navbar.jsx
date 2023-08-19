"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import logo from "../../../public/logo.png";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartCount = cart
    .map((item) => item.qty)
    .reduce((total, current) => total + current, 0);
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

  return (
    <nav className="fixed left-0 top-0 right-0 z-20">
      <div className="select-none bg-white overflow-auto shadow-md lg:flex lg:overflow-visible lg:h-16 lg:items-center lg:justify-between">
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

          <div className="w-10 relative">
            <Image src={logo} alt="logo" />
          </div>

          <div className="lg:hidden relative">
            <BsBag size="24px" />
            <div className="w-3 h-3 rounded-full bg-yellow-300 absolute -top-1 left-3 p-2.5 flex justify-center items-center text-sm">
              {cartCount}
            </div>
          </div>
        </div>

        <div
          className={`p-5 h-[calc(100vh-64px)] hidden lg:mr-20 ${
            isMenuOpen ? "!flex flex-col" : ""
          } lg:flex lg:flex-row lg:h-fit lg:p-0 lg:gap-10`}
        >
          {mainCategories?.map((mainCategory) => (
            <MenuItem title={mainCategory.attributes.name} key={mainCategory.id} categories={mainCategory.attributes.categories.data} />
          ))}
        </div>

        <Link href="/cart">
          <div className="max-lg:hidden mr-10 relative">
            <BsBag size="24px" />
            {cartCount > 0 && (
              <div className="w-3 h-3 rounded-full bg-yellow-300 absolute -top-1 left-3 p-2.5 flex justify-center items-center text-sm">
                {cartCount}
              </div>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
