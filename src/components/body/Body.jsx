import React from 'react'
import { useRef } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import './Body.css'
function Body() {
  // const handleScroll = () => {
  //   const element = document.getElementById("projects");
  //   if (element) {
  //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }
  return (
    <div>
       <div className='m-5'>
       <h2 className="styled-heading">
  <span className="thin">👋 Hey,</span> <span className="thin">I'm</span> <span className="bold name">Vimala<span className="dot">..</span></span>
  {/* <div className="subtext">2024–2025</div> */}
</h2>
       <div className='body d-flex flex-row'>
       <p className='fs-2 p-3'>
Skilled in <span className='highlight'>coding</span>, driven by <span className='highlight2'>Problem-solving</span>, and empowered by collaboration — building tech with purpose and people in mind.        </p>
        <img src="https://media.istockphoto.com/id/1210817486/vector/one-line-portrait-of-a-beautiful-woman.jpg?s=612x612&w=0&k=20&c=TAZu5NtI445hpDmNzI-G2b2LA3LwlW7royV-Wq5ocDI=" alt="Not avaliable" />
       </div>
       {/* <div className='d-flex justify-content-center'>
       <button className='dive px-4 py-2  border-0 fs-4 mb-5'onClick={handleScroll}>Dive in <FaChevronDown className='g-1'/>
       </button>
       </div> */}
       </div>
    </div>
  )
}

export default Body