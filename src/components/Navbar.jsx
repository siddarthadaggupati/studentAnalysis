import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        <Link className='title' to="/">StudentPerfomaceAndAnalysis</Link>
        <div className="menu" onClick={() =>{
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/features">Features</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
            <li> <Link to="/login">Teacher Login</Link> </li>
            <li> <Link to="/studentlogin">Student Login</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar