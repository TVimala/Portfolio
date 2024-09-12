import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Resume.css' 
import img from './image.png'
function Resume() {
  useEffect(() => {
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}, [location]);
  return (
    <div className='text-center'>
      <section id="resume"></section>
      <h1 className='resume'>RESUME</h1>
      <img src={img} alt="Resume Image" />
    </div>
  );
}
export default Resume;
