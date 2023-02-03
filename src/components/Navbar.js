import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav className='Navbar_Container'>
        <Link to ="/">
        <img src={logo} alt ='logo' />
        </Link>

        <div className='.Navbar_Container--wrapper'>
            
        <Link to ="/" className='nav-link1'>Home</Link>

        <a  href="#exercise">Exercises</a>
        </div>
    </nav>
    
  )
}

export default Navbar
