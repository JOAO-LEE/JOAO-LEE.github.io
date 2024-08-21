import { GithubLogo } from "@phosphor-icons/react"
import useIntersectionObserver from "../../../../../hooks/useIntersectionObserver";

function GithubIconLink({ htmlUrl, isVisible }: { htmlUrl: string | undefined, isVisible: boolean }) {
  // const [isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <a
    // ref={ref} 
    className={`${isVisible ? "github-logo" : ""} self-end content-end p-2 flex gap-2 group transition-colors duration-500 delay-[150ms] items-center`} 
    href={htmlUrl} 
    target="_blank"
    >
      <p 
      className="hidden lg:block opacity-0 font-light text-grayish transition-all duration-500 delay-75 text-sm group-hover:opacity-100 group-hover:font-semibold hover:text-pal-orange-200 hover:bg-pal-purple-500 p-2 rounded-xl"
      >
        check my profile!
      </p>
      <GithubLogo 
      weight="light" 
      size={"2rem"} 
      className="group-hover:text-pal-orange-100 transition-colors duration-500 delay-[150ms]"
      />
    </a>
  )
}

export default GithubIconLink