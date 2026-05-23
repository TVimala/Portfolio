import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <nav className="pf-navbar">
                <div className="pf-navname">
                    <h2>Tummuru Vimala Reddy</h2>
                </div>

                <button
                    className={`pf-hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`pf-nav-list ${menuOpen ? 'pf-nav-open' : ''}`}>
                    <li><Link to="/projects#projects" className="pf-nav-link" onClick={closeMenu}>Projects</Link></li>
                    <li><a href="Tummuru Vimala Reddy Resume.pdf" download className="pf-nav-link" onClick={closeMenu}>Resume</a></li>
                    <li><Link to="/skills#skills" className="pf-nav-link" onClick={closeMenu}>Skills</Link></li>
                    <li><Link to="/about#about" className="pf-nav-link" onClick={closeMenu}>About Me</Link></li>
                    <li><Link to="/experience#experience" className="pf-nav-link" onClick={closeMenu}>Experience</Link></li>
                </ul>
            </nav>

            {menuOpen && <div className="pf-nav-overlay" onClick={closeMenu}></div>}
        </header>
    );
}

export default Navbar;