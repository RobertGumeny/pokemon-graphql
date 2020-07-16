import gql from 'graphql-tag';


//NOTE Do some more digging into the GraphQL docs!
export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
      pokemons(first: $first) {
        id
        name
        image
        maxHP
        maxCP
        attacks {
          special {
            name
            damage
          }
        }
      }
    }

`;