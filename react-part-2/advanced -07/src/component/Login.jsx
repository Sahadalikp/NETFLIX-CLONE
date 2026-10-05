import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const[user,SetUser]=useState('')
    const auth = useAuth()
    const navigate = useNavigate()
     
    const handilelogin =()=>{
        auth.Login(user) 
        navigate('/')

    }

  return (
    <div>
        <label>
            UserName:{" "}
            <input type='text' onChange={(e)=>SetUser(e.target.value)}/>
        </label>
        <button  onClick={handilelogin}>Login</button>
    </div>
  )
}
