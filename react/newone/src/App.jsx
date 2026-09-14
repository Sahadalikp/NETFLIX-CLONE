import React from 'react'
import Usecounter from './componant'

function App() {
  const{  count,increas,dencreas,resut} = Usecounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increas}>+</button>
      <button onClick={dencreas}>-</button>
      <button onClick={resut}>resut</button>
      
    </div>
  )
}

export default App
