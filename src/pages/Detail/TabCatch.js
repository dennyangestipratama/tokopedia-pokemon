import { useContext, Fragment } from 'react'
import { css } from '@emotion/css'

import { PokemonContext } from '../../context/PokemonContext'

const TabCatch = () => {
   const pokemonContext = useContext(PokemonContext)
   console.log(pokemonContext.myPokemon.items)
   return (
      <div>
         {pokemonContext.myPokemon.items.length === 0 ? (
            <div className={empty_title}>You don't have any of this Pokemon</div>
         ) : (
            <div>
               <div>Catch</div>
               {pokemonContext.myPokemon.items.map((item) => {
                  return (
                     <Fragment>
                        <div>{item.nickname}</div>
                        <button>release</button>
                     </Fragment>
                  )
               })}
            </div>
         )}
      </div>
   )
}

const fontFamily = 'Poppins, sans-serif'

const empty_title = css({
   fontFamily,
   textTransform: 'uppercase',
   lineHeight: '15px',
   letterSpacing: '0.2em',
   fontSize: 10,
   fontWeight: '500',
   marginTop: 60,
})

export default TabCatch
