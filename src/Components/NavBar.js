import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {

  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <nav>
    <Link to='/' className='logo'>
    <img src='./GmlBlack.png' alt='GML Logo' />
    
    </Link>
    <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li> 
      <NavLink to='/sales form'> sales form</NavLink>
      </li>
      <li> 
      <NavLink to='/sales records'> sales Records</NavLink>
      </li>
      <li> 
      <NavLink to='/stock records'> stock records</NavLink>
      </li>
      <li> 
      <NavLink to='/stock input'> stock input</NavLink>
      </li>
      <li> 
      <NavLink to='/settings'> settings</NavLink>
      </li>
      <li> 
      <NavLink to='/login'> logout</NavLink>
      </li>

    </ul>
  </nav>
  )
}

