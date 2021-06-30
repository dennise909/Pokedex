import React, { Component } from 'react'
import './Form.css';


const pokeType = [{
    value: 'fire', label: 'Fire'
}, {
    value: 'water', label: 'Water'
},
{
    value: 'normal', label: 'Normal'
}
]



class SelectComponent extends Component {
    render() {
        return(
        <select id="pokemontype" name="types">
            {
                pokeType.map((type) =>
                <option value={type.value}>{type.label}</option>)
            }
        </select>
        );
    }
}

export default SelectComponent;