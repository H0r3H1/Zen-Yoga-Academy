import { useState } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import SignInUpForm from './components/login';
import Welcome from './components/welcome';
import Events from './components/flipcard';
import Home from './components/home';
import User from './components/user';
import Us from './components/us';
import './App.css'

function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/login" element={<SignInUpForm/>}></Route>
      <Route path="/contact" element={<Us/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/Events" element={<Events/>}></Route>
      <Route path="/user" element={<User/>}></Route>



 
    </Routes>
    </BrowserRouter>

   
  )
}

export default App
