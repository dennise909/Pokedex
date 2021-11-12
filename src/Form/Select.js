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
        return (
            <div>
                <label for="pokemontype"><b>Choose a type: </b></label>
                <select id="pokemontype" name="types">
                    {
                        pokeType.map((type) =>
                            <option value={type.value} key={type.value}>{type.label}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

export default SelectComponent;