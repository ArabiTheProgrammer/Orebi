import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './firebaseConfig.js'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
)
