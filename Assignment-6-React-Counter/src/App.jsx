import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>React Counter</h1>

      <div className="counter-display">{count}</div>

      <div className="button-group">
        <button className="btn-increment" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn-decrement" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="nav-bottom">
        <a href="../index.html" className="nav-link">&larr; Home</a>
        <a href="../index.html" className="nav-link">Home &rarr;</a>
      </div>
    </div>
  )
}

export default App
