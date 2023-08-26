"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { gql, useQuery } from "@apollo/client";

function Products({ params }) {
  // const [price, setPrice] = useState(10000);
  // console.log(params.category);
  const [products, setProducts] = useState([]);
  const [mainCategory, categorySlug] = params.category.split("-");
  const [filterBy, setFilterBy] = useState({
    brands: [],
    categories: [categorySlug],
    priceRange: [],
  });

  const filters = {
    and: [
      { categories: { slug: { in: filterBy.categories } } },
      { maincategories: { name: { eqi: mainCategory } } },
      { brand: filterBy.brands.length !== 0 ? { in: filterBy.brands } : {} },
      {
        price:
          filterBy.priceRange.length !== 0
            ? { between: filterBy.priceRange }
            : {},
      },
    ],
  };

  const GetProducts = gql`
    query GetProducts($filters: ProductFiltersInput!) {
      products(filters: $filters) {
        data {
          id
          attributes {
            brand
            title
            rating
            price
            images {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
        meta {
          pagination {
            total
          }
        }
      }
    }
  `;

  const GetAllCategories = gql`
    query GetAllCategories($mainCategory: String!) {
      categories(
        filters: { maincategories: { name: { eqi: $mainCategory } } }
      ) {
        data {
          id
          attributes {
            name
            slug
          }
        }
      }
    }
  `;

  const GetAllBrands = gql`
    query GetAllBrands($mainCategory: String!) {
      products(filters: { maincategories: { name: { eqi: $mainCategory } } }) {
        data {
          attributes {
            brand
          }
        }
      }
    }
  `;

  const { data, refetch } = useQuery(GetProducts, {
    variables: { filters },
  });

  useEffect(() => {
    setProducts(data?.products.data);
  }, [data]);

  const { data: allBrandsObj } = useQuery(GetAllBrands, {
    variables: { mainCategory },
  });
  const allBrands = allBrandsObj?.products.data;
  const uniqueBrands = [...new Set(allBrands)];

  const { data: categoriesObj } = useQuery(GetAllCategories, {
    variables: { mainCategory },
  });
  const allCategories = categoriesObj?.categories.data;

  const [selectedSortBy, setselectedSortBy] = useState("Recommended");

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    const map = {};

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        if (map[checkbox.name]) map[checkbox.name].push(checkbox.value);
        else map[checkbox.name] = [checkbox.value];
      }
    });

    console.log(map);

    let globalMin = Number.MAX_VALUE,
      globalMax = -Number.MAX_VALUE;
      
    map?.price?.forEach((price) => {
      const min = Number(price.split(" ")[0]);
      const max = Number(price.split(" ")[2]);
      globalMin = Math.min(globalMin, min);
      globalMax = Math.max(globalMax, max);
    });

    setFilterBy({
      brands: map?.brand || [],
      categories: map?.category || [categorySlug],
      priceRange: map?.price ? [globalMin, globalMax] : [0, 100000],
    });
  };

  useEffect(() => {
    console.log(filterBy);
    refetch();
  }, [filterBy]);

  function sortProducts(sortCriteria) {
    // here call API to get sorted products from backend
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sortCriteria === "priceLowToHigh") return a.price - b.price;
      else if (sortCriteria === "priceHighToLow") return b.price - a.price;
    });

    setProducts(sortedProducts);
  }

  return (
    <>
      <div className="justify-between pt-5 pb-2 items-center border-b-[1px] hidden lg:flex">
        <span className="uppercase font-bold pl-5 pt-5">Filters</span>
        <div className="relative mr-3 group cursor-pointer z-30">
          <div className="flex gap-10 items-center justify-between border-2 px-3 py-2 w-72">
            <div>
              Sort by: <span className="font-bold">{selectedSortBy}</span>
            </div>
            <PiCaretDownLight />
          </div>

          <ul className="absolute bg-white w-full shadow-2xl hidden group-hover:block">
            {[
              { id: "recommended", value: "Recommended" },
              { id: "popularity", value: "Popularity" },
              { id: "priceLowToHigh", value: "Price: Low to High" },
              { id: "priceHighToLow", value: "Price: High to Low" },
            ].map((sortCriteria) => (
              <li
                className="p-3 hover:bg-gray-100"
                onClick={() => {
                  sortProducts(sortCriteria.id);
                  setselectedSortBy(sortCriteria.value);
                }}
                key={sortCriteria.id}
              >
                {sortCriteria.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 h-fit hidden lg:block sticky top-16">
          <div>
            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Categories</h3>
              <div className="flex flex-col gap-2">
                {allCategories?.map((category) => (
                  <div className="flex gap-2 cursor-pointer" key={category.id}>
                    <input
                      type="checkbox"
                      name="category"
                      value={category.attributes.slug}
                      id={category.id}
                      className="cursor-pointer w-5 h-5 checkbox"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor={category.id}
                      className="cursor-pointer capitalize"
                    >
                      {category.attributes.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Brand</h3>
              <div className="flex flex-col gap-2">
                {uniqueBrands?.map((brand) => (
                  <div
                    className="flex gap-2 cursor-pointer"
                    key={brand.attributes.brand}
                  >
                    <input
                      type="checkbox"
                      name="brand"
                      id={brand.attributes.brand}
                      value={brand.attributes.brand}
                      className="cursor-pointer w-5 h-5 checkbox"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor={brand.attributes.brand}
                      className="cursor-pointer"
                    >
                      {brand.attributes.brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Price</h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="price"
                    value="0 to 500"
                    id="0to500"
                    className="cursor-pointer w-5 h-5 checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="0to500" className="cursor-pointer capitalize">
                    Under ₹ 500
                  </label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="price"
                    value="500 to 1000"
                    id="500to1000"
                    className="cursor-pointer w-5 h-5 checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="500to1000"
                    className="cursor-pointer capitalize"
                  >
                    ₹ 500 to ₹ 1000
                  </label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="price"
                    value="1000 to 1500"
                    id="1000to1500"
                    className="cursor-pointer w-5 h-5 checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="1000to1500"
                    className="cursor-pointer capitalize"
                  >
                    ₹ 1000 to ₹ 1500
                  </label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="price"
                    value="2000 to 100000"
                    id="2000+"
                    className="cursor-pointer w-5 h-5 checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="2000+" className="cursor-pointer capitalize">
                    More than ₹ 2000
                  </label>
                </div>
              </div>
              {/* <div className="flex gap-1">
                <span>0</span>
                <input
                  type="range"
                  name="price"
                  max={10000}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span>{price}</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex-[4] flex flex-wrap justify-between py-3 px-5">
          {products?.map(({ id, attributes }) => (
            <div
              className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group"
              key={id}
            >
              <div className="relative">
                <Image
                  alt="testalt"
                  src={`http://127.0.0.1:1337${attributes.images.data[0].attributes.url}`}
                  width={0}
                  height={0}
                  sizes="50vw, (min-width: 768px) 33vw"
                  className="w-full group-hover:hidden"
                />
                <Image
                  alt="testalt"
                  src={`http://127.0.0.1:1337${attributes.images.data[1].attributes.url}`}
                  width={0}
                  height={0}
                  sizes="50vw, (min-width: 768px) 33vw"
                  className="w-full hidden group-hover:block"
                />

                <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                  <span>{attributes.rating}</span>
                  <AiFillStar className="text-green-600" />
                </div>
              </div>

              <div className="px-2 pt-4">
                <div className="font-bold">{attributes.brand}</div>
                <div>{attributes.title}</div>
                <div className="font-bold mt-1">Rs. {attributes.price}</div>
              </div>
            </div>
          ))}

          {/* dummy cards */}
          <div className="w-[48%] md:w-[32%] lg:w-[23%]"></div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%]"></div>
        </div>
      </div>
    </>
  );
}

export default Products;
