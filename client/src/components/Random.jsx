import React from 'react';
import PokemonItem from './PokemonListItem.jsx';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChosen: false,
      // isChosen: true,
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({isChosen:true})
  }

  render() {
    const isChosen = this.state.isChosen;
    
    const chosenObj = {
      id: 4,
      name: 'charmander',
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      }
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="I choose you!" />
        </form>


        {isChosen ? <div id='pokemonList'>   <PokemonItem pokemon={chosenObj} /></div> : null}
      </div>
    )
  }

}

export default Random;