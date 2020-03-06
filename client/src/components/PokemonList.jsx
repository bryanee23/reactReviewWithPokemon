import React from 'react';
import PokemonItem from './PokemonListItem.jsx';

const PokemonList = ({pokemon})=>(
<div id='pokemonList'>
{pokemon.map((obj, index)=>
(  <div key={index}>
   <PokemonItem pokemon={obj} />
  </div>
))}</div>
)

export default PokemonList;