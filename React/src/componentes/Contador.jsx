import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    maisUm = () => {
        //this.state.numero++
        this.setState({ numero: this.state.numero + 1 })
    }
    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alteraNumero = diferenca => {
        this.setState({ numero: this.state.numero + diferenca })
    }
    render() {
        return (
            <div>
                <div>Numero: {this.state.numero} </div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={() => this.alteraNumero(10)}>Inc10</button>
                {/* Solução 2 <button onClick={() => this.maisUm()}>Inc</button> */}
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alteraNumero(-10)}>Dec10</button>
            </div>
        )
    }
}
//solução 1
/*  constructor(props){
super(props)
this.maisUm = this.maisUm.bind(this)
} */