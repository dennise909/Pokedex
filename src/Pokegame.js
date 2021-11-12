import React, { Component } from 'react';
import Pokedex from './Pokedex';
import getpokemonList from './pokelist';


class Pokegame extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pokemonCollection: {
                items: [
                ]
            }
        }
    };

    async componentDidMount() { // hook to run data fetch calls 
        const requestData = await getpokemonList();
        console.log(getpokemonList())
        //this.setState({deck: requestData.pokemonCollection.items});
        //this.setState({...this.state, deck: requestData.pokemonCollection.items});
        this.setState(requestData);

    }


    render() {
        let hand1 = [];
        let hand2 = [...(this.state.pokemonCollection.items)];
       
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length); //gets a random number from the id's
            let randPokemon = hand2.splice(randIdx, 1)[0];// inserts a pokemon object accoardingly to the random id
            if (hand1.length <= 3) {hand1.push(randPokemon)}; //adds the random pokemon to the list
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
