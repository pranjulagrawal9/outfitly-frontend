import { gql } from "@apollo/client";
import { getClient } from "./client";

export default async function getNavbarData() {
  const query = gql`
    {
      maincategories {
        data {
          id
          attributes {
            name
            categories {
              data {
                id
                attributes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;
  const { data, error } = await getClient().query({ query });
  if (error) console.log(error);
  else return data.maincategories.data;
}
