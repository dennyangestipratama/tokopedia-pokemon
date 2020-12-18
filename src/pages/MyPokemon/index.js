import { Fragment, useContext } from 'react'
import { css } from '@emotion/css'

import { PokemonContext } from '../../context/PokemonContext'
import PokemonCard from './PokemonCard'

const MyPokemon = () => {
   const pokemonContext = useContext(PokemonContext)

   const listPokemon = []
   pokemonContext.myPokemon.items.forEach(item => {
      let match = listPokemon.find(pokemon => pokemon.ID === item.ID)
      if (match) {
         Object.assign(match, item)
      } else {
         listPokemon.push(item)
      }
   })

   return (
      <Fragment>
         <div className={home}>
            {listPokemon.map((pokemon) => (
               <PokemonCard key={pokemon.ID} pokemon={pokemon} />
            ))}
         </div>
         {/* <div className={home_page}>
            <button className={button} disabled={page === 1} onClick={() => prevPage()}>
               Previous
            </button>
            <span className={page_title}>{page}</span>
            <button className={button} disabled={offset === data.pokemons.count - 12} onClick={() => nextPage()}>
               Next
            </button>
         </div> */}
      </Fragment>
   )
}

const neutralColor = '#FFFFFF'
const darkColor = '#303C42'
const yellowColor = '#FFCB05'
const fontFamily = 'Poppins, sans-serif'

const home = css({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
   columnGap: 20,
   rowGap: 20,
   padding: '120px 50px 30px',
   maxWidth: '1440px',
   margin: '0 auto',
})

const focus = css({
   outline: 'none',
})

const hover = css({
   color: yellowColor,
})
const hoverDisabled = css({
   color: neutralColor,
})

const disabled = css({
   background: 'grey',
   '&:hover': hoverDisabled,
})

const button = css({
   background: darkColor,
   padding: '12px 23px',
   border: 'none',
   color: neutralColor,
   width: '100%',
   margin: '0 3rem',
   borderRadius: 20,
   fontFamily,
   fontsize: 18,
   fontWeight: 'bold',
   lineHeight: '27px',
   cursor: 'pointer',
   textTransform: 'uppercase',
   '&:disabled': disabled,
   '&:focus': focus,
   '&:hover': hover,
})

const home_page = css({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   paddingBottom: 36,
})

const page_title = css({
   fontFamily,
   color: darkColor,
   fontWeight: 'bold',
})

export default MyPokemon
