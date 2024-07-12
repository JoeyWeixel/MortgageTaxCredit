import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BrowserRouter from './components/navigation/BrowserRouter'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
