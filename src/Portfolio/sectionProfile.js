import React from 'react';
import './sectionProfile.css';

export const SectionProfile = () => {
  return (
    <div className="sectionProfile">
      {/* Hidden wall for "Siva Prasad" */}
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

      {/* Hidden wall for "Full-Stack Developer" */}
      <div className="hidden_wall_work">
        <div className="section_profile_work">
          Full-Stack Developer
        </div>
      </div>
    </div>
  );
};

export default SectionProfile;
