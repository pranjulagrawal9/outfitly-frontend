import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";

function Product() {
  return (
    <div className="flex flex-col md:flex-row md:mx-10 md:gap-7 md:mt-10">
      <div className="flex flex-col md:flex-row-reverse md:flex-1 md:gap-5">
        <div className="w-full h-[500px] md:h-auto md:w-[85%]">
          <Image
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11687254/2020/6/16/c0336423-1c27-46b7-9257-e90ae0052f881592300967435-Roadster-Men-Tshirts-4271592300965660-1.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover md:object-contain md:object-top"
          />
        </div>
        <div className="flex w-full gap-5 mt-5 px-3 md:flex-col md:w-[15%] md:mt-0 md:px-0">
          <div className="flex-1 md:flex-none">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11687254/2020/6/16/c0336423-1c27-46b7-9257-e90ae0052f881592300967435-Roadster-Men-Tshirts-4271592300965660-1.jpg"
              width={0}
              height={0}
              sizes="20vw"
              className="w-full"
            />
          </div>
          <div className="flex-1 md:flex-none">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11687254/2020/6/16/c0336423-1c27-46b7-9257-e90ae0052f881592300967435-Roadster-Men-Tshirts-4271592300965660-1.jpg"
              width={0}
              height={0}
              sizes="20vw"
              className="w-full"
            />
          </div>
          <div className="flex-1 md:flex-none">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11687254/2020/6/16/c0336423-1c27-46b7-9257-e90ae0052f881592300967435-Roadster-Men-Tshirts-4271592300965660-1.jpg"
              width={0}
              height={0}
              sizes="20vw"
              className="w-full"
            />
          </div>
          <div className="flex-1 md:flex-none">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11687254/2020/6/16/c0336423-1c27-46b7-9257-e90ae0052f881592300967435-Roadster-Men-Tshirts-4271592300965660-1.jpg"
              width={0}
              height={0}
              sizes="20vw"
              className="w-full"
            />
          </div>
          <div className="flex-1 md:flex-none">
            <Image
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11687254/2020/6/16/c0336423-1c27-46b7-9257-e90ae0052f881592300967435-Roadster-Men-Tshirts-4271592300965660-1.jpg"
              width={0}
              height={0}
              sizes="20vw"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="px-3 mt-5 md:flex-1 md:mt-0">
        <h2 className="font-bold text-lg lg:text-2xl md:mb-2">Bewacoof</h2>
        <h3 className="mb-3 lg:text-xl">
          Men's White World Peace Graphic Printed T-shirt
        </h3>
        <div className="bg-slate-100 bg-opacity-90 flex items-center gap-1 py-0.5 px-1.5 rounded-sm border-2 w-fit">
          <span>4.2</span>
          <AiFillStar className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mt-3">₹449</h2>

        <div className="mt-5">
          <h2 className="font-semibold mb-3 uppercase lg:text-lg">
            Select Size
          </h2>
          <div className="flex gap-5">
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              S
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              M
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              L
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              XL
            </div>
            <div className="border p-7 rounded-lg w-7 h-5 flex justify-center items-center text-xl border-gray-600">
              2XL
            </div>
          </div>
        </div>

        <div className="flex gap-4 uppercase font-bold mt-5">
          <div className="flex justify-center bg-[#ffd84d] flex-1 py-3 rounded">
            <div className="flex gap-3 items-center">
              <PiShoppingBagLight size="24px" />
              <span>Add to bag</span>
            </div>
          </div>
          <div className="flex-1 border rounded border-gray-400 flex justify-center py-3">
            <div className="flex gap-3 items-center">
              <AiOutlineHeart size="24px" />
              <span>Wishlist</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-10 lg:text-lg">
          <h2 className="font-bold text-lg lg:text-xl uppercase">Product details</h2>
          <p>
            White and Mustard yellow colourblocked T-shirt, has a round neck,
            and short sleeves
          </p>
          <div>
            <h3 className="font-bold mb-1">Size & Fit</h3>
            <p>The model (height 6') is wearing a size M</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Material & Care</h3>
            <p>Material: 100% cotton, Machine Wash</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
