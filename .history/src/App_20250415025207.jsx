import { useState } from 'react'

import './App.css'

import HomePage from './assets/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
      {/* <HeaderGallery/> */}
    </>
  )
}

export default App
