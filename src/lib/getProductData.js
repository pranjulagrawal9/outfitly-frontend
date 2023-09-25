import { gql } from "@apollo/client";
import { getClient } from "./client";

export default async function getProductData(productId) {
  const query = gql`
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
  const { data, error } = await getClient().query({
    query,
    variables: { id: productId },
  });
  if (error) console.log(error);
  else return data.product.data.attributes;
}
