import React from 'react';

function SkillList({ src, skill }) {
  return (
    <span className="flex items-center space-x-2 text-lg">
      <img src={src} alt="Checkmark icon" className="w-8 h-8" /> {/* Adjust size here */}
      <p className="text-xl">{skill}</p>
    </span>
  );
}

export default SkillList;
