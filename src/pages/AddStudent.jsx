import React from 'react'
import Navbar from '../components/TeacherNavbar.jsx';
import './AddStudent.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddStudent = () => {
  const navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8080/insertstudent",{
      regno : document.getElementById("regno").value,
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      password : document.getElementById("password").value,
      department : document.getElementById("dept").value,
      joinyear : document.getElementById("joinyear").value
    }).then((res)=>{
      alert(res.data)
      navigate("/student")
    })
  }
  return (
    <div>
        <Navbar/> <br />
        <div className='add-contanier' method="post" onSubmit={handleSubmit}>
          <h1>Add Student</h1> <br />
            <form method="post">
                <label >Enter Registered Number</label> <input type="text" name="regno" id="regno" required /> <br /> <br />
                <label >Enter Name</label> <input type="text" name="name" id="name" required /> <br /><br />
                <label >Enter Email</label> <input type="email" name="email" id="email" required /> <br /><br />
                <label >Enter Password</label> <input type="text" name="password" id="password" required /> <br /><br />
                <label >Select Department</label>
                <select id='dept' name='dept'>
                  <option value="select">select</option>
                  <option value="cse">cse</option>
                  <option value="ece">ece</option>
                  <option value="mech">mech</option>
                  <option value="bt">BT</option>
                </select> <br /> <br />
                <label >Enter Join Year</label> <input type="number" name="joinyear" id="joinyear" required /> <br /><br />
                <button  className='add-btn' type='submit'>Add Student</button>
            </form>
        </div>
    </div>
  )
}

export default AddStudent