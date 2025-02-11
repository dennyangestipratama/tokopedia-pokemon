import { useContext, useState } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/css'
import ClipLoader from "react-spinners/ClipLoader";

import { GET_POKEMON_DETAIL } from '../../graphql/pokemon-detail'
import { PokemonContext } from '../../context/PokemonContext'
import { Success, Failed } from './Modal'
import Meta from '../../components/meta'
import TabInfo from './TabInfo'
import TabSkill from './TabSkill'
import TabCatch from './TabCatch'

const Detail = () => {
   const param = useParams()
   const pokemonContext = useContext(PokemonContext)

   const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
      variables: { name: param.name },
   })

   const [showModal, setShowModal] = useState(false)
   const [showModalError, setShowModalError] = useState(false)

   const [selectedPokemon, setSelectedPokemon] = useState(null)

   if (loading) return (
      <div className={pokemon}>
         <div className={pokemon_card}>
            <div className={loader}>
               <ClipLoader
                  size={70}
                  color={"#E53935"}
               />
            </div>
         </div>
      </div>
   )

   if (error) return `Error${error.message}`

   return (
      <div className={pokemon}>
         <Meta title={`${data.pokemon.name.charAt(0).toUpperCase()}${data.pokemon.name.slice(1)}`} />
         {showModal ? <Success
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setShowModal={setShowModal}
         /> : null}
         {showModalError ? <Failed
            data={data}
            setSelectedPokemon={setSelectedPokemon}
            setShowModal={setShowModal}
            setShowModalError={setShowModalError}
         /> : null}
         <div className={pokemon_card}>
            <div className={pokemon_image}>
               <img src={data.pokemon.sprites.front_default} alt='front' />
               <img src={data.pokemon.sprites.back_default} alt='back' />
            </div>
            <div className={content}>
               <div className={tab}>
                  <NavLink className={tab_title} activeClassName={tab_active} exact to={`/pokemon/${data.pokemon.name}`}>
                     Info
                  </NavLink>
                  <NavLink className={tab_title} activeClassName={tab_active} to={`/pokemon/${data.pokemon.name}/skill`}>
                     Skill
                  </NavLink>
                  <NavLink className={tab_title} activeClassName={tab_active} to={`/pokemon/${data.pokemon.name}/catch`}>
                     Catch
                  </NavLink>
               </div>
               <div className={title}>{data.pokemon.name}</div>
               <Switch>
                  <Route exact path='/pokemon/:name'>
                     <TabInfo pokemon={data.pokemon} />
                  </Route>
                  <Route path='/pokemon/:name/skill'>
                     <TabSkill pokemon={data.pokemon} />
                  </Route>
                  <Route path='/pokemon/:name/catch'>
                     <TabCatch pokemon={data.pokemon} />
                  </Route>
               </Switch>
            </div>
            <button
               disabled={showModal ? true : false}
               onClick={() => {
                  pokemonContext.catchPokemon().then((success) => {
                     console.log(success)
                     if (success) {
                        setShowModal(true)
                        setSelectedPokemon({
                           ID: data.pokemon.id,
                           name: data.pokemon.name,
                           image: data.pokemon.sprites.front_default,
                           nickname: '',
                        })
                     } else {
                        setShowModalError(true)
                     }
                  })
               }}
               className={button}>
               Catch
            </button>
         </div>
      </div>
   )
}

const backgroundColor = '#FCFCFC'
const buttonColor = '#E53935'
const fontFamily = 'Poppins, sans-serif'

const pokemon = css({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   minHeight: '90vh',
})

const loader = css({
   margin: 'auto'
})

const pokemon_card = css({
   backgroundColor,
   borderRadius: 12,
   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
   display: 'flex',
   padding: '25px 40px 25px 42px',
   minHeight: '400px',
   width: '900px'
})

const title = css({
   fontFamily,
   textShadow: '3px 3px 0px rgba(0, 0, 0, 0.25)',
   fontSize: 34,
   lineHeight: '51px',
   letterSpacing: '0.1em',
   fontWeight: 'bold',
   textTransform: 'uppercase',
   marginTop: 5,
   width: '500px',
})

const tab = css({
   display: 'flex',
   alignItems: 'center',
})

const tab_title = css({
   fontFamily,
   textTransform: 'uppercase',
   textDecoration: 'none',
   marginRight: 30,
   color: 'black',
})

const tab_active = css({
   fontStyle: 'italic',
   fontWeight: 'bold',
})

const content = css({
   display: 'flex',
   flexDirection: 'column',
   paddingLeft: 54,
   paddingRight: 90,
})

const pokemon_image = css({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   justifyContent: 'center',
})

const button = css({
   width: 72,
   height: 72,
   borderRadius: '100%',
   border: 'none',
   marginTop: 'auto',
   background: buttonColor,
   boxShadow: '5px 4px 0px #9A2E2C',
   fontFamily,
   textTransform: 'uppercase',
   color: '#FFFFFF',
   fontWeight: 'bold',
   fontSize: 13,
   lineHeight: '19px',
   letterSpacing: '0.1em',
   cursor: 'pointer',
   outline: 'none',
})

export default Detail
