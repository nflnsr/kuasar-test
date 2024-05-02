import { gql, useQuery } from "@apollo/client";

export function useGetCountry(id: string) {
  const GET_COUNTRY = gql`
    query Countries {
        country(code: "${id}") {
            awsRegion
            capital
            code
            currency
            emoji
            emojiU
            name
            phone
        }
    }
  `;
  const { data, loading, error } = useQuery(GET_COUNTRY);

  return { data, loading, error };
}
