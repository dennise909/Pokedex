
import React, { Component } from 'react'
import './Form.css';
import SelectComponent from './Select';


 {/* const pokeType = [{
    value: 'fire', label: 'Fire'
}, {
    value: 'water', label: 'Water'
}] */}
class MyForm extends Component {
    onSubmit() {
        alert("it works")
    }
    
    render() {
        return (
            <div>
                <form>
                    <button class="btn"><i class="fa fa-close"></i></button>
                    <div class="container">
                        <h1>New Pokemon</h1>
                        <p>Get a new Pokemon by filling the data.</p>


                        <label for="name"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="name" id="Name" required />

                        <label for="id"><b>Id</b></label>
                        <input type="number" placeholder="Enter Id" name="id" id="id" required />

                        <SelectComponent/>

                        <label for="exp"><b>Base experience</b></label>
                        <input type="number" min="0" placeholder="Experience level" name="exp" id="exp" required />

                        <button type="submit" class="registerbtn" onClick ={this.onSubmit}>Add Pokemon</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MyForm;