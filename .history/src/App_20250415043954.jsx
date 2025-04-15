import { useState } from 'react'

import './App.css'
import Header from './assets/Header'
import HeaderGallery from './assets/Headergallery'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    <ToastContainer autoClose={3000}/>
    </>
  
  )
}

export default App
