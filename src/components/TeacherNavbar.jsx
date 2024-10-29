import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const TeacherNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false)

  return (
    <nav>
      <Link className='title' to="/teacherdashboard">StudentPerfomaceAndAnalysis</Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li> <Link to="/teacherdashboard">Home</Link> </li>
        <li> <Link to="/student">Student</Link> </li>
        <li> <Link to="#">Analyze Student</Link> </li>
        <li> <Link to="#">Profile</Link> </li>
      </ul>
    </nav>
  )
}

export default TeacherNavbar
