import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <h2 className='header__logo'>LOGO</h2>
      <nav className='header__nav'>
        <NavLink className='header__nav-link' to='create-user'>create user</NavLink>
        <NavLink className='header__nav-link' to='users'>users</NavLink>
        <NavLink className='header__nav-link' to='somethingelse'>something else</NavLink>
      </nav>
    </header>
  )
}

export default Header
