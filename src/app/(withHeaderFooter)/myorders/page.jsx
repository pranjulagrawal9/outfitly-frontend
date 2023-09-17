"use client";

import SingleOrder from "@/app/components/SingleOrder";
import { Skeleton } from "@/app/components/ui/skeleton";
import { useEffect, useState } from "react";

function MyOrders() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    async function fetchOrdersData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setData(data.data.reverse());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrdersData();
  }, []);

  if (loading)
    return (
      <div className="m-5 px-5 min-h-[calc(100vh-64px)] max-w-6xl mx-auto">
        <Skeleton className="w-24 h-10" />

        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <section
              key={idx}
              className="mt-5 border-2 rounded-md shadow-md p-3 flex flex-col"
            >
              <Skeleton className="py-2 px-3 rounded-2xl mb-3 w-28 h-5" />
              <div className="flex p-5 justify-between border-b-2">
                <div className="flex gap-5">
                  <Skeleton className="w-24 h-28" />
                  <div className="flex flex-col justify-between md:py-2">
                    <Skeleton className="w-64 h-5" />
                    <div className="flex gap-3">
                      <Skeleton className="w-20 h-10" />
                      <Skeleton className="w-20 h-10" />
                    </div>
                    <Skeleton className="w-16 h-5" />
                  </div>
                </div>
                <div className="hidden md:block pt-2">
                  <Skeleton className="w-20 h-5" />
                  <Skeleton className="mt-5 w-24 h-6" />
                </div>
              </div>
              <Skeleton className="mt-3 w-16 h-5 self-end mr-5" />
            </section>
          ))}
      </div>
    );

  if (!data) return <h1>Error occured...</h1>;

  return (
    <div className="m-5 px-5 min-h-[calc(100vh-64px)] max-w-6xl mx-auto">
      <h1 className="text-xl font-bold lg:text-3xl text-slate-700">
        My Orders
      </h1>

      {data?.map((order) => (
        <SingleOrder key={order.id} id={order.id} {...order.attributes} />
      ))}
    </div>
  );
}

export default MyOrders;
