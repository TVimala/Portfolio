import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <div>
            <header>
                <nav className="justify-content-between mx-5 d-flex p-3">
                    <div className="name">
                        <h3>Tummuru Vimala Reddy</h3>
                    </div>
                    <div className="flex flex-col nav">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item mx-2">
                                <Link to="/projects#projects" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/resume#resume" className="nav-link">Resume</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/about#about" className="nav-link">About Me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
