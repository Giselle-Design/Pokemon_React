
import React, { Component } from 'react';
//import Pokecard.js inside this file.
// import Pokecard from './Pokecard';
//import Pokedex file instead of Pokecard 
//because all props is defined inside the Pokedex file
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
  render(){
    return (
      //because of using JSX, write className instead of class
    <div className = "App">
      {/* //write props inside the <Pokecard/> */}
      {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
      {/* write all props inside the Pokedex file and 
         loop through them then render file inside the App.js */}
      <Pokegame />
    </div>
    );
  }
}

export default App;
