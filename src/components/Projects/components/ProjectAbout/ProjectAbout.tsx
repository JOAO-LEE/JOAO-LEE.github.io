import { useContext } from "react"
import { projects } from "../../../../projects"
import { ProjectContext } from "../../../../context/Project/ProjectContext"
import TechStackList from "../TechStackList/TechStackList";

function ProjectAbout() {
  const { curr = 0 } = useContext(ProjectContext);

  return (
    <div 
    className="px-4 space-y-1 text-xs md:text-sm"
    >
      {/* <h3 
      className="text-lg lg:text-5xl"
      >
        {projects[curr].name}
      </h3> */}
    
      {/* <div className="hidden sm:block">
        <TechStackList />
      </div> */}
    </div>
  )
}

export default ProjectAbout