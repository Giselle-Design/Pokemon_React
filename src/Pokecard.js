import React, { Component } from 'react';
import './Pokecard.css'

//use blew link to apply for images
const POKE_API = 
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//add blew link to get images with high quality but every image id has 3 number
// so we need write logic because inside the pokedex file we have numbers like 7 , 25 and so on.
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//logic to make all numbers to 3 digits
let padToThree = (number)=>(number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
    render() {
        //consume all props inside the Pokecard class 
        // so this inside the class refers to Pokecard object.
        //make a variable and add id to props to get different images.
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            //whenever need to return multiples things use div and apply all of them inside the div
            <div className="Pokecard">
             <h1 claasName="Pokecard-title">{this.props.name}</h1>
             <div className="Pokecard-image"><img src={imgSrc} alt={this.props.name}/></div>
             
            <div className="Pokecard-data">Type: {this.props.type}</div>
            <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        );    
    }
}
//export class to use it in other file (here use inside the App.js)
export default Pokecard;