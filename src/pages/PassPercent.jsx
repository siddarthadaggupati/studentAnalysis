import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
function getData() {
    return [
      {
        age: 20,
      },
      {
        age: 25,
      },
      {
        age: 19,
      },
      {
        age: 28,
      },
      {
        age: 31,
      },
      {
        age: 24,
      },
      {
        age: 21,
      },
      {
        age: 21,
      },
      {
        age: 22,
      },
      {
        age: 27,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 21,
      },
      {
        age: 19,
      },
      {
        age: 25,
      },
      {
        age: 27,
      },
      {
        age: 22,
      },
      {
        age: 26,
      },
      {
        age: 20,
      },
      {
        age: 21,
      },
      {
        age: 33,
      },
      {
        age: 27,
      },
      {
        age: 23,
      },
      {
        age: 29,
      },
      {
        age: 24,
      },
      {
        age: 23,
      },
      {
        age: 20,
      },
      {
        age: 25,
      },
      {
        age: 22,
      },
      {
        age: 21,
      },
      {
        age: 22,
      },
      {
        age: 29,
      },
      {
        age: 27,
      },
      {
        age: 24,
      },
      {
        age: 26,
      },
      {
        age: 21,
      },
      {
        age: 25,
      },
      {
        age: 22,
      },
      {
        age: 24,
      },
      {
        age: 24,
      },
      {
        age: 22,
      },
      {
        age: 26,
      },
      {
        age: 23,
      },
      {
        age: 28,
      },
      {
        age: 24,
      },
      {
        age: 28,
      },
      {
        age: 19,
      },
      {
        age: 23,
      },
      {
        age: 27,
      },
      {
        age: 24,
      },
      {
        age: 26,
      },
      {
        age: 27,
      },
      {
        age: 20,
      },
      {
        age: 24,
      },
      {
        age: 20,
      },
      {
        age: 26,
      },
      {
        age: 29,
      },
      {
        age: 24,
      },
      {
        age: 24,
      },
      {
        age: 23,
      },
      {
        age: 23,
      },
      {
        age: 29,
      },
      {
        age: 27,
      },
      {
        age: 22,
      },
      {
        age: 28,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 29,
      },
      {
        age: 22,
      },
      {
        age: 27,
      },
      {
        age: 21,
      },
      {
        age: 23,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 23,
      },
      {
        age: 23,
      },
      {
        age: 18,
      },
      {
        age: 20,
      },
      {
        age: 25,
      },
      {
        age: 20,
      },
      {
        age: 24,
      },
      {
        age: 20,
      },
      {
        age: 21,
      },
      {
        age: 28,
      },
      {
        age: 20,
      },
      {
        age: 26,
      },
      {
        age: 27,
      },
      {
        age: 24,
      },
      {
        age: 21,
      },
      {
        age: 29,
      },
      {
        age: 28,
      },
      {
        age: 18,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 27,
      },
      {
        age: 21,
      },
      {
        age: 24,
      },
      {
        age: 27,
      },
      {
        age: 26,
      },
      {
        age: 26,
      },
      {
        age: 21,
      },
      {
        age: 30,
      },
      {
        age: 19,
      },
      {
        age: 22,
      },
      {
        age: 23,
      },
      {
        age: 28,
      },
      {
        age: 24,
      },
      {
        age: 24,
      },
      {
        age: 24,
      },
      {
        age: 30,
      },
      {
        age: 23,
      },
      {
        age: 22,
      },
      {
        age: 26,
      },
      {
        age: 28,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 23,
      },
      {
        age: 21,
      },
      {
        age: 22,
      },
      {
        age: 25,
      },
      {
        age: 22,
      },
      {
        age: 22,
      },
      {
        age: 23,
      },
      {
        age: 23,
      },
      {
        age: 24,
      },
      {
        age: 24,
      },
      {
        age: 22,
      },
      {
        age: 23,
      },
      {
        age: 28,
      },
      {
        age: 27,
      },
      {
        age: 24,
      },
      {
        age: 22,
      },
      {
        age: 26,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 22,
      },
      {
        age: 22,
      },
      {
        age: 27,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 18,
      },
      {
        age: 31,
      },
      {
        age: 23,
      },
      {
        age: 25,
      },
      {
        age: 29,
      },
      {
        age: 23,
      },
      {
        age: 23,
      },
      {
        age: 28,
      },
      {
        age: 21,
      },
      {
        age: 23,
      },
      {
        age: 24,
      },
      {
        age: 23,
      },
      {
        age: 23,
      },
      {
        age: 25,
      },
      {
        age: 29,
      },
      {
        age: 25,
      },
      {
        age: 20,
      },
      {
        age: 17,
      },
      {
        age: 27,
      },
      {
        age: 24,
      },
      {
        age: 23,
      },
      {
        age: 22,
      },
      {
        age: 21,
      },
      {
        age: 22,
      },
      {
        age: 27,
      },
      {
        age: 26,
      },
      {
        age: 25,
      },
      {
        age: 24,
      },
      {
        age: 21,
      },
      {
        age: 30,
      },
      {
        age: 26,
      },
      {
        age: 20,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 18,
      },
      {
        age: 23,
      },
      {
        age: 27,
      },
      {
        age: 26,
      },
      {
        age: 21,
      },
      {
        age: 25,
      },
      {
        age: 23,
      },
      {
        age: 32,
      },
      {
        age: 19,
      },
      {
        age: 25,
      },
      {
        age: 20,
      },
      {
        age: 25,
      },
      {
        age: 29,
      },
      {
        age: 25,
      },
      {
        age: 25,
      },
      {
        age: 26,
      },
      {
        age: 24,
      },
      {
        age: 28,
      },
      {
        age: 27,
      },
      {
        age: 22,
      },
    ];
  }
const PassPercent = () => {
  const [options, setOptions] = useState({
    title: {
      text: "Pass Percentage",
    },
    data: getData(),
    series: [
      {
        type: "histogram",
        xKey: "age",
        xName: "Pass percentage",
      },
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        title: { text: "Academic Year" },
        interval: { step: 2 },
      },
      {
        type: "number",
        position: "left",
        title: { text: "Number of Students Passed" },
      },
    ],
  });

  return <AgCharts options={options} />;
};
export default PassPercent;