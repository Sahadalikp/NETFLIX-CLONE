import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
        <nav>
            <NavLink to='/ '>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contacts'> contacts</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/products'>Product</NavLink>
        </nav>
  )
}

export default Navbar