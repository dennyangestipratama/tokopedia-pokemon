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
               <div className={title}>Catch</div>
               <div className={name_wrapper}>
               {pokemonContext.myPokemon.items.filter(filt => filt.name === params.name).map((item, index) => {
                  return (
                     <div className={item_wrapper} key={index}>
                        <div className={title_name}>{item.nickname}</div>
                        <button className={button} onClick={() => pokemonContext.releasePokemon(item.nickname)}>release</button>
                     </div>
                  )
               })}
               </div>
            </div>
         )}
      </div>
   )
}

const fontFamily = 'Poppins, sans-serif'
const redColor = '#E53935'

const empty_title = css({
   fontFamily,
   textTransform: 'uppercase',
   lineHeight: '15px',
   letterSpacing: '0.2em',
   fontSize: 10,
   fontWeight: '500',
   marginTop: 60,
})

const title = css({
   fontFamily,
   fontSize: 12,
   lineHeight: '18px',
   marginBottom: 20
})

const title_name = css({
   fontFamily,
   fontStyle: 'italic',
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   letterSpacing: '0.2em',
   paddingRight: '1rem'
})

const name_wrapper = css({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   columnGap: 20,
   rowGap: 20,
   maxHeight: '240px',
   overflow: 'auto',
   paddingRight: '1rem'
})

const item_wrapper = css({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
})

const focus = css({
   outline: 'none'
})

const button = css({
   background: redColor,
   borderRadius: 18,
   padding: '3px 15px',
   fontFamily,
   fontStyle: 'italic',
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   color: '#FFFFFF',
   border: 'none',
   cursor: 'pointer',
   '&:focus': focus
})

export default TabCatch
