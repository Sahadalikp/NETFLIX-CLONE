import { useState,useEffect} from 'react'


function App() {

  const[user,setUser]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data => setUser(data))

  },[])
 
  return (
  <div> 
    {user.map((ad)=>(
      <h1>{ad.name}</h1>
    ))}
   

  </div>
  )
}

export default App





















































































