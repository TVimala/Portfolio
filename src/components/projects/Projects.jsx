import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import liverImage from './liver.jpg';
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
            <iframe src="https://resolink.vercel.app/" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
              <h3><span>Reso-Link</span></h3>
              <p>
                Full-Stack Web Application <br />
                Designed and developed a dynamic platform that allows users to upload, search, and like course-specific files, with features like user authentication, tag-based filtering, and personalized file management. <br />
                <a href="https://github.com/TVimala/Resource-Sharing-Platform" target='_blank'>GitHub Code</a>
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
                SchedGuru is a full-stack app for real-time faculty schedules and auto exam seating, built with React and Node.js. <br />
                <a href="https://github.com/TVimala/SchedGuru" target='_blank'>GitHub Code</a>
              </p>
            </div>
          </div>
          <div className='card'>
            <iframe src="https://vitamindfind.vercel.app/" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
              <h3><span>Vitamin Deficiency Finder</span></h3>
              <p>
                Community Service Project<br />
                Designed and structured a responsive website that displays potential vitamin deficiencies based on symptoms selected by the user, aiming to promote health awareness through an intuitive interface. <br />
                <a href="https://github.com/pavancos/vitamind" target='_blank'>GitHub Code</a>
              </p>
            </div>
          </div>
          <div className='card'>
            <iframe src="https://tvimala.github.io/task/index.html" className='project-image' scrolling="no"></iframe>
            <div className='card-body'>
              <h3><span>Task Scheduler</span></h3>
              <p>
                Web Development Project <br />
                Built a task management web app enabling users to schedule tasks, set reminders, and manage daily activities. Implemented core operations like insert and delete for efficient task handling.<br />
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
                Developed a web application to help teams efficiently track and manage issues and feature requests, streamlining project collaboration and workflow management.
                <br />
                <a href="https://github.com/TVimala/issuetracking" target='_blank'>GitHub Code</a>
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
                Developed a regression-based machine learning model to accurately forecast energy consumption using historical usage data, enabling smarter energy management and improved operational efficiency.<br />                <a href="https://github.com/TVimala/Energy_Prediction" target='_blank'>GitHub Code</a>
              </p>
            </div>
          </div>
          <div className='card'>
            <img src={liverImage} className="project-image" alt="Liver" />
            <div className='card-body'>
              <h3><span>Liver Cirrhosis Prediction</span></h3>
              <p>
                Machine Learning Project <br />
                Developed a regression and Random Forest model trained on patient health data to classify the severity of cirrhosis. The model helps in predicting disease progression and supporting early medical intervention.<br />
                <a href="https://github.com/TVimala/MLPython" target='_blank'>GitHub Code</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects