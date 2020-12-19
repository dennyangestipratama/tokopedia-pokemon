import { useContext, Fragment } from 'react'
import {useParams} from 'react-router-dom'
import { css } from '@emotion/css'

import { PokemonContext } from '../../context/PokemonContext'

const TabCatch = () => {
   const params = useParams()
   const pokemonContext = useContext(PokemonContext)
   
   return (
      <div>
         {pokemonContext.myPokemon.items.filter(filt => filt.name === params.name).length === 0 ? (
            <div className={empty_title}>You don't have any of this Pokemon</div>
         ) : (
            <div>
               <div>Catch</div>
               {pokemonContext.myPokemon.items.filter(filt => filt.name === params.name).map((item, index) => {
                  return (
                     <Fragment key={index}>
                        <div>{item.nickname}</div>
                        <button onClick={() => pokemonContext.releasePokemon(item.nickname)}>release</button>
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
