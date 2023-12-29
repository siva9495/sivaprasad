import React from 'react'
import  './NewPortfolio.css'
import Navbar from './navbar'
import SideBarSocialLinks from './SideBarSocialLinks'
import SideBarEmail from './SideBarEmail'

export const NewPortfolio = () => {
  return (
    <div className='Portfolio'>
        <SideBarSocialLinks className='SideBarSocialLinks'/>
        <Navbar className='Navbar'/>
        <SideBarEmail className='SideBarEmail'/>
    </div>
  )
}
export default NewPortfolio;