import React from 'react';
import backgroundImage from '../assets/back.webp';

const Home = () => {
  return (
    
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden'}}>
      
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          width: '100%',
          height: '90%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default Home;
