import React from 'react'
import './ProfilePage.css'

export const ProfilePage = () => {
  return (
    <div className='profile_page_container'>
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
      <div className='side_bar_social_icons'>
        <div id='inner_side_bar_social_icons'>
          <div id='social_icons_01'>
            <ul id='social_icons'>
              <a  target='_blank' className=''>
                <i class='bx bxl-linkedin'></i>
              </a>
              <a  target='_blank' className=''>
                <i class='bx bxl-twitter' ></i>
              </a>
              <a  target='_blank' className=''>
                <i className='bx bxl-instagram'></i>
              </a>
              <a target='_blank'>
               <i class='bx bxl-github'></i>
              </a>
            </ul>
          </div>
          <div id='vertical_line_social_icons'></div>
          
        </div>
      </div>
    </div>
  )
}
export default ProfilePage;
