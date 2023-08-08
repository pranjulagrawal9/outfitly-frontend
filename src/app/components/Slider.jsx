"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

function Slider() {
  const slides = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
  ];
  const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener("progress", (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener("slidechange", (e) => {
  //     console.log("slide changed");
  //   });
  // }, []);

  return (
    <swiper-container
      class="w-full h-40 relative z-10 mx-auto md:h-60 lg:h-80 xl:h-96"
      ref={swiperElRef}
      navigation="true"
      pagination="true"
      pagination-clickable="true"
      loop="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
    >
      {slides.map((slide, idx) => (
        <swiper-slide key={idx} data-swiper-slide-index={idx}>
          <Image
            src={slide}
            fill="true"
            alt="carousel"
            className="block w-full h-full object-cover"
            priority="true"
          />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default Slider;
