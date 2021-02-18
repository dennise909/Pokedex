import React, {Component} from 'react';
import Pokegame from './Pokegame';
import './App.css';
import APIcall from './APIcall';

class App extends Component {
  render(){
    return (
    <div className="App">
      <h1>Pokedex!</h1>
      <Pokegame/>
      <APIcall/>
    </div>);
    }
}

export default App;