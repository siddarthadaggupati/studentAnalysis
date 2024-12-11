import React, { useState,useEffect } from 'react';
import axios from 'axios';
import StudentNavbar from '../components/StudentNavbar.jsx';
import { AgCharts } from "ag-charts-react";

const StudentDashboard = () => {
 
  const [options, setOptions] = useState(null)
  useEffect(() => {
    handleAnalyze();
}, []); 
  function handleAnalyze(){
    axios.get("https://selfless-light-production-7afb.up.railway.app/getcgpa",{
      params: {
        regno : localStorage.getItem("regno")
      }
    }).then((res)=>{
      
      if(res.data === "")
      {
        alert("Enter valid Student Regno")
      }
      else{
        //document.getElementsByName("analyze")[0].style.display="block"
        setOptions({
          title: {
            text: `Student CGPA `+localStorage.getItem("regno"),
          },
          data: res.data,
          series: [
            {
              type: "line",
              xKey: "sem",
              yKey: "cgpa",
              yName: "cgpa",
            },
            
          ],
        });
      }
    })
  
  }
  if(options === null)
  {
    return(
      <div>
        <StudentNavbar />
        <h1 style={{marginLeft:"15px"}}>Welcome {localStorage.getItem("regno")}</h1>
          <br /><br /><br />
        <h1>Loading</h1>
      </div>
    )
  }
  else{
    return (
      <div>
        <StudentNavbar /> 
        <h1>Welcome {localStorage.getItem("regno")}</h1>

          <br /><br /><br />
          
          <div className="chart-analyze" name="analyze">
            <AgCharts options={options} />
          </div>
  
      </div>
    );
  }
};

export default StudentDashboard;
