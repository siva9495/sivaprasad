import React from 'react';
import './sectionProfile.css';

export const SectionProfile = () => {
  return (
    <div className="sectionProfile">
      <div className="hidden_wall">
        <div className="section_profile_name">
          {"Siva Prasad".split("").map((char, index) => (
            <span
              key={index}
              className={`name_letter ${char === " " ? "space" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden_wall">
        <div
          className="section_profile_work develope_work"
          style={{ animationDelay: `2s` }} /* Delay to start after "Siva Prasad" */
        >
          Full-Stack Developer
        </div>
      </div>
    </div>
  );
};

export default SectionProfile;
