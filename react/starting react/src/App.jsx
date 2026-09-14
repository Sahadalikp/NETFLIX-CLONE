import { useState } from "react"
import "./index.css"



 function App(){  

const[theam,setTheam]=useState("black")

return(
  <div style={{
    backgroundColor:theam == "black" ? "white":"black", 
    color:theam,
    height:"100vh",
    width:"100vw"

  }}>
    <h1 style={{
     
    }}>
      hello world...
    </h1>

    <button onClick={()=> setTheam (theam === "white" ? "black": "white")}>theam</button>
  
  </div>
) 

}


export default App 



