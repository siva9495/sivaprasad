import React from 'react'
import './SideBarSocialLinks.css'

export const SideBarSocialLinks = () => {
  return (
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
  )
}
export default SideBarSocialLinks;
