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


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="admin" element={<Admin />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="orders" element={<Orders />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
