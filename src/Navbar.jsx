import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';
const Navbar = () => {
  return (
      <div className='navbar'>
          <NavLink to={'home'} className='navlink'>
              Home
          </NavLink>
          <NavLink to={'tooltip'} className='navlink'>
              Tooltip
          </NavLink>
          <NavLink to={'login'} className='navlink'>
              Login
          </NavLink>
    </div>
  )
}

export default Navbar