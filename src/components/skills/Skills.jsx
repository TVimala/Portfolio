import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Skills.css';
function Skills() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById('skills');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

 
  const skills = [
  // ===== Full Stack Development =====
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png" },

  // ===== Databases =====
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  // ===== Programming Languages =====
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

  // ===== Machine Learning & AI =====
  { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
  { name: "RAG", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
  { name: "FAISS", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149653.png" },

  // ===== Developer Tools =====
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "FFmpeg", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/FFmpeg_Logo_new.svg" },

  // ===== Core Concepts =====
  { name: "OOPs", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
  { name: "Data Structures & Algorithms", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"},  
  { name: "DBMS", icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },
  { name: "Networking", icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png" },
  { name: "Responsive Design", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
];

  return (
  <div className="skills-section" id="skills">
    <h1 className="skills">MY SKILLS</h1>

     {/* ===== Programming ===== */}
    <div className="skill-category">
      <h2 className="category-title">Programming Languages</h2>
      <div className="skills-grid">
        {skills.slice(10, 13).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    
    {/* ===== Full Stack ===== */}
    <div className="skill-category">
      <h2 className="category-title">Full Stack Development</h2>
      <div className="skills-grid">
        {skills.slice(0, 8).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ===== Databases ===== */}
    <div className="skill-category">
      <h2 className="category-title">Databases</h2>
      <div className="skills-grid">
        {skills.slice(8, 10).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ===== ML & AI ===== */}
    <div className="skill-category">
      <h2 className="category-title">Machine Learning & AI</h2>
      <div className="skills-grid">
        {skills.slice(13, 20).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ===== Tools ===== */}
    <div className="skill-category">
      <h2 className="category-title">Developer Tools</h2>
      <div className="skills-grid">
        {skills.slice(20, 27).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ===== Concepts ===== */}
    <div className="skill-category">
      <h2 className="category-title">Core Concepts</h2>
      <div className="skills-grid">
        {skills.slice(27, 32).map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Skills;
