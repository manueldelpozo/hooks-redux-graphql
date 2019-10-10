import gql from "graphql-tag";

export const FETCH_N_HEROES = gql`
  {
    heroes(first: 10) {
      id
      full_name
      avatar_url
      description
      type {
        name
      }
    }
  }
`;