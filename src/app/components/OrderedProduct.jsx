import Image from "next/image";

function OrderedProduct({ image, price, quantity, size, title }) {
  return (
    <div className="flex p-5 justify-between border-b-2">
      <div className="flex gap-5">
        <div>
          <Image src={image} alt="test" width="100" height="100" />
        </div>
        <div className="flex flex-col justify-between md:py-2">
          <h2 className="font-medium">{title}</h2>
          <div className="flex gap-3 text-slate-500 font-medium">
            <div>Size: {size}</div>
            <div>Qty: {quantity}</div>
          </div>
          <div className="font-bold">Rs. {price}</div>
        </div>
      </div>
      <div className="hidden md:block pt-2">
        <h2 className="font-bold">Status</h2>
        <h3 className="text-green-700 uppercase font-bold pt-5">
          Order Placed
        </h3>
      </div>
    </div>
  );
}

export default OrderedProduct;
