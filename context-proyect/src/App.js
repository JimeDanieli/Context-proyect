import { Component, createContext,useContext,useState } from "react";

const Context =createContext({value:false, toggle:()=>{}})
//nuestro provider va a sacar value y setValue desde useState
const Provider=({children}) =>{
    const [value, setValue]= useState(false)
    const value={
        value,
        togle:()=> setValue(!value)
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const App=()=>{
    return (
        <Provider>
            <Component/>
        </Provider>
    )
}

export default App