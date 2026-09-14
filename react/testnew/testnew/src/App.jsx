import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[light,setLight]=useState('')

  useEffect(()=>{
    const timer = setInterval(()=>{
      setLight((prev)=>{
        if(prev=== "red")return "green";
        if(prev === "green") return "yellow";
        return "red";
      });
    },2000);

    return ()=> clearInterval(timer);
  },[])


   return (
    <div 
    style={{ backgroundColor:"black",
      width:"110px",
      borderRadius:"12%"
    }}>
      <div style={{
        backgroundColor:light === "red" ? "red" : 'gray',
        height:"100px",
        width:"100px",
        marginTop:"10px",
        borderRadius:"50%"

      }}></div>

         <div style={{
        backgroundColor:light === "green" ? "green":"gray",
        height:"100px",
        width:"100px",
        marginTop:"10px",
        borderRadius:"50%"

      }}></div>

         <div style={{
        backgroundColor:light === "yellow" ? "yellow" : 'gray',
        height:"100px",
        width:"100px",
        marginTop:"10px",
        borderRadius:"50%"


      }}></div>
      
    </div>
  
  )
  }
export default App
