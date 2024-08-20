import { useState, useEffect, useContext } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { GithubLogo } from '@phosphor-icons/react';
import { getGithubStats } from '../../services/github';
import { GithubStats as GithubStatsModel } from '../../model/Github';
import GithubStats from './components/GithubStats/GithubStats';
import Carousel from './components/Carousel/Carousel';
import { projects } from '../../projects';
import './Projects.css';
import { ProjectContext } from '../../context/Project/ProjectContext';
import ProjectAbout from './components/ProjectAbout/ProjectAbout';

function Projects() {
  const [githubStats, setGithubStats] = useState<GithubStatsModel>();
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5});
  const { curr = 0 } = useContext(ProjectContext);

  useEffect(() => {
    const fetchGithubStats = async () => {
      const searchedGithubStats = await getGithubStats();
      setGithubStats(searchedGithubStats);
    }
    fetchGithubStats();
  }, []);

  return (
    <section 
    ref={ref} 
    className='bg-pal-purple-600'>
      <div className='flex flex-col h-full'>
        <div className='mx-auto'>
          <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
        </div>
        <div className=' p-4 flex flex-col sm:flex-row'>
          <Carousel>
            {
              projects
              .map((p) => (
                <img 
                key={p.id}
                src={p.image} 
                alt="" 
                className='size-64 md:size-[32rem] object-contain rounded-xl lg:rounded-3xl'
                />
                )   
              )
            }
          </Carousel>
          <ProjectAbout />
        </div>
        <GithubStats 
        isVisible={isVisible!}
        githubStats={githubStats!}
        />
        <a 
        className={`${isVisible ? "github-logo" : ""} self-end content-end p-2  flex gap-2 group transition-colors duration-500 delay-[150ms] items-center`} 
        href={githubStats?.html_url} 
        target='_blank'
        >
          <p 
          className='hidden lg:block opacity-0 font-light text-grayish transition-all duration-500 delay-75 text-sm group-hover:opacity-100 group-hover:font-semibold hover:text-pal-orange-200 hover:bg-pal-purple-500 p-2 rounded-xl'
          >
            check my profile!
          </p>
          <GithubLogo 
          weight='light' 
          size={"2rem"} 
          className='group-hover:text-pal-orange-100 transition-colors duration-500 delay-[150ms]'
          />
        </a>
      </div>
    </section>
  )
}

export default Projects;