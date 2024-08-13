import { ReactNode, useState } from "react";
import { ProjectContext } from "./ProjectContext";

export function ProjectProvider({ children, slides }: { children: ReactNode, slides: ReactNode[] }) {
  const [curr, setCurr] = useState<number>(0);

  const previousSlide = () => setCurr(curr => curr == 0 ? slides.length - 1 : curr - 1);
  const nextSlide = () => setCurr(curr =>  curr === slides.length - 1 ? 0 : curr + 1);

  return (
    <ProjectContext.Provider 
    value={{curr, previousSlide, nextSlide}}
    >
      {children}
    </ProjectContext.Provider>
  )
}