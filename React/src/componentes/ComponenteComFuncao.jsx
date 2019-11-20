import React from 'react'

export default props => {
    const aprovados = ['Mariana', 'Gustavo', 'Julia', 'Pedro']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return <ul>{gerarItens(aprovados)}</ul>
}