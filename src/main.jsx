import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ImgContextProvider } from './context/imgContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImgContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ImgContextProvider>
  ,
)
