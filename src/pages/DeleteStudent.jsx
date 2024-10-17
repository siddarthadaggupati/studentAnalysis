import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/TeacherNavbar.jsx';

const DeleteStudent = () => {

    const [result, setResult] = useState(null); 
    useEffect(() => {
        getall();
    }, []); 

    function getall() {
        axios.get("http://localhost:8080/getallstudents")
            .then((res) => {
                setResult(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function handelDelete(event){
        alert( event.currentTarget.getAttribute("regno"))
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
            <table border="2">
                <thead>
                    <tr>
                        <th>Registered Number</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Joining Year</th>
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
                                <td>{obj.joinyear}</td>
                                <td><i className='fa fa-trash' onClick={handelDelete} regno={obj.regno}></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DeleteStudent;
