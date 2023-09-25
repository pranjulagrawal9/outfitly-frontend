import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Hamburger from "./Hamburger";
import MenuBar from "./MenuBar";
import DesktopDropdown from "./DesktopDropdown";
import getNavbarData from "@/lib/getNavbarData";

export default async function Navbar() {
  const mainCategories = await getNavbarData();

  return (
    <nav className="fixed left-0 top-0 right-0 z-20">
      <div className="select-none bg-white overflow-auto shadow-md lg:flex lg:overflow-visible lg:h-16 lg:items-center lg:justify-between w-screen">
        <div className="flex justify-between p-3 h-16 shadow-md lg:shadow-none lg:h-full lg:ml-10 items-center">
          <Hamburger />

          <Link href="/">
            <div className="w-32 relative">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          <div className="lg:hidden">
            <CartIcon />
          </div>
        </div>

        <MenuBar mainCategories={mainCategories} />

        <DesktopDropdown />
      </div>
    </nav>
  );
}
