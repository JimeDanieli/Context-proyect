import {createContext, useContext, useState} from 'react'

const Context=createContext()

const ContadorProvider=({children}) =>{
    const [contador, setCont] =useState(0)

    const increment=()=>setCont(contador + 1)
    const decrement =()=> setCont(contador - 1)

    return(
        <ContadorProvider value={contador, increment, decrement}>
            {children}
        </ContadorProvider>
    )
}

const Increment=()=>{
    console.log('increment')
    const {increment} =useContext(Context)
    return(
        <button onClick={increment}>Increment</button>
    )
}
const Decrement=()=>{
    console.log('decrement')
    const {decrement}= useContext(Context)
    return(
        <button onClick={decrement}>Decrement</button>
    )
}
const Label=()=>{
    console.log('Label')
    const {contador}= useContext(Context)
    return(
        <h1>{contador} </h1>
    )
}

const App=()=>{
    return(
        <ContadorProvider>
            <Label/>
            <Increment/>
            <Decrement/>
        </ContadorProvider>
    )
}

export default App