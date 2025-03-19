import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout'
import About from './components/About/About'
import Library from './components/Library/Library'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import axios from 'axios'
import './App.css'
function App() {

  const fetchAPI = async (url: string) => {
    try {

      const response = await axios.get(url);
      console.log('data: ', response.data)
      return response.data
    } catch (error) {
      console.log(`Ran into an issue: ${error}`)
    }
  }
  useEffect(() => {
    fetchAPI('/api/home')
  }, [])
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
