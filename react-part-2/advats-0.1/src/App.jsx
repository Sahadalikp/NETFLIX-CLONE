import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function App() {

  const [user, setUser] = useState([])


 
useEffect(()=>{
   axios("http://localhost:3000/users")
   .then(respo => setUser(respo.data))

},[])

function add (){
        axios.post("http://localhost:3000/users",{
        name:"swali",
        gmail: "swali@gamil.com",
        age:34,
      })
      .then(()=>{
         axios("http://localhost:3000/users")
   
      })
      .then(response => setUser(response.data))
      .catch(error=>{
        console.log(error)
      })
}



  return (
    <div>
      {user.map(asso => (
         <div key={asso.id}>
          <div>
      <h5>{asso.name}</h5>
      <h5>{asso.gmail}</h5>
          </div>
         
      </div>
      ))}
      <button onClick={add}>add</button>

      
    </div>
  )
}
