import React, { useState } from 'react'

function App() {

const[text,setText]=useState("")
const[show,setShow]=useState("")


  return (
    <div>
      <h1>{text}</h1>

      <input 
      type='text'
      value={show}
      onChange={(e)=>setShow(e.target.value)}
      >
      </input>
      <button onClick={()=>setText(show)}>submit</button>
    </div>
  )
}

export default App

