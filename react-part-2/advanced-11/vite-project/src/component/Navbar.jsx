import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/prodect">Products</NavLink>
      <NavLink to="/contacts"> Contacts</NavLink>
      <div><input placeholder='search' type='search'></input></div>
    </nav>
  )
}

export default Navbar