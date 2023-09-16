import OrderedProduct from "./OrderedProduct";

function SingleOrder({ id, products, total }) {
  return (
    <section className="mt-5 border-2 rounded-md shadow-md p-3">
      <h2 className="uppercase font-extrabold bg-gray-100 w-fit py-2 px-3 rounded-2xl mb-3">
        Order Id: {id}
      </h2>
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
