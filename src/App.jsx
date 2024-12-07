import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Features from './pages/Features.jsx';
import Login from "./pages/Login.jsx"
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import AddStudent from './pages/AddStudent.jsx';
import StudentUpdates from './pages/StudentUpdates.jsx';
import DeptPieChart from './pages/DeptPieChart.jsx';
import Profile from './pages/Profile.jsx';
import AnalyzeStudent from './pages/AnalyzeStudent.jsx';
import ForgotPasswordTeacher from './pages/ForgotPasswordTeacher.jsx';
import StudentLogin from './pages/StudentLogin.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import UploadCsv from './pages/UploadCSV.jsx';
import FeePaymet from './pages/FeePayment.jsx';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/teacherdashboard' element={<TeacherDashboard/>}/>
        <Route path='/studentdashboard' element={<StudentDashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/studentlogin' element={<StudentLogin/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/addstudent' element={<AddStudent/>} />
        <Route path='/student' element={<StudentUpdates/>} />
        <Route path='/analyzestudent' element={<AnalyzeStudent/>} />
        <Route path='/teacherprofile' element={<Profile/>} />
        <Route path='/teacherpassword' element={<ForgotPasswordTeacher/>} />
        <Route path='/uploadstudentcsv' element={<UploadCsv/>} />
        <Route path='/pay' element={<FeePaymet/>} />
      </Routes>

    </div>
  )
}

export default App
