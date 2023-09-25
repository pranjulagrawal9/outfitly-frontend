"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";

function CartIcon() {
  const cart = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartCount = cart
      .map((item) => item.qty)
      .reduce((total, current) => total + current, 0);
    setCartCount(cartCount);
  }, [cart]);

  return (
    <Link href="/cart">
      <div className="lg:mr-10 relative">
        <BsBag size="24px" />
        {cartCount > 0 && (
          <div className="w-3 h-3 rounded-full bg-appPrimary text-white absolute -top-1 left-3 p-2.5 flex justify-center items-center text-sm">
            {cartCount}
          </div>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;
