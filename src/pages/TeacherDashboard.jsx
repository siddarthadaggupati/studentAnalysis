import React from 'react'
import dashboard from '../assets/dashboard.png'
import  Navbar  from '../components/TeacherNavbar.jsx'
import DeptPieChart from './DeptPieChart.jsx'
import './TeacherDashboard.css'
import PassPercent from './PassPercent.jsx'

const TeacherDashboard = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <div className='dept-chart' >
      <div>
          <DeptPieChart />
        </div>
        <div>
          <PassPercent />
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard