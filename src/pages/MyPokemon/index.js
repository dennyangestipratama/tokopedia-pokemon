import { Fragment, useContext } from 'react'
import { css } from '@emotion/css'

import { PokemonContext } from '../../context/PokemonContext'
import Meta from '../../components/meta'
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
         <Meta title='Inventory' />
         <div className={home}>
            {listPokemon.length === 0 ? <div className={empty_title}>You don't have any Pokemon</div> : listPokemon.map((pokemon) => (
               <PokemonCard key={pokemon.ID} pokemon={pokemon} />
            ))}
         </div>
      </Fragment>
   )
}
const fontFamily = 'Poppins, sans-serif'

const home = css({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
   columnGap: 20,
   rowGap: 20,
   padding: '120px 50px 30px',
   maxWidth: '1440px',
   justifyItems: 'center',
   margin: '0 auto',
})

const empty_title = css({
   fontFamily,
   textTransform: 'uppercase',
   lineHeight: '15px',
   letterSpacing: '0.2em',
   fontSize: 10,
   fontWeight: '500',
   marginTop: 60,
   minHeight: '50vh'
})


export default MyPokemon
