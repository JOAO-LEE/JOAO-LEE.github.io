import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Projects.css';

function Projects() {
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5})
  return (
    <section 
    ref={ref} 
    className='bg-purple-blue flex justify-center projects-container'>
      <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
    </section>
  )
}

export default Projects;