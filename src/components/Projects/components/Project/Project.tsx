import { Project as ProjectModel } from "../../../../model/Project"
import ProjectAbout from "../ProjectAbout/ProjectAbout"
import TechStackList from "../TechStackList/TechStackList"

function Project({ project, index }: { project: ProjectModel, index: number }) {
  return (
    <div 
    className="bg-black/30 hover:bg-black/60 transition-all duration-500 w-full rounded-xl p-4"
    >
      <div 
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center"
      >
        <p 
        className="text-4xl text-pal-orange-100"
        >
          {project.name}
        </p>
        <TechStackList />
      </div>
      <div className="flex gap-2">
        <img 
        src={project.image} 
        alt="" 
        className="size-28 md:size-64 object-contain rounded-lg" 
        />
        <div className="flex flex-col justify-around">
          <p 
            className="text-[0.7rem] md:text-sm"
            >
              {project.description}
            </p> 
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
      </div>
    </div>
  )
}

export default Project