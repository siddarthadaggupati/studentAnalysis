import React from 'react'
import dashboard from '../assets/dashboard.png'
import  Navbar  from '../components/TeacherNavbar.jsx'

const TeacherDashboard = () => {
  return (
    <div>
      <Navbar/>
    <div style={{marginLeft:'250px'}}>
        <img src={dashboard} alt="" />
    </div>
    </div>
  )
}

export default TeacherDashboard