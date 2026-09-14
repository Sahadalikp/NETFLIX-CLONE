import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false); 
  const [name,setName]= useState("")

  return (
    <>
     <div className='main'>
       <div className='form'>
        <h1>
          forms validation 
        </h1>

        <div className='labal1'>
           <label htmlFor="username">Username </label>
           <input
            type="text"
            className='username'
            placeholder='username'
            value={name}
            onChange={(e)=>setName(e.target.value)}
           />
           <label htmlFor="email">Email</label>
            <input
            type="email"
            className='email'
            placeholder='Email'
           />

            <label htmlFor="password">Password</label>
            <input
            type={show? 'text':'password'}
            className='email'
            placeholder='Password'
           ></input>
           <button className='showbox' type='button' onClick={() => setShow(prev => !prev)}
           >show</button>

            <label htmlFor="conform password">Conform Password</label>
            <input
            type={show? 'text':'password'}
            className='email'
            placeholder='Password'
           />
            <button className='showbox' type='button' onClick={() => setShow(prev => !prev)}
           >show</button>
           <button
           type='submit'
           className='submit'
           >
            Submit
           </button>
           
        </div>
       </div>

     </div>
     </>
      
  )
}

export default App
