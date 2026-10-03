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
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Course</label>
        <input
          type="text"
          value={course}
          placeholder="Enter your course"
          onChange={(e) => setCourse(e.target.value)}
        />
      </form>

      <div className="info-box">
        <h2>Entered Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Course:</strong> {course}</p>
      </div>

      <div className="nav-bottom">
        <a href="../index.html" className="nav-link">&larr; Home</a>
        <a href="../Assignment-6-React-Counter/index.html" className="nav-link">Assignment 6 &rarr;</a>
      </div>
    </div>
  )
}

export default App
