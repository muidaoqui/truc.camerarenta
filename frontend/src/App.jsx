import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-red-500 '>Vite + React</h1>
      </div>
    </>
  )
}

export default App
