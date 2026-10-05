import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Profile from '../Pages/Profile'
import Contact from '../Pages/Contact'
import Product from '../Pages/Product'

function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />

      <Route path='/products' element={<Product />} />

      <Route path='/products/:id' element={<ProductDeatels />} />
    </Routes>
  )
}

export default RoutesApp