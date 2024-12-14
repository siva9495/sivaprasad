import React from 'react';
import './sectionProfile.css';

export const SectionProfile = () => {
  return (
    <div className="sectionProfile">
      <div className="hidden_wall">
        <div className="section_profile_name">
          <span className="name_developer">Siva Prasad</span>
        </div>
      </div>
      <div className="section_profile_work">
        <span className="develope_work">Full-Stack Developer</span>
      </div>
    </div>
  );
};
export default SectionProfile;
