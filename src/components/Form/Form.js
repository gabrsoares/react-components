import React, {ReactDOM} from "react";
import './style.css';


export default class Form extends React.Component {
    constructor (props) {
        console.log('Constructor - Inicialização')

        super(props)

        this.state = {
            counter: 0,
            isToggleOn: true,
        }

        this.handleClick = this.handleClick.bind(this)

        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    componentDidMount() {
        console.log('Componente montado')
    }

    componentDidUpdate() {
        console.log('Componente atualizado')
    }

    render() {
        console.log('Render - Exibição')

        return (
            <div className="Form">
                <p>
                    <button onClick={this.increment}>Aumentar</button>
                    <button onClick={this.decrement}>Diminuir</button>
                    <input value={this.state.counter} />
                </p>
                    
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn? 'ON': 'OFF'}
                </button>
            </div>
        )
    }
}