import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notmatch() {
    const navigate = useNavigate()

  return (
    <div>
         <h1 style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
            }}>
                PAGE NOT FOUNTED </h1>

            <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default Notmatch