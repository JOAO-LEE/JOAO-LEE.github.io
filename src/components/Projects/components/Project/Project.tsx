import { Project as ProjectModel } from "../../../../model/Project"
import ProjectAbout from "../ProjectAbout/ProjectAbout"
import TechStackList from "../TechStackList/TechStackList"

function Project({ project, index }: { project: ProjectModel, index: number }) {
  return (
    <div 
    className="bg-black/30 hover:bg-black/60 transition-all duration-500  h-full w-full rounded-xl p-4"
    >
      <div 
      className="flex justify-between"
      >
        <p 
        className="text-4xl text-pal-orange-100"
        >
          {project.name}
        </p>
        <TechStackList />
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <img 
        src={project.image} 
        alt="" 
        className="size-28 md:size-64 object-contain" 
        />
          <p 
          className="text-[0.7rem]"
          >
            {project.description}
          </p> 

      </div>
      <ul 
      className="flex gap-1 lowercase text-[0.6rem] md:text-xs flex-wrap"
      >
        {
          project.techStack
            .map((tech, i) => (
              <li 
              key={i}
              className="bg-pal-orange-100 p-1 rounded-xl text-pal-purple-800 hover:text-grayish transition duration-500"
              >
                #{tech}
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Project