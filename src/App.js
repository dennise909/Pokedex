import React, {Component} from 'react';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
  //<Pokegame contentFunction={PokemonList} />
  render(){
    return (
    <div className="App">
      <h1>Pokedex!</h1>
      <Pokegame/>
    </div>);
    }
}

export default App;