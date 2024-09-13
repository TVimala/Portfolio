import React from 'react'
import { useRef } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import './Body.css'
function Body() {
  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <div>
       <div className='m-5'>
       <h2>
        👋 Hey, I'm Vimala
        </h2>
       <div className='body d-flex flex-row'>
       <p className='fs-2 p-3'>
        An innovative <span>full-stack developer</span> with a passion for crafting seamless web applications.
        </p>
        <img src="https://media.istockphoto.com/id/1210817486/vector/one-line-portrait-of-a-beautiful-woman.jpg?s=612x612&w=0&k=20&c=TAZu5NtI445hpDmNzI-G2b2LA3LwlW7royV-Wq5ocDI=" alt="Not avaliable" />
       </div>
       <div className='d-flex justify-content-center'>
       <button className='dive px-4 py-2  border-0 fs-4 mb-5'onClick={handleScroll}>Dive in <FaChevronDown className='g-1'/>
       </button>
       </div>
       </div>
    </div>
  )
}

export default Body