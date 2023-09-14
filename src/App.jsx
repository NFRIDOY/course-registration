import { useState } from 'react'
import './App.css'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-center text-3xl font-bold my-6'>Course Registration</header>
      <Main></Main>
    </>
  )
}

export default App
