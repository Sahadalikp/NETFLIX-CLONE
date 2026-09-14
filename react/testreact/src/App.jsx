import react  from 'react'
import { useState } from 'react'


function App() {
  const[color,setColor]=useState('red')
  const[inputt,setInputt]=useState('')

return(
<div>
  <div className=' colordiv'
  style={{
    backgroundColor:color,
    height:"100px",
    width:"100px",
    borderRadius:"50%"
  }}></div>
   <input style={{
    marginTop:"10px"}}
    placeholder='color'
    value={inputt}
    onChange={(e)=>setInputt(e.target.value)}
  ></input>
   <button 
   onClick={()=>setInputt(setColor)}
   >submit</button>


</div>
)
}

export default App
