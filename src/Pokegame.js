import React, { Component } from 'react';
import Pokedex from './Pokedex';
import getpokemonList from './pokelist';
//import PokemonList from './pokelist';


class Pokegame extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pokemonCollection: {
                items: [
                    //             /*
                    //             { id: 4, name: 'Charmander', type: 'fire', baseExperience: 62 },
                    //             { id: 7, name: 'Squirtle', type: 'water', baseExperience: 63 },
                    //             { id: 11, name: 'Metapod', type: 'bug', baseExperience: 72 },
                    //             { id: 12, name: 'Butterfree', type: 'flying', baseExperience: 178 },
                    //             { id: 25, name: 'Pikachu', type: 'electric', baseExperience: 112 },
                    //             { id: 39, name: 'Jigglypuff', type: 'normal', baseExperience: 95 },
                    //             { id: 94, name: 'Gengar', type: 'poison', baseExperience: 225 },
                    //             { id: 133, name: 'Eevee', type: 'normal', baseExperience: 65 }*/
                ]
            }
        }
        //this.state = {deck: [], player: {name: 'name'}};
        //this.state = {deck: []}
    };

    async componentDidMount() { // hook to run data fetch calls 
        const requestData = await getpokemonList();
        //this.setState({deck: requestData.pokemonCollection.items});
        //this.setState({...this.state, deck: requestData.pokemonCollection.items});
        this.setState(requestData);
        console.log(this)

    }

    render() {
        let hand1 = [];
        let hand2 = [...(this.state.pokemonCollection.items)];
        console.log(this)
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length); //gets a random number from the id's
            let randPokemon = hand2.splice(randIdx, 1)[0];// inserts a pokemon object accoardingly to the random id
            hand1.push(randPokemon); //adds the random pokemon to the list
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.baseExperience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.baseExperience, 0);

        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default Pokegame;