import React from 'react'
import './Projects.css'
function Projects() {
  return (
    <div >
      <div className='container'>
        <h1 className='projects'>PROJECTS</h1>
      <div className='project d-flex flex-row justify-content-evenly'>
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
            Web Development Intern Project <br />
Role: Frontend and Backend Development<br />
A web application designed to help teams track and manage issues and feature requests efficiently. <br />
{/* It allows users to create, update, and prioritize issues, ensuring smooth project management. <br /> */}
                <a href="https://github.com/TVimala/issuetracking" target='_blank'>GitHub Code</a>
            </p>
            </div>
          </div>  
        </div>
    </div>
</div>
  )
}
export default Projects