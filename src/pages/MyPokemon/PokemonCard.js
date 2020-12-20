import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { css } from '@emotion/css'
import { PokemonContext } from '../../context/PokemonContext'

const PokemonCard = ({ pokemon }) => {
   const history = useHistory()
   const pokemonContext = useContext(PokemonContext)

   return (
      <div className={card}>
         <span className={title}>{pokemon.name}</span>
         <div className={cardImage}>
            <img src={pokemon.image} alt='pokemon' />
         </div>
         <span className={cardOwned}>{`owned: ${pokemonContext.myPokemon.items.filter(filt => filt.name === pokemon.name).length}`}</span>
         <button
            className={detail_button}
            onClick={() => history.push(`/pokemon/${pokemon.name}/catch`)}>
            See Detail
               </button>
         <div className={container}>
            {pokemonContext.myPokemon.items.filter(filt => filt.name === pokemon.name).map((item, index) => {
               return (
                  <div className={item_wrapper} key={index}>
                     <div className={title_name}>{item.nickname}</div>
                     <button className={button} onClick={() => pokemonContext.releasePokemon(item.nickname)}>release</button>
                  </div>
               )
            })}
         </div>
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
   width: '100%'
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

const title_name = css({
   fontFamily,
   fontStyle: 'italic',
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   letterSpacing: '0.2em',
   paddingRight: '1rem',
   color: '#FFFFFF'
})

const container = css({
   width: '100%',
   padding: '0 4rem',
   minHeight: '250px',
   overflow: 'auto',
   paddingBottom: '2rem'
})

const item_wrapper = css({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginBottom: '1rem'
})

const focus = css({
   outline: 'none'
})

const hover = css({
   color: yellowColor
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
   boxShadow: '2px 3px 0px rgba(0, 0, 0, 0.25)',
   '&:focus': focus
})

const detail_button = css({
   background: darkColor,
   padding: '12px 23px',
   border: 'none',
   color: neutralColor,
   borderRadius: 20,
   fontFamily,
   fontsize: 18,
   fontWeight: 'bold',
   lineHeight: '27px',
   cursor: 'pointer',
   textTransform: 'uppercase',
   marginBottom: 36,
   '&:hover': hover
})

export default PokemonCard
