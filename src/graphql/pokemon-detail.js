import gql from 'graphql-tag'

export const GET_POKEMON_DETAIL = gql`
   query pokemon($name: String!) {
      pokemon(name: $name) {
         name
         sprites{
           back_default
           front_default
         }
         stats{
           base_stat
           stat{
             name
           }
         }
         types{
           type{
             name
           }
         }
         moves{
           move{
             name
           }
         }
      }
   }
`