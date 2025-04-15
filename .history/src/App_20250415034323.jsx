import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header'
import HeaderGallery from './assets/Headergallery'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './assets/pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <HeaderGallery />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Reg />} />
    </Routes>
  </Router>
  )
}

export default App
