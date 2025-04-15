import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header'
import HeaderGallery from './assets/Headergallery'
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
