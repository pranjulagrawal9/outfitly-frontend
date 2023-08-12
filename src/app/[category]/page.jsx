"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";

function Products() {
  // const [price, setPrice] = useState(10000);
  const [products, setProducts] = useState([]);
  const allproducts = [
    {
      brand: "Roadster",
      title: "Men Cotton Pure Cotton T-shirt",
      price: 249,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
      ],
      rating: 4.2,
      category: "tshirts",
      sortBy: "recommended",
    },
    {
      brand: "Roadster",
      title: "Men Cotton Pure Cotton T-shirt",
      price: 249,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
      ],
      rating: 4.2,
      category: "tshirts",
      sortBy: "recommended",
    },
    {
      brand: "Roadster",
      title: "Men Cotton Pure Cotton T-shirt",
      price: 249,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
      ],
      rating: 4.2,
      category: "tshirts",
      sortBy: "recommended",
    },
    {
      brand: "Roadster",
      title: "Men Cotton Pure Cotton T-shirt",
      price: 249,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
      ],
      rating: 4.2,
      category: "tshirts",
      sortBy: "recommended",
    },
    {
      brand: "Roadster",
      title: "Men Cotton Pure Cotton T-shirt",
      price: 249,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
      ],
      rating: 4.2,
      category: "tshirts",
      sortBy: "recommended",
    },
    {
      brand: "Roadster",
      title: "Men Cotton Pure Cotton T-shirt",
      price: 249,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg",
      ],
      rating: 4.2,
      category: "tshirts",
      sortBy: "recommended",
    },
    {
      brand: "The Indian Garage Co",
      title: "Men White Striped Casual Shirt",
      price: 527,
      images: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10673544/2019/9/24/729859d8-cc66-4465-ba81-27028b9d7a461569310358945-The-Indian-Garage-Co-Men-Shirts-8481569310357131-2.jpg",
      ],
      rating: 4.1,
      category: "shirts",
      sortBy: "new",
    },
    {
      brand: "Levis",
      title: "Men 511 Slim Low Rise Jeans",
      price: 3499,
      images: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20516480/2023/1/11/776df41f-ddc3-493c-826d-95eb1425c2bc1673419506083-Levis-Men-511-Slim-Fit-Low-Rise-Heavy-Fade-Stretchable-Jeans-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20516480/2023/1/11/d33205e8-56b2-45d2-aefc-0e1e7a1c391b1673419506094-Levis-Men-511-Slim-Fit-Low-Rise-Heavy-Fade-Stretchable-Jeans-1.jpg",
      ],
      rating: 4.8,
      category: "jeans",
      sortBy: "discount",
    },
    {
      brand: "Urbano Fashion",
      title: "Men 511 Slim Low Rise Jeans",
      price: 3456,
      images: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13823708/2022/10/19/398d64b2-096b-4a41-9ee9-95c005fc4db01666156159187-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13823708/2022/10/19/fe7b92ac-c1f9-46e7-b7c7-8fba7da54da71666156159178-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-2.jpg",
      ],
      rating: 4.1,
      category: "jeans",
      sortBy: "discount",
    },
  ];

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    const map = {};

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        if (map[checkbox.name]) map[checkbox.name].push(checkbox.value);
        else map[checkbox.name] = [checkbox.value];
      }
    });

    // if no checkbox is checked then show all products
    if (Object.keys(map).length === 0) {
      setProducts(allproducts);
      return;
    }

    // here fetch products for selected categories using API
    const filteredProducts = allproducts.filter((product) => {
      return Object.keys(map).every((key) => {
        switch (key) {
          case "category":
          case "brand":
            return map[key].includes(product[key]);

          case "price": {
            const pricesArray = map[key].map((price) => price.split(" "));
            for (const price of pricesArray) {
              const min = Number(price[0]);
              const max = Number(price[2]);
              if (price.length === 1 && product.price >= min) return true;
              else if (product.price >= min && product.price <= max)
                return true;
            }
          }
        }
      });
    });
    setProducts(filteredProducts);
  };

  useEffect(() => {
    // here call API to get all the products of selected category
    setProducts(allproducts);
  }, []);

  function getUniquevalues(allproducts, element) {
    const elementArray = allproducts.map((product) => product[element]);
    return [...new Set(elementArray)];
  }

  return (
    <>
      <div className="justify-between pt-5 pb-2 items-center border-b-[1px] hidden lg:flex">
        <span className="uppercase font-bold pl-5 pt-5">Filters</span>
        <div className="relative mr-3 group cursor-pointer z-30">
          <div className="flex gap-10 items-center border-2 px-3 py-2">
            <div>Sort by: Recommended</div>
            <PiCaretDownLight />
          </div>

          <ul className="absolute bg-white w-full shadow-2xl hidden group-hover:block">
            <li className="p-3 hover:bg-gray-100">Whats New</li>
            <li className="p-3 hover:bg-gray-100">Recommended</li>
            <li className="p-3 hover:bg-gray-100">Highest Price</li>
            <li className="p-3 hover:bg-gray-100">Lowest Price</li>
            <li className="p-3 hover:bg-gray-100">Better Discount</li>
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 h-fit hidden lg:block sticky top-16">
          <div>
            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Categories</h3>
              <div className="flex flex-col gap-2">
                {getUniquevalues(allproducts, "category").map(
                  (category, idx) => (
                    <div className="flex gap-2 cursor-pointer" key={idx}>
                      <input
                        type="checkbox"
                        name="category"
                        value={category}
                        id={category}
                        className="cursor-pointer w-5 h-5 checkbox"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={category}
                        className="cursor-pointer capitalize"
                      >
                        {" "}
                        {category}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Brand</h3>
              <div className="flex flex-col gap-2">
                {getUniquevalues(allproducts, "brand").map((brand, idx) => (
                  <div className="flex gap-2 cursor-pointer" key={idx}>
                    <input
                      type="checkbox"
                      name="brand"
                      id={brand}
                      value={brand}
                      className="cursor-pointer w-5 h-5 checkbox"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={brand} className="cursor-pointer">
                      {brand}
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
                    value="2000"
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
          {products?.map((product) => (
            <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
              <div className="relative">
                <Image
                  alt="testalt"
                  src={product.images[0]}
                  width={0}
                  height={0}
                  sizes="50vw, (min-width: 768px) 33vw"
                  className="w-full group-hover:hidden"
                />
                <Image
                  alt="testalt"
                  src={product.images[1]}
                  width={0}
                  height={0}
                  sizes="50vw, (min-width: 768px) 33vw"
                  className="w-full hidden group-hover:block"
                />

                <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                  <span>{product.rating}</span>
                  <AiFillStar className="text-green-600" />
                </div>
              </div>

              <div className="px-2 pt-4">
                <div className="font-bold">{product.brand}</div>
                <div>{product.title}</div>
                <div className="font-bold mt-1">Rs. {product.price}</div>
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
