"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../../public/logo.png";
import Image from "next/image";
import MenuItem from "./MenuItem";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 right-0">
      <div className="select-none bg-white overflow-auto shadow-md lg:flex lg:gap-32 lg:overflow-visible lg:h-16 lg:items-center">
        <div className="flex justify-between p-3 h-16 shadow-md lg:shadow-none lg:h-full lg:ml-5">
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

          <div className="w-10 relative right-1/2 translate-x-1/2">
            <Image src={logo} />
          </div>
        </div>

        <div
          className={`p-5 h-[calc(100vh-64px)] hidden ${
            isMenuOpen ? "!flex flex-col" : ""
          } lg:flex lg:flex-row lg:h-fit lg:p-0 lg:gap-10`}
        >
          <MenuItem title="Men" />
          <MenuItem title="Women" />
          <MenuItem title="Kids" />
          <MenuItem title="Home & Living" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
