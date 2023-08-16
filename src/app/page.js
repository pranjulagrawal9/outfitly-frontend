"use client";

import ProductsSlider from "./components/ProductsSlider";
import Slider from "./components/Slider";
import { useQuery, gql } from "@apollo/client";

export default function Home() {
  const Get_Products = gql`
    query {
      products {
        data {
          attributes {
            brand
            title
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(Get_Products);

  if (!loading) console.log(data);

  return (
    <div>
      <Slider />
      <ProductsSlider title="BestSellers" />
      <ProductsSlider title="Trending Products" />
    </div>
  );
}
