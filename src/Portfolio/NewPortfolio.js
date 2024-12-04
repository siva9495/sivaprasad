import React, { useState, useEffect } from 'react';
import './NewPortfolio.css';
import Navbar from './navbar';
import SideBarSocialLinks from './SideBarSocialLinks';
import SideBarEmail from './SideBarEmail';
import SectionProfile from './sectionProfile';
import SectionAbout from './sectionAbout';
import SectionWorks from './sectionWorks';

export const NewPortfolio = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className='Portfolio'>
      <div className={visible ? 'Navbar' : 'Navbar Navbar-hidden'}>
        <Navbar />
      </div>
      <div className='siva'>
        <div className='sidebar-left'>
          <SideBarSocialLinks />
        </div>
        <div className='main-content'>
          <div className='section_all_scroll'>
            <SectionProfile />
            <SectionAbout />
            <SectionWorks />
          </div>
        </div>
        <div className='sidebar-right'>
          <SideBarEmail />
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
