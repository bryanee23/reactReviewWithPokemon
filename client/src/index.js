import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import pokemon from '../../data/fakePokemonData';
// import getPokemon from '../../lib/getPokemon.js';

ReactDOM.render( <App pokemon={pokemon}/>, document.getElementById('app'));