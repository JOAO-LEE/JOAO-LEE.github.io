import { useContext } from "react"
import { projects } from "../../../../projects"
import { ProjectContext } from "../../../../context/Project/ProjectContext"
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { AppWindow, CodeBlock } from "@phosphor-icons/react";
import TechStackList from "../TechStackList/TechStackList";

function ProjectAbout() {
  const { curr = 0 } = useContext(ProjectContext);
  return (
    <div 
    className="px-4 space-y-1 text-xs md:text-sm"
    >
      <h3 
      className="text-lg lg:text-5xl"
      >
        {projects[curr].name}
      </h3>
      <article className="">
        <p 
        className="text-xs md:text-lg"
        >
          {projects[curr].description}
        </p> 
      </article>
      <div className="hidden xl:block">

        <TechStackList />
      </div>
    </div>
  )
}

export default ProjectAbout