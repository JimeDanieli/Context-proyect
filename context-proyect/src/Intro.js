 import {createContext, useContext} from 'react'

 //createContext recibe como argumento un valor como defecto, puede ser cualquier tipo de dato 
const ContextDefault = createContext('default value') 
const Context2= createContext('default value2')
//un provider es el encargado de pasar contexto hacia abajo, a los componentes hijos
const DefaultProvider=({children}) =>{
  return(
    <ContextDefault.Provider value={'my value'}>
      {children}
    </ContextDefault.Provider>
  )
}
const Content=()=>{
  const ctx=useContext(ContextDefault)
  return(
    <div>{ctx}</div>
  )
}
const Content2=()=>{
  const ctx=useContext(Context2)
  return(
    <div>{ctx}</div>
  )
}
//sin provider si se pasa el valor por defecto
function Intro() { 
   return (
    <DefaultProvider>
      <Content/>
      <Content2/>
    </DefaultProvider>
  );
}

export default Intro;
