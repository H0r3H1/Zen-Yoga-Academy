import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Home from './components/home.jsx';
import SignInUpForm from './components/login.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Home/>
  </React.StrictMode>,
)
