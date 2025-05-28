import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container px-5 py-5">
      <div className="footer-content container d-flex flex-column flex-md-row justify-content-center align-items-start gap-5">
        
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-title">Get in Touch</h2>
          <p className="footer-description">
            Feel free to connect for collaboration or just a friendly hello. Always open to exciting ideas!
          </p>
          <div className="social-icons mt-3">
            <a href="https://www.linkedin.com/in/vimalareddytummuru/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
            </a>
           <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
</a>
<a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right d-flex flex-column gap-3">
         <div className="contact-card" onClick={() => window.open("https://github.com/TVimala", "_blank")}>
  <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" />
  <p className="contact-text">github.com/TVimala</p>
</div>

<div className="contact-card" onClick={() => window.location.href = "mailto:vimalareddytummuru@gmail.com"}>
  <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
  <p className="contact-text">vimalareddytummuru@gmail.com</p>
</div>
        </div>
      </div>

      <p className="text-center mt-5">Designed and Handcoded by <span><strong>Vimala</strong></span> © 2025</p>
    </div>
  );
}

export default Footer;
