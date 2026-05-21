import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import liverImage from './liver.jpg';
import './Projects.css';

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

  const projects = [
    {
      title: "SummariV",
      type: "Multimodal AI Project",
      description:
        "Built a multimodal AI-powered video question answering system using speech recognition, visual reasoning, and RAG-based retrieval to answer questions from videos with timestamped evidence clips, achieving 0.834 answer relevance on the EDU-VSUM benchmark.",
      image: "https://tvimala.github.io/SummariV/frontend/index.html",
      github: "https://github.com/TVimala/SummariV",
      iframe: true,
    },
    {
      title: "Resume-JD Matcher",
      type: "LLM & NLP Project",
      description:
        "Built an LLM-powered resume evaluation system using Google Gemini 2.5 Flash to analyze resumes against job descriptions, identify skill gaps, and provide AI-driven improvement suggestions through a Flask + React application.",
      image: "https://resume-matcher-psi-eight.vercel.app/",
      github: "https://github.com/TVimala/Resume-Matcher",
      iframe: true,
    },
    {
      title: "Reso-Link",
      type: "Full-Stack Web Application",
      description:
        "Designed and developed a dynamic platform that allows users to upload, search, and like course-specific files, with features like user authentication, tag-based filtering, and personalized file management.",
      image: "https://resolink.vercel.app/",
      github: "https://github.com/TVimala/Resource-Sharing-Platform",
      iframe: true,
    },
    {
      title: "SchedGuru",
      type: "Full-Stack Web Application",
      description:
        "SchedGuru is a web application used for managing real-time faculty schedules and automated exam seating arrangements, built using React.js, Node.js, and MongoDB to streamline academic scheduling and reduce manual effort.",
      image: "https://sched-guru.vercel.app/",
      github: "https://github.com/TVimala/SchedGuru",
      iframe: true,
    },
    {
      title: "Vitamin Deficiency Finder",
      type: "Community Service Project",
      description:
        "Designed and structured a responsive website that displays potential vitamin deficiencies based on symptoms selected by the user, aiming to promote health awareness through an intuitive interface.",
      image: "https://vitamindfind.vercel.app/",
      github: "https://github.com/pavancos/vitamind",
      iframe: true,
    },
    {
      title: "Task Scheduler",
      type: "Web Development Project",
      description:
        "Built a task management web app enabling users to schedule tasks, set reminders, and manage daily activities. Implemented core operations like insert and delete for efficient task handling.",
      image: "https://tvimala.github.io/task/index.html",
      github: "https://github.com/TVimala/task",
      iframe: true,
    },
    {
      title: "Issue Tracking",
      type: "Web Development Project",
      description:
        "Developed a web application to help teams efficiently track and manage issues and feature requests, streamlining project collaboration and workflow management.",
      image: "https://tvimala.github.io/issuetracking/index.html",
      github: "https://github.com/TVimala/issuetracking",
      iframe: true,
    },
    {
      title: "EnergyPrediction",
      type: "Machine Learning Project",
      description:
        "Developed a regression-based machine learning model to accurately forecast energy consumption using historical usage data, enabling smarter energy management and improved operational efficiency.",
      image: "https://tvimala.github.io/Energy_Prediction/templates/home.html",
      github: "https://github.com/TVimala/Energy_Prediction",
      iframe: true,
    },
    {
      title: "Liver Cirrhosis Prediction",
      type: "Machine Learning Project",
      description:
        "Developed a regression and Random Forest model trained on patient health data to classify the severity of cirrhosis. The model helps in predicting disease progression and supporting early medical intervention.",
      image: liverImage,
      github: "https://github.com/TVimala/MLPython",
      iframe: false,
    },
  ];

  return (
    <div>
      <section id="projects"></section>

      <div className="container">
        <h1 className="projects">PROJECTS</h1>

        <div className="project">
          {projects.map((project, index) => (
            <div className="card" key={index}>

              {project.iframe ? (
                <iframe
                  src={project.image}
                  title={project.title}
                  className="project-image"
                  scrolling="no"
                ></iframe>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <div className="card-body">
                <h3>{project.title}</h3>

                <p>
                  <strong>{project.type}</strong>
                </p>

                <p className="project-description">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Code
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;