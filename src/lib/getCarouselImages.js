import { gql } from "@apollo/client";
import { getClient } from "./client";

export default async function getCarouselImages() {
  const query = gql`
    {
      sliders {
        data {
          attributes {
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
  const { data, error } = await getClient().query({ query });
  if (error) console.log(error);
  else return data.sliders.data[0]?.attributes.images.data;
}
