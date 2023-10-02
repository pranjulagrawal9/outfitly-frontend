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
        <BsBag className="w-5 h-5 lg:w-6 lg:h-6" />
        {cartCount > 0 && (
          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-appPrimary text-white absolute -top-1 left-3 flex justify-center items-center text-sm">
            {cartCount}
          </div>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;
