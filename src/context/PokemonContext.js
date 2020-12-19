import React, { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()
export const PokemonContextConsumer = PokemonContext.Consumer

const PokemonContextProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState({
    items: JSON.parse(localStorage.getItem('myPokemon')) ?? [],
  })

  const releasePokemon = (nickname) => {
    setMyPokemon((prevState) => ({
      ...prevState,
      items: myPokemon.items.filter((item) => item.nickname !== nickname),
    }))
  }

  let catchPokemon = () => {
    const value = Math.floor(Math.random() * 100) > 50
    return new Promise(async function (resolve, reject) {
      console.log(value)
      value ? resolve(true) : resolve(false)
    })
  }

  useEffect(() => {
    localStorage.setItem(`myPokemon`, JSON.stringify(myPokemon.items))
  }, [myPokemon])

  let savePokemon = (nickname) => {
    return new Promise(async function (resolve, reject) {
      myPokemon.items.filter((item) => item?.nickname.toLowerCase() === nickname.nickname.toLowerCase()).length === 0
        ? resolve(true)
        : resolve(false)
    })
  }

  return (
    <PokemonContext.Provider
      value={{
        myPokemon,
        setMyPokemon,
        releasePokemon,
        catchPokemon,
        savePokemon,
      }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider
