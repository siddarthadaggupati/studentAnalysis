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
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/teacherdashboard' element={<TeacherDashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/addstudent' element={<AddStudent/>} />
        <Route path='/student' element={<StudentUpdates/>} />
      </Routes>

    </div>
  )
}

export default App
