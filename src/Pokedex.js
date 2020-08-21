import React, { Component } from 'react';
//import Pokecard here because the structure of 
//each card is defined inside the Pokecard file
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        //write condition just for styling
        let title;
        if (this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }

       return (
           //loop through the pokemon (props) with map method
         <div className="Pokedex">
             <h4>Total Experience: {this.props.exp}</h4>
             {title}
             <div className="Pokedex-cards">
                {this.props.pokemon.map((p)=>(
                  <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} /> 
                ))}
             </div>
            
         </div>
       );
    }
}


export default Pokedex;

