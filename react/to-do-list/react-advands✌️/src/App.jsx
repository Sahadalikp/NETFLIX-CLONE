import React, { useReducer } from 'react'


const inisalState ={
  text : "" ,
  inputvalue: ""
}

function reduser(state,action){

  switch(action.type){

    case "INPUT-VALUE":
      return{
        ...state,
        text:action.payload
      }

    case "SHOW-VALUE":
      return{
        ...state,
        inputvalue: state.text
      }

    default :
      return state ;

  }

} 

export default function App() {


  const[state,Dispatch]=useReducer(
    reduser,
    inisalState);


  return (
    <div>

      <h1>hello  {state.inputvalue}</h1>


     <input 
     type='text'
     onChange={(e)=>Dispatch(
      {type:"INPUT-VALUE",
       payload:e.target.value})}
     ></input>

      <button onClick={()=>Dispatch({type:"SHOW-VALUE"  })}>button</button>
      
    </div>
  )
}
