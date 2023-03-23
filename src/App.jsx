import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'


//file imports
import Layout from './components/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Reset from './pages/Auth/Reset'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="reset" element={<Reset />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="orders" element={<Orders />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
