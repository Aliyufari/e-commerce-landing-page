import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <h1 className='text-red-700 font-bold text-8xl'>e-commerce</h1>
      </div>
    </>
  )
}

export default App
