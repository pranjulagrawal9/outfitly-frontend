"use client";

import { useState } from "react";
import ProductButtons from "./ProductButtons";

export default function ProductSizesContainer({ productData, productId }) {
  const [selectedSize, setSelectedSize] = useState();
  return (
    <>
      <div className="mt-5">
        <h2 className="font-semibold mb-3 uppercase lg:text-lg">Select Size</h2>
        <div className="flex gap-5">
          {productData?.availableSizes?.map((size) => (
            <div
              className={`border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600 cursor-pointer ${
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
