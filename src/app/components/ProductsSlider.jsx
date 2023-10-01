"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
register();
import Link from "next/link";

function ProductsSlider({ products }) {
  const swiperContainerRef = useRef(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  useEffect(() => {
    const swiperEl = swiperContainerRef.current;

    Object.assign(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      },
      injectStyles: [
        `
            .swiper-button-next,
            .swiper-button-prev {
              color: #ff5b53;
              background-color: white;
              padding: 12px 5px;
              border-radius: 4px;
              display: none;
            }
            .swiper-pagination-bullet{
              background-color: #ff5b53;
            }

            @media (min-width: 768px){
              .swiper-button-next,
            .swiper-button-prev{
              display: block;
            }
            }
        `,
      ],
    });

    swiperEl.initialize();
    setSwiperInitialized(true);
  }, []);

  return (
    <swiper-container
      init="false"
      class={`w-full p-2 ${swiperInitialized ? "block" : "hidden"}`}
      ref={swiperContainerRef}
    >
      {products.map((product) => (
        <swiper-slide key={product.id}>
          <Link
            href={`/${product.attributes.maincategories.data[0].attributes.name.toLowerCase()}-${
              product.attributes.categories.data[0].attributes.slug
            }/${product.attributes.slug}-${product.id}`}
          >
            <Image
              src={
                process.env.NODE_ENV === "development"
                  ? process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
                    product.attributes.images.data[0].attributes.url
                  : product.attributes.images.data[0].attributes.url
              }
              width={300}
              height={400}
              alt={product.attributes.title}
              sizes="33vw, (min-width: 640px) 25vw, (min-width: 768) 20vw, (min-width: 1024px) 20vw"
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
            <h2 className="text-sm md:text-base lg:text-lg font-medium md:mt-2">
              {product.attributes.title.substring(0, 20) + "..."}
            </h2>
          </Link>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default ProductsSlider;
