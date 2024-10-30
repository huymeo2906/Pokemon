import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Here Using BrowserRouter to perform routeing with other path
// Feture of React-router-dom, Wrapping the App into the BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <App />
    </BrowserRouter>
  )
