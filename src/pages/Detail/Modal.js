import { css } from '@emotion/css'
import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { PokemonContext } from '../../context/PokemonContext'

import Ash from '../../assets/ash.png'
import Pikachu from '../../assets/pikachu.png'

export const Success = ({ selectedPokemon, setSelectedPokemon, setShowModal }) => {
   const pokemonContext = useContext(PokemonContext)
   const history = useHistory()

   const [showError, setShowError] = useState(false)

   const submit = (event) => {
      event.preventDefault()
      pokemonContext
         .savePokemon(selectedPokemon)
         .then((success) => {
            if (success) {
               pokemonContext.setMyPokemon((prevState) => ({
                  ...prevState,
                  items: [...prevState.items, selectedPokemon],
               }))
               setSelectedPokemon(null)
               setShowModal(false)
            } else {
               setShowError(true)
            }
         })
         .catch((error) => alert(error))
   }

   return (
      <div className={success}>
         <div className={title}>Success !!</div>
         <div className={success_wrapper} >
            <img className={success_img} src={Ash} alt="ash" />
            <form onSubmit={submit}>
               <label className={success_label}>Nickname :</label>
               <input
                  type='text'
                  className={input}
                  value={selectedPokemon?.nickname}
                  onChange={(event) => setSelectedPokemon({
                     ...selectedPokemon,
                     nickname: event.target.value
                  })}
               />
               {showError ? <div className={error_text}>This name already taken</div> : null}
               <div className={button}>
                  <button type='reset' className={button_alpha} onClick={() => {
                     setShowModal(false)
                  }}>Release</button>
                  <button
                     type='submit'
                     className={button_beta}
                     disabled={selectedPokemon?.nickname === '' ? true : false}
                     onClick={() => history.push(`/pokemon/${selectedPokemon.name}/catch`)}>
                     Save
               </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export const Failed = ({ setSelectedPokemon, setShowModal, setShowModalError, data }) => {
   const pokemonContext = useContext(PokemonContext)

   return (
      <div className={fail}>
         <div className={title}>Oh no ...</div>
         <div className={success_label}>You failed to catch it,<br /> want to try again?</div>
         <div className={fail_wrapper} >
            <img className={fail_img} src={Pikachu} alt="pikachu" />
            <div className={button}>
               <button className={button_alpha} onClick={() => {
                  setShowModalError(false)
               }}>Leave</button>
               <button
                  className={button_beta}
                  onClick={() => {
                     setShowModalError(false)
                     setTimeout(() => {
                        pokemonContext.catchPokemon().then((success) => {
                           if (success) {
                              setTimeout(() => {
                                 setShowModal(true)
                                 setSelectedPokemon({
                                    ID: data.pokemon.id,
                                    name: data.pokemon.name,
                                    image: data.pokemon.sprites.front_default,
                                    nickname: '',
                                 })
                              }, 300);
                           } else {
                              setTimeout(() => {
                                 setShowModalError(true)
                              }, 300);
                           }
                        })
                     }, 200)
                  }}>
                  Try Again
               </button>
            </div>
         </div>
      </div >
   )
}

const successBackground = '#192B2F'
const neutralColor = '#FFFFFF'
const greyColor = '#C4C4C4'
const redColor = '#E53935'
const blueColor = '#006FB9'
const fontFamily = 'Poppins, sans-serif'

const success = css({
   background: successBackground,
   boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)',
   borderRadius: 40,
   position: 'fixed',
   left: '50%',
   top: '50%',
   transform: 'translate(-50%, -50%)',
   zIndex: '5',
   padding: '10px 35px 42px',
   width: 470,
   height: 258
})

const success_wrapper = css({
   display: 'flex',
   justifyContent: 'flex-end',
   marginBottom: 10,
})

const success_img = css({
   position: 'absolute',
   bottom: 0,
   left: '1rem',
   zIndex: '10'
})

const title = css({
   fontFamily,
   fontWeight: 'bold',
   fontSize: 60,
   lineHeight: '90px',
   letterSpacing: '0.1em',
   textShadow: '15px 7px 0px rgba(0, 0, 0, 0.25)',
   textTransform: 'uppercase',
   textAlign: 'center',
   color: neutralColor
})

const success_label = css({
   fontFamily,
   fontWeight: '500',
   fontSize: 12,
   lineHeight: '18px',
   letterSpacing: '0.17em',
   textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
   marginTop: 30,
   textTransform: 'uppercase',
   color: neutralColor
})

const placeholder = css({
   color: greyColor
})

const focus = css({
   outline: 'none',
})

const error_text = css({
   fontFamily,
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   letterSpacing: '0.2em',
   color: redColor
})

const input = css({
   background: neutralColor,
   borderRadius: 5,
   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
   marginBottom: 5,
   marginTop: 10,
   padding: '5px 13px',
   width: '100%',
   fontFamily,
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   letterSpacing: '0.2em',
   outline: 'none',
   '&:placeholder': placeholder
})

const button = css({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   marginTop: 10
})

const button_alpha = css({
   fontFamily,
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   color: neutralColor,
   textTransform: 'uppercase',
   padding: '2px 15px',
   marginRight: 15,
   border: 'none',
   borderRadius: '100px',
   cursor: 'pointer',
   background: redColor,
   '&:focus': focus,
})

const button_beta = css({
   fontFamily,
   fontWeight: '500',
   fontSize: 10,
   lineHeight: '15px',
   color: neutralColor,
   textTransform: 'uppercase',
   padding: '2px 15px',
   border: 'none',
   borderRadius: '100px',
   cursor: 'pointer',
   background: blueColor,
   '&:focus': focus,
})

const fail = css({
   background: redColor,
   boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)',
   borderRadius: 40,
   position: 'fixed',
   left: '50%',
   top: '50%',
   transform: 'translate(-50%, -50%)',
   zIndex: '5',
   padding: '10px 35px 42px',
   width: 470,
   height: 258
})

const fail_wrapper = css({
   display: 'flex',
   flexDirection: 'row-reverse',
   justifyContent: 'flex-end',
   marginBottom: 10,
})

const fail_img = css({
   position: 'absolute',
   bottom: 0,
   right: '2rem',
   zIndex: '10'
})

const fail_title = css({

})