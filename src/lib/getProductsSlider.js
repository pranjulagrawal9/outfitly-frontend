import { gql } from "@apollo/client";
import { getClient } from "./client";

export default async function getProductsSlider(title) {
  const filterByObj =
    title === "BestSellers"
      ? { bestseller: { eq: true } }
      : { trending: { eq: true } };
  const query = gql`
    query GetProducts($filterByObj: ProductFiltersInput!) {
      products(filters: $filterByObj) {
        data {
          id
          attributes {
            images {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            title
            maincategories {
              data {
                attributes {
                  name
                }
              }
            }
            categories {
              data {
                attributes {
                  slug
                }
              }
            }
            slug
          }
        }
      }
    }
  `;
  const { data, error } = await getClient().query({
    query,
    variables: { filterByObj },
  });
  if (error) console.log(error);
  else return data.products?.data;
}
