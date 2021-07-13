import React, { Component } from "react";
import "./lottoCard.css"
import Ball from "./lottoBall";

class Card extends Component {
    static defaultProps = {
        title: "Lotto",
        maxBalls: 6,
        maxNum:40
    }

    constructor(props) {
        super(props);
        this.state = {
                nums: Array.from ({length:this.props.maxBalls})
            }
        this.handleClick = this.handleClick.bind(this)
    };

    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(
              n => Math.floor(Math.random() * (this.props.maxNum) + 1)
            )
        }))
    }

    handleClick(){
        this.generate();
    }
    render() {
        return(
        <div class= "card">
            <h2>{this.props.title}</h2>
            <div class= "container">
               {this.state.nums.map(n =>(<Ball num= {n}/>))} 
            </div>
            <button onClick={this.handleClick} type="button">Generate</button>
        </div>
        )
}
}

export default Card