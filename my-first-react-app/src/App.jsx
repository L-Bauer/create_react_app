import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
