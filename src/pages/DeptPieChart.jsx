import React, { useState, useEffect } from 'react';
import { AgCharts } from 'ag-charts-react';
import axios from 'axios';

const DeptPieChart = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/tdash")
            .then((res) => {
                console.log(res.data); // Check the structure of the data
                setResult(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const options = result
        ? {
              data: result,
              title: {
                  text: "Number of Students in Department",
              },
              series: [
                  {
                      type: "pie",
                      angleKey: "count", // Value key for the pie angles
                      labelKey: "department", // Key for the labels
                      legendItemKey: 'department',
                      label: {
                        enabled: true,
                        
                    }
                  },
              ],
              background: {
                fill: '#c4e7f3', // Set background fill to 'none' for transparency
              },
          }
        : null;

    return result ? <AgCharts options={options} /> : <div>Loading...</div>;
};

export default DeptPieChart;
