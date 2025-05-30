import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Skills() {
     const location = useLocation();
    
        useEffect(() => {
            if (location.hash) {
                const element = document.getElementById("skills");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, [location]);
  return (
    <div>Skills</div>
  )
}

export default Skills