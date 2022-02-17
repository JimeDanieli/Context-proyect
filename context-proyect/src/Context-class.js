import {Component, createContext} from 'react'

const Context =createContext('My value')

const Provider=({children})=>{
    return(
        <Context.Provider value='another value'>
            {children}
        </Context.Provider>
    )
}

class Componente extends Component{
    //para poder obtener el contexto pasado dentro de componentes de clases, necesitamos un una prop estatica. Para eso hay dos formas
    //1) static contextype= Context
    render(){
        return(
            <div>HOlid</div>
        )
    }
}
//la numero 2
Componente.contextType= Context
//si no quiero usar contextype ni el hook de context, puedo usar el componente de Consumer
const App=()=>{
    return(
        <Provider>
            <Componente/>
            <Context.Consumer>
                {value=()=> <div>{valor}</div>}
            </Context.Consumer>
        </Provider>
    )
}

export default App