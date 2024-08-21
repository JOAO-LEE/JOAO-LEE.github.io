import { AppWindow, CodeBlock } from "@phosphor-icons/react";
import { projects } from "../../../../projects";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { useContext } from "react";
import { ProjectContext } from "../../../../context/Project/ProjectContext";

function TechStackList() {
  const {curr = 0 } = useContext(ProjectContext);

  return (
    <div className="space-y-2">
      <ul 
      className="flex gap-1 lowercase text-[0.6rem] md:text-xs flex-wrap"
      >
        {
          projects[curr].techStack
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

