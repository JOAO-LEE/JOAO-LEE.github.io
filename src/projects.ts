import xCloneImage from './images/x-clone.png';
import googleCloneImage from './images/google-clone.png';

export const projects: Array<Project> = [
  {
    id: 0,
    name: "X Clone",
    githubRepository: "https://github.com/JOAO-LEE/x_clone",
    description: "X's (former Twitter) replica. Users can create, like, reply and delete posts of their own. It's also possible to add images to a post. Currently requires a Google Account to use.",
    image: xCloneImage,
    deployed: true,
    applicationUrl: "https://x-clone-tan-seven.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"]
  },
  {
    id: 1,
    name: "Google Clone",
    githubRepository: "https://github.com/JOAO-LEE/google_clone",
    description: "",
    image: googleCloneImage,
    deployed: true,
    applicationUrl: "https://google-clone-eta-henna.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"]
  },
];
