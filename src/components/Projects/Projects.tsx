import { useState, useEffect, useContext } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { AppWindow, Code, CodeBlock, GithubLogo } from '@phosphor-icons/react';
import { getGithubStats } from '../../services/github';
import { GithubStats as GithubStatsModel } from '../../model/Github';
import GithubStats from './components/GithubStats/GithubStats';
import Carousel from './components/Carousel/Carousel';
import { projects } from '../../projects';
import './Projects.css';
import { ProjectContext } from '../../context/Project/ProjectContext';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';

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
        <div className='p-4 flex flex-col sm:flex-row'>
          <Carousel>
            {
              projects
              .map((p) => (
                <img 
                key={p.id}
                src={p.image} 
                alt="" 
                className='size-56 md:size-[32rem] object-contain rounded-xl lg:rounded-3xl'
                />
                )   
              )
            }
          </Carousel>
          <div className="p-4 space-y-4 text-sm">
            <h3 className='text-2xl lg:text-7xl'>{projects[curr].name}</h3>
            <article className=''>
              <p className=''>{projects[curr].description}</p> 
            </article>
            <div className='bg-black flex gap-2'>
              <AnimatedButton 
              icon={
                <AppWindow />
              } 
              title='app' 
              />
               <AnimatedButton 
              icon={
                <CodeBlock />
              } 
              title='repository' 
              />
            </div>
          </div>
        </div>
        <GithubStats 
        isVisible={isVisible!} x
        githubStats={githubStats!}
        />
        <a 
        className={`${isVisible ? "github-logo" : ""} self-end content-end p-2  flex gap-2 group transition-colors duration-500 delay-[150ms] items-center`} 
        href={githubStats?.html_url} 
        target='_blank'>
          <p 
          className='hidden lg:block opacity-0 font-light text-grayish transition-all duration-500 delay-75 text-sm group-hover:opacity-100 group-hover:font-semibold hover:text-pal-orange-200 hover:bg-pal-purple-500 p-2 rounded-xl'>
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

{/* <button className=''>
<div>

<button className='p-2'><Code /> <a>repository</a></button> */}