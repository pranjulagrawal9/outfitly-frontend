"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

function ProductsSlider({ title }) {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperContainerRef.current;
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();
  }, []);

  return (
    <section className="mt-10">
      <h2 className="text-center text-4xl font-bold tracking-wider mb-5">
        {title}
      </h2>
      <swiper-container
        init="false"
        class="w-full h-96 p-2"
        ref={swiperContainerRef}
      >
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-full">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9793511/2019/6/15/37ac1de4-2d8c-4e18-a431-a89cdf4695dd1560580175558-Roadster-Men-Black-Solid-Round-Neck-T-shirt-8361560580174560-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "80%" }}
            />
            <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
              Roadster Men Black Pure Cotton T-shirt
            </h2>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
  );
}

export default ProductsSlider;
