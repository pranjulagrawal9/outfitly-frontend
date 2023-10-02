import Image from "next/image";

function OrderedProduct({ image, price, quantity, size, title }) {
  return (
    <div className="md:flex p-5 md:justify-between border-b-2 gap-2">
      <div className="flex gap-5 md:w-4/5">
        <Image
          src={image}
          alt="test"
          width="100"
          height="100"
          className="w-12 md:w-20 shrink-0"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8cuRWPQAHmQLj6nzMoQAAAABJRU5ErkJggg=="
        />

        <div className="flex flex-col justify-between md:py-2 w-4/5">
          <h2 className="font-medium text-sm lg:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h2>
          <div className="flex gap-3 text-slate-500 font-medium">
            <div className="text-sm lg:text-base">Size: {size}</div>
            <div className="text-sm lg:text-base">Qty: {quantity}</div>
          </div>
          <div className="font-bold text-sm lg:text-base">Rs. {price}</div>
        </div>
      </div>
      <div className="hidden md:block pt-2 md:w-1/5">
        <h2 className="font-bold">Status</h2>
        <h3 className="text-green-700 uppercase font-bold pt-5">
          Order Placed
        </h3>
      </div>
    </div>
  );
}

export default OrderedProduct;
