import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Contato from './pages/Contato/index.tsx'
import Sobre from './pages/Sobre/index.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/sobre",
    element: <Sobre/>,
  },
  {
    path:"/contato",
    element: <Contato/>,
  }
  
  
  

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)