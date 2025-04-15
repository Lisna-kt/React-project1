import { useState } from 'react'

import './App.css'
import Header from './assets/Header'
import HeaderGallery from './assets/Headergallery'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    
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
      <Route path="/register" element={<Register />} />
    </Routes>
  
  )
}

export default App
