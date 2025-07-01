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
          <h2>Hello there!</h2>
<h1>
  My name is <span className="bold">Vimala</span><br />
  and I <span className="highlight">build</span>, <span className="highlight2">design</span>, and <span className="highlight">explore</span> the future of tech.
</h1>

<p className="about-paragraph">
  I'm a passionate full-stack developer with a strong foundation in HTML, CSS, JavaScript, React, and SQL. I thrive on building smooth, responsive, and user-friendly web experiences.
</p>

<p className="about-paragraph">
  My journey started with curiosity and evolved into a commitment to continuous learning. I've interned at <strong>CodeAlpha</strong>, where I created projects like a Issue Tracker,Task Scheduler and Recipe Book, gaining real-world experience in development and problem-solving.
</p>

<p className="about-paragraph">
  Currently, I’m a part of the <strong>Google Developer Groups</strong> as organizing and leading events, mentoring peers, and fostering a community of innovation.
</p>

<p className="about-paragraph">
  Alongside web development, I'm deeply interested in <span className="highlight2">Artificial Intelligence</span> and actively exploring how AI can enhance modern applications and user interactions.
</p>

<p className="about-paragraph">
  I believe in crafting meaningful solutions, collaborating with passionate people, and staying curious. This journey is just the beginning — and I’m excited to grow as a developer and creator in the tech world.
</p>

        </div>
      </div>
    </div>
  );
}

export default About;
