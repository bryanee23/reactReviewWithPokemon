import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './PokemonList.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
  return (
    <div>
      <h1>POKE-MAN TIME!</h1>
      <div>
        Search goes here
        </div>
      <div>
        <PokemonList pokemon={this.props.pokemon}/>
        List goes here
      </div>
    </div>
  );
  }
}
 // componentDidMount() {}