import React, {useRef, useEffect, useState} from 'react'
import './SectionContactMe.css'

const SectionContactMe = () => {

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
        const move = ((scrollPercentage * maxMove) / 100) - 50;
        textElement.style.transform = `translateX(${move}%)`;
  
        const opacity = Math.min(1, (scrollPercentage * 2) / 100); // Adjust the multiplier for opacity change
        textElement.style.opacity = opacity;
      }
    }, [scrollPercentage]);  

    useEffect(() => {
        const textElement = textRefRev.current;
        if (textElement) {
          const maxMove = 100; // Adjust this value for desired maximum movement
          const move = ((scrollPercentage * maxMove) / 100) - 50;
          textElement.style.transform = `translateX(${-move}%)`;
    
          const opacity = Math.min(1, (scrollPercentage * 2) / 100); // Adjust the multiplier for opacity change
          textElement.style.opacity = opacity;
        }
      }, [scrollPercentage]);

  return (
    <div className='section_contactme_container'>
        <div className='section_contactme_content'>
            <div className='scm_contact_text'>
                <span className='scm_contact_text_span' ref={textRef}>CONTACT</span>
            </div>
            <div className='scm_contactme_body'></div>
            <div className='scm_me_text'>
                <span className='scm_me_text_span' ref={textRefRev}>ME</span>
            </div>
        </div>
    </div>
  )
}

export default SectionContactMe;