"use client";

import { addToCart } from "@/app/store/features/cart/cartSlice";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Skeleton } from "@/app/components/ui/skeleton";
import "react-toastify/dist/ReactToastify.min.css";

function Product({ params }) {
  const productSlug = params.productSlug.split("-");
  const productId = productSlug[productSlug.length - 1];
  const [currMainImage, setCurrMainImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  const customId = "custom-id-for-toast";

  const notify = () => {
    toast.info("Please select your size!", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  const GetProductData = gql`
    query GetProductData($id: ID!) {
      product(id: $id) {
        data {
          attributes {
            brand
            title
            rating
            price
            details
            availableSizes
            mrp
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

  const { data } = useQuery(GetProductData, { variables: { id: productId } });
  const productData = data?.product.data.attributes;
  console.log(productData);
  const itemInCart = cart.find((item) => item.id === productId) ? true : false;

  if (!productData)
    return (
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-20 min-h-[calc(100vh-64px)] mt-5 gap-4">
        <div className="flex w-full lg:w-1/2 gap-3">
          <div className="flex w-1/5 flex-col gap-3">
            <Skeleton className="w-full h-12 lg:h-1/5" />
            <Skeleton className="w-full h-12 lg:h-1/5" />
            <Skeleton className="w-full h-12 lg:h-1/5" />
            <Skeleton className="w-full h-12 lg:h-1/5" />
            <Skeleton className="w-full h-12 lg:h-1/5" />
          </div>
          <Skeleton className="w-4/5" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-5">
          <Skeleton className="w-1/4 h-5" />
          <Skeleton className="w-3/5 h-5" />
          <Skeleton className="w-1/12 h-5" />
          <Skeleton className="w-1/12 h-5" />
          <Skeleton className="w-3/5 h-5" />
          <div className="flex gap-3">
            <Skeleton className="w-12 h-12" />
            <Skeleton className="w-12 h-12" />
            <Skeleton className="w-12 h-12" />
            <Skeleton className="w-12 h-12" />
            <Skeleton className="w-12 h-12" />
          </div>
          <div className="flex gap-5">
            <Skeleton className="w-1/4 h-10" />
            <Skeleton className="w-1/4 h-10" />
          </div>
          <Skeleton className="w-2/5 h-5" />
          <Skeleton className="w-2/5 h-20" />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] md:flex-row md:mx-10 md:gap-7 md:mt-10">
      <div className="flex flex-col md:flex-row-reverse md:flex-1 md:gap-5">
        <div className="w-full h-[500px] md:h-auto md:w-[85%]">
          {productData && (
            <Image
              src={`http://127.0.0.1:1337${productData?.images.data[currMainImage].attributes.url}`}
              alt={
                productData?.images.data[currMainImage].attributes
                  .alternativeText
              }
              width={0}
              height={0}
              sizes="100vw, (min-width: 768px) 50vw"
              className="w-full h-full object-cover md:object-contain md:object-top"
            />
          )}
        </div>
        <div className="flex w-full gap-5 mt-5 px-3 md:flex-col md:w-[15%] md:mt-0 md:px-0">
          {productData?.images.data.map(({ attributes, id }, idx) => (
            <div
              className={`flex-1 max-w-[20%] md:max-w-none md:flex-none cursor-pointer ${
                currMainImage == idx ? "border-2 border-sky-400" : ""
              }`}
              key={id}
              onClick={() => setCurrMainImage(idx)}
            >
              <Image
                src={`http://127.0.0.1:1337${attributes.url}`}
                alt={attributes.alternativeText}
                width={0}
                height={0}
                sizes="20vw"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 mt-5 md:flex-1 md:mt-0">
        <h2 className="font-bold text-lg lg:text-2xl md:mb-2">
          {productData?.brand}
        </h2>
        <h3 className="mb-3 lg:text-xl">{productData?.title}</h3>
        <div className="bg-slate-100 bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm border-2 w-fit">
          <span>{productData?.rating}</span>
          <AiFillStar className="text-green-600" />
        </div>
        <div className="flex mt-3 items-end gap-1">
          <h2 className="text-2xl font-bold">₹ {productData?.price}</h2>
          <h3 className="text-gray-400 line-through">₹ {productData?.mrp}</h3>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold mb-3 uppercase lg:text-lg">
            Select Size
          </h2>
          <div className="flex gap-5">
            {productData?.availableSizes?.map((size) => (
              <div
                className={`border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600 cursor-pointer ${
                  selectedSize === size ? "bg-black text-white border-none" : ""
                }`}
                key={size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 uppercase font-bold mt-5">
          <div
            className="flex justify-center bg-appPrimary text-white flex-1 py-3 rounded cursor-pointer"
            onClick={() =>
              !itemInCart
                ? !selectedSize
                  ? notify()
                  : dispatch(
                      addToCart({ ...productData, id: productId, selectedSize })
                    )
                : router.push("/cart")
            }
          >
            <div className="flex gap-3 items-center">
              <PiShoppingBagLight size="24px" />
              <span>{itemInCart ? "Go to bag" : "Add to bag"}</span>
            </div>
          </div>
          <ToastContainer />
          <div className="flex-1 border rounded border-gray-400 flex justify-center py-3 cursor-pointer">
            <div className="flex gap-3 items-center">
              <AiOutlineHeart size="24px" />
              <span>Wishlist</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-10 lg:text-lg">
          <h2 className="font-bold text-lg lg:text-xl uppercase">
            Product details
          </h2>
          <p>{productData?.details.description}</p>
          <div>
            <h3 className="font-bold mb-1">Size & Fit</h3>
            <p>{productData?.details.size}</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Material & Care</h3>
            <p>{productData?.details.material}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
