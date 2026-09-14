import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


let ProductCart = ({ image, title }) => {
  return <div className='Product-cart'>
    <img src={image} alt={title} className='Product-image'></img>
    <span>{title}</span>
  </div>
}

const pageSize = 12;

export default function App() {

  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function FetchData() {
    try {
      axios.get("https://dummyjson.com/products?limit=500")
        .then(response => setUser(response.data.products))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchData()
  }, [])


  const totalpages = user.length;
  const numberOfPages = Math.ceil(totalpages / pageSize);
  const start = currentPage * pageSize;
const endzz
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  return !user.length ? (
    <h1> NO PRODUCTS FOUNDED </h1>
  ) : (

    
    <div className='App'>

      <h1>Pagination</h1>
       <div className='pagination-container'>
          {[...Array(numberOfPages).keys().map((number)=>(
            <span
             key={number} 
             className='page-number'
             onClick={()=>}>
             {number + 1} 
            </span>
          ))]}
        </div>

        <div className='Product-container'>
          {user.slice().map((obj) => (
          
      <ProductCart key={obj.id}  image={obj.thumbnail} title={obj.title} />

      ))}
        </div>
       

    </div>
  )
}
