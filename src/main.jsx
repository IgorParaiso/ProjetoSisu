import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import Teste from './routes/teste'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: 'teste',
    element: <Teste />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
