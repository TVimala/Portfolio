import React from 'react'
import { useRef } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import './Body.css'
function Body() {
  return (
    <div>
      <div className='m-5'>
        <h2 className="styled-heading">
          <span className="thin">👋 Hey,</span> <span className="thin">I'm</span> <span className="bold name">Vimala<span className="dot">..</span></span>
          {/* <div className="subtext">2024–2025</div> */}
        </h2>
        <div className='body d-flex'>

          <div className='body-content'>
            <p className='fs-2 p-3'>
              Skilled in <span className='highlight'>coding</span>, driven by <span className='highlight2'>Problem-solving</span>, and empowered by collaboration — building tech with purpose and people in mind.
            </p>
          </div>

          <div className='body-image'>
            <img
              src="https://media.istockphoto.com/id/1210817486/vector/one-line-portrait-of-a-beautiful-woman.jpg?s=612x612&w=0&k=20&c=TAZu5NtI445hpDmNzI-G2b2LA3LwlW7royV-Wq5ocDI="
              alt="Not available"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Body