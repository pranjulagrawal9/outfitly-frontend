"use client";

import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "../store/features/cart/cartSlice";

import "react-toastify/dist/ReactToastify.min.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductButtons({
  selectedSize,
  productData,
  productId,
}) {
  const cart = useSelector((state) => state.cart);
  const [itemInCart, setItemInCart] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const customId = "custom-id-for-toast";

  const notify = () => {
    toast.info("Please select your size!", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === productId)
      ? true
      : false;
    setItemInCart(itemInCart);
  }, [cart]);

  return (
    <div className="flex gap-4 uppercase font-bold mt-5">
      <div
        className="flex justify-center bg-appPrimary text-white flex-1 py-3 rounded cursor-pointer"
        onClick={() =>
          !itemInCart
            ? !selectedSize
              ? notify()
              : dispatch(
                  addToCart({ ...productData, id: productId, selectedSize })
                )
            : router.push("/cart")
        }
      >
        <div className="flex gap-3 items-center">
          <PiShoppingBagLight size="24px" />
          <span>{itemInCart ? "Go to bag" : "Add to bag"}</span>
        </div>
      </div>
      <ToastContainer />
      <div className="flex-1 border rounded border-gray-400 flex justify-center py-3 cursor-pointer">
        <div className="flex gap-3 items-center">
          <AiOutlineHeart size="24px" />
          <span>Wishlist</span>
        </div>
      </div>
    </div>
  );
}
