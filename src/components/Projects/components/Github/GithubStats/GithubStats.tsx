import { GithubStats as GithubStatsModel } from "../../../../../model/Github";
function GithubStats({ githubStats, isVisible }: { githubStats: GithubStatsModel, isVisible: boolean | React.MutableRefObject<null> }) {
  

  return (
    <div className="h-14">
      <div className={`${isVisible ? "github-stats" : "hidden invisible"} space-y-2 mx-auto`}>
        <h3 className="text-center">GITHUB STATS</h3>
        <div className="flex items-center gap-4 text-xs lg:text-sm">
          <p>public repos <span className="text-pal-orange-100 font-semibold">{githubStats?.public_repos}</span></p>
          <p>followers <span className="text-pal-orange-100 font-semibold">{githubStats?.followers}</span></p>
          <p>following <span className="text-pal-orange-100 font-semibold">{githubStats?.following}</span></p>
        </div>
      </div>
    </div>
  )
}

export default GithubStats