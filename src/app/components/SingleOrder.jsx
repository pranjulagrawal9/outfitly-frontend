import OrderedProduct from "./OrderedProduct";

function formatDateTime(dateString) {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

function SingleOrder({ id, products, total, createdAt }) {
  const formattedDateTime = formatDateTime(createdAt);

  return (
    <section className="mt-10 border-2 rounded-md shadow-[0px_0px_15px_5px_rgba(0,0,0,0.1)] p-3">
      <div className="flex items-center mb-3 gap-3">
        <h2 className="uppercase text-sm lg:text-base font-extrabold bg-gray-100 w-fit py-2 px-3 rounded-2xl text-center">
          Order ID:<span className="text-appPrimary ml-1">#{id}</span>
        </h2>
        <div className="text-slate-400 text-xs lg:text-lg font-bold">
          {formattedDateTime}
        </div>
      </div>
      {products?.map((product) => (
        <OrderedProduct key={product.productId} {...product} />
      ))}
      <div className="text-right pr-5 lg:text-lg font-semibold pt-3">
        Rs. {total}
      </div>
    </section>
  );
}

export default SingleOrder;
