import React, { createContext } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './component/Navbar'
import ComponentONE from './component/ComponentONE'
import Home from './component/Home'
import ComponentTWO from './component/ComponentTWO'

export const usercontext = createContext()

function App() {

  const name = "Sahad"

  return (
    <usercontext.Provider value={name}>

      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/prodect" element={<ComponentONE />} />
        <Route path='/contacts' element={<ComponentTWO/>}/>
      </Routes>

    </usercontext.Provider>
  )
}

export default App