import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css'
function Projects() {
  const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById("projects");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);
  return (
    <div >
       <section id="projects"></section>
      <div className='container'>
        <h1 className='projects'>PROJECTS</h1>
      <div className='project'>
        <div className='card'>
           <iframe src="https://vitamindfind.vercel.app/" className='project-image' scrolling="no"></iframe>            
           <div className='card-body'>
            <h3><span>Vitamin Deficiency Finder</span></h3>
            <p>
                Community Service Project<br/>
                Role: Styling, Structuring the site.<br/>
                Based on user’s choice of symptoms, the vitamin deficiencies which might be experienced by the user are displayed. <br />
                <a href="https://github.com/pavancos/vitamind" target='_blank'>GitHub Code</a>
            </p>
            </div>
          </div>
          <div className='card'>
            <iframe src="https://tvimala.github.io/task/index.html" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
            <h3><span>Task Scheduler</span></h3>
            <p>
            Web Development Intern Project <br />
Role: Development, Testing, and Deployment. <br />
A web application that allows users to schedule tasks, set reminders, and manage their daily activities efficiently.<br/>
Operations: Insert,Delete <br />
<a href="https://github.com/TVimala/task" target='_blank'>GitHub Code</a>
            </p>
            </div> 
          </div> 
          <div className='card'>
            <iframe src="https://tvimala.github.io/issuetracking/index.html" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
            <h3><span>Issue Tracking</span></h3>
            <p>
            Web Development Project <br />
Role: Frontend and Backend Development<br />
A web application designed to help teams track and manage issues and feature requests efficiently. <br />
                <a href="https://github.com/TVimala/issuetracking" target='_blank'>GitHub Code</a>
            </p>
            </div>
          </div>  
          <div className='card'>
            <iframe src="https://resolink.vercel.app/" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
            <h3><span>Reso-Link</span></h3>
          <p>
            Web Development Project <br />
Role: Frontend and Backend Development<br />
Developing a platform for uploading,
searching, and liking course-specific
files with user authentication <br />
                <a href="https://github.com/TVimala/Resource-Sharing-Platform" target='_blank'>GitHub Code</a>
            </p>
            </div>
          </div> 
          <div className='card'>
            <iframe src="" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
            <h3><span>Liver Cirrhosis Prediction</span></h3>
            <p>
            Machine Learning Project <br />
Regression, Random Forest ML model trained on patient data to classify cirrhosis severity<br />
                <a href="https://github.com/TVimala/MLPython" target='_blank'>GitHub Code</a>
            </p>
            </div>
          </div>   
          <div className='card'>
  <iframe 
    src="https://sched-guru.vercel.app/" 
    title="SchedGuru Project Preview"
    className='project-image' 
    scrolling="no">
  </iframe>
  <div className='card-body'>
    <h3><span>SchedGuru</span></h3>
    <p>
      Full-Stack Web Application <br />
      SchedGuru is a full-stack app for real-time faculty schedules and auto exam seating, built with React and Node.js. <br/>
    <a href="https://github.com/TVimala/SchedGuru" target='_blank'>GitHub Code</a>
    </p>
  </div>
</div>
  <div className='card'>
  <iframe 
    src="https://tvimala.github.io/Energy_Prediction/templates/home.html" 
    title="Energy_Prediction Project Preview"
    className='project-image' 
    scrolling="no">
  </iframe>
  <div className='card-body'>
    <h3><span>EnergyPrediction</span></h3>
    <p>
      Machine Learning Project <br />
Energy Predictor forecasts energy consumption using regression models trained on past usage data. <br />
    <a href="https://github.com/TVimala/Energy_Prediction" target='_blank'>GitHub Code</a>
    </p>
  </div>
</div>
        </div>
    </div>
</div>
  )
}
export default Projects