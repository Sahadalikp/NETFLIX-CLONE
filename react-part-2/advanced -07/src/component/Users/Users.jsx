import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

export default function Users() {
  const [searchparams,setSearchparams]=useSearchParams()
  const ShowActiveUsers = searchparams.get('fillter')=== 'active'
  return (
    <div>
      <div>
        <h2>user1</h2>
        <h2>user2</h2>
        <h2>user3</h2>
                <Outlet/>

                <button onClick={()=>setSearchparams({fillter: 'active'})}>Active user</button>
                <button onClick={()=>setSearchparams()}>Resut fillter</button>
      </div>
        {
          ShowActiveUsers ? (<h2>Show Active Users</h2> ):( <h2>Show All Users</h2>
        )}
    </div>
  )
}
