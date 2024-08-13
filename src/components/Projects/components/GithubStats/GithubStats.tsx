import { GithubStats as GithubStatsModel } from "../../../../model/Github";

function GithubStats({ isVisible, githubStats }: { isVisible: boolean | React.MutableRefObject<null>, githubStats: GithubStatsModel }) {

  return (
    <div className="h-5">
      <div className={`${isVisible ? "github-stats" : ""} space-y-2 mx-auto`}>
        <h3 className="text-center">GITHUB STATS</h3>
        <div className="flex items-center gap-4 text-xs lg:text-sm">
          <p>public repos <span className='text-pal-orange-100 font-semibold'>{githubStats?.public_repos}</span></p>
          <p>followers <span className='text-pal-orange-100 font-semibold'>{githubStats?.followers}</span></p>
          <p>following <span className='text-pal-orange-100 font-semibold'>{githubStats?.following}</span></p>
        </div>
      </div>
    </div>
  )
}

export default GithubStats