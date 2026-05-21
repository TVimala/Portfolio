import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>

      <nav className="navbar-container">

        <div className="navname">
          <h2>Tummuru Vimala Reddy</h2>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`navbar-nav ${menuOpen ? "show-menu" : ""}`}>

          <li className="nav-item">
            <Link
              to="/projects#projects"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <a
              href="Tummuru Vimala Reddy Resume.pdf"
              download
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>

          <li className="nav-item">
            <Link
              to="/skills#skills"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about#about"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/experience#experience"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;