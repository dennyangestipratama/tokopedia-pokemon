import { useContext, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { css } from '@emotion/css'
import { PokemonContext } from '../../context/PokemonContext'

const PokemonCard = ({ pokemon }) => {
   const history = useHistory()
   const pokemonContext = useContext(PokemonContext)

   return (
      <div className={card}>
         {pokemon.length === 0 ? <div>You don't have any Pokemon</div> :
            <Fragment>
               <span className={title}>{pokemon.name}</span>
               <div className={cardImage} onClick={() => history.push(`/pokemon/${pokemon.name}`)}>
                  <img src={pokemon.image} alt='pokemon' />
               </div>
               <span className={cardOwned}>{`owned: ${pokemonContext.myPokemon.items.filter(filt => filt.name === pokemon.name).length}`}</span>
               {pokemonContext.myPokemon.items.filter(filt => filt.name === pokemon.name).map((item, index) => {
                  return (
                     <div key={index}>
                        <div>{item.nickname}</div>
                        <button onClick={() => pokemonContext.releasePokemon(item.nickname)}>release</button>
                     </div>
                  )
               })}
            </Fragment>}
      </div>
   )
}
const yellowColor = '#FFCB05'
const redColor = '#E53935'
const neutralColor = '#FFFFFF'
const darkColor = '#303C42'
const blueColor = '#3C5AA6'

const fontFamily = 'Poppins, sans-serif'

const card = css({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: redColor,
   border: `8px solid ${darkColor}`,
   borderRadius: 22,
})

const cardImage = css({
   background: neutralColor,
   border: `8px solid ${darkColor}`,
   borderRadius: 10,
   marginBottom: 25,
   padding: '10px',
})

const cardOwned = css({
   fontFamily,
   fontWeight: 'bold',
   color: neutralColor,
   fontsize: 14,
   marginBottom: 25,
})

const title = css({
   display: 'block',
   color: yellowColor,
   textTransform: 'uppercase',
   fontSize: 32,
   fontWeight: 'bold',
   lineHeight: '51px',
   padding: '15px 35px',
   WebkitTextStroke: 2,
   fontFamily,
   WebkitTextStrokeColor: blueColor,
})

export default PokemonCard
