import React, { useState,createContext } from 'react'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();

export default function ComponentA() {
    const[user,setUser]=useState("sahad ali")

  return (

    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        
        <UserContext.Provider value={user} >
              <ComponentB  user= {user}/>
        </ UserContext.Provider >
      
        </div>
  )
}
