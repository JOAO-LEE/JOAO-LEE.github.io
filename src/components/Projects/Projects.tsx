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
    className='bg-darkest-purple-blue'>
      <div className='flex flex-col items-center'>
        <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
        <div className={`${isVisible ? "github-stats" : ""} space-y-2`}>
          <h3 className="text-center">GITHUB STATS</h3>
          <div className={`flex items-center gap-4 text-xs lg:text-sm `}>
            <p>public repos <span className='text-clear-orangeish font-semibold'>{githubStats?.public_repos}</span></p>
            <p>followers <span className='text-clear-orangeish font-semibold'>{githubStats?.followers}</span></p>
            <p>following <span className='text-clear-orangeish font-semibold'>{githubStats?.following}</span></p>
          </div>
        </div>
        <div className='grow'>
        <h4>see my recent work</h4>
        </div>
        <div className={`${!isVisible ? "hidden" : "block"} self-end p-2 `}>
          <GithubLogo weight='light' size={"2rem"} />
        </div>
      </div>
    </section>
  )
}

export default Projects;