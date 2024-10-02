import React from 'react';
import './Login.css';
import { FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci"; // Correct import for CiLock

const Login = () => {
  return (
    <div>
      <br />
      <br />
      <br /><br />
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' placeholder='UserName' required/>
                <FaUserAlt className='icon'/>

            </div>
            <div className="input-box">
                <input type='password' placeholder='Password' required/>
                <CiLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot Password</a>
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

export default Login;