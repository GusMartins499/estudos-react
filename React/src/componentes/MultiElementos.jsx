import React from 'react'

//3º solução
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

// 2º Solução
/* export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </React.Fragment> */


//Solução - mais usado
/* export default props =>
    <h1>Parte 1</h1>
    <h2>Parte 2</h2> */
