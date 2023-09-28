"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImagesContainer({ productData }) {
  const [currMainImage, setCurrMainImage] = useState(0);
  return (
    <div className="flex flex-col md:flex-row-reverse md:flex-1 md:gap-5">
      <div className="w-full h-[500px] md:h-auto md:w-[85%]">
        <Image
          src={`${
            process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
            productData?.images.data[currMainImage].attributes.url
          }`}
          alt={
            productData?.images.data[currMainImage].attributes.alternativeText
          }
          width={0}
          height={0}
          sizes="100vw, (min-width: 768px) 50vw"
          className="w-full h-full object-cover md:object-contain md:object-top"
        />
      </div>
      <div className="flex w-full gap-5 mt-5 px-3 md:flex-col md:w-[15%] md:mt-0 md:px-0">
        {productData?.images.data.map(({ attributes, id }, idx) => (
          <div
            className={`flex-1 max-w-[20%] md:max-w-none md:flex-none cursor-pointer ${
              currMainImage == idx ? "border-2 border-sky-400" : ""
            }`}
            key={id}
            onClick={() => setCurrMainImage(idx)}
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + attributes.url
              }`}
              alt={attributes.alternativeText}
              width={0}
              height={0}
              sizes="20vw"
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
