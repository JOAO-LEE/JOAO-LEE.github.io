import { AppWindow, BracketsCurly } from "@phosphor-icons/react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function ProjectActions({applicationUrl, githubRepository}: { applicationUrl: string, githubRepository: string }) {
  
  return (
    <div className="space-y-2">
      <div 
      className="flex gap-2"
      >
        <AnimatedButton
        link={applicationUrl} 
        title="app" 
        icon={
          <AppWindow 
          className="size-5 xl:size-max" 
          />
        }
        />
        <AnimatedButton
        link={githubRepository} 
        title="repo"
        icon={
          <BracketsCurly 
          className="size-5 xl:size-max"
          />
        }
        />
      </div>
    </div>
  )
}

export default ProjectActions;

