import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import bobdao from '../../assets/5.png'
import hack from '../../assets/4.png'
import fest from '../../assets/3.png'
import nft from '../../assets/10.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nft}
          link="https://devfolio.co/projects/nftsecure-00a1"
          h3="NFT_Secure"
          p=""
        />
        <ProjectCard
          src={hack}
          link="https://cctvr-hackathon.vercel.app/"
          h3="Hackathon Website"
          p=""
        />
        <ProjectCard
          src={fest}
          link="https://8th-mile-web-new.vercel.app/"
          h3="8th Mile"
          p=""
        />
        <ProjectCard
          src={bobdao}
          link="https://bob-dao.vercel.app/"
          h3="BOBDAO"
          p=""
        />
        
      </div>
    </section>
  );
}

export default Projects;
