import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firbace'


function Navbar() {
  const NavRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        NavRef.current.classList.add('nav-dark')
      }else{
        NavRef.current.classList.remove('nav-dark')
      }
    })
  })

  

  return (
  <nav ref={NavRef} className='Navbar'>

    <div className="Leftside">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV show</li>
        <li>Movies</li>
        <li>New & Populer</li>
        <li>My list</li>
        <li>Browse by Languages</li>
      </ul>
    </div>

    <div className="Rightside" >

      <img src={search_icon} alt="" className='icon'/>
      <p>children</p>
      <img src={bell_icon} alt="" className='icon'/>
      <div className="navbar-profile">
      <img src={profile_img} alt="" className='profile'/>
      <img src={caret_icon} alt="" />
      <div className="dropdown">
        <p onClick={()=>{logout()}}>Sing Out Of Netflix</p>
      </div>


      </div>
    </div>

  </nav>
  )
}

export default Navbar