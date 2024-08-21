import { AppWindow, CodeBlock } from "@phosphor-icons/react";
import { projects } from "../../../../projects";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { useContext } from "react";
import { ProjectContext } from "../../../../context/Project/ProjectContext";

function TechStackList() {
  const { curr = 0 } = useContext(ProjectContext);

  return (
    <div className="space-y-2">
   
      <div 
      className="flex gap-2 justify-center"
      >
        <AnimatedButton
        link={projects[curr].applicationUrl} 
        title="app" 
        icon={
          <AppWindow 
          className="size-5 xl:size-max" 
          />
        }
        />
        <AnimatedButton
        link={projects[curr].githubRepository} 
        title="repository"
        icon={
          <CodeBlock 
          className="size-5 xl:size-max" 
          />
        }
        />
      </div>
    </div>
  )
}

export default TechStackList

