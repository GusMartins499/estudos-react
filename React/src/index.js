import ReactDOM from 'react-dom'
import React from 'react'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import { CompA, CompB } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'
//import ComponenteClasse from './componentes/Classe'
import Contador from './componentes/Contador'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        {<Contador numero={0} />}
        {/*  {<ComponenteClasse valor="Sou um componente de classe" />} */}
        {/* {<Pai />} */}
        {/* {<ComponenteComFuncao />} */}
        {/* <Familia sobrenome="Martins" >
            <Membro nome="Mariana" />
            <Membro nome="Gustavo" />
        </Familia> */}
        {/*<FamiliaSilva />*/}

        {/* <MultiElementos /> */}
        {/* <CompA valor="Olá eu sou o A!" />
        <CompB valor="B na área !" /> */}
        {/* <PrimeiroComponente valor="Bom dia!" /> */}

    </div>
    , elemento)
