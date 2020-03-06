import React from 'react';

const PokemonItem = ({ pokemon }) => {

  let img = pokemon.sprites.front_default;
  return (
    <div className='pokemonItem'>
      <div>Pokémon: {pokemon.name}</div>
      <div>Pokédex: {pokemon.id}</div>
      <img src={img} alt="pokemon image" />
    </div>
  )
}

export default PokemonItem;