import axios from 'axios'
import React from 'react'
function handleSubmit(){
  axios.get("https://selfless-light-production-7afb.up.railway.app/email/send",{
    params:{
      email : document.getElementById("email").value
    }
  }).then((res)=>{
    alert(res.data)
    localStorage.setItem("email",document.getElementById("email").value)
  })
}
const ForgotPasswordTeacher = () => {
  return (
    <div>
        <h1 sx={{alignContent:"center"}}>Forgot Password</h1>
        <div className='forgot-password'>
            <label>Enter the Registerd Mail: </label><br /><br />
            <div className="inputbox">
                <input type="email" name="email" id="email" required/>
            </div>
            <br />
            <button onClick={handleSubmit}>Send Mail</button>
        </div>
    </div>
  )
}

export default ForgotPasswordTeacher