import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();
export const PokemonContextConsumer = PokemonContext.Consumer;

const PokemonContextProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState({
    items: JSON.parse(localStorage.getItem("myPokemon")) ?? [],
  });

  const releasePokemon = (id) => {
    setMyPokemon((prevState) => ({
      ...prevState,
      items: myPokemon.items.filter((item) => item.id !== id),
    }));
  };

  let catchPokemon = () => {
    return new Promise(async function (resolve, reject) {
      Math.floor(Math.random() * 100) > 50
        ? resolve(true)
        : reject(alert("You failed to get pokemon"));
    });
  };

  useEffect(() => {
    localStorage.setItem(`myPokemon`, JSON.stringify(myPokemon.items));
  }, [myPokemon]);

  let savePokemon = (nickname) => {
    return new Promise(async function (resolve, reject) {
      myPokemon.items.filter(
        (item) => item?.name.toLowerCase() === nickname.name.toLowerCase()
      ).length === 0
        ? resolve(true)
        : reject(alert("You already have the same name"));
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        myPokemon,
        setMyPokemon,
        releasePokemon,
        catchPokemon,
        savePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
