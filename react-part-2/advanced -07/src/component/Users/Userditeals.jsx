import React from 'react'
import { useParams } from 'react-router-dom'

function Userditeals() {
    const {Id} = useParams()
    

  return (
    <div>
            Details about users {Id}
    </div>
  )
}

export default Userditeals