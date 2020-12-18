import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { PokemonContext } from '../../context/PokemonContext'

const Catch = ({ selectedPokemon, setSelectedPokemon }) => {
   const history = useHistory()
   const pokemonContext = useContext(PokemonContext)

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
            }
         })
         .catch((error) => alert(error))
   }

   return (
      <div>
         {selectedPokemon ? (
            <form onSubmit={submit}>
               <div></div>
               <input type='text' value={selectedPokemon?.nickname} onChange={(event) => setSelectedPokemon({ ...selectedPokemon, nickname: event.target.value })} />
               <button disabled={selectedPokemon?.nickname === '' ? true : false} onClick={() => history.push(`/pokemon/${selectedPokemon.name}/catch`)}>Save</button>
            </form>
         ) : null
         }
      </div >
   )
}

export default Catch
