import React from "react";
import ReactDOM from 'react-dom';
import {getsRandomItem,checksList} from './helpers';
import foods from './foods';

let randomFruit = getsRandomItem(foods)
let newList = checksList(foods,randomFruit)

console.log(randomFruit)
console.log(newList)

class App extends React.Component {
    render() {
        let randomFruit = getsRandomItem(foods)
        let fruitsLeft = checksList(foods,randomFruit)
        return (
            <div>
                <p>I would like a {randomFruit}</p>
                <p>There you go {randomFruit}</p>
                <p>Delicious! May have another?</p>
                <p>Im sorry, we're all out. We have only {fruitsLeft} left</p>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))