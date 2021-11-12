
import React, { Component } from 'react'
import './Form.css';
//import SelectComponent from './Select';
import InputComponent from './Input';


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id: undefined,
            exp: undefined,
        };

    }
    
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state)
        this.setState({name:"",id:"",exp:""})

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>New Pokemon</h1>
                        <p>Get a new Pokemon by filling the data.</p>
                        <label htmlFor="name"><b>Pokename</b></label>
                        <input type ="text" 
                                name = "name" 
                                value ={this.state.username} 
                                onChange ={this.handleChange} >                  
                        </input>
                        <label htmlFor="id"><b>Id</b></label>
                        <input type="number" 
                               name = "id" 
                               value ={this.state.id} 
                               onChange ={this.handleChange} >
                        </input>
                        <label htmlFor="exp"><b>Exp</b></label>
                        <input type="number"
                               name = "exp"  
                               value ={this.state.exp} 
                               onChange ={this.handleChange} >
                        </input>
                        <button type="submit" className="registerbtn" >Add Pokemon</button> 
                        <InputComponent name = {"name"} id={"Name"} type={"text"} />
                    </div>
                </form>

            </div>
        );
    }
}

export default MyForm;