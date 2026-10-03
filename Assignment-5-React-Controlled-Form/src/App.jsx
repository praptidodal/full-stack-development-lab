import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")

  return (
    <div className="container">
      <h1>Controlled Form</h1>

      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </form>

      <h2>Entered Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
    </div>
  )
}

export default App
