import React from 'react';
import PokemonItem from './PokemonListItem.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('poke')
    event.preventDefault();
    //console.log
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Pokémon:
          <input type="text" value={this.state.pokemon} name='pokemon' onChange={this.handleInputChange}/>
      
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Search;

 // <div>
  //   <form action="" >
  //     <input type="text" />
  //     <button></button>
  //   </form>
  // </div>
