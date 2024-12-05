import React, { useRef, useEffect, useState } from 'react';
import './sectionAbout.css';

export const SectionAbout = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
    const textRef = useRef(null);
    const textRefRev = useRef(null);
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
  
      const totalScroll = fullHeight - windowHeight;
      const percentage = (scrollPosition / totalScroll) * 100;
      setScrollPercentage(percentage);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const textElement = textRef.current;
      if (textElement) {
        const maxMove = 100; // Adjust this value for desired maximum movement
        const move = ((scrollPercentage * maxMove) / 100) - 10;
        textElement.style.transform = `translateX(${move}%)`;
  
        const opacity = Math.min(1, (scrollPercentage * 2) / 100); // Adjust the multiplier for opacity change
        textElement.style.opacity = opacity;
      }
    }, [scrollPercentage]);  

    useEffect(() => {
        const textElement = textRefRev.current;
        if (textElement) {
          const maxMove = 200; // Adjust this value for desired maximum movement
          const move = ((scrollPercentage * maxMove) / 100) - 10;
          textElement.style.transform = `translateX(${-move}%)`;
    
          const opacity = Math.min(1, (scrollPercentage * 2) / 100); // Adjust the multiplier for opacity change
          textElement.style.opacity = opacity;
        }
      }, [scrollPercentage]);

  return (
    <div className='sectionAbout'>
      <div className='sectionabout_content'>
        <div className='about_text'>
          <span className='aboutText' ref={textRef}>
            ABOUT
          </span>
        </div>
        <div className='about_description'>
          <span className='aboutdescription'>Crafting user-friendly designs isn't just a job for me—it's a passion that fuels my creativity and innovation. This is the reason why I absolutely love it:)</span>
        </div>
        <div className='me_text'>
          <span className='meText' ref={textRefRev}>
            ME
          </span>
        </div>
      </div>  
    </div>
  );
};

export default SectionAbout;
