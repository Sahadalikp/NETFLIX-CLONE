import React, { useEffect, useState } from 'react'
import axios from "./axios";



export default function App() {

  const[products,setProducts]=useState([])
  const[error,setError]=useState("")

   

  useEffect(()=>{
    // getprodects()
    setTimeout(()=>{
         axios.get("/products")
    .then(response => setProducts(response.data.products))
    .catch((error)=> setError(error.message+ " [ check your code]") );
    })
 
  },[])

  // async function getprodects() {
  // try {
  //   const response = await axios.get("/products")
  //   console.log(response)
  //   setProducts(response.data.products)
   
  //   } catch (error) {
  //     setError(error.message)
      
  //   }
  // }


  return (
    <div>
      {error !== ""  && error}
      {products.map((obj,ind)=>(
        <div key={obj.id}>
          <h4>{obj.title}-${obj.price}</h4>

        </div>
      ))}


    </div>
  )
}
