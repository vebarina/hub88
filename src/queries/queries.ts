import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

// initialize a GraphQL client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

export const GET_COUNTRIES = gql`
  query GetCountries($code: String) {
    countries(filter: { code: { regex: $code } }) {
    name
    code
  }
  }
`;