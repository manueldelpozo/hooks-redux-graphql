import gql from "graphql-tag"

export const FETCH_N_HEROES = gql`
  query Heroes($first: Int, $skip: Int) {
    heroes(first: $first, skip: $skip) {
      id
      full_name
      avatar_url
      description
      type {
        name
      }
    }
  }
`

export const FETCH_HERO_AVATARS_URL = gql`
  query HeroAvatarsUrl {
    avatars {
      id
      alt
      avatar_url
    }
  }
`

export const FETCH_HERO_TYPES_NAME = gql`
  query HeroTypeNames {
    types {
      id
      name
    }
  }
`

// export const LOAD_MORE_HEROES = gql`
//   query Heroes($first: Int, $skip: Int) {
//     heroes(first: $first, skip: $skip) {
//       id
//       full_name
//       avatar_url
//       description
//       type {
//         name
//       }
//     }
//   }
// `

// export const DELETE_HERO = gql`
//   query Heroes($first: Int, $skip: Int) {
//     heroes(first: $first, skip: $skip) {
//       id
//       full_name
//       avatar_url
//       description
//       type {
//         name
//       }
//     }
//   }
// `