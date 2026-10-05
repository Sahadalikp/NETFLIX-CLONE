import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Prodect() {
  return (
    <div>
        <div
        style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                height:"100px"
            }}>

            <input 
            type='search'
            placeholder='Search prodects'
            ></input>
             </div><br></br>

            <div className='prodectlist' >
                    <button><Link to='featuredprodects'>Featuredprodects</Link></button>
                    <button><Link to='newprodects'>Newprodects</Link></button>
            </div>
                 <Outlet/>
       
     </div>
  )
}

export default Prodect