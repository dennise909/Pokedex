import React, { Component } from 'react'
import './Form.css';


class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataInput : undefined ,
        };
      }
    
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (<div>
            <label htmlFor={this.props.name}><b>Exp</b></label>
            <input type= {this.props.type}
                name={this.props.dataInput}
                value={this.state.name}
                onChange={this.handleChange} 
                autocomplete="off"
                >
            </input>
        </div>


        )
    }
}
export default InputComponent;