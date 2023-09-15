"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animation_tick from "../../../../public/animation_tick.json";
import animation_cross from "../../../../public/animation_cross.json";
import { Button } from "@/app/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearCart } from "@/app/store/features/cart/cartSlice";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
function OrderStatus() {
  const user = useSelector((state) => state.user);
  const [isClient, setIsClient] = useState(false);
  const isOrderSuccess =
    useSearchParams().get("success") === "true" ? true : false;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOrderSuccess) dispatch(clearCart());
  }, [isOrderSuccess]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col gap-3 max-w-xs lg:max-w-none items-center">
        {isOrderSuccess ? (
          <Player
            autoplay
            keepLastFrame
            src={animation_tick}
            style={{ height: "200px", width: "200px" }}
          ></Player>
        ) : (
          <Player
            autoplay
            loop
            src={animation_cross}
            style={{ height: "200px", width: "200px" }}
          ></Player>
        )}
        {isClient && <h1 className="lg:text-lg mt-2">Hey, {user?.name}</h1>}
        <h2
          className={`uppercase text-lg lg:text-xl font-semibold ${
            isOrderSuccess ? "text-green-700" : "text-red-700"
          }`}
        >
          {isOrderSuccess ? "Your Order is confirmed" : "Order Failed!"}
        </h2>
        <p className="lg:text-lg text-center">
          {isOrderSuccess
            ? "We will send you a shipping confirmation email as soon as your order ships."
            : "We could not acquire the payment"}
        </p>
        <Link href={isOrderSuccess ? "/" : "/cart"}>
          <Button className="mt-3 capitalize">
            {isOrderSuccess ? "my orders" : "Try Again"}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OrderStatus;
