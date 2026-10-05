import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from './auth'

export default function Navbar() {
  
  const auth = useAuth()
  console.log(auth)
    
  return (
    <div >
      <nav className='primery'>
        <NavLink  to='/' >Home</NavLink>
        <NavLink  to="/about">About</NavLink>
        <NavLink  to='/contact' >Contact</NavLink>
        <NavLink  to='/prodect' >Prodect</NavLink>
        <NavLink  to='/profile' >Profile</NavLink>
        
        {!auth.user && (
          <NavLink to='/login'>Login</NavLink>
        )}
      </nav>
    </div>
  )
}
