import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
         <header>
        <nav class="justify-content-around d-flex p-3">
            <div class="name">
                <h3>Tummuru Vimala Reddy</h3>
            </div>
            <div class="flex flex-col nav">
                <ul class="navbar-nav d-flex flex-row">
                  <li class="nav-item mx-2">
                  <Link  to="/projects"className='nav-link'>Projects</Link>
                  </li>
                  <li class="nav-item mx-2">
                  <Link  to="/resume"className='nav-link'>Resume</Link>
                  </li>
                  <li class="nav-item mx-2">
                  <Link  to="/about"className='nav-link'>About Me</Link>
                  </li>
                </ul>
              </div>              
        </nav>
    </header>
    </div>
  )
}
export default Navbar