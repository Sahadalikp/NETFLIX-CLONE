import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const auth = useAuth()
    const navigat = useNavigate()
    
    const handillogut= ()=>{
        auth.Logout()
        navigat('/')
    }
  return (
    <div>
        <h1> WELCOME {auth.user} </h1>
        <hr></hr>
        <button onClick={()=>handillogut()}>Logut</button>
    </div>
  )
}

export default Profile