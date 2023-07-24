"use client";

import Image from "next/image";
import { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import {AiFillStar} from 'react-icons/ai'

function Products() {
  const [price, setPrice] = useState(10000);

  return (
    <div className="max-w-[1536px] mx-auto">
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
                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="tshirts"
                    id="tshirts"
                    className="cursor-pointer w-5 h-5"
                  />
                  <label htmlFor="tshirts" className="cursor-pointer">
                    {" "}
                    Tshirts
                  </label>
                </div>

                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="shirts"
                    id="shirts"
                    className="cursor-pointer w-5 h-5"
                  />
                  <label htmlFor="shirts"> Shirts</label>
                </div>

                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="jeans"
                    id="jeans"
                    className="cursor-pointer w-5 h-5"
                  />
                  <label htmlFor="jeans">Jeans</label>
                </div>
              </div>
            </div>

            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Brand</h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="tshirts"
                    id="tshirts"
                    className="cursor-pointer w-5 h-5"
                  />
                  <label htmlFor="tshirts" className="cursor-pointer">
                    {" "}
                    Roadster
                  </label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="shirts"
                    id="shirts"
                    className="cursor-pointer w-5 h-5"
                  />
                  <label htmlFor="shirts">Puma</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="jeans"
                    id="jeans"
                    className="cursor-pointer w-5 h-5"
                  />
                  <label htmlFor="jeans">Adidas</label>
                </div>
              </div>
            </div>

            <div className="border-b-[1px] border-r-[1px] p-5">
              <h3 className="uppercase mb-2 font-bold">Price</h3>
              <div className="flex gap-1">
                <span>0</span>
                <input
                  type="range"
                  name="price"
                  max={10000}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span>{price}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[4] flex flex-wrap justify-between py-3 px-5">
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%] pb-5 mt-5 mb-10 cursor-pointer hover:shadow-xl group">
            <div className="relative">
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full group-hover:hidden"
              />
              <Image
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/181f9191-76a2-49e6-92da-e016238379281573110418580-Roadster-Men-Tshirts-241573110416534-5.jpg"
                width={0}
                height={0}
                sizes="50vw, (min-width: 768px) 33vw"
                className="w-full hidden group-hover:block"
              />

              <div className="absolute bottom-2 left-3 bg-white bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm">
                <span>4.2</span>
                <AiFillStar className="text-green-600" />
              </div>
            </div>

            <div className="px-2 pt-4">
              <div className="font-bold">Roadster</div>
              <div>Men Cotton Pure Cotton T-shirt</div>
              <div className="font-bold mt-1">Rs. 249</div>
            </div>
          </div>
          
          
          

          {/* dummy cards */}
          <div className="w-[48%] md:w-[32%] lg:w-[23%]"></div>
          <div className="w-[48%] md:w-[32%] lg:w-[23%]"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
