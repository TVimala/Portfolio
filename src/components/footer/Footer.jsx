import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='m-5'>
    <div className='footer'>
        <ul className=' d-flex flex-row'>
        <li>
            <a href="https://www.linkedin.com/in/vimalareddytummuru/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtfUqKnmMlsC0QgxtTQMEzexaTcbCqpaDsg&s" alt="Not Available" className='logo'/></a>
        </li>
        <li>
            <a href="https://github.com/TVimala">
            <img src="https://icons.veryicon.com/png/o/object/material_design_icons/github-circle-1.png" alt="Not Available" className='logo'/></a>
        </li>
        </ul>
    </div>
    <div id='content'>
    <p>Designed and Handcoded by Vimala © 2024</p>
    </div>
    </div>
  )
}

export default Footer