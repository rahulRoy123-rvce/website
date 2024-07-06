import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import dev from '../../assets/2.png'
import scii from '../../assets/8.png'
import rich from '../../assets/1.png'
import build from '../../assets/9.png'
function WorkX() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Work-X</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dev}
          link="https://redscale-web.vercel.app/"
          h3="Developer"

          p="Digital Agency"
        />
        <ProjectCard
          src={scii}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Research Intern"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={rich}
          link="https://www.richfeyn.com/pricing"
          h3="React Native Developer"
          p="Richfeyn"
        />
        <ProjectCard
          src={build}
          link="https://x.com/RahulRoy243/status/1597895865255202817/photo/1"
          h3="Event Coordinator"
          p="Buidlers Tribe"
        />
      </div>
    </section>
  );
}

export default WorkX;
