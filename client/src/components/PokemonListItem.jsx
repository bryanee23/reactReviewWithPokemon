import React from 'react';

const PokemonItem = ({ pokemon }) => {

  let img = pokemon.sprites.front_default;
  return (
    <div>
      <div>Name: {pokemon.name}</div>
      <div>Id: {pokemon.id}</div>
      <img src={img} alt="pokemon image" />
    </div>
  )
}

export default PokemonItem;