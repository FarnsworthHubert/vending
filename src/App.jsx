import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/Main.scss'
import Home from './pages/Home/Home'
import Header from "./components/Header"
import Footer from "./components/Footer"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
])

function App() {

  

  return (
    <>
<Header />
<RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
