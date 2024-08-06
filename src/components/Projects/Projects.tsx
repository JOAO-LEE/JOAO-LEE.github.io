import { useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { GithubLogo } from '@phosphor-icons/react';
import {getGithubStats } from "../../services/github";
import { GithubStats } from '../../model/Github';
import './Projects.css';

function Projects() {
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5});
  const [githubStats, setGithubStats] = useState<GithubStats>();

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
    className='bg-purple-blue'>
      <div className='flex flex-col items-center gap-8 h-full'>
        <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
        <div className={`${isVisible ? "github-stats" : ""} space-y-2`}>
          <h3 className="text-center">GITHUB STATS</h3>
          <div className={`flex items-center gap-4 text-xs lg:text-sm`}>
            <p>public repos <span className='text-clear-orangeish font-semibold'>{githubStats?.public_repos}</span></p>
            <p>followers <span className='text-clear-orangeish font-semibold'>{githubStats?.followers}</span></p>
            <p>following <span className='text-clear-orangeish font-semibold'>{githubStats?.following}</span></p>
          </div>
        </div>
        <div className='flex-1'>
          <h4>see my recent work</h4>
          <div>

          </div>
        </div>
      <a 
      className={`${isVisible ? "github-logo" : ""} self-end content-end p-2 hover:text-orangeish flex gap-2 group transition-colors duration-500 delay-[150ms] items-center`} 
      href={githubStats?.html_url} 
      target='_blank'>
        <p 
        className='hidden lg:block opacity-0 font-light text-lilac transition-all duration-500 delay-75 text-sm group-hover:opacity-100 group-hover:font-semibold'>
          check my profile!
        </p>
        <GithubLogo weight='light' size={"2rem"} className='group-hover:text-orangeish transition-colors duration-500 delay-[150ms]'/>
      </a>
      </div>
    </section>
  )
}

export default Projects;