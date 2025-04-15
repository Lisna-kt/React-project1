import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './assets/Header'
import HeaderGallery from './assets/Headergallery'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import { ToastContainer } from 'react-toastify'
import Product from './assets/pages/Products';
import { ProductProvider } from './assets/Context/Productcontext';
import { SearchProvider } from './assets/Context/SearchContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SearchProvider>
    <ProductProvider>
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
      <Route path="/collections" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    
    </Routes>
    </ProductProvider>
    </SearchProvider>
    <ToastContainer autoClose={3000}/>
    </>
  
  )
}

export default App
