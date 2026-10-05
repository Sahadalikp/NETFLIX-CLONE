import React, { useContext } from 'react'
import { UserContext } from './ComponentA'


export default function ComponentC() {

  const user = useContext(UserContext)
    
  return (
    <div className='box'>
        <h1>ComponentC</h1>
        <h2>{`bay ${user}`}</h2>
        </div>
  )
}
