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
    }
  }, [products]);

  return (
    <section className="mt-10">
      <h2 className="text-center text-4xl font-bold tracking-wider mb-5">
        {title}
      </h2>
      <div className="w-full h-96">
        <swiper-container
          init="false"
          class="w-full h-full p-2"
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
                  width={0}
                  height={0}
                  alt={product.attributes.title}
                  sizes="100vw, (min-width: 640px) 50vw, (min-width: 768) 25vw, (min-width: 1024px) 20vw"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "80%",
                  }}
                />
                <h2 className="text-center text-lg font-medium mt-5 md:mt-0">
                  {product.attributes.title}
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
