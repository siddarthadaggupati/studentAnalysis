import React from 'react';
import './Loader.css'
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;