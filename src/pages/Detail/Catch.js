import { useContext } from 'react'

import { PokemonContext } from '../../context/PokemonContext'

const Catch = ({ selectedPokemon, setSelectedPokemon }) => {
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
               <button>Save</button>
            </form>
         ) : null}
      </div>
   )
}

export default Catch
