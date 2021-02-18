import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/897eaefad787da88a5ad6b0cdce833360f9f8163/sprites/pokemon/other/dream-world/';


class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.svg`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className="Pokecard-data"> Type: {this.props.type}</div>
                <div className="Pokecard-data"> EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;