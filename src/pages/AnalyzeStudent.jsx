import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import Navbar from "../components/TeacherNavbar.jsx";
import { BsDisplay } from "react-icons/bs";
import axios from "axios";


const AnalyzeStudent = () => {
  const [options, setOptions] = useState(null)
  function handleAnalyze(){
    axios.get("http://localhost:8080/getcgpa",{
      params: {
        regno : document.getElementById("id").value
      }
    }).then((res)=>{
      
      if(res.data === "")
      {
        alert("Enter valid Student Regno")
      }
      else{
        document.getElementsByName("analyze")[0].style.display="block"
        setOptions({
          title: {
            text: `Student CGPA `+document.getElementById("id").value,
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
  return (
    <div>
        <Navbar/> <br /><br /><br />

        <div className="analyze-contanier">
          <label>Enter Regno</label>: <input type="text" name="id" id="id" placeholder=" Enter Student Register Number" />
          <button onClick={handleAnalyze}>Analyze</button>
        </div>

        <br /><br /><br />
        <div className="chart-analyze" name="analyze" style={{display:"none"}}>
          <AgCharts options={options} />
        </div>

    </div>
  );
};


export default AnalyzeStudent;