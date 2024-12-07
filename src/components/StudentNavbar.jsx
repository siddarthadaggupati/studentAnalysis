import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const StudentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false)

  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.setItem("regno",null)
    navigate("/")
  }

  return (
    <nav>
      <Link className='title' to="/teacherdashboard">StudentPerfomaceAndAnalysis</Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li> <Link to="/teacherdashboard">Home</Link> </li>
        <li> <Link to="/#">Analyze Student</Link> </li>
        <li> <Link to="/#">Profile</Link> </li>
        <li onClick={handleLogout}> <i class="fa fa-sign-out"></i>Logout</li>
        
      </ul>
      
    </nav>
  )
}

export default StudentNavbar;
