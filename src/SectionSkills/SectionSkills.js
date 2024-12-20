import React, {useRef, useEffect, useState} from 'react'
import './SectionSkills.css'

const SectionSkills = () => {

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
        const move = ((scrollPercentage * maxMove) / 100) - 40;
        textElement.style.transform = `translateX(${move}%)`;
  
        const opacity = Math.min(1, (scrollPercentage * 2) / 100);
        textElement.style.opacity = opacity;
      }
    }, [scrollPercentage]);  

    useEffect(() => {
        const textElement = textRefRev.current;
        if (textElement) {
          const maxMove = 100;
          const move = ((scrollPercentage * maxMove) / 100) - 35;
          textElement.style.transform = `translateX(${-move}%)`;
    
          const opacity = Math.min(1, (scrollPercentage * 2) / 100);
          textElement.style.opacity = opacity;
        }
      }, [scrollPercentage]);

  return (
    <div className='section_skills_container'>
        <div className='section_skills_content'>
            <div className='ss_personal_text'>
                <span className='ss_personal_text_span' ref={textRefRev}>TECHNICAL</span>
            </div>
            <div className='ss_personalskills_body'>
              
            </div>
            <div className='ss_skills_text'>
                <span className='ss_skills_text_span' ref={textRef}>SKILLS</span>
            </div>
        </div>
    </div>
  )
}

export default SectionSkills;