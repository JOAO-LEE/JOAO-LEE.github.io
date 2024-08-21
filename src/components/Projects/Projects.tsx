import { useState, useEffect, useContext } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { AppWindow, CodeBlock, GithubLogo } from "@phosphor-icons/react";
import { getGithubStats } from "../../services/github";
import { GithubStats as GithubStatsModel } from "../../model/Github";
import GithubStats from "./components/Github/GithubStats/GithubStats";
import Carousel from "./components/Carousel/Carousel";
import { projects } from "../../projects";
import ProjectAbout from "./components/ProjectAbout/ProjectAbout";
import { ProjectContext } from "../../context/Project/ProjectContext";
import TechStackList from "./components/TechStackList/TechStackList";
import GithubIconLink from "./components/Github/GithubIconLink/GithubIconLink";
import "./Projects.css";

function Projects() {
  const [githubStats, setGithubStats] = useState<GithubStatsModel>();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  // const {curr = 0 } = useContext(ProjectContext)

  useEffect(() => {
    const fetchGithubStats = async () => {
      const searchedGithubStats = await getGithubStats();
      setGithubStats(searchedGithubStats);
    }
    fetchGithubStats();
  }, []);

  return (
    <section 
    ref={ref} 
    className="bg-pal-purple-600 h-screen">
      <div className="flex flex-col h-full">
        <div className="mx-auto">
          <h2 className={`${isVisible ? "projects-title" : "text-transparent"}`}>projects</h2>
        </div>
        <GithubStats
        isVisible={isVisible} 
        githubStats={githubStats!}
        />
        <GithubIconLink 
        htmlUrl={githubStats?.html_url} 
        isVisible={isVisible}
        />
      </div>
    </section>
  )
}

export default Projects;

    // {/* <div className="p-4 flex sm:flex-row">
    //       <Carousel>
    //         {
    //           projects
    //           .map((p) => (
    //             <img 
    //             key={p.id}
    //             src={p.image} 
    //             alt="" 
    //             className="size-36 md:size-[32rem] object-contain rounded-xl lg:rounded-3xl"
    //             />
    //           ))
    //         }
    //       </Carousel>
    //       <ProjectAbout />
    //     </div> */}
    //     {/* <div className="sm:hidden">
    //       <TechStackList />
    //     </div> */}
