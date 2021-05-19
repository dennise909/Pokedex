class App extends React.Component {
    render() {

        return (
            <div>
               <h1>Props</h1> 
               <Friend 
                name ="Elton"
                hobbies = {["singing","dancing","coding"]}
                bangs = {4}/>
               <Friend
                name = "Michel"
                hobbies = {["not coding","run","eat tacos in Prenzlauer Berg"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))