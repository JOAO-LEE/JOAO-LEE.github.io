import { Dispatch } from "react"


 export type Project = {
  id: number,
  name: string,
  githubRepository: string,
  description: string,
  image: string,
  deployed: boolean,
  applicationUrl: string
  techStack: Array<string>
}

export type ProjectContext = {
  curr?: number,
  setCurr: Dispatch<React.SetStateAction<number>>
  previousSlide?: () => void
  nextSlide?: () => void
}