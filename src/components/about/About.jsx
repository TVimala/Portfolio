import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'
function About() {
  useEffect(() => {
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}, [location]);
  return (
    <div>
      <section id="about"></section>
      <div className='container'>
        <h1 className='aboutme'>ABOUT ME</h1>
         <div>
          <p>
👋 Hi, I’m Tummuru Vimala Reddy. I’m currently diving into the world of <span>full-stack development</span> with a strong foundation in web technologies including HTML, CSS, JavaScript, React, and SQL.

🚀 My journey in tech began with a deep interest in programming, leading me to build various projects like a Task Scheduler, Issue Tracker, and a Recipe Book Website during my internship at CodeAlpha. This experience solidified my passion for web development and gave me practical insights into the industry.

🌟 I thrive on teamwork and am always open to new ideas. Learning is a core part of who I am, and I’m continually seeking to expand my knowledge. Currently, I’m excited to explore the field of AI and how it can enhance my skill set.

🌐 Beyond my technical pursuits, I’m actively involved with the Google Developer Student Club as part of the CORE Team, where I manage club cohorts, meetings, and gatherings, further honing my leadership and organizational skills.

Feel free to connect with me as I continue to explore, learn, and innovate in the tech world!
          </p>
         </div>
      </div>
    </div>
  )
}
export default About