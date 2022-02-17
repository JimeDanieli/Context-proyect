import {Component, createContext, useContext} from 'react'

const Context1 =createContext('My value')
const Context2 =createContext('My value 2')

const Provider=({children})=>{
    return(
        <Context1.Provider value='another value'>
           <Context2.Provider value='another value 2'>
            {children}
           </Context2.Provider>
        </Context1.Provider>
    )
}

class Componente extends Component{
    render(){
        return(
            <Context1.Consumer>
                {valor1=>
                <Context2.Consumer>
                    {valor2=> <div>{`${valor1} ${valor2}`} </div>}
                </Context2.Consumer>}
            </Context1.Consumer>
        )
    }
}
//arriba necesitamos si o si el consumer porque es un componente e clase, en cambio en el de abajo, al ser funcional, no lo necesita
const Componente2=()=>{
    const valor1 =useContext(Context1)
    const valor2 =useContext(Context2)
    return(
        <div>{`${valor1} ${valor2}`} </div>
    )
}
const App=()=>{
    return(
        <Provider>
            <Componente/>
            <Componente2/>
        </Provider>
    )
}

export default App