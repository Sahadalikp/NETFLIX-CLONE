import React from 'react'
import "./index.css"
import { useReducer } from 'react';


const initialState = {
  count : 0,
  color : "gray"

};

function reducer(state,action){

  switch(action.type){

    case "incrment" :
      return{
        ...state,
        count:state.count+1,
      }
    case "decrment":
      return{
        ...state,
        count:state.count-1
      }
    case "resut" :
      return{
        ...state,
        count:state.count=0
      }
    case "theam":
      return{
        ...state,
        color: (state.color === 'red') ? "gray":"red"
      }    
  }

}

export default function App() {

const[state,dispatch] = useReducer(
  reducer,
  initialState);

  return (
  <div  style={{
        backgroundColor: state.color,
        width: "100vw",
        height: "100vh",
      }}>
          <div>
           <h1 style={{margin: '0'}}>{state.count}</h1>

      <button onClick={()=> dispatch ({type: "incrment",payload : 10})}> add </button>

      <button onClick={()=>dispatch ({type:"decrment"})}> mines</button>

      <button onClick={()=>dispatch ({type:"resut"})}> resut</button>
      
        </div>
        <div>
          <button onClick={()=>dispatch({type: "theam"})}> theam</button>
        </div>

  </div>
  )
}
