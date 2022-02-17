import {createContext,useContext,useState } from "react";

const Context =createContext({valor:false, toggle:()=>{}})
//nuestro provider va a sacar value y setValue desde useState
const Provider=({children}) =>{
    const [valor, setValue]= useState(false)
    const value={
        valor,
        toggle:()=> setValue(!valor)
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
const Component= ()=>{
    const {valor,toggle}= useContext(Context)
    return(
        <div>
            <label>{valor.toString() } </label>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}//Pasamos el value a string porque es un boolean y react no esta imprimiendo booleans en este momento, entonces asi nos aseguramos de que llegue algo
const App2=()=>{
    return (
        <Provider>
            <Component/>
        </Provider>
    )
}

export default App2