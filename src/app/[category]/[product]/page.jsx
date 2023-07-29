"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";

function Product() {
  const productImages = [
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10307423/2019/11/7/6700b1db-63b4-4e2c-b937-48a52277417b1573110418700-Roadster-Men-Tshirts-241573110416534-3.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10307423/2019/11/7/2cea7c8a-57f6-4f94-aa7e-bbd3ed98029c1573110418656-Roadster-Men-Tshirts-241573110416534-4.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10307423/2019/11/7/5058ade6-1476-4bc1-ad8c-bbb9bb5653d11573110418743-Roadster-Men-Tshirts-241573110416534-2.jpg",
  ];

  const [currMainImage, setCurrMainImage] = useState(0);

  return (
    <div className="flex flex-col md:flex-row md:mx-10 md:gap-7 md:mt-10">
      <div className="flex flex-col md:flex-row-reverse md:flex-1 md:gap-5">
        <div className="w-full h-[500px] md:h-auto md:w-[85%]">
          <Image
            src={productImages[currMainImage]}
            width={0}
            height={0}
            sizes="100vw, (min-width: 768px) 50vw"
            className="w-full h-full object-cover md:object-contain md:object-top"
          />
        </div>
        <div className="flex w-full gap-5 mt-5 px-3 md:flex-col md:w-[15%] md:mt-0 md:px-0">
          {productImages?.map((image, idx) => (
            <div
              className={`flex-1 md:flex-none ${
                currMainImage == idx ? "border-2 border-sky-400" : ""
              }`}
              key={idx}
              onClick={() => setCurrMainImage(idx)}
            >
              <Image
                src={image}
                width={0}
                height={0}
                sizes="20vw"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 mt-5 md:flex-1 md:mt-0">
        <h2 className="font-bold text-lg lg:text-2xl md:mb-2">Bewacoof</h2>
        <h3 className="mb-3 lg:text-xl">
          Men's White World Peace Graphic Printed T-shirt
        </h3>
        <div className="bg-slate-100 bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm border-2 w-fit">
          <span>4.2</span>
          <AiFillStar className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mt-3">₹449</h2>

        <div className="mt-5">
          <h2 className="font-semibold mb-3 uppercase lg:text-lg">
            Select Size
          </h2>
          <div className="flex gap-5">
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              S
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              M
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              L
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              XL
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              2XL
            </div>
          </div>
        </div>

        <div className="flex gap-4 uppercase font-bold mt-5">
          <div className="flex justify-center bg-[#ffd84d] flex-1 py-3 rounded">
            <div className="flex gap-3 items-center">
              <PiShoppingBagLight size="24px" />
              <span>Add to bag</span>
            </div>
          </div>
          <div className="flex-1 border rounded border-gray-400 flex justify-center py-3">
            <div className="flex gap-3 items-center">
              <AiOutlineHeart size="24px" />
              <span>Wishlist</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-10 lg:text-lg">
          <h2 className="font-bold text-lg lg:text-xl uppercase">
            Product details
          </h2>
          <p>
            White and Mustard yellow colourblocked T-shirt, has a round neck,
            and short sleeves
          </p>
          <div>
            <h3 className="font-bold mb-1">Size & Fit</h3>
            <p>The model (height 6') is wearing a size M</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Material & Care</h3>
            <p>Material: 100% cotton, Machine Wash</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
