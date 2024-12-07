import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/TeacherNavbar.jsx';
import { useNavigate } from 'react-router-dom';

const StudentUpdates = () => {
    const navigate = useNavigate();
    const [selectedStudent, setSelectedStudent] = useState({
        regno: '',
        name: '',
        email: '',
        password: '',
        joinyear: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [result, setResult] = useState(null); 
    if(result == null)
    {
        axios.get("http://localhost:8080/getallstudents")
            .then((res) => {
                setResult(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    function handleEdit(student) {
        setSelectedStudent(student);
        setIsEditing(true);
        document.getElementsByClassName("update-container")[0].style.display = "block";
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setSelectedStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleUpdate(e) {
        e.preventDefault();
        axios.put("http://localhost:8080/updatestudent",{
            regno : selectedStudent.regno,
            name : selectedStudent.name,
            email : selectedStudent.email,
            password : selectedStudent.password,
            department : selectedStudent.department,
            joinyear : selectedStudent.joinyear
        }).then((res)=>{
            alert(res.data)
            getall()
            setIsEditing(false)
        })
    }
    function handelDelete(event){
        //alert(`Deleting Student regno: `,event.currentTarget.getAttribute("regno"))
        axios.delete("http://localhost:8080/deletestudent",{params:{
            regno : event.currentTarget.getAttribute("regno")
        }}).then((res)=>{
            alert(res.data)
            setResult(null)
        })
    }
    
    if (result === null) {
        return (
            <div>
                <Navbar />
                <h1>Data is fetching...</h1>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <br />
            <button className='add-btn' onClick={() => navigate("/addstudent")}>+ Add Student</button> <br /> <br /><h3 style={{marginLeft:"15px"}}>Or</h3> <br />
            <button className='add-btn' onClick={() => navigate("/uploadstudentcsv")}>+ Upload Student csv</button>
            <br />
            <br />
            <table border="2">
                <thead>
                    <tr>
                        <th>Registered Number</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Department</th>
                        <th>Joining Year</th>
                        <th>update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((obj, index) => (
                            <tr key={index}>
                                <td>{obj.regno}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.password}</td>
                                <td>{obj.department}</td>
                                <td>{obj.joinyear}</td>
                                <td>
                                <i className='fa fa-edit' onClick={() => handleEdit(obj)}></i>
                                </td>
                                <td><i className='fa fa-trash' onClick={handelDelete} regno={obj.regno}></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="add-contanier" style={{ display: isEditing ? 'block' : 'none' }}>
            <h1 style={{alignItems:'center'}}>Update Student Details</h1>
                <form onSubmit={handleUpdate}>
                    <label>Enter Registered Number</label>
                    <input 
                        type="text" 
                        name="regno" 
                        value={selectedStudent.regno} 
                        disabled 
                    /> 
                    <br /><br />
                    <label>Enter Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={selectedStudent.name} 
                        onChange={handleChange} 
                        required 
                    /> 
                    <br /><br />
                    <label>Enter Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={selectedStudent.email} 
                        onChange={handleChange} 
                        required 
                    /> 
                    <br /><br />
                    <label>Enter Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={selectedStudent.password} 
                        onChange={handleChange} 
                        required 
                    /> 
                    <br /><br />
                    <label>Enter Department</label>
                    <input 
                        type="text" 
                        name="department" 
                        value={selectedStudent.department} 
                        disabled
                    /> 
                    <br /><br />
                    <label>Enter Join Year</label>
                    <input 
                        type="number" 
                        name="joinyear" 
                        value={selectedStudent.joinyear} 
                        onChange={handleChange} 
                        required 
                    /> 
                    <br /><br />
                    <button  className='add-btn' type='submit'>Update Student</button>
                </form>
           </div>   
        </div>
    );
}

export default StudentUpdates;
