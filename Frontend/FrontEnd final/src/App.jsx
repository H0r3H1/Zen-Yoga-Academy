import { useState } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import SignInUpForm from './components/login';
import Welcome from './components/welcome';
import Events from './components/flipcard';
import Home from './components/home';
import User from './components/user';
import Us from './components/us';
import Price from './components/price';
import Appl from './components/application';
import Admin from './components/admin';
import Profile from './components/profile';
import Land from './components/land';
import Classes from './components/class';
import Ulogin from './components/ulogin';
import PaymentPage from './components/payment';
import './App.css'

function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/payment" element={<PaymentPage/>}></Route>
      <Route path="/login" element={<SignInUpForm/>}></Route>
      <Route path="/contact" element={<Us/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/Events" element={<Events/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/appl" element={<Appl/>}></Route>
      <Route path="/price" element={<Price/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/ad" element={<Admin/>}></Route>
      <Route path="/land" element={<Land/>}></Route>
      <Route path="/class" element={<Classes/>}></Route>
      <Route path="/ulogin" element={<Ulogin/>}></Route>









 
    </Routes>
    </BrowserRouter>

   
  )
}

export default App
