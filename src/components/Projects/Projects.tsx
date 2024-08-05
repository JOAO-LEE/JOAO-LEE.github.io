import { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Projects.css';
import { GithubLogo } from '@phosphor-icons/react';

// const getGithubStats = async () => {

//   const githubStats = await fetch("https://api.github.com/users/JOAO-LEE").then((response) => response).then((result) => result.json())
//   console.log(githubStats);
//   return githubStats;
// }

function Projects() {
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5});
  // useEffect(() => {
  //   getGithubStats()
  // }
  //   ,[]);

  return (
    <section 
    ref={ref} 
    className='bg-purple-blue flex flex-col items-center'>
      <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
      <GithubLogo size={32} />
    </section>
  )
}

export default Projects;