import { Project } from "./model/Project";

export const projects: Array<Project> = [
  {
    id: 0,
    name: "X Clone",
    githubRepository: "https://github.com/JOAO-LEE/x_clone",
    description: "X's replica (former Twitter) interface. Users can create, like, reply and delete posts of their own. It's also possible to add images to a post. Currently requires a Google Account to use.",
    image: "src/assets/x-clone.png",
    deployed: true,
    applicationUrl: "https://x-clone-tan-seven.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"]
  },
  {
    id: 1,
    name: "Google Clone",
    githubRepository: "https://github.com/JOAO-LEE/google_clone",
    description: "",
    image: "src/assets/google-clone.png",
    deployed: true,
    applicationUrl: "https://google-clone-eta-henna.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"]
  },
];