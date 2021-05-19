class Friend extends React.Component {
    static defaultProps = {
        name: 'Anonymous',
        bangs: 1
    }
    render() {
        const {name, hobbies } = this.props;
        let bangs = "!".repeat(this.props.bangs);

        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}{bangs}</li>)}
                </ul>
            </div>

                )
    
        }
}