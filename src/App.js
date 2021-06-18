import React, {Component} from 'react';
import Pokegame from './Pokegame';
import './App.css';
import Dashboard from './Dashboard';

class App extends Component {
  
  render(){
    return (
    <main>
    <div className="App">
      <h1>Pokedex!</h1>
      <Pokegame/>
      <Dashboard/>
    </div>
    </main>
    );
    }
}

export default App;