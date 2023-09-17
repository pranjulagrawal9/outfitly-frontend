"use client";

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

function Slider() {
  const GetSliderImages = gql`
    {
      sliders {
        data {
          attributes {
            images {
              data {
                id
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `;
  const { data } = useQuery(GetSliderImages);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    if (data) {
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
    }
  }, [data]);

  return (
    <div className="h-40 md:h-60 lg:h-80 xl:h-96 mt-5">
      {data && (
        <swiper-container
          class="w-full h-full relative"
          ref={swiperRef}
          init="false"
          pagination-clickable="true"
          loop="true"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
        >
          {data?.sliders.data[0].attributes.images.data.map((slide) => (
            <swiper-slide key={slide.id}>
              <Image
                src={`http://127.0.0.1:1337${slide.attributes.url}`}
                fill="true"
                alt={slide.attributes.alternativeText}
                className="block w-full h-full object-cover"
                priority="true"
              />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </div>
  );
}

export default Slider;
