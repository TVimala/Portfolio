import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
// import profileImage from '../../assets/3ba1c682-a20a-4ce3-bd53-83c225754296.png'; // Adjust path if needed

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="about-wrapper">
      <section id="about"></section>
      <div className="about-container">
        <div className="about-left">
          {/* <img src={profileImage} alt="Profile" className="about-img" /> */}
        </div>
        <div className="about-right">
          <h2>Hello there!!</h2>
<h1>
  My name is <span className="bold">Vimala</span><br />
  and I <span className="highlight">create</span>, <span className="highlight2">learn</span>, and <span className="highlight">grow</span> through technology.
</h1>

<p className="about-paragraph">
  I’m a Computer Science student who enjoys turning ideas into meaningful and user-friendly digital experiences. My interest in technology started with curiosity and gradually grew into a passion for building applications that solve real-world problems.
</p>

<p className="about-paragraph">
  I love exploring different areas of tech, from <span className="highlight2 big-highlight">Full-Stack Development</span> to 
  <span className="highlight big-highlight"> Artificial Intelligence</span> and modern AI systems. Over time, I’ve worked on projects ranging from collaborative web platforms to multimodal AI systems, strengthening both my technical and problem-solving skills.
</p>

<p className="about-paragraph">
  One of my strongest works, <span className="highlight2 big-highlight">SummariV</span>, is a multimodal AI-powered video question answering system built using speech recognition, visual reasoning, and RAG-based retrieval techniques with timestamped evidence retrieval.
</p>

<p className="about-paragraph">
  Alongside development, I actively participate in tech communities through <strong>Google Developer Groups</strong>, contributing to organizing events, collaborating with peers, and fostering a positive learning environment.
</p>

<p className="about-paragraph">
  I have secured a <span className="highlight2 big-highlight">10 SGPA</span> during my first year of B.Tech and achieved 
  <span className="highlight big-highlight"> 1600+ LeetCode</span> and 
  <span className="highlight2 big-highlight"> 1300+ CodeChef</span> ratings through consistent problem solving and competitive programming.
</p>

<p className="about-paragraph">
  I believe in continuous growth, creativity, and staying open to new opportunities. Whether it’s development, AI research, or community building, I enjoy working on things that help me learn and create meaningful impact.
</p>
        </div>
      </div>
    </div>
  );
}

export default About;
