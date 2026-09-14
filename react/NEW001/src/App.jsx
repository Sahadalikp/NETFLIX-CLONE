import React, { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  return (
    <>
      {user.map(use => (
        <div key={use.id}>
          <div style={{ backgroundColor: 'lightblue' }}>
            <h1>{use.title}</h1>

            <img src={use.thumbnailUrl} alt={use.title} />
          </div>
        </div>
      ))}
    </>
  )
}

export default App



