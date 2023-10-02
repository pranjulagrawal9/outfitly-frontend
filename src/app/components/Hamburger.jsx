"use client";

import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/features/menu/menuSlice";

export default function Hamburger() {
  const isMenuOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <div
      className="cursor-pointer lg:hidden"
      onClick={() => {
        dispatch(toggleMenu());
        document.body.classList.toggle("nav-open");
      }}
    >
      {isMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
    </div>
  );
}
