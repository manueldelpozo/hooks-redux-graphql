import gql from "graphql-tag";

export const FETCH_N_HEROES = gql`
  {
    heroes(first: 10) {
      full_name
      avatar_url
      description
    }
  }
`;