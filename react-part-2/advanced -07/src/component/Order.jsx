import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    let navigate = useNavigate()

  return (
    <div>
        <h1 style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
            }}>ORDER PLACED </h1>

            <button onClick={()=>navigate(-1)}>Go back </button>
    </div>
  )
}

export default Order