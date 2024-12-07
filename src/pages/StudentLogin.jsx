import React from 'react';
import './Login.css';
import { FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import  Navbar  from '../components/Navbar.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const navigate = useNavigate();
  function handleLogin(event){
    event.preventDefault();
    axios.post("http://localhost:8080/loginstudent",{
      regno : document.getElementById('username').value,
      password : document.getElementById('password').value
    }).then((res)=>{
      if(res.data === "login succesful")
      {
        localStorage.setItem("regno",document.getElementById('username').value)
        //alert(res.data)
        navigate("/studentdashboard")
      }
      else{
        alert("incorrect username or password")
      }
    })
  }
  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <br /><br />
    <div className='wrapper'>
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' id='username' placeholder='UserName' required/>
                <FaUserAlt className='icon'/>

            </div>
            <div className="input-box">
                <input type='password' id='password' placeholder='Password' required/>
                <CiLock className='icon'/>
            </div>

            

            <div className="remember-forgot">
                <label><input type='checkbox'/>Remember me</label>
                <a href='/teacherpassword'>Forgot Password</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default StudentLogin;