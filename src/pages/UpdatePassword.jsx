import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function handleSubmit(){
    const navigate = useNavigate();
    axios.post("https://selfless-light-production-7afb.up.railway.app/updatepassword",{
        email : document.getElementById("email").value ,
        password : document.getElementById("password").value 
    }).then((res)=>{
        alert(res.data)
        navigate("/")
    })
}
const UpdatePassword = () => {
  return (
    <div className='forgot-password'>
        Enter Email: <input type="text" name="email" id="email"  /> <br /><br />
        Enter new Password:<input type="text" name="password" id="password" /> <br /><br />
        <button onClick={handleSubmit}>Update Password</button>
    </div>
  )
}

export default UpdatePassword