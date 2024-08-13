import { createContext } from "react";
import { ProjectContext as ProjectModel } from "../../model/Project";

export const ProjectContext = createContext<ProjectModel>({} as ProjectModel); 