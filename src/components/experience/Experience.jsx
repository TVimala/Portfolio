import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Experience.css';

function Experience() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById('experience');

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [location]);

  return (

    <section className="experience-section" id="experience">

      {/* <h1 className="experience-title">
        EXPERIENCE & RESEARCH
      </h1> */}

      <div className="timeline-wrapper">

        {/* EXPERIENCE SIDE */}
        <div className="timeline-column">

          <h2 className="timeline-heading">
            EXPERIENCE
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="timeline-top">

                  <div>
                    <p className="timeline-year">
                      2025
                    </p>

                    <h3>
                      Infosys Springboard Virtual Internship 6.0
                    </h3>

                    <span className="timeline-role">
                      AI & Machine Learning Internship
                    </span>
                  </div>

                  {/* <a
                    href="ADD_CERTIFICATE_LINK_HERE"
                    target="_blank"
                    rel="noreferrer"
                    className="timeline-btn"
                  >
                    Certificate
                  </a> */}

                </div>

                <p className="timeline-description">
                  Built an AI-enabled network intrusion detection system using machine learning and data preprocessing techniques to detect malicious traffic patterns and improve cybersecurity threat detection accuracy.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* RESEARCH SIDE */}
        <div className="timeline-column">

          <h2 className="timeline-heading">
            RESEARCH
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="timeline-top">

                  <div>

                    <p className="timeline-year">
                      2025
                    </p>

                    <h3>
                      Dynamic Video Summarization based on Objects of Interest Using Deep Neural Networks
                    </h3>

                    <span className="timeline-role">
                      Research Work
                    </span>

                  </div>

                  {/* <a
                    href="ADD_PAPER_LINK_HERE"
                    target="_blank"
                    rel="noreferrer"
                    className="timeline-btn"
                  >
                    Paper
                  </a> */}

                </div>

                <p className="timeline-description">
                  Developed a deep learning-based video summarization framework using YOLOv7 for object detection and user-guided summarization on SumMe and TVSum benchmark datasets.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;