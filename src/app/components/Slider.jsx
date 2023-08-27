"use client";

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
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

  return (
    <div className="h-40 md:h-60 lg:h-80 xl:h-96">
      {data && (
        <swiper-container
          class="w-full h-full relative"
          navigation="true"
          pagination="true"
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
