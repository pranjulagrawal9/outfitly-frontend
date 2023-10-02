"use client";

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Image from "next/image";
import nothingInBag from "../../../public/nothingInBag.png";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "@/app/components/ui/skeleton";
import MainSpinner from "@/app/components/MainSpinner";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Cart() {
  const [isClient, setIsClient] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { totalItems, totalMRP, totalprice } = cart.reduce(
    (totals, item) => {
      totals.totalItems += item.qty;
      totals.totalMRP += item.mrp * item.qty;
      totals.totalprice += item.price * item.qty;
      return totals;
    },
    { totalItems: 0, totalMRP: 0, totalprice: 0 }
  );

  const discount = totalMRP - totalprice;
  useEffect(() => {
    setIsClient(true);
  }, []);

  async function handleCheckout() {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      router.replace("/login?ref=/cart");
      return;
    }
    const response = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + "/api/orders",
      {
        method: "POST",
        body: JSON.stringify({
          products: cart,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      sessionId: jsonData.stripeSession.id,
    });
    setIsLoading(false);
  }

  if (!isClient)
    return (
      <div>
        <div className="px-5 mt-5 max-w-7xl mx-auto lg:mt-20">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-5 lg:w-3/5">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>

            <div className="lg:w-2/5 lg:border-2 h-fit">
              <div>
                <Skeleton className="w-full h-10" />
                <div className="px-5">
                  <div className="flex justify-between py-5 border-b-2">
                    <Skeleton className="w-36 h-5" />
                    <Skeleton className="w-14 h-5" />
                  </div>
                  <div className="flex justify-between py-5 border-b-2">
                    <Skeleton className="w-36 h-5" />
                    <Skeleton className="w-14 h-5" />
                  </div>
                  <div className="flex justify-between py-5 border-b-2">
                    <Skeleton className="w-36 h-5" />
                    <Skeleton className="w-14 h-5" />
                  </div>
                  <div className="flex justify-between py-5 border-b-2">
                    <Skeleton className="w-36 h-5" />
                    <Skeleton className="w-14 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex fixed bottom-0 left-0 right-0 py-4 px-3 shadow-2xl bg-white lg:static lg:shadow-none">
                <div className="flex-1 flex flex-col justify-center">
                  <Skeleton className="w-20 h-5 mb-3" />
                  <Skeleton className="w-10 h-5" />
                </div>
                <Skeleton className="w-20 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return cart.length > 0 ? (
    <>
      <div className="px-5 mt-5 max-w-7xl mx-auto">
        <h2 className="mb-5">
          <span className="font-bold lg:text-lg">My Bag</span> {totalItems} item
          {totalItems > 1 && "(s)"}
        </h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-5 lg:w-3/5">
            {cart?.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>

          <div className="lg:w-2/5 lg:border-2 h-fit text-sm lg:text-base">
            <div>
              <h2 className="uppercase font-bold bg-gray-200 pl-5 py-3">
                Price Summary
              </h2>
              <div className="px-5">
                <div className="flex justify-between py-5 border-b-2">
                  <span>Total MRP (incl. of taxes)</span>
                  <span>₹{totalMRP}</span>
                </div>

                <div className="flex justify-between py-5 border-b-2">
                  <span>Shipping Charges</span>
                  <span className="text-green-600">FREE</span>
                </div>

                <div className="flex justify-between py-5 border-b-2">
                  <span>Bag Discount</span>
                  <span>- ₹{discount}</span>
                </div>

                <div className="flex justify-between py-5 font-bold">
                  <span>Subtotal</span>
                  <span>₹{totalprice}</span>
                </div>
              </div>
            </div>

            <div className="flex fixed bottom-0 left-0 right-0 py-4 px-3 shadow-2xl bg-white lg:static lg:shadow-none">
              <div className="flex-1 flex flex-col justify-center">
                <h2>Total</h2>
                <h3 className="text-base lg:text-lg font-bold">
                  ₹ {totalprice}
                </h3>
              </div>
              <span
                className="flex-[2] cursor-pointer uppercase text-center py-4 bg-appPrimary text-white font-bold rounded-lg"
                onClick={handleCheckout}
              >
                Proceed to checkout
              </span>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-30">
          <MainSpinner />
        </div>
      )}
    </>
  ) : (
    <div className="min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <Image
          src={nothingInBag}
          width={200}
          height={200}
          alt="nothing in the bag"
          className="w-40 lg:w-auto"
        />
        <h2 className="text-lg lg:text-xl">Nothing in the bag</h2>
        <Link href="/">
          <div className="text-xl border-2 border-appPrimary py-2 px-3 rounded-md text-appPrimary font-medium cursor-pointer">
            Continue Shopping
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
