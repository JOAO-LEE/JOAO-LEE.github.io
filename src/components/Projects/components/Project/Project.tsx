import { Project as ProjectModel } from "../../../../model/Project"
import ProjectActions from "../ProjectActions/ProjectActions"
import "./Project.css";

function Project({ project, index }: { project: ProjectModel, index: number }) {
  // let i = index;
  return (
    <div
    key={index} 
    className="bg-black/30 hover:bg-black/60 transition-all duration-500 w-full rounded-xl p-4 space-y-2 group hover:scale-[1.02] shadow-xl hover:shadow-2xl"
    >
      <div 
      className="flex justify-between items-center space-y-2"
      >
        <p 
        className="text-lg 2xl:text-3xl text-grayish group-hover:text-pal-orange-100 project-name group-hover:after:project-name-sub transition-all duration-500"
        >
          {project.name}
        </p>
        <ProjectActions 
        applicationUrl={project.applicationUrl} 
        githubRepository={project.githubRepository} 
        />
      </div>
      <div className="flex gap-2 p-1">
        <img 
        src={project.image} 
        alt="" 
        className="size-32 sm:size-36 md:size-48 lg:size-60 object-contain rounded-lg" 
        />
        <div className="flex flex-col text-justify gap-3">
          <div className="min-h-[50%]">
            <p 
              className="text-xs sm:text-sm"
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
      </div>
    </div>
  )
}

export default Project