class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from ="Paul" 
                    bangs ={3} 
                    img = "https://images.unsplash.com/photo-1610551001381-d62bbbbd9299?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
             
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
