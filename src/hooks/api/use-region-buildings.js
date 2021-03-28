import { gql, useQuery } from '@apollo/client';

const GET_BUILDINGS_AND_PROPERTIES = gql`
  query($region: String!) {
    buildings(bounds: $region) {
      id
      bounds
      properties {
        results {
          category
          type
          rent_type
          price
          price_per_sqm
          rooms
          area
          floor
          published_at
        }
      }
    }
  }
`;

export default function useRegionBuildings(region) {
  const { loading, data } = useQuery(GET_BUILDINGS_AND_PROPERTIES, {
    variables: { region },
  });
  return {
    loading,
    data: data?.buildings || [],
  };
}