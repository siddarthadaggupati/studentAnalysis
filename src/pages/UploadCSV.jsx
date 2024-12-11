import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadCsv = () => {
  const [file, setFile] = useState(null); // State to store the selected file
  const [message, setMessage] = useState(""); // State to display success/error messages
  const navigate = useNavigate();
  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://selfless-light-production-7afb.up.railway.app/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data); // Display success message from the server
      if(response.data === "Students added successfully!"){
        navigate("/student")
      }
    } catch (error) {
      setMessage(
        error.response?.data || "An error occurred while uploading the file."
      );
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Upload Student Details (CSV)</h2>
      <form onSubmit={handleUpload}>
        <div>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{ marginBottom: "10px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", cursor: "pointer" }}>
          Upload CSV
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "blue" }}>{message}</p>}
    </div>
  );
};

export default UploadCsv;
