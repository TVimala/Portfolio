import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>

      <nav className="navbar-container d-flex justify-content-between align-items-center mx-5 p-3">

        <div className="navname">
          <h2>Tummuru Vimala Reddy</h2>
        </div>

        {/* Hamburger */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-nav d-flex flex-row align-items-center mb-0 ${menuOpen ? "show-menu" : ""}`}>

          <li className="nav-item mx-3">
            <Link to="/projects#projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li className="nav-item mx-3">
            <a href="Tummuru Vimala Reddy Resume.pdf" download className="nav-link">
              Resume
            </a>
          </li>

          <li className="nav-item mx-3">
            <Link to="/skills#skills" className="nav-link">
              Skills
            </Link>
          </li>

          <li className="nav-item mx-3">
            <Link to="/about#about" className="nav-link">
              About Me
            </Link>
          </li>

          <li className="nav-item mx-3">
            <Link to="/experience#experience" className="nav-link">
              Experience
            </Link>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;