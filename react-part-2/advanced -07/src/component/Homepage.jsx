import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  console.log("hdjksa")
    let navigat = useNavigate()
  return (
    <div>
        <h1>
            Home page 
        </h1>
        <button onClick={()=>navigat('order')}>clik</button>
        <div>
          
        </div>
    </div>
  )
}
