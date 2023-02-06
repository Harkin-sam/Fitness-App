import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-items">
        <Link to ="/" className="nav-item">
         <img src={logo} alt ='logo' />
        </Link>
      </div>

      <div className="nav-items">
        <Link to ="/" className="nav-item">Home</Link>
      </div>

      <div className="nav-items">
        <div className="nav-item">
          <a href="#exercise"> Exercises</a>
        </div>
      </div>
  </nav>
    
  )
}

export default Navbar
