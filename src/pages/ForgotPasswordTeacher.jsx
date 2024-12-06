import React from 'react'

const ForgotPasswordTeacher = () => {
  return (
    <div>
        <h1 sx={{alignContent:"center"}}>Forgot Password</h1>
        <div className='forgot-password'>
            <label>Enter the Registerd Mail: </label><br /><br />
            <div className="inputbox">
                <input type="email" name="email" id="email" />
            </div>
            <br />
            <button>Send Mail</button>
        </div>
    </div>
  )
}

export default ForgotPasswordTeacher