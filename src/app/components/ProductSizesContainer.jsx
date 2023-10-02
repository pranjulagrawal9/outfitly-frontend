"use client";

import { useState } from "react";
import ProductButtons from "./ProductButtons";

export default function ProductSizesContainer({ productData, productId }) {
  const [selectedSize, setSelectedSize] = useState();
  return (
    <>
      <div className="mt-5">
        <h2 className="font-semibold mb-3 uppercase lg:text-lg">Select Size</h2>
        <div className="flex gap-5 overflow-auto scrollbar-hide">
          {productData?.availableSizes?.map((size) => (
            <div
              className={`border shrink-0 rounded-lg w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:text-xl border-gray-600 cursor-pointer ${
                selectedSize === size ? "bg-black text-white border-none" : ""
              }`}
              key={size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <ProductButtons
        selectedSize={selectedSize}
        productData={productData}
        productId={productId}
      />
    </>
  );
}
