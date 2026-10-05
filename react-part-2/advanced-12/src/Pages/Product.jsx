import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../Lib/Api'
import './Product.css'

function Product() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setItems(response.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <ol className='product'>

      {items.map((user) => (
        <div key={user.id}>
 
          <li>
             <NavLink to={`/product/${user.id}`}> <h2>{user.title}</h2> </NavLink>
          </li>

        </div>
      ))}
      </ol>
    </div>
  )
}

export default Product