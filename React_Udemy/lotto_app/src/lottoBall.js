import React, { Component } from "react";
import "./lottoBall.css"

class Ball extends Component {

    render() {   
        return(
        <div className="ball">
           <figure className="circle">
            <figcaption>{this.props.num}</figcaption>
           </figure>
           
        </div>
        )
    }
}

export default Ball