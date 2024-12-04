import React from 'react'
import './MainPortfolio.css'
import SectionProfile from '../Portfolio/sectionProfile';
import SectionAbout from '../Portfolio/sectionAbout';
import SectionWorks from '../Portfolio/sectionWorks';
import SectionSkills from '../SectionSkills/SectionSkills';

const MainPortfolio = () => {
  return (
    <div className='portfolio_container'>
        <SectionProfile/>
        <SectionAbout/>
        <SectionSkills/>
        <SectionWorks/>
    </div>
  )
}

export default MainPortfolio;