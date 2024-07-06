import React from 'react';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv_r.pdf';
import { useTheme } from '../../common/ThemeContext';
import leetcodedark from '../../assets/leetcode-light.svg';
import leetcodelight from '../../assets/leetcode-black.svg';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === 'light' ? leetcodelight : leetcodedark;
  return (
    <section id="hero" className="flex flex-col md:flex-row justify-center items-center gap-5 text-center h-screen min-h-[500px] mb-12 mt-16  text-white">
      <div className="relative mx-auto md:order-2">
        <img
          src={heroImg}
          className="rounded-full max-w-[200px] md:max-w-[350px] lg:max-w-[400px]"
          alt="Profile picture of Rahul Roy"
        />
        <img
          className="absolute top-2 right-2 w-6 hover:cursor-pointer"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col items-center gap-5 md:order-1">
        <h1 className="text-4xl font-bold">
          Rahul
          <br />
          Roy
        </h1>
        <h3 className="text-xl">rahulroy.ec21@rvce.edu.in</h3>
        <h2 className="text-2xl">Developer | Blockchain Enthusiast | Athlete</h2>
        <div className="flex gap-6 justify-center">
          <a href="https://leetcode.com/u/royrahul_123/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeIcon} alt="Linkedin icon" className="w-8" />
          </a>
          <a href="https://twitter.com/RahulRoy243" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" className="w-8" />
          </a>
          <a href="https://github.com/rahulRoy123-rvce" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" className="w-8" />
          </a>
          <a href="https://www.linkedin.com/in/rahulrroyycontact/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" className="w-8" />
          </a>
         
        </div>
        <p className="max-w-[24ch] mx-auto">Love to leetcode, make cool projects and play sports.</p>
        <a href={CV} download>
          <button className="bg-blue-500 text-white rounded-lg w-32 h-12 text-lg font-bold shadow-md transition-transform transform hover:scale-105 active:translate-y-0.5">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
