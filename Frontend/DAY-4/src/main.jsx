import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Home from './components/home.jsx';
import SignInUpForm from './components/login.jsx';
import Events from './components/flipcard.jsx';
import User from './components/user.jsx';
import Us from './components/us.jsx';
import Welcome from './components/welcome.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome/>
  </React.StrictMode>,
)
