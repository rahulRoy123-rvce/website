import React from 'react';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className="flex flex-col items-center text-center">
      <h1 className="text-4xl uppercase mb-8">Skills</h1>
      <div className="flex justify-evenly items-center flex-wrap gap-y-10 max-w-xs lg:max-w-none">
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr className="w-24 h-0.5 bg-text-color my-8 mx-auto lg:w-72" />
      <div className="flex justify-evenly items-center flex-wrap gap-y-10 max-w-xs lg:max-w-none">
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Next" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr className="w-24 h-0.5 bg-text-color my-8 mx-auto lg:w-72" />
      <div className="flex justify-evenly items-center flex-wrap gap-y-10 max-w-xs lg:max-w-none">
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr className="w-24 h-0.5 bg-text-color my-8 mx-auto lg:w-72" />
      <div className="flex justify-evenly items-center flex-wrap gap-y-10 max-w-xs lg:max-w-none">
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
        <SkillList src={checkMarkIcon} skill="Mongodb" />
      </div>
    </section>
  );
}

export default Skills;
