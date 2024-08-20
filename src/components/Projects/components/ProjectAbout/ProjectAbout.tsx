import { useContext } from "react"
import { projects } from "../../../../projects"
import { ProjectContext } from "../../../../context/Project/ProjectContext"
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { AppWindow, CodeBlock } from "@phosphor-icons/react";

function ProjectAbout() {
  const {curr = 0} = useContext(ProjectContext);
  return (
    <div 
          className="p-4 space-y-4 text-sm"
          >
            <h3 
            className='text-2xl lg:text-7xl'
            >
              {projects[curr].name}
            </h3>
            <article className=''>
              <p 
              className='text-xs'
              >
                {projects[curr].description}
              </p> 
            </article>
            <ul 
            className='flex gap-1 lowercase text-xs flex-wrap justify-center'
            >
              {
                projects[curr].techStack
                  .map((tech, i) => (
                    <li 
                    key={i}
                    className='bg-pal-orange-100 p-2 rounded-xl text-pal-purple-800'
                    >
                      #{tech}
                    </li>
                ))
              }
            </ul>
            <div 
            className='flex gap-2 justify-center'
            >
              <AnimatedButton
              link={projects[curr].applicationUrl} 
              title='app' 
              icon={
                <AppWindow />
              } 
              />
              <AnimatedButton
              link={projects[curr].githubRepository} 
              title='repository'
              icon={
                <CodeBlock />
              } 
              />
            </div>
          
          </div>
  )
}

export default ProjectAbout