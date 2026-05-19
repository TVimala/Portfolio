import React from 'react';
import './Experience.css';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react-router-dom';
function Experience() {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById('experience');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return (
    <section className="experience-section" id="experience">

      <h1 className="experience-title">EXPERIENCE & RESEARCH</h1>

      <div className="experience-container">

        {/* Internship */}
        <div className="experience-card">

          <div className="experience-top">
            <div>
              <h2>Infosys Springboard Virtual Internship 6.0</h2>
              <p className="experience-role">
                AI & Machine Learning Internship
              </p>
            </div>

            <a
              href="ADD_CERTIFICATE_LINK_HERE"
              target="_blank"
              rel="noreferrer"
              className="experience-btn"
            >
              View Certificate
            </a>
          </div>

          <p className="experience-description">
            Built an AI-enabled network intrusion detection system using machine learning and data preprocessing techniques to detect malicious traffic patterns, analyze network behavior, and improve cybersecurity threat detection accuracy.
          </p>

        </div>

        {/* Research */}
        <div className="experience-card">

          <div className="experience-top">
            <div>
              <h2>
                Dynamic Video Summarization based on Objects of Interest Using Deep Neural Networks
              </h2>

              <p className="experience-role">
                Research Work
              </p>
            </div>

            <a
              href="ADD_PAPER_LINK_HERE"
              target="_blank"
              rel="noreferrer"
              className="experience-btn"
            >
              Paper Link
            </a>
          </div>

          <p className="experience-description">
            Developed a deep learning-based video summarization framework using YOLOv7 for object detection and user-guided summarization on SumMe and TVSum benchmark datasets.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;