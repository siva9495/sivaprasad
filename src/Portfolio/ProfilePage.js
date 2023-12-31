import React from 'react'
import './ProfilePage.css'
import About from './about'
import Skills from './Skills'
import Navbar from './navbar'
import Headroom from 'react-headroom'

export const ProfilePage = () => {
  return (
    <div className='profile_page_portfolio'>
      <Headroom>
        <Navbar />
      </Headroom>
      <div className='profile_page_container'>
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
        <div className='section_all'>
          <About />
          <Skills />
        </div>
        <div className='side_bar_email'></div>
      </div>
    </div>
  )
}
export default ProfilePage;
