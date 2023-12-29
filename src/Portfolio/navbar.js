import React from 'react'
import './navbar.css'

export const navbar = () => {
  return (
    <div className='navbar'>
        <ul id='navbar_list'>
            <li><span id='about_01'>01. </span>About</li>
            <li><span id='skills_02'>02. </span>Skills</li>
            <li><span id='work_03'>03. </span>Work</li>
            <li><span id='contact_04'>04. </span>Contact</li>
        </ul>
        <div className='navbar_resume'>
            <button id='nav_resume_button'>Resume</button>
        </div>
    </div>
  )
}
export default navbar;