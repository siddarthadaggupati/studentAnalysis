import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const TeacherNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false)

  return (
    <nav>
      <Link className='title' to="/">StudentPerfomaceAndAnalysis</Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li> <Link to="/">Home</Link> </li>
        <li>
            <div className="dropdown">
                <Link className='dropbtn'>Dropdown</Link>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
            </div>
        </li>
        <li> <Link to="#">Analyze Student</Link> </li>
        <li> <Link to="#">Profile</Link> </li>
      </ul>
    </nav>
  )
}

export default TeacherNavbar
