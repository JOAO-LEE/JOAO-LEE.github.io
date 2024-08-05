import { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Projects.css';
import { GithubLogo } from '@phosphor-icons/react';
import {getGithubStats} from "../../services/github";


function Projects() {
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5});
  useEffect(() => {
    getGithubStats()
  }
    ,[]);

  return (
    <section 
    ref={ref} 
    className='bg-purple-blue flex flex-col items-center'>
      <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
      <p>public</p>
    </section>
  )
}

export default Projects;