import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Login() {
  const [name, setName] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim()) return
    login(name.trim())
    navigate(location.state?.from || '/home', { replace: true })
  }

  return (
    <section className="form-wrap">
      <h1>Welcome</h1>
      <p className="muted">Enter your name to write and manage blog posts.</p>
      <form className="blog-form" onSubmit={handleSubmit}>
        <label htmlFor="user-name">Your name</label>
        <input id="user-name" value={name} onChange={(event) => setName(event.target.value)} required />
        <button type="submit">Continue</button>
      </form>
    </section>
  )
}
