"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

function ProductsSlider({ title }) {
  const swiperContainerRef = useRef(null);
  const filterByObj =
    title === "BestSellers"
      ? { bestseller: { eq: true } }
      : { trending: { eq: true } };
  const QUERY = gql`
    query GetProducts($filterByObj: ProductFiltersInput!) {
      products(filters: $filterByObj) {
        data {
          id
          attributes {
            images {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            title
            maincategories {
              data {
                attributes {
                  name
                }
              }
            }
            categories {
              data {
                attributes {
                  slug
                }
              }
            }
            slug
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(QUERY, {
    variables: { filterByObj },
  });
  const products = data?.products?.data;

  useEffect(() => {
    const swiperEl = swiperContainerRef.current;
    if (products) {
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
    }
  }, [products]);

  return loading ? (
    <div className="h-96"></div>
  ) : (
    <section className="mt-10">
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold tracking-wider mb-5">
        {title}
      </h2>
      <div className="w-full">
        <swiper-container
          init="false"
          class="w-full p-2"
          ref={swiperContainerRef}
        >
          {products?.map((product) => (
            <swiper-slide key={product.id}>
              <Link
                href={`/${product.attributes.maincategories.data[0].attributes.name.toLowerCase()}-${
                  product.attributes.categories.data[0].attributes.slug
                }/${product.attributes.slug}-${product.id}`}
              >
                <Image
                  src={`http://127.0.0.1:1337${product.attributes.images.data[0].attributes.url}`}
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
      </div>
    </section>
  );
}

export default ProductsSlider;
