import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container p-4 mt-5'>
      <div className='footer-icons d-flex justify-content-center gap-4 mb-3'>
  <a href="https://www.linkedin.com/in/vimalareddytummuru/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className='logo' />
  </a>
  <a href="https://github.com/TVimala" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub" className='logo' />
  </a>
  <a href="mailto:vimalareddytummuru@gmail.com">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className='logo' />
  </a>
      </div>
      <div className='text-center footer-text'>
        <p>Designed and Handcoded by <strong>Vimala</strong> © 2024</p>
      </div>
    </div>
  );
}

export default Footer;
