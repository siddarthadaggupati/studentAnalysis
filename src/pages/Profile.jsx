import React from 'react'
import Navbar from '../components/TeacherNavbar.jsx'

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className="profile">
            <h1>Name: {localStorage.getItem("username")}</h1>
        </div>
    </div>
  )
}

export default Profile