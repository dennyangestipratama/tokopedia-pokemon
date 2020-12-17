import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

import { GET_POKEMON_DETAIL } from '../../graphql/pokemon-detail'

const Detail = () => {
   const param = useParams()

   const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
      variables: { name: param.name }
   })

   if (loading) return 'Loading...'
   if (error) return `Error${error.message}`

   return <div>
      <div>{data.pokemon.name}</div>
      <img src={data.pokemon.sprites.front_default} alt="front" />
      <img src={data.pokemon.sprites.back_default} alt="back" />
      {data.pokemon.moves.map(item => (
         <div>{item.move.name}</div>
      ))}
      {data.pokemon.stats.map(item => {
         return (
            <div>
               <div>{item.base_stat}</div>
               <div>{item.stat.name}</div>
            </div>
         )
      })}
      {data.pokemon.types.map(item => (
         <div>{item.type.name}</div>
      ))}
   </div>
}

export default Detail