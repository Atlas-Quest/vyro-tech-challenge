/**
 * Mocked vehicles
 *
 * @todo load these from the Vyro GraphQL API
 *
 * API Details:
 *
 * Endpoint: https://hasura.vyro.com.au/v1/graphql
 * Query:
 *
 * query GetStockedVehicle {
 *      stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
 *          name
 *          condition
 *          media
 *          is_sold
 *      }
 * }
 *
 * Note: This is a public API. No credentials needed.
 *
 * You can interact with the GraphQL API using whatever framework or approach you wish. Fetch, Apollo, whatever.
 **/

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Vehicle } from './vehicle.types';

const client = new ApolloClient({
  uri: 'https://hasura.vyro.com.au/v1/graphql',
  cache: new InMemoryCache(),
});

export const getStockedVehicles = async(): Promise<Vehicle[]> => {
  const {data: { stocked_vehicles }} = await client.query({
    query: gql`
      query GetStockedVehicle {
        stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
            name
            condition
            media
            is_sold
        }
      }
    `
  })
  return stocked_vehicles;
}
