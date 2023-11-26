import React, { useContext } from "react";
import { CardPokemon } from "./CardPokemon";
import { PokemonContext } from "../Context/PokemonContext";

export const HomePage = () => {
  const { allPokemons } = useContext(PokemonContext);
  console.log(allPokemons);
  return (
    <>
      <div className="card-list-pokemon container">
        {allPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};
