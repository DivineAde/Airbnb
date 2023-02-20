import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App"
import './index.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
)
