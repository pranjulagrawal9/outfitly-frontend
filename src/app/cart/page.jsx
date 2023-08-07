"use client";

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  
  return (
    <div className="px-5 mt-5 max-w-7xl mx-auto">
      <h2 className="mb-5">
        <span className="font-bold lg:text-lg">My Bag</span> 1 item
      </h2>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 lg:w-3/5">
          {cart?.map((item) => (
            <CartItem {...item} />
          ))}
        </div>

        <div className="lg:w-2/5 lg:border-2 h-fit">
          <div className="mb-24 lg:mb-0">
            <h2 className="uppercase font-bold bg-gray-200 pl-5 py-3">
              Price Summary
            </h2>
            <div className="px-5">
              <div className="flex justify-between py-5 border-b-2">
                <span>Total MRP (incl. of taxes)</span>
                <span>₹ 1099</span>
              </div>

              <div className="flex justify-between py-5 border-b-2">
                <span>Shipping Charges</span>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="flex justify-between py-5 font-bold">
                <span>Subtotal</span>
                <span>₹ 449</span>
              </div>
            </div>
          </div>

          <div className="flex fixed bottom-0 left-0 right-0 py-4 px-3 shadow-2xl bg-white lg:static lg:shadow-none">
            <div className="flex-1 flex flex-col justify-center">
              <h2>Total</h2>
              <h3 className="text-lg font-bold">₹ 449</h3>
            </div>
            <span className="flex-[2] uppercase text-center py-4 bg-[#42A2A2] text-white font-bold rounded-lg">
              Proceed to checkout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
