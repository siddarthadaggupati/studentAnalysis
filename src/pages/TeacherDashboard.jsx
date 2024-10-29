import React from 'react'
import dashboard from '../assets/dashboard.png'
import  Navbar  from '../components/TeacherNavbar.jsx'
import DeptPieChart from './DeptPieChart.jsx'
import './TeacherDashboard.css'

const TeacherDashboard = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <div className='dept-chart' >
        <DeptPieChart/>
      </div>
    </div>
  )
}

export default TeacherDashboard