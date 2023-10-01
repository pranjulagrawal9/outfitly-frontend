import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import {
  changeQuantity,
  changeSize,
  removeItem,
} from "../store/features/cart/cartSlice";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

function CartItem(item) {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [openQtyModal, setOpenQtyModal] = useState(false);

  const sizeModalRef = useRef(null);
  const QtyModalRef = useRef(null);
  const dispatch = useDispatch();

  function closeSizeModal(e) {
    const modalDimensions = sizeModalRef.current.getBoundingClientRect();
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    )
      setOpenSizeModal(false);
  }

  function closeQtyModal(e) {
    const modalDimensions = QtyModalRef.current.getBoundingClientRect();
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    )
      setOpenQtyModal(false);
  }

  return (
    <div className="border-2 rounded-md">
      <div className="flex gap-3 p-3 lg:p-5 lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-slate-500 lg:text-lg">{item.title}</h2>
          <div className="flex items-end gap-1">
            <h2 className="text-lg font-bold lg:text-xl">₹ {item.price}</h2>
            <h3 className="text-gray-400 line-through">₹ {item.mrp}</h3>
          </div>
          <div className="flex gap-5">
            <div
              className="bg-slate-100 px-3 py-2 rounded-md flex items-center gap-1 cursor-pointer"
              onClick={() => setOpenSizeModal(true)}
            >
              <h3>
                Size: <span className="font-bold">{item.selectedSize}</span>
              </h3>
              <AiOutlineDown size={12} />
            </div>
            {openSizeModal && (
              <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
                onClick={closeSizeModal}
              >
                <ul className="bg-white shadow-lg w-40" ref={sizeModalRef}>
                  <li className="text-center px-3 py-2 text-slate-500">
                    Select Size
                  </li>
                  {item?.availableSizes.map((size) => (
                    <li
                      className="text-center p-3 hover:bg-gray-200 cursor-pointer"
                      key={size}
                      onClick={() => {
                        dispatch(changeSize({ id: item.id, size }));
                        setOpenSizeModal(false);
                      }}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div
              className="bg-slate-100 px-3 py-2 rounded-md flex items-center gap-1 cursor-pointer"
              onClick={() => setOpenQtyModal(true)}
            >
              <h3>
                Qty: <span className="font-bold">{item.qty}</span>
              </h3>
              <AiOutlineDown size={12} />
            </div>
            {openQtyModal && (
              <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
                onClick={closeQtyModal}
              >
                <ul className="bg-white shadow-lg w-40" ref={QtyModalRef}>
                  <li className="text-center px-3 py-2 text-slate-500">
                    Select Quantity
                  </li>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
                    <li
                      className="text-center p-3 hover:bg-gray-200 cursor-pointer"
                      key={qty}
                      onClick={() => {
                        dispatch(changeQuantity({ id: item.id, qty }));
                        setOpenQtyModal(false);
                      }}
                    >
                      {qty}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          <Image
            src={
              process.env.NODE_ENV === "development"
                ? process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
                  item?.images.data[0].attributes.url
                : item?.images.data[0].attributes.url
            }
            alt={item?.images.data[0].attributes.alternativeText}
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex border-t-2 text-slate-500">
        <span
          className="flex-1 border-r-2 text-center py-4 cursor-pointer"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </span>
        <span className="flex-[2] text-center py-4 cursor-pointer">
          Move to Wishlist
        </span>
      </div>
    </div>
  );
}

export default CartItem;
