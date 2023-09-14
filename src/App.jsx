import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500'>Hi</h1>
      <button className='btn btn-primary'>BTN</button>
    </>
  )
}

export default App
