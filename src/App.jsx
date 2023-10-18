import React from 'react'
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Tooltip from './Components/Tooltip';
import Login from './Components/Login';
import Navbar from './Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>




      <Routes>
        <Route path='home' element={<Home />} ></Route>
        <Route path='tooltip' element={<Tooltip />} ></Route>
        <Route path='login' element={<Login/>} ></Route>
      </Routes>









    </div>
  )
}

export default App
