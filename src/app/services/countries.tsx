import { gql, useQuery } from "@apollo/client";

export function useGetCountries() {
  const GET_LOCATIONS = gql`
    query Countries {
      countries {
        capital
        code
        currencies
        currency
        emoji
        name
        phone
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_LOCATIONS);

  return { data, loading, error };
}
