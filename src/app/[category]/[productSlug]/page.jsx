import { AiFillStar } from "react-icons/ai";
import ProductImagesContainer from "@/app/components/ProductImagesContainer";
import ProductSizesContainer from "@/app/components/ProductSizesContainer";
import getProductData from "@/lib/getProductData";

export default async function Product({ params }) {
  const productSlug = params.productSlug.split("-");
  const productId = productSlug[productSlug.length - 1];
  const productData = await getProductData(productId);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] md:flex-row md:mx-10 md:gap-7 md:mt-10">
      <ProductImagesContainer productData={productData} />
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

        <ProductSizesContainer
          productData={productData}
          productId={productId}
        />

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
