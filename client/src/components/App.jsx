import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './PokemonList.jsx';
import Random from './Random';
import Search from './Search';
import getPokemon from '../../../lib/getPokemon.js';
// import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pokemon: [],
      pokemon: this.props.pokemon,
    }
  }

  componentDidMount() {

  getPokemon('https://pokeapi.co/api/v2/pokemon/', (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log('this resssssssssssssssssss', res )
    }

  });
  // this.getPokemon()
}
  // getPokemon() {
  //   axios
  //   .get('https://pokeapi.co/api/v2/pokemon/4/')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }




  render() {
    return (
      <div>
        <h1>POKE-MAN TIME!</h1>
        <div>
          <Search />
        </div>

        <div>
          <Random />
        </div>

        <div>
          <PokemonList pokemon={this.state.pokemon} />
        </div>
      </div>
    );
  }
}
 // componentDidMount() {}