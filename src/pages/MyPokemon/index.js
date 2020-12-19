import { Fragment, useContext } from 'react'
import { css } from '@emotion/css'

import { PokemonContext } from '../../context/PokemonContext'
import PokemonCard from './PokemonCard'

const MyPokemon = () => {
   const pokemonContext = useContext(PokemonContext)

   const pokemon = pokemonContext.myPokemon?.items
   const listPokemon = Object.values(pokemon.reduce((item, { name, image, ID, nickname }) => {
      item[name] = item[name] || { name, image, ID, nickname: new Set() };
      item[name].nickname.add(nickname);
      return item;
   }, {})).map(({ name, nickname, image, ID }) => ({ name, image, ID, nickname: [...nickname] }));

   return (
      <Fragment>
         <div className={home}>
            {listPokemon.map((pokemon) => (
               <PokemonCard key={pokemon.ID} pokemon={pokemon} />
            ))}
         </div>
      </Fragment>
   )
}

const home = css({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
   columnGap: 20,
   rowGap: 20,
   padding: '120px 50px 30px',
   maxWidth: '1440px',
   margin: '0 auto',
})

export default MyPokemon
