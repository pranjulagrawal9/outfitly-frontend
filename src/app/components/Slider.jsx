"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

function Slider({ data }) {
  const swiperRef = useRef(null);
  console.log(data);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
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
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container
      class="w-full h-full relative"
      ref={swiperRef}
      init="false"
      pagination-clickable="true"
      loop="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
    >
      {data?.map((slide) => (
        <swiper-slide key={slide.id}>
          <Image
            src={
              process.env.NODE_ENV === "development"
                ? process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
                  slide.attributes.url
                : slide.attributes.url
            }
            fill="true"
            alt={slide.attributes.alternativeText}
            className="block w-full h-full object-cover"
            priority="true"
          />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default Slider;
