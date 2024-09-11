import React from 'react';
import './Resume.css' 
import img from './image.png'
function Resume() {
  return (
    <div className='text-center'>
      <h1 className='resume'>RESUME</h1>
      <img src={img} alt="Resume Image" />
    </div>
  );
}
export default Resume;
